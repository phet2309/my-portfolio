
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Slider from './components/Slider';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Blob from './components/Blob';
import Gl from './components/Gl';

function App() {
  return (
    <>
      <Gl />
      {/* <Blob size={2} speed={0.2} color="#ff0000" density={0.4} strength={0.2} offset={0.5} /> */}
      {/* <Navbar />
      <Home />
      <About />
      <Experience />
      <Slider />
      <Contact /> */}
    </>
  )
}

export default App
