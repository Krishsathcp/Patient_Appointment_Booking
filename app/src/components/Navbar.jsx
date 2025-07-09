import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Assets/Navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [user, setUser] = useState(
    isLoggedIn ? JSON.parse(localStorage.getItem("user")) : null
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div>
      <header className="header">
        <h1>Krish Health</h1>
      </header>

      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-links">
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
          {user && (
            <div className="profile-section">
              <Link to="/profile" className="dropdown-btn">
                Profile
              </Link>
            </div>
          )}
          {!user && (
            <div className="profile-section">
              <Link to="/login" className="dropdown-btn">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
