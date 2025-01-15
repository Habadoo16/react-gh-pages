import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Navbar({ activeLink, onSetActive }) {
  const links = ["home", "about", "services", "contact"];
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        {links.map((link) => (
          <li
            key={link}
            className={`Navbar-item ${activeLink === link ? "active" : ""}`}
          >
            <a
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                onSetActive(link);
              }}
              aria-current={activeLink === link ? "page" : undefined}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="App">
      <header>
        <Navbar activeLink={activeLink} onSetActive={setActiveLink} />
      </header>
      <main>
        {activeLink === "home" ? (
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
        ) : (
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
