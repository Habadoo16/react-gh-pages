import React from "react";
import "./login.css";

function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder: you can add actual authentication logic here
    onLogin();
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
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
