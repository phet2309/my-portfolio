import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider';
import Accordion from "react-bootstrap/Accordion";
import ContextAwareToggle from "react-bootstrap/";
import { UrlButton } from "@merc/react-timeline";
import "D:/project/portfolio/myportfolio/node_modules/bootstrap/dist/css/bootstrap.min.css";
import dbms from "./images/dbms.png"
import vote from "./images/vote.png"
import kalman from "./images/kalman.png"
import sdp from "./images/sdp.png"
import candle from "./images/candlestick.png"
import dl from "./images/dl.png"
import "./projects.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
}));

const Projects = () => {
    const classes = useStyles();
    useEffect(()=> {
        Aos.init({duration: 1000});
      }, []);
    return (
        <>
        <div className='root' id='projects'>
        <div className='title-style'>Projects</div>
        
        <div className='row d-flex justify-content-center col-md-12'>
            <Accordion defaultActiveKey="1">
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Handwritten Answersheet Detection and Evaluation</Card.Title>
                <Card.Img variant="top" src={sdp} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style' className='drop-style'>
                <strong>Description:</strong>  Dtetecting answersheet of student with camera calibrationa and using trained tesseract-ocr model to recognize
handwritten characters.Automatic evaluation and automatic marks update of students.
                <hr />
                <strong>Features:</strong>
                <ul className="pt-1">
                    <li className="features">Answersheet detection</li>
                    <li className="features">Text recognition</li>
                    <li className="features">Evaluation and automatic marks update</li>
                </ul>
                <hr />

                <strong>Tech used:</strong> Python, OpenCV, Tesseract-OCR
                

                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/Handwritten-answersheet-detection-and-evaluation"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion>
        

            
        
            <Accordion defaultActiveKey="1">
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Online Voting System Socket Programming</Card.Title>
                <Card.Img variant="top" src={vote} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style'>
                <strong>Description:</strong> Client-Server application with socket programming. Online voter registration, voting portal and database management using pandas. Voter registration, Candidate registration
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                    <li className="features">Server-Client voting system</li>
                    <li className="features">multi-threading</li>
                    <li className="features">Admin login, voter registraion and login</li>
                    <li className="features">Vote casting and counting of votes</li>
                </ul>
                <hr />

                <strong>Tech used:</strong> Python, Socket Programming, Multithreading, Pandas
               
                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/Online-Voting-System-Socket-Programming"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion>
        

        
            <Accordion>
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Extnded Kalman Filter Object Tracking in 3D</Card.Title>
                <Card.Img variant="top" src={kalman} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style'>
                <strong>Description:</strong>  This project shows how object path can be trackesd and estimated by Extended Kalman Filter. An object is moving in 3D space and we want to track that by using Extended Kalman Filter.
                <hr />
                <strong>Tech used:</strong> Iot, Extended Kalman Filter, Matlab
                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/Extnded-Kalman-Filter-Object-Tracking-in-3D"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion>
        </div>
        
        <div className='row d-flex justify-content-center col-lg-12'>
        <Accordion defaultActiveKey="1">
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Credit Card Management System Database Management</Card.Title>
                <Card.Img variant="top" src={dbms} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style'>
                <strong>Description:</strong> This is a walkthrough of a web portal for credit card management. This application is done with MySQL.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                    <li className="features">User Login</li>
                    <li className="features">Admin Login</li>
                    <li className="features">Database Management</li>
                </ul>
                <hr />

                <strong>Tech used:</strong> MySQL, PHP
                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/Credit-Card-Management-System"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion> 
        

        
        <Accordion defaultActiveKey="1">
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Live Candlestick plotting of Stocks Live Price</Card.Title>
                <Card.Img variant="top" src={candle} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style'>
                <strong>Description:</strong>  Getting live data of stock price minute by minute and built the indicators for analysing the movement.Plotting candlestick charts from live data.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                    <li className="features">Live data fetching</li>
                    <li className="features">Live candlestick plotting</li>
                    <li className="features">Stock price indicators</li>
                </ul>
                <hr />

                <strong>Tech used:</strong>python, flask, alphavantage API, pandas

                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/Live-Candlestick-plotting-of-Stocks-Live-Price"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion>


            <Accordion defaultActiveKey="1">
            <Card data-aos="fade-up" style={{ width: '14rem', margin: '0.8rem' }} className='card-style'>
                <Card.Title className='card-title'>Dog-Cat Image Classification Using Deep Learning</Card.Title>
                <Card.Img variant="top" src={dl} className="p-2 image-style" />
                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                PROJECT DETAILS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className='drop-style'>
                <strong>Description:</strong> Training and validation of a model, to classify dog and cat images from given data using tensorflow.
                <hr />
                <strong>Features:</strong>
                <ul className="list-styles pt-1">
                    <li className="features">Classification of dog and cat images with deep learning</li>
                </ul>
                <hr />

                <strong>Tech used:</strong> Python, Keras
                </Card.Body>
                </Accordion.Collapse>
                <div className="d-flex justify-content-center flex-row mt-1 mb-1">
                    <UrlButton
                    href="https://github.com/phet2309/dog-cat-image-classification-using-deep-learning"
                    target="_blank"
                    >
                    <span className='source-code'>SOURCE CODE</span>
                    </UrlButton>
                </div>
            </Card>
            </Accordion> 
 

        </div>
            
        <div data-aos="fade-up" className='container-fluid mini'>
        <span style={{fontSize: '2rem'}}>Mini-Projects</span>
        <ul>
            <a href='https://github.com/phet2309/Measurements-of-object-from-photo' className='text-decoration-none'><li className='mini-align' style={{color: 'white'}}><span style={{color: 'white'}}>Object dimension measurement from image using reference | </span><span style={{color: 'white',fontSize: '0.5rem'}}> python, openCV</span></li></a>
            <a href='https://github.com/phet2309/Face-Detection' className='text-decoration-none'><li className='mini-align' style={{color: 'white'}}><span style={{color: 'white'}}>Face and eye detection from live video | </span><span style={{color: 'white',fontSize: '0.5rem'}}>python, openCV, haarcascade</span></li></a>
        </ul>
        </div>
                               
        </div>
        </>
    );
};

export default Projects;
