import Home from './components/Home.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Blender from './components/Blender.js'


function App() {
  return (
    <div className="App">
      <Blender />
      <Home />
      <Experience />
      <Projects />
      {/* <About /> */}
    </div>
  );
}

export default App;
