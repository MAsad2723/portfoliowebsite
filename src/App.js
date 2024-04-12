import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <div style={{ border: '2px solid white' }}>
        <Navbar />
      </div>
      <div style={{ border: '2px solid white' }}>
        <Home />
      </div>
      <div style={{ border: '2px solid white' }}>
        <About />
      </div>
      <div style={{ border: '2px solid white' }}>
        <Skills />
      </div>
      <div style={{ border: '2px solid white' }}>
        <Projects />
      </div>
      <footer>
        <div style={{ border: '2px solid white' }}>
          <Contact />
        </div>
      </footer>
    </div>
  );
}

export default App;
