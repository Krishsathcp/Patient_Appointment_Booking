import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Assets/Appointment.css";
import axios from "axios";

const Appointment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please login to access the appointment page.");
      navigate("/Login");
    }
  }, [navigate]);

  const queryParams = new URLSearchParams(location.search);
  const doctorName = queryParams.get("doctor");

  const doctorAvailability = {
    "Dr.JohnSmith": {
      days: ["Mon", "Wed", "Fri"],
      startTime: "08:00",
      endTime: "12:00",
    },
    "Dr.EmilyBrown": {
      days: ["Mon", "Thu", "Sat"],
      startTime: "10:00",
      endTime: "14:00",
    },
    "Dr.AnnaTaylor": {
      days: ["Mon", "Wed", "Fri"],
      startTime: "09:00",
      endTime: "13:00",
    },
    "Dr.MarkWilson": {
      days: ["Tue", "Thu", "Sat"],
      startTime: "10:00",
      endTime: "14:00",
    },
    "Dr.SarahClark": {
      days: ["Tue", "Thu", "Sat"],
      startTime: "09:00",
      endTime: "13:00",
    },
    "Dr.EmilyRoberts": {
      days: ["Mon", "Thu", "Sat"],
      startTime: "10:00",
      endTime: "14:00",
    },
    "Dr.SarahJohnson": {
      days: ["Mon", "Wed", "Fri"],
      startTime: "09:00",
      endTime: "13:00",
    },
    "Dr.EmilyWilliams": {
      days: ["Tue", "Thu", "Sat"],
      startTime: "10:00",
      endTime: "14:00",
    },
    "Dr.LucyHarris": {
      days: ["Mon", "Thu", "Sat"],
      startTime: "11:00",
      endTime: "15:00",
    },
    "Dr.JohnDoe": {
      days: ["Mon", "Wed", "Fri"],
      startTime: "10:00",
      endTime: "14:00",
    },
    "Dr.JaneSmith": {
      days: ["Tue", "Thu", "Sat"],
      startTime: "11:00",
      endTime: "15:00",
    },
    "Dr.MichaelBrown": {
      days: ["Mon", "Thu", "Sat"],
      startTime: "09:00",
      endTime: "13:00",
    },
  };

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [medicalHistoryFile, setMedicalHistoryFile] = useState(null);

  useEffect(() => {
    if (doctorName) {
      axios
        .get(`http://localhost:5000/api/appointments?doctor=${doctorName}`)
        .then((res) => {
          setAppointments(res.data);
        })
        .catch((err) => {
          console.error("Error fetching appointments:", err);
        });
    }
  }, [doctorName]);

  const handleMedicalHistoryChange = (e) => {
    setMedicalHistory(e.target.value);
  };

  const handleFileChange = (e) => {
    setMedicalHistoryFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctorAvailability[doctorName]) {
      setError("Doctor not found.");
      return;
    }

    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
    }); // "Mon", "Tue", etc.

    const availableDays = doctorAvailability[doctorName].days;
    if (!availableDays.includes(dayOfWeek)) {
      setError(
        `Doctor is not available on ${dayOfWeek}. Available days: ${availableDays.join(
          ", "
        )}`
      );
      return;
    }

    const { startTime, endTime } = doctorAvailability[doctorName];
    if (time < startTime || time > endTime) {
      setError(
        `Doctor is only available from ${startTime} to ${endTime}. Please select a valid time.`
      );
      return;
    }

    const newAppointment = {
      doctor: doctorName,
      patientName,
      date,
      time,
      medicalHistory,
      medicalHistoryFile: medicalHistoryFile ? medicalHistoryFile.name : null,
      status: "Confirmed",
    };

    axios
      .post("http://localhost:5000/api/appointments", newAppointment)
      .then(() => {
        setAppointments((prev) => [...prev, newAppointment]);
        setPatientName("");
        setDate("");
        setTime("");
        setMedicalHistory("");
        setMedicalHistoryFile(null);
        setError("");
        alert(`Appointment booked with ${doctorName} at ${time} on ${date}`);
      })
      .catch((err) => {
        console.error("Failed to book appointment:", err);
        setError("Failed to book appointment. Try again later.");
      });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="appointment-container">
      <h2>Book Appointment with {doctorName}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          placeholder="Your Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
          required
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter your medical history (optional)"
          value={medicalHistory}
          onChange={handleMedicalHistoryChange}
          rows="4"
        />

        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
        />

        <button type="submit">Book</button>
      </form>

      {appointments.length > 0 && (
        <div className="appointment-list">
          <h3>Previous Appointments</h3>
          <ul>
            {appointments.map((appt, index) => (
              <li key={index}>
                {appt.patientName} at {appt.time} on {appt.date}{" "}
                <strong>({appt.status})</strong>
                <div>
                  <strong>Medical History:</strong>{" "}
                  {appt.medicalHistory || "Not provided"}
                </div>
                <div>
                  <strong>Uploaded File:</strong>{" "}
                  {appt.medicalHistoryFile || "None"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Appointment;
