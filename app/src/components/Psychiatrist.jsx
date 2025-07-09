import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Gynecology.css";

import DrTaylorImg from "../Assets/images/Tylor.jpeg";
import DrWilsonImg from "../Assets/images/William.jpeg";

const Psychiatry = () => {
  return (
    <div>
      <header>
        <h1>Psychiatry Department</h1>
      </header>

      <div className="container">
        <h2 style={{ textAlign: "center" }}>Meet Our Psychiatrists</h2>
        <div className="doctors-container">
          <div className="doctor">
            <img src={DrTaylorImg} alt="Dr. Anna Taylor" />
            <h3>Dr. Anna Taylor</h3>
            <p>Specialist in Adult Psychiatry and Mental Health.</p>
            <p className="schedule">Available: Mon, Wed, Fri (9 AM - 1 PM)</p>
            <Link to="/appointment?doctor=Dr.AnnaTaylor" className="book-btn">
              Book Appointment
            </Link>
          </div>

          <div className="doctor">
            <img src={DrWilsonImg} alt="Dr. Mark Wilson" />
            <h3>Dr. Mark Wilson</h3>
            <p>Expert in Child and Adolescent Psychiatry.</p>
            <p className="schedule">Available: Tue, Thu, Sat (10 AM - 2 PM)</p>
            <Link to="/appointment?doctor=Dr.MarkWilson" className="book-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychiatry;
