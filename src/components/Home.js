import '../styles/Home.css';
import '../styles/Global.css';
import Katherine from '../images/katherine.png';
import Contact from './Contact.js'

function Home() {
  return (
    <div className="section" id="home">
        <div>
          <div id="home-header">
            <p>Hi, I'm </p>
            <h1> Katherine Li</h1>
          </div>

          <div id="home-content">

            <p className="intro">
              B.S. Computer Science and B.S. in Immersive Media Design: Computing @ University of Maryland
            </p>
            <p className="intro">
              Software Engineer @ GEICO
            </p>
          

            <div className="buttons">
              <div className="button">
                <a href="#experience">cd ~/experience</a>
              </div>
              <div className="button">
                <a  href="#projects">cd ~/projects</a>
              </div>
              <Contact/>
                
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;