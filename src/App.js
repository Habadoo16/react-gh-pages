import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
            <li
              className={`Navbar-item ${activeLink === "home" ? "active" : ""}`}
            >
              <a
                href="#home"
                onClick={() => handleSetActive("home")}
              >
                Home
              </a>
            </li>
            <li
              className={`Navbar-item ${activeLink === "about" ? "active" : ""}`}
            >
              <a
                href="#about"
                onClick={() => handleSetActive("about")}
              >
                About
              </a>
            </li>
            <li
              className={`Navbar-item ${
                activeLink === "services" ? "active" : ""
              }`}
            >
              <a
                href="#services"
                onClick={() => handleSetActive("services")}
              >
                Services
              </a>
            </li>
            <li
              className={`Navbar-item ${
                activeLink === "contact" ? "active" : ""
              }`}
            >
              <a
                href="#contact"
                onClick={() => handleSetActive("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeLink === "home" && (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
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
        {activeLink !== "home" && (
          <div className="Page-content">
            <h1>{activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h1>
            <p>
              Welcome to the {activeLink} page! This is where the content for
              the {activeLink} section will appear.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
