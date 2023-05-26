import '../App.scss';
import ProjCard from '../components/ProjCard.js';
import Matchmaker from '../images/matchmaker.png';
import Fractal from '../images/fractal.png';
import Tinderfy from '../images/tinderfy.png';
import Maze from '../images/maze.jpg';
import Escape from '../images/escape.png';

function Projects() {
    const cards = [
        {
            id: "p1",
            img: Matchmaker,
            title: "Spotify Matchmaker",
            tech: "Python (sklearn, Pandas), Spotify API",
            desc: "Determines how “compatible” two users are based on their taste in music",
            desc2: "Used Spotify API and Pandas to scrape data from their Spotify playlists and extract songs, artists, and genres that they both like",
            desc3: "Implemented decision trees with scikit-learn to calculate how similar their favorite songs are",
            link: "https://www.github.com/kath3rine/spotify-matchmaker"
        },
        {
            id: "p2",
            img: Fractal,
            title: "Fractal Explorer",
            tech: "Unity, C#, Oculus Headset",
            desc: "Immersive virtual reality experience featuring animated recursively-generated 3D fractals which change in appearance based on the audio traits of a song that the user chooses",
            link: "https://www.fractal-explorer.github.io"
        },
        {
            id: "p3",
            img: Tinderfy,
            title: "Tinderfy",
            tech: "ReactJS, Spotify API",
            desc: "Tinder clone that allows the user to search for an artist on Spotify, and displays the artist’s picture, top tracks, and genres in an interface mimicking a Tinder profile",
            desc2: "User can listen to the artist’s music, swipe left/right, and view the artists they’ve matched with",
            link: "https://drive.google.com/file/d/1hGeIWM9iMilR8cUmyy6yzr8JWEa7DPCK/view?usp=sharing"
        },
        {
            id: "p4",
            img: Maze,
            title: "Maze",
            tech: "Java",
            desc: "Implemented a weighted directed node graph to represent and generate a random maze",
            desc2: "Found the shortest-path solution using depth-first search, breadth-first search, and Dijkstra’s Algorithm",
            link: "https://www.youtube.com/watch?v=Fz5lo_c3MmQ"
        }, 
        {
            id: "p5",
            img: Escape,
            title: "Escape Game",
            tech: "HTML/CSS, JavaScript, Procreate",
            desc: "Collaboratively illustrated and programmed a pastel-themed choose-your-own-adventure game in which the player must escape a haunted house",
            link: "httpe://kath3rine.github.io/escape-game"
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