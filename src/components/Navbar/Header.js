import React, { useEffect, useState } from "react";
import { 
    AppBar,
    Toolbar,
    IconButton,
    makeStyles,
    Collapse
 } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo from "../../assets/icons/logow.webp";
import "./header.styles.css";

const useStyles = makeStyles((theme) => ({
  hove: {
    '&:hover': {
      color: '#00ffef',
    }
  }
}));

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return(
    <>
        <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            {/* <img className="logo" src={Logo} alt="" /> */}
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#first" className={classes.hove}>Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1uGe2Uch9jlmbnAt99RXbSXJFPzqxh_aT/view?usp=sharing">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
    </>
    );
}

export default Header;