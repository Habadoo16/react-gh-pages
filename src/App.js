import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <ul className="Navbar-list">
            <li className="Navbar-item"><a href="#home">Home</a></li>
            <li className="Navbar-item"><a href="#about">About</a></li>
            <li className="Navbar-item"><a href="#services">Services</a></li>
            <li className="Navbar-item"><a href="#contact">Contact</a></li>
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
