import { useState } from 'react';
import cn from "classnames";

function ExpCard({card}) {
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
            <img className="exp-img" src={card.img}/>
            <h2> {card.role} </h2>
            <h3> {card.company} </h3>
            <p className="exp-date"> {card.date} </p>
          </div>
          <div className="card back">
            <p> {card.desc} </p>
            <p> {card.desc2} </p>
            <p> {card.desc3}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ExpCard;