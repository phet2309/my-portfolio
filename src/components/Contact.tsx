import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import Gl from './Gl';


function Contact() {

    return (
        <>
            <div id="contact" className="contact-container">
                <div className="contact-right">
                    <h1>Contact Me</h1>
                    <div className="social-card">
                        <a href="https://github.com/phet2309/">
                            <FontAwesomeIcon className="social-icon" icon={faGithub} />
                            GitHub: @phet2309
                        </a>
                    </div>
                    <div className="social-card">
                        <a href="https://www.linkedin.com/in/phet2309/">
                            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                            LinkedIn: @phet2309
                        </a>
                    </div>
                    <div className="social-card">
                        <a href="https://twitter.com/Phet2309">
                            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                            Twitter: @phet2309
                        </a>
                    </div>
                    <div className="social-card">
                        <a href="https://www.instagram.com/het_2309/">
                            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                            Instagram: @het_2309
                        </a>
                    </div>
                    <div className="social-card">    
                        <a href="https://www.threads.net/@het_2309">
                            <FontAwesomeIcon className="social-icon" icon={faHashtag} />
                            Threads: @het_2309
                        </a>
                    </div>
                </div>
                <div className="contact-left">
                    <Gl modelPath={"/assets/phoenix_bird.glb"} />
                </div>
            </div>
        </>
    );
}

export default Contact;
