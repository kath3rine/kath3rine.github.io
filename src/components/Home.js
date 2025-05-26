import '../styles/Home.css';
import '../styles/Global.css';
import Katherine from '../images/katherine.png';
import Contact from './Contact.js'

function Home() {

  const bio = [
    "B.S. Computer Science and B.S. Immersive Media Design: Computing from University of Maryland, currently working as a software engineer at GEICO",
  ]

  const buttons = [
    {"link": "#experience", "text": "cd ~/experience"},
    {"link": "#projects", "text": "cd ~/projects"}
  ]

  return (
    <div className="section" id="home">
        <div id="home-left">
          <div id="home-header">
            <p>Hi, I'm </p>
            <h1> Katherine</h1>
          </div>

          <div id="home-content">
            <div id="intro">
              {bio.map((item) => (
                <p>{item}</p>
              ))}
            </div>

            <div id="buttons">
                {buttons.map((button) => (
                  <div id="button">
                    <a href={button.link}>{button.text}</a>
                  </div>
                ))}
              </div>
              <Contact/>
          </div>
        </div>

        <div id="home-right">
            <img id="pfp" src={Katherine}/>
        </div>
    </div>
  );
}

export default Home;