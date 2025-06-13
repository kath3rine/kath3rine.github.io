import '../styles/Home.css';
import '../styles/Global.css';
import Katherine from '../images/katherine.png';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';
import Resume from '../images/resume.png';

function Home() {

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

  const icons = [
    {
        link: "https://linkedin.com/in/kli17",
        image: Linkedin
    },
    {
        link: "https://github.com/kath3rine",
        image: Github
    },
    {
        link: "https://docs.google.com/document/d/1TuWZ4J4QxJq75TsXh6pFEGCPtvYuIqK6waOykGUWQtI/edit?usp=sharing",
        image: Resume
    },
    {
        link: "mailto:kli17@terpmail.umd.edu",
        image: Email
    },
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
            </div>
            
            <div id="buttons">
              {buttons.map((button) => (
                <div id="button">
                  <a href={button.link}> {'>> cd ~/'}{button.text}</a>
                </div>
              ))}
            </div>

            <div id="contact">
            {icons.map((icon) => (
                <a href={icon.link}>
                    <img src={icon.image}></img>
                </a>
            ))}
        </div>
          </div>
        </div>

        <div id="home-right">
            <img id="pfp" src={Katherine}/>
        </div>
    </div>
  );
}

export default Home;