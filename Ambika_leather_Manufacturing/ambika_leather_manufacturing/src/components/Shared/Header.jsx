import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Style/Header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Ambika Leather</Link>
        </div>
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {['/', '/about', '/products', '/blog', '/contact'].map(path => (
            <Link
              key={path}
              to={path}
              className={loc.pathname === path ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {path === '/' ? 'Home' : path.slice(1).replace(/^\w/, c => c.toUpperCase())}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
