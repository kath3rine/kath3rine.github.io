import '../styles/Projects.css'
import projects from '../data/ProjectData.json'
import React, { useState } from 'react';

interface CardType {
  img: string;
  title: string;
  category: string;
  demo?: string;
  tech: string[];
  desc: string[];
}

interface CardProps {
  card: CardType;
}

function Card({card} : CardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-front">
          <img id="proj-img" src={card.img}/>
          <h2>{card.title}</h2>
          <p id="category">{card.category} {card.demo ? <a href={card.demo}> (demo)</a> : ""} {card.more ? <a href={card.more}> (more)</a> : ""} </p>
  
          <div id="tech">
            {card.tech.map((x : string) => (
              <label id="tech-label">{x}</label>
            ))}
          </div>
        </div>

        <div className="card-back">
          {card.desc.map((x) => (
            <li>{x}</li>
          ))}
        </div>
      </div>
    );
  }

function Projects() {
  return (
    <div className="section" id="project-section">
        <div className="section-title" id="projects">
                <h1 className="section-title"> ~/projects </h1>
                <p id="proj-intro">print("click on each project card to learn more")</p>
                
                <div id="projects-content">
                  {projects.map((card) => (
                      <Card card={card} />
                  ))}
                </div>
            </div>
    </div>
  );
}

export default Projects;