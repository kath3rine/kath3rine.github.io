import '../styles/Home.css';
import Test from '../images/test.png';
import Contact from '../components/Contact.js'

function Home() {
  return (
    <div className="Home">
        <div className="home-section" id="home-text">
            <p>Hi, I'm </p>
            <h1> Katherine</h1>
            <h2> Computer Science & Immersive Media Design 3rd Year @ University of Maryland </h2>

            <div className="buttons">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <Contact />
        </div>

        {/*<div className="home-section" id="home-img">
            <img src={Test}/>
  </div>*/}
        
    </div>
  );
}

export default Home;