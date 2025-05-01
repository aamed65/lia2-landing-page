import React from 'react';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop")'
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Bli en AI-utvecklare</h1>
        <h2>Forma framtiden med artificiell intelligens</h2>
        <p>
          Lär dig bygga nästa generations AI-lösningar. Vår utbildning ger dig verktygen och kunskapen för att lyckas i en snabbväxande bransch.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Ansök nu</button>
          <button className="hero-button secondary">Läs mer</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 