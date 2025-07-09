import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/IntroductionPage.css";

const IntroductionPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="intro-container">
      <header className="header">
        <h1>Krish Health</h1>
      </header>

      <div className="intro-content">
        <h1>Welcome to Krish Health</h1>
        <p>Delivering excellence in healthcare services for over 25 years.</p>

        <div className="summary">
          <h2>Summary</h2>
          <p>
            At Krish Health, we are committed to providing world-class
            healthcare to our community. Our team consists of highly trained
            medical professionals, dedicated to patient-centered care. We
            utilize state-of-the-art technology to ensure accurate diagnostics
            and effective treatments. Our hospital infrastructure is designed to
            offer comfort, safety, and fast recovery to all patients. We are
            passionate about research and continuously advance our medical
            practices based on the latest studies. Patient satisfaction and
            safety are the cornerstones of our service philosophy. We offer a
            comprehensive range of medical services across various specialties
            and disciplines. Our international collaborations ensure that we
            stay ahead in delivering innovative healthcare solutions. We believe
            in holistic healing and integrate wellness programs alongside
            traditional treatments. At Krish Health, your health and happiness
            are our highest priorities.
          </p>
        </div>

        <div className="departments-section">
          <h2>Departments Available</h2>
          <ul>
            <li>Oncology – Cancer Treatment and Care</li>
            <li>Gynecology – Women’s Health Services</li>
            <li>Cardiology – Heart and Vascular Care</li>
            <li>Neurology – Brain and Nervous System Care</li>
            <li>Psychiatry – Mental Health Services</li>
            <li>Orthopedics – Bone, Joint, and Muscle Care</li>
          </ul>
        </div>

        <div className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>
              🏆 Awarded Best Hospital in 2023 by National Health Association
            </li>
            <li>🌟 5000+ successful surgeries performed</li>
            <li>👩‍⚕️ 300+ certified specialist doctors</li>
            <li>🌍 Serving over 1 million patients globally</li>
          </ul>
        </div>

        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default IntroductionPage;
