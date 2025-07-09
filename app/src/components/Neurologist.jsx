import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Gynecology.css';  
import MichealImg from '../Assets/images/Micheal.jpeg';  // This image is assumed to be correct
import OliviaImg from '../Assets/images/Olivia.jpeg'; // Add a placeholder image for missing images

const Neurologist = () => {
  return (
    <div>
      <header>
        <h1>Neurology Department</h1>
        
      </header>

      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Meet Our Neurologists</h2>

        <div className="doctors-container">
          <div className="doctor">
            <img src={MichealImg} alt="Dr. Michael Stevens" />
            <h3>Dr. Michael Stevens</h3>
            <p>Specialist in Brain Disorders, including Alzheimer's and Parkinson's Disease.</p>
            <p className="schedule">Available: Mon, Wed, Fri (8 AM - 12 PM)</p>
            <Link to="/appointment/neurology?doctor=Dr.MichaelStevens" className="book-btn">Book Appointment</Link>
          </div>

          <div className="doctor">
            <img src={OliviaImg} alt="Dr. Olivia Brown" />  {/* Use a placeholder image here */}
            <h3>Dr. Olivia Brown</h3>
            <p>Expert in Stroke Recovery and Neurological Rehabilitation.</p>
            <p className="schedule">Available: Tue, Thu, Sat (9 AM - 1 PM)</p>
            <Link to="/appointment/neurology?doctor=Dr.OliviaBrown" className="book-btn">Book Appointment</Link>
          </div>

         
        </div>
      </div>

      
    </div>
  );
};

export default Neurologist;