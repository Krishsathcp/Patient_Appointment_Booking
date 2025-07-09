import React from 'react';
import '../Assets/Facilities.css';

import EmergencyRoomImage from '../Assets/images/Emegencyroom.jpeg';
import PharmacyImage from '../Assets/images/pharmacy.jpg';
import RadiologyImage from '../Assets/images/Radiology.jpeg';
import LaboratoryImage from '../Assets/images/Laboratory.jpeg';
import ICUImage from '../Assets/images/intensive care unit.jpeg';
import SurgeryImage from '../Assets/images/Surgery.jpeg';
import RehabilitationImage from '../Assets/images/Rehabilitation.jpeg';
import WaitingAreaImage from '../Assets/images/Waiting area.jpeg';

const facilities = [
  { title: 'Emergency Room', img: EmergencyRoomImage, desc: 'Equipped with the latest technology for critical care.' },
  { title: 'Pharmacy', img: PharmacyImage, desc: 'On-site pharmacy for all your medication needs.' },
  { title: 'Radiology', img: RadiologyImage, desc: 'Advanced imaging services including X-ray and MRI.' },
  { title: 'Laboratory', img: LaboratoryImage, desc: 'Comprehensive lab services for accurate diagnostics.' },
  { title: 'Intensive Care Unit', img: ICUImage, desc: 'Specialized care for critically ill patients.' },
  { title: 'Surgery', img: SurgeryImage, desc: 'State-of-the-art surgical facilities for various procedures.' },
  { title: 'Rehabilitation', img: RehabilitationImage, desc: 'Comprehensive rehabilitation services for recovery.' },
  { title: 'Waiting Area', img: WaitingAreaImage, desc: 'Comfortable and spacious waiting areas for patients and families.' }
];

const Facilities = () => {
  return (
    <div className="facilities">
      <h2>Our Facilities</h2>
      <div className="facility-grid">
        {facilities.map((facility, index) => (
          <div className="facility-item" key={index}>
            <img src={facility.img} alt={facility.title} />
            <h3>{facility.title}</h3>
            <p>{facility.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
