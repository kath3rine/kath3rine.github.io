import React, { useState } from 'react';
import '../styles/Projects.css'

function ProjCard({card}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        {card.title}
      </div>
      <div className="card-back">
        {card.desc}
      </div>
    </div>
  );
}

export default ProjCard;