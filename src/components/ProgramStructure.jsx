import React, { useState } from 'react';
import './ProgramStructure.css';

const ProgramStructure = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const items = [
    "Maskininlärning",
    "Djupinlärning & Neurala Nätverk",
    "Data Engineering",
    "AI i produktion",
    "Etik och Ansvarsfull AI"
  ];

  return (
    <div className="program-structure">
      <div className="structure-content">
      <h2>Kursinnehåll</h2>
        <div className="structure-list">
        {items.map((item, index) => (
          <div 
        key={index} 
          className={`structure-item ${expandedItems[index] ? 'expanded' : ''}`}
            >
           <div className="structure-item-header" onClick={() => toggleItem(index)}>

             <h3>{item}</h3>

         <span className="toggle-icon">

            {expandedItems[index] ? '−' : '+'}
           </span>

              </div>
            
            {expandedItems[index] && (
                <div className="structure-item-content">
              <p>information {item.toLowerCase()} .</p>
           </div>
           )}
         </div>
      ))}
     </div>
     </div>
    </div>
  );
};

export default ProgramStructure; 