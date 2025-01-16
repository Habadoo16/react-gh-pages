import React, { useState } from "react";
import "./login.css";
import logo from "../assets/logo.png"; // Replace with your actual logo image

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder logic for email and password validation
    onLogin();
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="Logo" className="Login-logo" />
        <h1>Presenza</h1>
        <p>Where your face is your pass.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;