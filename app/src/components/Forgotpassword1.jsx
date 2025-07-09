import React, { useState } from "react";
import "../Assets/ForgotPassword1.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-password-wrapper">
      <div className="forgot-password-header">
        <h1>Krish Health</h1>
      </div>
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleReset} className="forgot-password-form">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
