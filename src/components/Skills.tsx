import './Skills.css';
import { skills } from "../constants/skills";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, Expo, Power4 } from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);



// const container = document.querySelector('.container');
// const items = container.querySelectorAll('.item');

// // Calculate the row count
// let rowCount = 1;
// let prevTop = items[0].offsetTop;

// for (let i = 1; i < items.length; i++) {
//   if (items[i].offsetTop !== prevTop) {
//     rowCount++;
//     prevTop = items[i].offsetTop;
//   }
// }

// console.log('Number of rows:', rowCount);


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
                    <span className="skill-card" key={index}>
                        {skill}
                    </span>
                ))}
              </div>
          </div>
      </>
    )
  }
  
  export default Skills;