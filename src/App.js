import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <header>
            <nav className="Navbar">
              <ul className="Navbar-list">
                <li
                  className={`Navbar-item ${
                    activeLink === "home" ? "active" : ""
                  }`}
                >
                  <a href="#home" onClick={() => handleSetActive("home")}>
                    Home
                  </a>
                </li>
                <li
                  className={`Navbar-item ${
                    activeLink === "about" ? "active" : ""
                  }`}
                >
                  <a href="#about" onClick={() => handleSetActive("about")}>
                    About
                  </a>
                </li>
                <li
                  className={`Navbar-item ${
                    activeLink === "services" ? "active" : ""
                  }`}
                >
                  <a href="#services" onClick={() => handleSetActive("services")}>
                    Services
                  </a>
                </li>
                <li
                  className={`Navbar-item ${
                    activeLink === "contacts" ? "active" : ""
                  }`}
                >
                  <a href="#contacts" onClick={() => handleSetActive("contacts")}>
                    Contacts
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
            {activeLink === "about" && (
              <div className="Content">
                <h2>About Us</h2>
                <p>We are a company dedicated to providing excellent services.</p>
              </div>
            )}
            {activeLink === "services" && (
              <div className="Content">
                <h2>Our Services</h2>
                <p>We offer a variety of services tailored to your needs.</p>
              </div>
            )}
            {activeLink === "contacts" && (
              <div className="Content">
                <h2>Contact Us</h2>
                <p>Email: contact@company.com</p>
                <p>Phone: +1 234 567 890</p>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
