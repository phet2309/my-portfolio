import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {skills} from "./SkillsData";
import Divider from '@material-ui/core/Divider';
import "D:/project/portfolio/myportfolio/node_modules/bootstrap/dist/css/bootstrap.min.css";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "./skills.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    deck: {
        backgroundColor: '#1e1f21',
    },
    row: {
        backgroundColor: 'red'
    }
}));

const SkillsComponents = () => {
    const classes = useStyles();

    useEffect(()=> {
        Aos.init({duration: 2000});
      }, []);
    

    
    return (
        <div class="row justify-content-center" id='skills'>
            
         <div className='root pt-3 pb-3'>
             <h1 className='container-fluid title'>TECH SKILLS</h1>
             <div className='container-fluid' data-aos="fade-up">
                 <div className="row justify-content-center">
                     <div>
                         <Card.Body className='focus'>
                         <Card.Title className='card-title'>Frontend</Card.Title>
                         <hr />
                         <Card.Text className="d-flex flex-column">
                         {skills.frontend.map((skill, index) => (
                             <span className="p-3" key={index}>
                                 <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                 <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                 </a>
                             </span>
                         ))}
                         </Card.Text>
                         </Card.Body>
                     </div>
                     <div>
                        <Card.Body className='focus'>
                        <Card.Title className='card-title'>Hosting Platforms</Card.Title>
                        <hr />
                        <Card.Text className="d-flex flex-column">
                        {skills.hostingPlatforms.map((skill, index) => (
                            <span className="p-3" key={index}>
                                <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                </a>
                            </span>
                        ))}
                        </Card.Text>
                        </Card.Body>
                     
                        <Card.Body className='focus'>
                            <Card.Title className='card-title'>Backend</Card.Title>
                            <hr />
                            <Card.Text className="d-flex flex-column">
                            {skills.backend.map((skill, index) => (
                                <span className="p-3" key={index}>
                                    <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                    </a>
                                </span>
                            ))}
                            </Card.Text>
                        </Card.Body>
                     </div>

                    
                    <div>
                    <Card.Body className='focus'>
                                 <Card.Title className='card-title'>Databases</Card.Title>
                                 <hr />
                                 <Card.Text className="d-flex flex-column">
                                 {skills.databases.map((skill, index) => (
                                     <span className="p-3" key={index}>
                                         <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                         <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                         </a>
                                     </span>
                                 ))}
                                 </Card.Text>
                             </Card.Body>

                             <Card.Body className='focus'>
                                 <Card.Title className='card-title'>Version Control</Card.Title>
                                 <hr />
                                 <Card.Text className="d-flex flex-column">
                                 {skills.versionControl.map((skill, index) => (
                                     <span className="p-3" key={index}>
                                         <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                         <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                         </a>
                                     </span>
                                 ))}
                                 </Card.Text>
                             </Card.Body>
                    </div>

                     <div>
                             <Card.Body className='focus'>
                                 <Card.Title className='card-title'>Programming Languages</Card.Title>
                                 <hr />
                                 <Card.Text className="d-flex flex-column">
                                 {skills.programmingLanguages.map((skill, index) => (
                                     <span className="p-3" key={index}>
                                         <a className="card-text text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                         <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="icon-style m-1"></Image> {skill.skillName}
                                         </a>
                                     </span>
                                 ))}
                                 </Card.Text>
                             </Card.Body>
                     </div>
                 </div> 
                 </div>
            </div>
            </div>
    );
};

export default SkillsComponents;
