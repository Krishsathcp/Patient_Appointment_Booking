import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Gynecology.css';

import SarahImg from '../Assets/images/Sarah.jpeg';
import EmilyImg from '../Assets/images/Emily.jpeg';
import LucyImg from '../Assets/images/Lucy.jpeg';

const Gynecology = () => {
  return (
    <div>
      <header>
        <h1>Gynecology Department</h1>
      </header>

      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Gynecologists</h2>

        <div className="doctors-container">
          <div className="doctor">
            <img src={SarahImg} alt="Dr. Sarah Johnson" />
            <h3>Dr. Sarah Johnson</h3>
            <p>Specialist in Women's Health and Reproductive System with 12+ years of experience.</p>
            <p className="schedule">Available: Mon, Wed, Fri (9 AM - 1 PM)</p>
            <Link to="/appointment?doctor=Dr.SarahJohnson" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={EmilyImg} alt="Dr. Emily Williams" />
            <h3>Dr. Emily Williams</h3>
            <p>Expert in High-Risk Obstetrics and Maternal Health.</p>
            <p className="schedule">Available: Tue, Thu, Sat (10 AM - 2 PM)</p>
            <Link to="/appointment?doctor=Dr.EmilyWilliams" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={LucyImg} alt="Dr. Lucy Harris" />
            <h3>Dr. Lucy Harris</h3>
            <p>Specialist in Fertility and Endometriosis Treatment.</p>
            <p className="schedule">Available: Mon, Thu, Sat (11 AM - 3 PM)</p>
            <Link to="/appointment?doctor=Dr.LucyHarris" className="book-btn">Book Appointment</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gynecology;
