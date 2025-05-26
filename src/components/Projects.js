import '../styles/Projects.css'
import ProjCard from './ProjCard.js';
import Tinderfy from '../images/tinderfy.png'
import Animalfarm from '../images/animalfarm.png'
import Portfolio from '../images/portfolio.png'

function Projects() {
    const projects = [
        {
            img: Tinderfy,
            title: "Tinderfy",
            tech: ["Flask", "Python", "HTML", "CSS"],
            desc: [
                "◇ Created a quasi-satirical fake dating app centered around music taste compatibility assessment",
                "◇ Developed simulated Tinder profiles showing joint music recommendations, favorite artists/genres, and shared content",
                "◇ Utilized Pandas and Spotify API for user authorization, data scraping, processing, and analysis",
                "◇ Used decision trees from scikit-learn to calculate the similarity of users’ favorite songs, enhancing the algorithm’s accuracy"
            ],
            link: "https://www.github.com/kath3rine/tinderfy"
        },
        {
            img: Animalfarm,
            title: "Animal Farm",
            tech: ["Unity", "C#", "Maya"],
            desc: [
                "◇ Satirical 3D game where the user must manage a successful farm, intended to educate on unethical farming"
            ],
            link: "https://drive.google.com/file/d/1h9jGdls9DGvix7wGnakzJO5dDD5Mo2Rg/view?resourcekey"
        },
        {
            img: Portfolio,
            title: "Portfolio Website",
            tech: ["React", "HTML", "CSS", "JavaScript"],
            desc: [
                "◇ This website! Designed and coded an engaging portfolio website from scratch, featuring more projects and info",
                "◇ Implemented responsiveness for a smoother user experience, and used component-based architecture for scalability"
            ],
            link: "https://www.kath3rine.github.io"
        }
    ]
  return (
    <div className="section" id="project-section">
        <div className="section-title" id="projects">
                <h1 className="section-title"> ~/projects </h1>
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