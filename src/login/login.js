import React, { useState } from "react";
import "./login.css";
import logo from "../assets/logo.svg"; // Replace with your SVG logo

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder logic for username and password validation
    onLogin();
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage-left">
        <img src={logo} alt="Illustration" className="Illustration" />
      </div>
      <div className="LoginPage-right">
        <form onSubmit={handleSubmit} className="LoginForm">
          <h1>Hello Again!</h1>
          <p>Welcome back! You've been missed!</p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="#forgot-password" className="RecoveryLink">
            Recovery Password
          </a>
          <button type="submit" className="btn-login">
            Sign In
          </button>
          <p className="SocialText">Or continue with</p>
          <div className="SocialButtons">
            <button className="SocialButton">Google</button>
            <button className="SocialButton">Apple</button>
            <button className="SocialButton">Facebook</button>
          </div>
          <p className="RegisterLink">
            Not a member? <a href="#register">Register now</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;