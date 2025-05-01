import React from 'react';
import './ProgramInfo.css';

const ProgramInfo = () => {
  return (
    <div className="program-info">
      <div className="program-header">
        <h2>AI-utvecklare – nästa steg i din karriär</h2>
      </div>
      <div className="program-content">
        <div className="program-highlights">
          <ul>
            <li>Maskininlärning</li>
            <li>Python & AI-bibliotek</li>

            <li>Projektbaserat lärande</li>

          </ul>
        </div>

       <div className="program-description">

          <p>

            Utbildningen riktar sig till dig som vill utveckla framtidens teknik. Vi fokuserar på praktiska färdigheter inom AI och maskininlärning, med hjälp av moderna verktyg som Python och TensorFlow. Lär dig att bygga intelligenta system, arbeta i projekt och ta steget in i en framtidsbransch.
         </p>

          <div className="program-details">
            
            <span>24 veckor | Heltid | Distans</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo; 