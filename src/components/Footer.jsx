import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="company-name">Företag</h2>
            <p>Vi erbjuder utbildningar inom AI och maskininlärning för att hjälpa dig ta nästa steg i din karriär.</p>
            <div className="social-links">
              <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h3 className="section-title">Snabb länkar</h3>
              <ul className="footer-links">
                <li><a href="/">Hem</a></li>
                <li><a href="/utbildningar">Utbildningar</a></li>
                <li><a href="/om-oss">Om oss</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="section-title">Kontakt</h3>
              <ul className="contact-list">
                <li><i className="fas fa-phone icon"></i>08-123 45 67</li>
                <li><i className="fas fa-envelope icon"></i>info@foretag.se</li>
                <li><i className="fas fa-map-marker-alt icon"></i>Stockholmsvägen 123</li>
                <li><i className="fas fa-map-marker-alt icon"></i>123 45 Stockholm</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="section-title">Nyhetsbrev</h3>
              <div className="newsletter">
                <p>Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Din e-postadress" required />
                  <button type="submit">Prenumerera</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Företag. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 