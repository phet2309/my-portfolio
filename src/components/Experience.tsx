
import './Experience.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function Experience() {
    return (
        <>
            <div id="experience" className="experience-container">
                <h1>Experience</h1>
                <div className="element-container">
                    <div className="ele1">
                        <h2>Software Engineer</h2>
                        <h4>Blueoptima</h4>
                        <li>Java Developer, Feature creation in Spring boot, Analysis for new feature and bugs, unit testing using Junit, mockito</li>
                        <li>SQL query optimization, Worked with agile tool like Jira, Improved Jenkins pipeline by modifying the CI/CD script</li>
                        <li>Server maintenance, Elastic Kibana, grafana, docker utilization, version control using bitbucket, AWS utilization</li>
                    </div>
                    <div className="ele2">
                        <h2>Teaching Assistant</h2>
                        <h4>New Jersey Institute of Technology</h4>

                        <li>Teaching assistant for CS631-Data Management System Design and CS331-Database System Design and
                            Management</li>
                        <li>Helping students in resolving their doubts and evaluating assignments and exam submissions</li>

                    </div>
                    <div className="ele3">
                        <h2>Freelance Project</h2>
                        <h4>Khelo 5050 Fundraiser</h4>

                        <li>Backend api development using Python Django framework. Email sending cron job configuration.</li>
                        <li>Built payment gateway and influencer referral system.</li>

                    </div>
                    <div className="ele4">
                        <h2>Research Intern</h2>
                        <h4>SPIRE Lab, IISC Bangalore</h4>

                        <li>Apply deep learning techniques and neural networks to improve acoustic and language models</li>
                        <li>Data collection, web scraping and building a language model</li>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Experience;

