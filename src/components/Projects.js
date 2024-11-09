import '../styles/Section.scss';
import ProjCard from './ProjCard.js';
import Tinderfy from '../images/tinderfy.png'
import Animalfarm from '../images/animalfarm.png'
import Fractal from '../images/fractal.png';
import Portfolio from '../images/portfolio.png'
import Escape from '../images/umdescape.png'

function Projects() {
    const cards = [
        {
            id: 1,
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
            id: 2,
            img: Animalfarm,
            title: "Animal Farm",
            tech: ["Unity", "C#", "Maya"],
            desc: [
                "◇ Satirical 3D game where the user must manage a successful farm, intended to educate on unethical farming"
            ],
            link: "https://drive.google.com/file/d/1h9jGdls9DGvix7wGnakzJO5dDD5Mo2Rg/view?resourcekey"
        },
        {
            id: 3,
            img: Escape,
            title: "Escape UMD",
            tech: ["Unity", "C#"],
            desc: [
                "◇ Virtual reality experience where the user completes a series of challenges to escape UMD’s campus, including easter eggs and immersive features so the user can make decisions and interact with elements in the scene"
            ],
            link: "https://drive.google.com/file/d/1D5EMozAgoZnIrtSE0JXz8nlfXzslc4LB/view?usp=drive_link"
        },
        /*{
            id: 4,
            img: Fractal,
            title: "Fractal Explorer",
            tech: ["Unity", "C#"],
            desc: [
                "Immersive virtual reality experience featuring animated recursively-generated 3D fractals which change in appearance based on the audio traits of a song that the user chooses"],
            link: "https://kath3rine.github.io/fractal-explorer/"
        },*/
        {
            id: 4,
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