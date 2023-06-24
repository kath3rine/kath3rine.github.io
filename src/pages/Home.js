import '../styles/Home.css';
import Katherine from '../images/katherine.png';
import Contact from '../components/Contact.js'

function Home() {
  return (
    <div className="Home">
        <div className="home-section" id="home-text">
            <p>Hi, I'm </p>
            <h1> Katherine</h1>
            <h2> Computer Science & Immersive Media Design @ University of Maryland </h2>

            <div className="buttons">
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                
            </div>
            {/*
            <div class="hehe">
              <img class="haha" src={Katherine}/>
  </div> */}
            
            <Contact />
        </div>

        <div className="home-section" id="home-img">
            <img src={Katherine}/>
  </div>
        
    </div>
  );
}

export default Home;