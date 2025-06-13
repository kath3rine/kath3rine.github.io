import '../styles/Projects.css'
import React, { useState } from 'react';
import Tinderfy from '../images/projects/tinderfy.png'
import Impostar from '../images/projects/impostar.JPG'
import Portfolio from '../images/projects/portfolio.png'
import Visualizer from '../images/projects/visualizer.png'
import Animalfarm from '../images/projects/animalfarm.png'

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
          <p id="category">
            {card.category} {card.link ? <a href={card.link}> (link)</a> : ""}
          </p>
  
          <div id="tech">
            {card.tech.map((x) => (
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
    const projects = [
        {
            img: Tinderfy,
            title: "Tinderfy",
            category: "Web App",
            tech: ["Flask", "React", "API", "HTML/CSS", "JavaScript", "Python"],
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
            tech: ["Unity", "Maya", "C#"],
            desc: [
                "Senior Capstone: Multiplayer augmented reality escape room and scavenger hunt based on the novel 'And Then There Were None'",
                "Players solve virtual and physical puzzles to uncover clues and figure out which player is the imposter",
                "Implemented networking with Photon Engine for seamless multiplayer interaction",
                "Designed and implemented a variety of mixed-reality mini-games with Vuforia (image tracking, plane detection) and custom scripts and models"
            ],
            link: "https://sites.google.com/terpmail.umd.edu/emma-and-katherine-capstone"
        },
        {
            img: Portfolio,
            title: "Portfolio Site",
            category: "Website",
            tech: ["React", "Adobe Fresco", "JavaScript", "HTML/CSS"],
            desc: [
                "This website!",
                "Designed, illustrated, and coded from scratch"
            ]
        },
        {
            img: Visualizer,
            title: "Audio Visualizer",
            category: "Interactive Art",
            tech: ["TouchDesigner"],
            desc: [
                "Moving 3D fractal that changes appearance (speed, color, shape) based on a song (rhythm, tempo, pitch) of the user's choosing"
            ],
            link: ""
        },
        {
            img: Animalfarm,
            title: "Animal Farm",
            category: "3D Video Game",
            tech: ["Unity", "C#", "Maya"],
            desc: [
                "Satirical 3D game where the user must manage a successful farm, intended to educate on unethical farming"
            ],
            link: "https://drive.google.com/file/d/1h9jGdls9DGvix7wGnakzJO5dDD5Mo2Rg/view?resourcekey"
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