import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Företag</h1>
        </div>
        
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/utbildningar" className="nav-link">Utbildningar</a>
          <a href="/om-oss" className="nav-link">Om oss</a>
          <a href="/kontakt" className="nav-link">Kontakt</a>
          <a href="/ansok" className="nav-link apply-button">Ansök nu</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 