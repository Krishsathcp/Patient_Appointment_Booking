import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Oncology.css';


import JohnImg from '../Assets/images/John.jpg';
import JoeImg from '../Assets/images/Joe.jpg';
import SmithImg from '../Assets/images/Smith.jpg';

const Oncology = () => {
  return (
    <div>
      <header>
        <h1>Oncology Department</h1>
        
      </header>

      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Oncologists</h2>
        
        <div className="doctors-container">
          <div className="doctor">
            <img src={JohnImg} alt="Dr. John Doe" />
            <h3>Dr. John Doe</h3>
            <p>Specialist in Chemotherapy and Radiation Therapy with 15+ years of experience.</p>
            <p className="schedule">Available: Mon, Wed, Fri (10 AM - 2 PM)</p>
            <Link to="/appointment?doctor=Dr.JohnDoe" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={JoeImg} alt="Dr. Jane Smith" />
            <h3>Dr. Jane Smith</h3>
            <p>Expert in Surgical Oncology and Cancer Research, treating patients for over 10 years.</p>
            <p className="schedule">Available: Tue, Thu, Sat (11 AM - 3 PM)</p>
            <Link to="/appointment?doctor=Dr.JaneSmith" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={SmithImg} alt="Dr. Michael Brown" />
            <h3>Dr. Michael Brown</h3>
            <p>Specialist in Pediatric Oncology and Immunotherapy.</p>
            <p className="schedule">Available: Mon, Thu, Sat (9 AM - 1 PM)</p>
            <Link to="/appointment?doctor=Dr.MichaelBrown" className="book-btn">Book Appointment</Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Oncology;
