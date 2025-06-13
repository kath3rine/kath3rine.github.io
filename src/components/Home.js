import '../styles/Home.css';
import '../styles/Global.css';
import Katherine from '../images/katherine.png';
import Contact from './Contact.js'

function Home() {
  const bio = [
    "Software Engineer | ",
    "B.S. Computer Science + B.S. Immersive Media Design"
  ]

  const buttons = [
    {
      "link": "#experience", 
      "text": "experience"
    },
    {
      "link": "#projects", 
      "text": "projects"
    }
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
            <p> I am a software engineer at GEICO and recent graduate of the University of Maryland, where I earned a B.S. in Computer Science and a B.S. in Immersive Media Design: Computing.</p>
              {/* {bio.map((item) => (
                <span>{item} </span>
              ))} */}
              
            </div>
            
            <div id="buttons">
              {buttons.map((button) => (
                <div id="button">
                  <a href={button.link}> {'>> cd ~/'}{button.text}</a>
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