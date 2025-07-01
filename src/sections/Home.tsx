import '../styles/Home.css';
import '../styles/Global.css';
import Contact from '../components/Contact.tsx'
import Scene from '../components/Scene.js'
import buttons from '../data/ButtonData.json'

function Home() {
  return (
    <div className="section" id="home">
        <div id="home-left">
          <div id="home-header">
            <p>Hi, I'm </p>
            <h1>Katherine</h1>
          </div>

          <div id="home-content">
            <div id="intro">
              <p> I'm a software engineer at GEICO and recent graduate of the University of Maryland, where I earned a B.S. in Computer Science and a B.S. in Immersive Media Design: Computing.</p>
            </div>
            
            <div id="buttons">
              {buttons.map((button : {link : string, text: string}) => (
                <div id="button">
                  <a href={button.link}> {'>> cd ~/'}{button.text}</a>
                </div>
              ))}
            </div>
            <Contact />
          </div>
        </div>

        <div id="home-right">
            <div id="bunny">
              <Scene model="/stuffed-animal.glb"/>
              <p>scroll or click + drag to move me!</p>
            </div>
        </div>
    </div>
  );
}

export default Home;