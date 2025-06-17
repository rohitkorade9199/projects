import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/Navbar.css"

function Navbar() {
  return (
     <nav className="navbar">
      <h1 className="logo">3D PrintHub</h1>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/materials">Materials Guide</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
