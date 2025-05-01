import React from 'react';
import './ProgramDetails.css';

const ProgramDetails = () => {
  return (
    <div className="program-details">
      <div className="details-content">
        <h2>Plats & Startdatum</h2>
        
        <div className="location-section">
          <h3>Distans</h3>
          <div className="date-item">
            <span>14 april 2025</span>
            <span>17 september 2025</span>
          </div>
        </div>

        <div className="location-section">
          <h3>Göteborg</h3>
          <div className="date-item">
            <span>27 augusti 2025</span>
          </div>
        </div>

        <div className="location-section">
          <h3>Stockholm</h3>
          <div className="date-item">
            <span>1 september 2025</span>
          </div>
        </div>

        <div className="location-section">
          <h3>Malmö</h3>
          <div className="date-item">
            <span>8 september 2025</span>
          </div>
        </div>

        <div className="fee-section">
          <h2>Avgift</h2>
          <p>69 900 kr (ink moms för privatperson, exkl moms för företag)</p>
          <p>Anmälningsavgift: 2500 kr.</p>
        </div>

        <div className="payment-section">
          <h3>Delbetala räntefritt / 24 månader</h3>
          <p>Delbetalning: 2913 kr/mån</p>
          <p>Administrativ avgift: 35 kr/mån</p>
          <p>Startavgift: 495 kr</p>
        </div>

        <div className="scope-section">
          <h2>Omfattning</h2>
          <p>16 tillfällen, ett pass i veckan. Tid för självstudier och projektarbete tillkommer.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails; 