import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './navigation/About'; // Import from navigation folder
import Contact from './navigation/Contact'; // Import from navigation folder
import Services from './navigation/Services'; // Import from navigation folder

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="Navbar">
            <ul className="Navbar-list">
              <li className={`Navbar-item ${activeLink === 'home' ? 'active' : ''}`}>
                <Link to="/" onClick={() => handleSetActive('home')}>Home</Link>
              </li>
              <li className={`Navbar-item ${activeLink === 'about' ? 'active' : ''}`}>
                <Link to="/about" onClick={() => handleSetActive('about')}>About</Link>
              </li>
              <li className={`Navbar-item ${activeLink === 'services' ? 'active' : ''}`}>
                <Link to="/services" onClick={() => handleSetActive('services')}>Services</Link>
              </li>
              <li className={`Navbar-item ${activeLink === 'contact' ? 'active' : ''}`}>
                <Link to="/contact" onClick={() => handleSetActive('contact')}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
