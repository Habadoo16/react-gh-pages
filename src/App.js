import React, { useState } from "react";
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
        <div className="Home">
          <section className="Hero">
            <h1>Welcome to Our Platform</h1>
            <p>Your journey to success starts here.</p>
            <button className="cta-button">Get Started</button>
          </section>

          <section className="Features">
            <h2>Features</h2>
            <div className="Feature-cards">
              <div className="Feature-card">
                <h3>Feature 1</h3>
                <p>Discover what makes our platform unique.</p>
              </div>
              <div className="Feature-card">
                <h3>Feature 2</h3>
                <p>Experience seamless and intuitive design.</p>
              </div>
              <div className="Feature-card">
                <h3>Feature 3</h3>
                <p>Join a community of like-minded individuals.</p>
              </div>
            </div>
          </section>

          <section className="Testimonials">
            <h2>What Our Users Say</h2>
            <div className="Testimonial-cards">
              <div className="Testimonial-card">
                <p>"This platform changed my life!"</p>
                <h4>- Happy User</h4>
              </div>
              <div className="Testimonial-card">
                <p>"Easy to use and highly effective."</p>
                <h4>- Satisfied Client</h4>
              </div>
            </div>
          </section>

          <footer className="Footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
            <div className="Social-links">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;