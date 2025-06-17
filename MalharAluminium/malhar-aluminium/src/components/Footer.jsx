import React from 'react'
import "../Style/Footer.css"

function Footer() {
  return (
       <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Malhar Aluminium</h4>
          <p>
            Expert in aluminium fabrication for homes and commercial spaces — Sliding Windows, ACP, PVC Doors, Glass Work & more.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: malharaluminium@gmail.com</p>
          <p>Phone: +91------</p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Malhar Aluminium. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
