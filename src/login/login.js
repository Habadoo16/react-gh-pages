import React, { useState } from "react";
import "./login.css";
import logo from "../assets/logo.svg"; // Your logo image

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation logic for demonstration
    if (email === "admin@example.com" && password === "password123") {
      setError(""); // Clear any previous errors
      onLogin();
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="Logo" className="Login-logo" />
        <h1>Hello Again!</h1>
        <p>Welcome back! You've been missed!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter username</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-login">
            Sign In
          </button>
          <a href="#recovery" className="recovery-password">
            Recovery Password
          </a>
        </form>
        <div className="social-buttons">
          <button>Google</button>
          <button>Apple</button>
          <button>Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;