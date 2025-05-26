import React, { useState } from 'react';
import '../styles/ProjCard.css'
import '../styles/Global.css';

function ProjCard({card}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        <img id="proj-img" src={card.img}/>
        <h2>{card.title}</h2>

        <div id="proj-tech">
          {card.tech.map((x) => (
            <label>{x}</label>
          ))}
        </div>

        <a href={card.link}>LINK</a>
      </div>
      <div className="card-back">
        {card.desc.map((x) => (
          <p>{x}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjCard;