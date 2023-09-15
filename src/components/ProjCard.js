import { useState } from 'react';
import cn from "classnames";

function ProjCard({card}) {
    const [showBack, setShowBack] = useState(false); 

    function handleClick() { 
        setShowBack(!showBack); 
    } 

    const techColors = {
      "Python": 'tcol1',
      "JavaScript": 'tcol1',
      "HTML/CSS": 'tcol1',
      "HTML": 'tcol1',
      "CSS": 'tcol1',
      "C#": 'tcol1',
      "Flask": 'tcol2',
      "React": 'tcol2',
      "Unity": 'tcol2',
      "Spotify API": 'tcol2',
      "scikit-learn": 'tcol2',
      "Pandas": 'tcol2'
    };

    return (
      <div className="flip-card-outer"
      onClick={handleClick}>
        <div className={cn("flip-card-inner", {
          showBack })}>
          <div className="card front">
            <img className="proj-img" src={card.img}/>
            <h2> {card.title} </h2>
            <div className="proj-tech">
              {card.tech.map((t) => (
                <label className={`${techColors[t]}`}>{t}</label>
              ))} 
            </div>
            <a href={card.link}> LINK </a>
          </div>
          <div className="card back">
              {card.desc.map((d) => (
                <p>{d}</p>
              ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjCard;