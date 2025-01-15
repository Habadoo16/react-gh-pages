import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('home');

  // Function to handle click events
  const handleSetActive = (link) => {
    setActiveLink(link); // Update the active link
  };

  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <ul className="Navbar-list">
            <li className={`Navbar-item ${activeLink === 'home' ? 'active' : ''}`}>
              <a href="#home" onClick={() => handleSetActive('home')}>Home</a>
            </li>
            <li className={`Navbar-item ${activeLink === 'about' ? 'active' : ''}`}>
              <a href="#about" onClick={() => handleSetActive('about')}>About</a>
            </li>
            <li className={`Navbar-item ${activeLink === 'services' ? 'active' : ''}`}>
              <a href="#services" onClick={() => handleSetActive('services')}>Services</a>
            </li>
            <li className={`Navbar-item ${activeLink === 'contact' ? 'active' : ''}`}>
              <a href="#contact" onClick={() => handleSetActive('contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
