import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../Assets/SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:5000/api/signup", { email, password })
      .then(() => {
        alert("Account created successfully");
        navigate("/Login");
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Signup failed");
      });
  };

  return (
    <div className="signup-body">
      <div className="signup-header">
        <h1>Krish Health</h1>
      </div>

      <div className="form-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
          <div className="link">
            <NavLink to="/Login">Already have an account? Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
