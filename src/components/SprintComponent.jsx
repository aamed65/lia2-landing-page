import React, { useState } from 'react';
import './SprintComponent.css';

const SprintComponent = () => {
  const steps = [
    {
      title: "Förberedelse",
      description: "Innan utbildningen startar får du en kort enkät för att vi ska kunna anpassa innehållet efter dina behov och förkunskaper inom AI.",
      icon: "📋"
    },
    {
      title: "Del 1: Introduktion till AI",
      description: "Grundläggande begrepp, historia och nuvarande tillämpningar av artificiell intelligens. Etik och framtid inom AI.",
      icon: "🚀"
    },
    {
      title: "Del 2: Grunderna i maskininlärning",
      description: "Python för AI, algoritmer och datastrukturer. Introduktion till grundläggande maskininlärningsmodeller.",
      icon: "💻"
    },
    
    {
      title: "Del 3: Djupinlärning",
      description: "Neurala nätverk och dess tillämpningar. Computer Vision, Natural Language Processing och Generativ AI.",
      icon: "🧠"
    },


    {
      title: "Avslutning & certifiering",
      description: "Examination och utvärdering. Du får ett certifikat som bevis på din nya kompetens inom AI-utveckling.",
      icon: "🏆"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="sprint-container">
      <h2 className="sprint-title">Utbildningens upplägg</h2>
      
      <div className="timeline">
        {steps.map((step, index) => (
          <div 
       key={index} 
         className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
         onClick={() => setActiveIndex(index)}
       >
       <div className="timeline-icon">{step.icon}</div>
       <div className="timeline-title">{step.title}</div>
       {index < steps.length - 1 && <div className="timeline-connector"></div>}
      </div>
      ))}
      </div>
      
      <div className="timeline-content">
        <h3>{steps[activeIndex].title}</h3>
        <p>{steps[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default SprintComponent; 