import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


function Contact() {

    return (
    <>
        <div className="contact-container">
            <div className="contact-left">
                
            </div>
            <div className="contact-right">
                <h1>Contact Me</h1>
                <h3>
                    <FontAwesomeIcon className="social-icon" icon={faGithub} />
                    GitHub: <a href="https://github.com/phet2309/">phet2309</a>
                </h3>
                <h3>
                    <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                    LinkedIn: <a>phet2309</a>
                </h3>
                <h3>
                    <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                    Twitter: <a>phet2309</a>
                </h3>
                <h3>    
                    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                    Instagram: <a>het_2309</a>
                </h3>
                <h3>    
                    <FontAwesomeIcon className="social-icon" icon={faHashtag} />
                    Threads: <a>het_2309</a>
                </h3>
            </div>
        </div>
    </>
    );
}

export default Contact;
