import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Dept.css';

import oncologist from '../Assets/images/onologolist.jpg';
import gynecologist from '../Assets/images/gyeno.jpg';
import cardiologist from '../Assets/images/Cardio.webp';
import neurologist from '../Assets/images/Neruo.jpg';
import psychiatrist from '../Assets/images/physc.jpg';
import orthopedic from '../Assets/images/ortho.jpg';

const Departments = () => {
  const departments = [
    { name: 'Oncologist', img: oncologist, desc: 'Specializing in cancer treatment and therapies.', path: '/oncology' },
    { name: 'Gynecologist', img: gynecologist, desc: 'Women’s health and reproductive system specialist.', path: '/gynecology' },
    { name: 'Cardiologist', img: cardiologist, desc: 'Heart and cardiovascular disease specialist.', path: '/cardiology' },
    { name: 'Neurologist', img: neurologist, desc: 'Specialist in brain and nervous system disorders.', path: '/neurologist' },
    { name: 'Psychiatrist', img: psychiatrist, desc: 'Mental health specialist focusing on diagnosis and therapy.', path: '/psychiatry' },
    { name: 'Orthopedic', img: orthopedic, desc: 'Specialist in bones, joints, and musculoskeletal issues.', path: '/orthopedic' },
  ];

  return (
    <div className="departments">
      <h2>Our Departments</h2>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <NavLink to={dept.path} className="department-item" key={index}>
            <img src={dept.img} alt={dept.name} />
            <h3>{dept.name}</h3>
            <p>{dept.desc}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Departments;
