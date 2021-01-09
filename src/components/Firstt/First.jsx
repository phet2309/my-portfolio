import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from './0.15.gif';
import './first.styles.css';
import Aos from "aos";
import Card from "react-bootstrap/Card";
import "aos/dist/aos.css";


const useStyles = makeStyles({
  root:{
    width: '100%',
    height: '100%',
    backgroundImage: 'url('+img+')',
    backgroundSize: 'cover',
  },
  textshow: {
    // backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      width: '100%',
      height: '30rem',
      textAlign: 'left',
      color: '#f054a1',
      marginLeft: '10rem',
      fontSize: '3rem',
  }
});

const First=() =>  {
  const classes = useStyles();
  
  useEffect(()=> {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <>
        <div className={classes.root} id="first">
            <Card.Body className={classes.textshow}>
                <h1>Hey! <span className="wave">👋</span></h1>
                <h2 data-aos="fade-up">I am Het Patel.</h2>
            </Card.Body>
        </div>
    </>
  );
}

export default First;