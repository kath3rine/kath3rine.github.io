import '../styles/Projects.css'
import React, { useState } from 'react';
import Tinderfy from '../images/tinderfy.png'
import Impostar from '../images/impostar.JPG'
import Portfolio from '../images/portfolio.png'

function Card({card}) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-front">
          <img id="proj-img" src={card.img}/>
          <h2>{card.title}</h2>
  
          <div className="proj-tech">
            <label id="category-label">{card.category}</label>
            {card.tech.map((x) => (
              <label id="tech-label">{x}</label>
            ))}
            
          </div>
            
          <div className='proj-tech'>
            {card.languages.map((x) => (
              <label id="language-label">{x}</label>
            ))}
          </div>
  
          <a href={card.link}>LINK</a>
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
    const projects = [
        {
            img: Tinderfy,
            title: "Tinderfy",
            category: "Web App",
            tech: ["Flask", "React", "API"],
            languages: ["HTML/CSS", "JavaScript", "Python"],
            desc: [
                "Full-stack web app displaying a user’s Spotify analytics in a dating app profile",
                "Integrated Spotify and LastFM API to display and compare user stats like top songs, shared artists and genres, and uniqueness, and shared content",
                "Implemented recommendations and compatibility scoring to match users based on their music taste"
            ],
            link: "https://www.github.com/kath3rine/tinderfy-v2"
        },
        {
            img: Impostar,
            title: "Impost-AR",
            category: "Augmented Reality",
            tech: ["Unity", "Maya"],
            languages: ["C#"],
            desc: [
                "Multiplayer augmented reality escape room / scavenger hunt based on the novel 'And Then There Were None'",
                "Players solve virtual and physical puzzles to uncover clues, stay alive, and figure out which player is the imposter",
                "Implemented networking with Photon Engine for seamless multiplayer interaction",
                "Designed various engaging blended-reality mini-games and integrated them into the gameplay"
            ],
            link: "https://sites.google.com/terpmail.umd.edu/emma-and-katherine-capstone"
        },
        {
            img: Portfolio,
            title: "Portfolio Site",
            category: "Website",
            tech: ["React", "Adobe Fresco"],
            languages: ["HTML/CSS", "JavaScript"],
            desc: [
                "This website!",
                "Designed, illustrated, and coded from scratch"
            ],
            link: "https://www.kath3rine.github.io"
        }
    ]
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