import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Gynecology.css'; // can rename later to Orthopedic.css

import DrClarkImg from '../Assets/images/Sarah Clark.jpeg';
import DrRobertsImg from '../Assets/images/Emily1.jpeg';

const Orthopedia = () => {
  return (
    <div>
      <header>
        <h1>Orthopedic Department</h1>
      </header>

      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Orthopedic Surgeons</h2>
        <div className="doctors-container">
          <div className="doctor">
            <img src={DrClarkImg} alt="Dr. Sarah Clark" />
            <h3>Dr. Sarah Clark</h3>
            <p>Expert in Pediatric Orthopedics and Fracture Care.</p>
            <p className="schedule">Available: Tue, Thu, Sat (9 AM - 1 PM)</p>
            <Link to="/appointment?doctor=Dr.SarahClark" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={DrRobertsImg} alt="Dr. Emily Roberts" />
            <h3>Dr. Emily Roberts</h3>
            <p>Specialist in Spine Surgery and Rehabilitation.</p>
            <p className="schedule">Available: Mon, Thu, Sat (10 AM - 2 PM)</p>
            <Link to="/appointment?doctor=Dr.EmilyRoberts" className="book-btn">Book Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthopedia;
