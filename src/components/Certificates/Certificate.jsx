import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Image from "react-bootstrap/Image";
import "D:/project/portfolio/myportfolio/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./certificate.styles.css";
import {certis} from "./CertificateData";
import Aos from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles((theme) => ({
}));

const Certificate = () => {
    const classes = useStyles();

    useEffect(()=> {
        Aos.init({duration: 1000});
      }, []);

    return (
        <div className='root' id='certificates'>
            <h1 className='container-fluid title'>Certificates</h1>
            <div data-aos="fade-up" className='d-flex flex-column xyz'>
                {certis.certificate.map((certi, index) => (
                    <a className="text-decoration-none" href={certi.link} target="_blank" rel="noopener noreferrer">
                        <span className="p-3" key={index}>
                            <div className='element'>
                                <span className='main-title'>{certi.name}</span>
                                <br />
                                <span className='org-title'>{certi.org}</span>
                            </div>
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Certificate;
