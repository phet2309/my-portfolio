import './Projects.css';
import  { ProjectType } from '../constants/projects.ts';




function Projects({title, description, tech, image, link} : ProjectType) {
    return (
        <>
            <div id="projects" className="project-container">
                {/* <h1 id="main-title">Projects</h1> */}
                <div className="img-container">
                    <h1 className="project-title">{ title }</h1>
                    <a href={link}>
                        <img src={image} alt="Project Image" />   
                        <div className="text-container">
                            <h4 className="animate-text"><span>Tech Used: </span> {tech}t</h4>
                            <h2 className="animate-text">Description</h2>
                            <p className="animate-text">{description}</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
  }
  
export default Projects;



