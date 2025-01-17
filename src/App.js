import React, { useState } from "react";
import logo from "./image.jpg"; // Replace with your home logo
import "./App.css";
import Login from "./login/login"; // Corrected path

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActiveLink("home"); // Set default active link to "home" after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setActiveLink("login"); // Redirect to login page
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
              <button className="btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </nav>
          </header>
          <main>
            {activeLink === "home" && (
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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