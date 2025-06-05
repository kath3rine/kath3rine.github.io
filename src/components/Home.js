import '../styles/Home.css';
import '../styles/Global.css';
import Katherine from '../images/katherine.png';
import Contact from './Contact.js'

function Buttons() {
  const buttons = [
    {
      "link": "#experience", 
      "text": "cd ~/experience"
    },
    {
      "link": "#projects", 
      "text": "cd ~/projects"
    }
  ]

  return(
    <div id="buttons">
      {buttons.map((button) => (
        <div id="button">
          <a href={button.link}> {'>>'} {button.text}</a>
        </div>
      ))}
    </div>
  );
}

function Home() {
  const bio = [
    "Software Engineer @ GEICO",
    "B.S. Computer Science + B.S. Immersive Media Design from University of Maryland"
  ]

  return (
    <div className="section" id="home">
        <div id="home-left">
          <div id="home-header">
            <p>Hi, I'm </p>
            <h1>Katherine</h1>
          </div>

          <div id="home-content">
            <div id="intro">
              {bio.map((item) => (
                <li>{item}</li>
              ))}
            </div>
            <Contact/>
            <Buttons/>
          </div>
        </div>

        <div id="home-right">
            <img id="pfp" src={Katherine}/>
        </div>
    </div>
  );
}

export default Home;