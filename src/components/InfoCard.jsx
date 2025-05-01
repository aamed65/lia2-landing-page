import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-content">
     <h2 className="info-title">Välkommen till vårt program</h2>
       <div className="info-text-container">
         
       <p className="info-text">
        Här hittar du all information om vårt spännande program. 
         Vi erbjuder en unik möjlighet att utveckla dina kunskaper 
        och ta nästa steg i din karriär.
        </p>

     <button className="read-more-btn">Läs mer</button>
      </div>
      </div>
    </div>
  );
};

export default InfoCard; 