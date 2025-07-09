import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Assets/Login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", { email, password })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(res.data.user)); // 🔧 FIXED
          alert("Login successful");
          navigate("/home");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch(() => {
        alert("Login failed. Please try again.");
      });
  };

  return (
    <div className="login-wrapper">
      <header className="login-header">
        <h1>Krish Health</h1>
      </header>

      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login-links">
          <p>
            Don't have an account? <Link to="/sign_up">Sign up here</Link>
          </p>
          <p>
            Forgot your password? <Link to="/forgot_password">Reset here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
