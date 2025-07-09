import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <FaPhone className="footer-icon" /> +1 (123) 456-7890
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> info@krishhealth.com
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> 123 Health Street,
            Wellness City
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/facilities">Facilities</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Krish Health. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
