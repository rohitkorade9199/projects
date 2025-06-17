import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div>
       <nav className="navbar">
      <h1>Wedding Planner</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
       <li><Link to="/apparel">Apparel</Link></li>
        <li><Link to="/ceremony">Ceremony</Link></li>
        <li><Link to="/reception">Reception</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar