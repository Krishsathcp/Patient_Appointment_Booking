import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Profile.css";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState({});
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (!localUser || !localUser.email) {
      navigate("/");
      return;
    }

    setUserEmail(localUser.email);

    axios
      .get(`http://localhost:5000/api/profile?email=${localUser.email}`)
      .then((res) => {
        setEditDetails(res.data || {});
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false"); // ✅ Mark user as logged out
    navigate("/");
  };

  const handleChange = (e) => {
    setEditDetails({
      ...editDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    axios
      .put("http://localhost:5000/api/profile", {
        ...editDetails,
        email: userEmail,
      })
      .then(() => {
        alert("Profile updated!");
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        alert("Failed to update profile");
      });
  };

  const profileFields = [
    ["Full Name", "fullName", "text"],
    ["Date of Birth", "dateOfBirth", "date"],
    ["Sex", "sex", "select", ["Male", "Female", "Other", "Prefer not to say"]],
    ["Age", "age", "number"],
    ["Address", "address", "text"],
    [
      "Marital Status",
      "maritalStatus",
      "select",
      ["Single", "Married", "Divorced", "Widowed"],
    ],
    ["Phone Number", "phoneNumber", "text"],
    ["Nationality", "nationality", "text"],
    ["Emergency Contact", "emergencyContact", "text"],
    ["Occupation", "occupation", "text"],
    ["Parent's Name", "parentName", "text"],
    ["Parent's Phone Number", "parentPhoneNumber", "text"],
    ["Parent's Occupation", "parentOccupation", "text"],
  ];

  return (
    <div className="profile-container">
      <div className="personal-info-box">
        <h2>Profile</h2>
        {userEmail ? (
          <>
            <p>
              <strong>Email:</strong> {userEmail}
            </p>

            {!isEditing ? (
              <>
                {profileFields.map(([label, name]) => (
                  <p key={name}>
                    <strong>{label}:</strong> {editDetails[name] || "N/A"}
                  </p>
                ))}
                <div className="button-group">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                {profileFields.map(([label, name, type, options]) => (
                  <div className="profile-details" key={name}>
                    <label>{label}:</label>
                    {type === "select" ? (
                      <select
                        name={name}
                        value={editDetails[name] || ""}
                        onChange={handleChange}
                      >
                        <option value="">Select {label}</option>
                        {options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        name={name}
                        value={editDetails[name] || ""}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                ))}
                <div className="button-group">
                  <button onClick={handleSave} className="save-btn">
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
