import React from 'react'
import "../Style/Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
     <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section ">
          <h3>3D PrintHub</h3>
          <p>Innovate. Create. Print. High-quality 3D printing services tailored to your needs.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/materials">Materials Guide</Link></li>
         
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@3dprinthub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, Maharashtra</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} 3D PrintHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
