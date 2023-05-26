import '../App.scss';
import Test from '../images/test.png';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';

function Home() {
  return (
    <div className="Home">
        <div className="home-section" id="home-text">
            <p>Hi, I'm </p>
            <h1> Katherine Li</h1>
            <h2> Computer Science + Immersive Media Design student @ University of Maryland </h2>

            <a className="home-button" href="#experience">Experience</a>
            <a className="home-button" href="#projects">Projects</a>

            <div className="contact">
            <a href="mailto:kli17@terpmail.umd.edu"><img src={Email}/></a>
            <a href="https:/linkedin.com/in/kli17"><img src={Linkedin}/></a>
            <a href="https://github.com/kath3rine"><img src={Github}/></a>
            </div>

        </div>

        <div className="home-section" id="home-img">
            <img src={Test}/>
        </div>
        
    </div>
  );
}

export default Home;