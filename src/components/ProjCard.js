import { useState } from 'react';
import cn from "classnames";

function ProjCard({card}) {
    const [showBack, setShowBack] = useState(false); 

    function handleClick() { 
        setShowBack(!showBack); 
    } 

    return (
      <div className="flip-card-outer"
      onClick={handleClick}>
        <div className={cn("flip-card-inner", {
          showBack })}>
          <div className="card front">
            <img className="proj-img" src={card.img}/>
            <h2> {card.title} </h2>
            <p className="proj-tech"> {card.tech} </p>
            <a href={card.link}> LINK </a>
          </div>
          <div className="card back">
            <p> {card.desc} </p>
            <p> {card.desc2} </p>
            <p> {card.desc3} </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjCard;