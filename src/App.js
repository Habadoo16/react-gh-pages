import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <ul className="Navbar-list">
            <li className={`Navbar-item ${activeLink === "home" ? "active" : ""}`}>
              <a href="#home" onClick={() => handleSetActive("home")}>
                Home
              </a>
            </li>
            <li className={`Navbar-item ${activeLink === "login" ? "active" : ""}`}>
              <a href="#login" onClick={() => handleSetActive("login")}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeLink === "home" && (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        )}
        {activeLink === "login" && <Login />}
      </main>
    </div>
  );
}

export default App;
