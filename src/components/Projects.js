import '../styles/Section.scss';
import ProjCard from './ProjCard.js';
import Tinderfy from '../images/tinderfy-temp.png'
import Fractal from '../images/fractal.png';
import Portfolio from '../images/portfolio.png'

function Projects() {
    const cards = [
        {
            id: 1,
            img: Tinderfy,
            title: "Tinderfy",
            tech: ["Flask", "Python", "Spotify API"],
            tech2: ["HTML", "CSS", "scikit-learn"],
            desc: [
                "Modified version of Tinder (dating app) that determines two users’ compatibility based on their music taste",
                "Scraped and processed user data to find their shared favorite artists/genres and give relevant recommendations",
                "Implemented decision trees in scikit-learn to calculate how similar their favorite songs are, based on audio features"
            ],
            link: "https://www.github.com/kath3rine/tinderfy"
        },
        {
            id: 2,
            img: Fractal,
            title: "Fractal Explorer",
            tech: ["Unity", "C#"],
            tech2: [],
            desc: [
                "Immersive virtual reality experience featuring animated recursively-generated 3D fractals which change in appearance based on the audio traits of a song that the user chooses"],
            link: "https://www.fractal-explorer.github.io"
        },
        {
            id: 3,
            img: Portfolio,
            title: "Portfolio Website",
            tech: ["React", "HTML", "CSS"],
            tech2: ["JavaScript"],
            desc: [
                "This website! Designed and coded an animated and responsive portfolio website from scratch, featuring projects and info"
            ],
            link: "https://www.kath3rine.github.io"
        }
    ]
  return (
    <div className="Projects">
        <div className="section" id="projects">
                <span className="section-title"> projects.py </span>
                <p> print("click on each card for more info")</p>
                <div className="container">
                {cards.map((card) => (
                    <ProjCard key={card.id} card={card} />
                ))}
                </div>
            </div>
    </div>
  );
}

export default Projects;