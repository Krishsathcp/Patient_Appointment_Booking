import React from 'react';
import '../Assets/Home.css';

import managementImg from '../Assets/images/Management.jpg';
import emergencyImg from '../Assets/images/emergency.jpg';
import docImg from '../Assets/images/Doc.jfif';
import pharmacyImg from '../Assets/images/pharmacy.jpg';

const HospitalHome = () => {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to Our Hospital</h1>
        <p>We provide the best medical services for you and your family.</p>
      </div>

      <div className="center">
        <img src={managementImg} alt="Hospital Management" />
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <img src={emergencyImg} alt="Emergency Care" />
            <h3>Emergency Care</h3>
            <p>24/7 emergency services to take care of any critical conditions.</p>
          </div>
          <div className="service-item">
            <img src={docImg} alt="Specialized Doctors" />
            <h3>Specialized Doctors</h3>
            <p>Consult our specialized doctors in various medical fields.</p>
          </div>
          <div className="service-item">
            <img src={pharmacyImg} alt="Pharmacy" />
            <h3>Pharmacy</h3>
            <p>On-campus pharmacy to ensure you get your medications easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalHome;
