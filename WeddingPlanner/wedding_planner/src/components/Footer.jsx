import React from 'react';
import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section about">
          <h3>About Wedding Planner</h3>
          <p>We help couples turn their dream weddings into reality with elegance, detail, and love in every step of the journey.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/apparel">Apparel</a></li>
            <li><a href="/ceremony">Ceremony</a></li>
            <li><a href="/reception">Reception</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: contact@weddingplanner.com</p>
          <p>Phone: +91 98765 43210</p>
         
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Wedding Planner. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

