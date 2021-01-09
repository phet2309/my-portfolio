import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from '@material-ui/core/styles';
import self from '../images/fin4.jpg';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  root:{
    background: '#1e1f21',
    display: 'flex',
    flexDirection: 'column',
  },
  photo: {
    margin: '1rem',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    color: '#00ffef',
    marginTop: '4rem',  
    // backgroundColor: '#00ffef',
    fontSize: '2rem',
  },
  cardFormat: {
    backgroundColor: '#c2e5e0',
    width: '20rem',
    marginTop: '1rem',
    // marginLeft: '10%',
    // marginRight: '10%',
    height: 'auto',
    border: '0.2rem solid ##c2e5e0',
    borderRadius: '0.5rem',
    boxShadow: '0.2rem 0.2rem 0.2rem ##c2e5e0',
    // color: '#00ffef',
  },

  test: {
    marginBlock: '2rem',
    // marginBottom: '5rem',
  }

});

const About=() =>  {
  const classes = useStyles();

  useEffect(()=> {
    Aos.init({duration: 1000});
  }, []);

  return (
    <>
    <div className={classes.root} id='about'>
    <div className={classes.title}>About Me</div>
    
    <div className='row justify-content-center mx-auto col-sm-10 col-xs-12 test mb-5' data-aos="fade-up">
      <div style={{backgroundColor: '#1e1f21'}}>
        <Image className={classes.photo} src={self} thumbnail/>
      </div>
      <Card.Body className={classes.cardFormat}>
          <p style={{fontSize: '0.8rem', paddingTop: '0.5rem', marginRight: '0.5rem' }}>Hey! I am Het Patel.<br/>
          I am a student of Computer Science(2018-2022) at <span style={{color:'#ff0ab1'}}>Indian Institute of Information Technology, Vadodara</span> pursuing B.Tech.</p>
          <p style={{fontSize: '0.8rem', marginRight: '0.5rem' }}>I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products. I also practice data structure and algorithm on various coding platforms like LeetCode, Codeforces. I have also worked with various python libraries like OpenCV, pandas, Keras.</p>
          <p style={{fontSize: '0.8rem', marginRight: '0.5rem' }}>I aim to build perfect and creative websites for real world applications and user satisfaction. I am a web-development enthusiast and looking forward to opportunities to work in this field.</p>
          <p style={{fontSize: '0.8rem', marginRight: '0.5rem' }}> I am also pationate about Football and Chess. I also love to listening to music and playing games.</p>
      </Card.Body>
    </div>
    </div>





    </>
  );
}

export default About;
