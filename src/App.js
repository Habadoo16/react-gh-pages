import React, { useState } from "react";
import "./App.css";
import Login from "./login/login"; // Import Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in
  const [activeLink, setActiveLink] = useState("home");

  const handleLogin = () => {
    setIsLoggedIn(true); // Log in the user
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    setActiveLink("login"); // Redirect to the login page
  };

  const handleSetActive = (link) => {
    setActiveLink(link); // Set the active section
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} /> // Show Login page if not logged in
      ) : (
        <div className="MainLayout">
          <aside className="Sidebar">
            <div className="Sidebar-header">
              <h2>YourLogo</h2>
            </div>
            <ul className="Sidebar-menu">
              <li
                className={`Sidebar-item ${
                  activeLink === "home" ? "active" : ""
                }`}
                onClick={() => handleSetActive("home")}
              >
                <span>Home</span>
              </li>
              <li
                className={`Sidebar-item ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleSetActive("about")}
              >
                <span>About</span>
              </li>
              <li
                className={`Sidebar-item ${
                  activeLink === "services" ? "active" : ""
                }`}
                onClick={() => handleSetActive("services")}
              >
                <span>Services</span>
              </li>
              <li
                className={`Sidebar-item ${
                  activeLink === "contacts" ? "active" : ""
                }`}
                onClick={() => handleSetActive("contacts")}
              >
                <span>Contacts</span>
              </li>
            </ul>
            <div className="Sidebar-footer">
              <button className="Logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </aside>
          <main className="Content">
            {activeLink === "home" && (
              <div className="Content-section">
                <h1>Welcome to Home</h1>
                <p>Enjoy exploring our application.</p>
              </div>
            )}
            {activeLink === "about" && (
              <div className="Content-section">
                <h1>About Us</h1>
                <p>Learn more about our company and values.</p>
              </div>
            )}
            {activeLink === "services" && (
              <div className="Content-section">
                <h1>Our Services</h1>
                <p>We offer a wide range of services tailored to your needs.</p>
              </div>
            )}
            {activeLink === "contacts" && (
              <div className="Content-section">
                <h1>Contact Us</h1>
                <p>Reach out to us through email or phone.</p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;