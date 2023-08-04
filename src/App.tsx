
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Slider from './components/Slider';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Slider />
      <Contact />
    </>
  )
}

export default App
