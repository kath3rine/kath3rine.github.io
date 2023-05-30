import '../styles/Section.scss';
import ProjCard from '../components/ProjCard.js';
import Matchmaker from '../images/matchmaker.png';
import Fractal from '../images/fractal.png';
import Tinderfy from '../images/tinderfy.png';
import Portfolio from '../images/portfolio.png'
import Maze from '../images/maze.jpg';
import Escape from '../images/escape.png';

function Projects() {
    const cards = [
        {
            id: 1,
            img: Matchmaker,
            title: "Spotify Matchmaker",
            tech: "Python (sklearn, Pandas), Spotify API",
            desc: "Determines how “compatible” two users are based on their taste in music",
            desc2: "Scraped data from their Spotify playlists and extracted songs, artists, and genres that they both like",
            desc3: "Implemented decision trees to calculate how similar their favorite songs are",
            link: "https://www.github.com/kath3rine/spotify-matchmaker"
        },
        {
            id: 2,
            img: Fractal,
            title: "Fractal Explorer",
            tech: "Unity, C#, Oculus Headset",
            desc: "Immersive virtual reality experience featuring animated recursively-generated 3D fractals which change in appearance based on the audio traits of a song that the user chooses",
            link: "https://www.fractal-explorer.github.io"
        },
        {
            id: 3,
            img: Tinderfy,
            title: "Tinderfy",
            tech: "React, Spotify API",
            desc: "Tinder clone that allows the user to search for an artist on Spotify, and displays the artist’s picture, top tracks, and genres in an interface mimicking a Tinder profile",
            desc2: "User can listen to the artist’s music, swipe left/right, and view the artists they’ve matched with",
            link: "https://drive.google.com/file/d/1hGeIWM9iMilR8cUmyy6yzr8JWEa7DPCK/view?usp=sharing"
        },
        {
            id: 4,
            img: Portfolio,
            title: "Portfolio Website",
            tech: "React",
            desc: "This website!",
            desc2: "Responsive, animated website created from scratch using HTML, CSS/SCSS, and JavaScript",
            link: "github.com/kath3rine/kath3rine.github.io"
        }
    ]
  return (
    <div className="Projects" id="projects">
        <div className="section">
                <span> projects.py </span>
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