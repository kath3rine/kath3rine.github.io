import '../styles/Projects.css'
import ProjCard from './ProjCard.js';
import Tinderfy from '../images/tinderfy.png'
import Impostar from '../images/impostar.JPG'
import Portfolio from '../images/portfolio.png'

function Projects() {
    const projects = [
        {
            img: Tinderfy,
            title: "Tinderfy",
            tech: ["Flask", "Python", "HTML", "CSS"],
            desc: [
                "Quasi-satirical fake dating app centered around music taste compatibility assessment",
                "Developed simulated Tinder profiles showing joint music recommendations, favorite artists/genres, and shared content",
                "Utilized Pandas and Spotify API for user authorization, data scraping, processing, and analysis",
                "Used decision trees from scikit-learn to calculate the similarity of users’ favorite songs, enhancing the algorithm’s accuracy"
            ],
            link: "https://www.github.com/kath3rine/tinderfy"
        },
        {
            img: Impostar,
            title: "Impost-AR",
            tech: ["Unity", "C#", "Maya"],
            desc: [
                "Collaborative senior capstone project",
                "Multiplayer augmented reality escape room / scavenger hunt based loosely off 'And Then There Were None'",
                "Players solve virtual and physical puzzles to uncover clues, stay alive, and figure out which player is the imposter",
                "Implemented networking with Photon Engine for seamless multiplayer interaction",
                "Designed various engaging blended-reality mini-games and integrated them into the gameplay"
            ],
            link: "https://sites.google.com/terpmail.umd.edu/emma-and-katherine-capstone"
        },
        {
            img: Portfolio,
            title: "Portfolio Site",
            tech: ["React", "HTML", "CSS", "JavaScript"],
            desc: [
                "This website! Designed and coded an engaging portfolio website from scratch, featuring more projects and info",
                "Implemented responsiveness for a smoother user experience, and used component-based architecture for scalability"
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
                    <ProjCard card={card} />
                ))}
                </div>
            </div>
    </div>
  );
}

export default Projects;