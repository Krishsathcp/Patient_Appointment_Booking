import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Gynecology.css";

import DrSmithImg from "../Assets/images/Smith1.jpeg";
import DrBrownImg from "../Assets/images/Brown.jpeg";

const Cardiology = () => {
  return (
    <div>
      <header>
        <h1>Cardiology Department</h1>
      </header>

      <div className="container">
        <h2 style={{ textAlign: "center" }}>Meet Our Cardiologists</h2>
        <div className="doctors-container">
          <div className="doctor">
            <img src={DrSmithImg} alt="Dr. John Smith" />
            <h3>Dr. John Smith</h3>
            <p>Specialist in Heart Diseases and Interventional Cardiology.</p>
            <p className="schedule">Available: Mon, Wed, Fri (8 AM - 12 PM)</p>
            <Link to="/appointment?doctor=Dr.JohnSmith" className="book-btn">
              Book Appointment
            </Link>
          </div>

          <div className="doctor">
            <img src={DrBrownImg} alt="Dr. Emily Brown" />
            <h3>Dr. Emily Brown</h3>
            <p>Specialist in Pediatric Cardiology.</p>
            <p className="schedule">Available: Mon, Thu, Sat (10 AM - 2 PM)</p>
            <Link to="/appointment?doctor=Dr.EmilyBrown" className="book-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardiology;
