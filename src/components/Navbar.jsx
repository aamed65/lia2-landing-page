import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Företag</h1>
        </div>
        
        <div className="navbar-links">
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