import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
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
                <li className="Navbar-item active">
                  <a href="#home">Home</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>
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
          </main>
        </>
      )}
    </div>
  );
}

export default App;
