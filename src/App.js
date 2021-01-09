import React from 'react';
import './App.css';
import Header from "./components/Navbar/Header";
import About from "./components/About";
import First from "./components/Firstt/First";
import SkillsComponents from "./components/Skills/SkillsComponents";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificates/Certificate";
import Test from "./components/Test";
import Footer from "./components/Footer";
import { makeStyles } from '@material-ui/core/styles';
import img1 from './images/0.15.gif';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme)=>({
  root :{
    // minHeight: '100vh',
    // backgroundImage: 'url('+img1+')',
    // backgroundRepeat: 'repeat',
    // backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    position: 'relative',
    overflow: 'hidden',
  },
}));



const App = () => {
  const classes = useStyles();
  
  return(
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Particles
          className="particles particles-box"
          params={particlesOptions}
        />
        <Header />
        <First />
        <About />
        <SkillsComponents />
        {/* <SkillsUpdate /> */}
        <Certificate />
        <Projects />
      </div>
      <div style={{marginTop: '0rem',}}> 
        <Footer />
      </div>
    </>
  );
}

export default App;
