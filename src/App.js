import Home from './pages/Home.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
