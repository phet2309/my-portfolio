import './Skills.css';
import { skills } from "../constants/skills";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, Expo, Power4 } from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


function Skills() {

    const skillDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
    });
    
    return (
      <>
          <div className="skill-div">
              <span id="title">Skills</span>
              <div className="skills-container" ref={skillDiv}>
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}
              </div>
          </div>
      </>
    )
  }
  
  export default Skills;