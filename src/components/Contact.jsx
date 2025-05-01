import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
      <h2 className="contact-title">Kontakta oss</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Vi hjälper dig att komma igång</h3>
       <p>
              Har du frågor om utbildningen eller vill du veta mer om hur du kan komma igång?
             Kontakta oss så hjälper vi dig vidare.
        </p>
         <div className="contact-details">
             
       <div className="contact-item">
         <i className="fas fa-phone"></i>

          <div className="contact-text">
          <h4>Telefon</h4>
          <p className="contact-value">08-123 45 67</p>
           </div>
           </div>
      <div className="contact-item">
       <i className="fas fa-envelope"></i>
         <div className="contact-text">
             <h4>E-post</h4>
      <p className="contact-value">info@foretag.se</p>
         </div>
         </div>
         <div className="contact-item">
             <i className="fas fa-map-marker-alt"></i>
         <div className="contact-text">
       <h4>Adress</h4>
        <p className="contact-value">Stockholmsvägen 123, 123 45 Stockholm</p>
         </div>
        </div>
         </div>
          </div>

      <div className="contact-form">
        <form>
              <div className="form-group">
       <label className="form-label" htmlFor="name">Namn</label>
               <input type="text" id="name" name="name" className="form-input" required />
          </div>
         <div className="form-group">
             <label className="form-label" htmlFor="email">E-post</label>
                  <input type="email" id="email" name="email" className="form-input" required />
              </div>
           <div className="form-group">
        <label className="form-label" htmlFor="message">Meddelande</label>
          <textarea id="message" name="message" className="form-textarea" rows="5" required></textarea>
       </div>
     <button type="submit" className="submit-button">Skicka</button>
        </form>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 