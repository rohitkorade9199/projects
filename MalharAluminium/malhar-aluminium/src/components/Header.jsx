import { Link } from "react-router-dom";
import "../Style/Header.css"

function Header() {
  return (
         <header className="header">
      <div className="logo-container">
        <img src="../Images/Logo2.jpg" alt="Malhar Aluminium Logo" className="logo" />
        <h1 className="company-name">Malhar Aluminium</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">About</Link>
      </nav>
    </header>
  )
}

export default Header
