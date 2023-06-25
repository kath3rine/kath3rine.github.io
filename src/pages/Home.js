import '../styles/Home.css';
import Katherine from '../images/katherine.png';

function Home() {
  return (
    <div className="Home">
        <div className="home-section" id="home-text">
            <p>Hi, I'm </p>
            <h1> Katherine Li</h1>
            <h2> Computer Science & Immersive Media Design @ University of Maryland </h2>

            <div className="buttons">
                <a className="button-link" href="#experience">Experience</a>
                <a className="button-link" href="#projects">Projects</a>
                <a className="button-link" href="#contact">Contact</a>
                <div className="katherine-img">
              <img src={Katherine}/>
            </div>
            </div>
            
            
            
        </div>

        
    </div>
  );
}

export default Home;