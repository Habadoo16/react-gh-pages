import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg"; // Your logo
import Login from "./login/Login";

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
        <div className="SplitLayout">
          <aside className="Sidebar">
            <ul className="Sidebar-list">
              <li
                className={`Sidebar-item ${activeLink === "home" ? "active" : ""
                  }`}
                onClick={() => handleSetActive("home")}
              >
                Home
              </li>
              <li
                className={`Sidebar-item ${activeLink === "about" ? "active" : ""
                  }`}
                onClick={() => handleSetActive("about")}
              >
                About
              </li>
              <li
                className={`Sidebar-item ${activeLink === "services" ? "active" : ""
                  }`}
                onClick={() => handleSetActive("services")}
              >
                Services
              </li>
              <li
                className={`Sidebar-item ${activeLink === "contacts" ? "active" : ""
                  }`}
                onClick={() => handleSetActive("contacts")}
              >
                Contacts
              </li>
            </ul>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </aside>
          <main className="Content">
            {activeLink === "home" && (
              <div className="Home">
                <img src={logo} alt="Welcome" className="Home-logo" />
                <h1>Welcome!</h1>
                <p>Enjoy exploring our application.</p>
              </div>
            )}
            {activeLink === "about" && (
              <div className="About">
                <h2>About Us</h2>
                <p>We are a company dedicated to providing excellent services.</p>
              </div>
            )}
            {activeLink === "services" && (
              <div className="Services">
                <h2>Our Services</h2>
                <p>We offer a variety of services tailored to your needs.</p>
              </div>
            )}
            {activeLink === "contacts" && (
              <div className="Contacts">
                <h2>Contact Us</h2>
                <p>Email: contact@company.com</p>
                <p>Phone: +1 234 567 890</p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
