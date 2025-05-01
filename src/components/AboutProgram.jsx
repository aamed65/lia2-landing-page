import React from 'react';
import './AboutProgram.css';

const AboutProgram = () => {
  return (
    <div className="about-program">
      <div className="about-content">
        <h2>Om utbildningen</h2>
        <div className="about-text">
          <p>
         Vår tvååriga YH-utbildning till AI-utvecklare ger dig den kunskap och kompetens som krävs för att arbeta med artificiell intelligens och maskininlärning. Under utbildningen lär du dig att designa, utveckla och implementera AI-lösningar som kan revolutionera företag och organisationer.
          </p>
          <p>
          Du får djup förståelse för algoritmer, neurala nätverk, dataanalys och programmering. Utbildningen kombinerar teoretisk kunskap med praktiska projekt, där du får lösa verkliga problem med AI-teknik.
          </p>
        </div>
      <div className="career-options">
        <h3>Efter utbildningen kan du arbeta som:</h3>
      <ul>
       <li>AI-utvecklare</li>
       <li>Machine Learning Engineer</li>
     <li>Data Scientist</li>
          <li>AI-specialist</li>
     <li>Systemutvecklare med AI-inriktning</li>
      </ul>
     </div>
        <button className="read-more-button">Läs mer</button>
      </div>
    </div>
  );
};

export default AboutProgram; 