import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#21201e',
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        zIndex: '2',
    },
    social: {
        color: '#00ffef',
        listStyle: 'none',
        margin: '2rem',
        
    },
    innerdiv: {
        display: 'flex',
        justifyContent: 'center',
    },
    hov: {
        '&:hover': {
            color: '#00ffef',
        }
    },
    outdiv: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontSize: '.6rem',
        textAlign: 'center',
    }
  
});



const Footer=() =>  {
  const classes = useStyles();

  return (
    <div className={classes.root} id='contact'>
    <div className={classes.innerdiv}>
       <ul style={{display: 'flex'}}>
            <li className={classes.social}><a href='https://www.linkedin.com/in/het-patel-943124197/' style={{color: 'white'}}><LinkedInIcon className={classes.hov} /></a></li>
            <li className={classes.social}><a href='https://github.com/phet2309' style={{color: 'white'}}><GitHubIcon className={classes.hov} /></a></li>
            <li className={classes.social}><a href="mailto:phet2309@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}><EmailIcon className={classes.hov} /></a></li>
            <li className={classes.social}><a href='https://twitter.com/Phet2309' style={{color: 'white'}}><TwitterIcon className={classes.hov} /></a></li>
        </ul>        
    </div>
    <div className={classes.outdiv}>
        Website is designed by<br/>
        Het Patel<br />
        phet2309@gmail.com

    </div>
    </div>
 
  );
}

export default Footer;