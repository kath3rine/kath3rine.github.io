import Home from './pages/Home.js';
import About from './pages/About.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import Navbar from './components/Navbar.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
