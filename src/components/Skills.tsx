import './Skills.css';
import { skills } from "../constants/skills";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const {
  "Programming Language": programmingLanguages,
  "Development Framework": devFrameworks,
  "Database": databases,
  "Cloud Computing": cloudComputing,
  "Version Control": versionControl,
  "Miscellaneous": misc,
  "Coding Platforms": codingPlatforms,
  "Soft Skills": softSkills
} = skills;

function Skills() {

    const skillDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const skillContent = skillDiv.current;

        // gsap.set(skillContent, { x: '100%', opacity: 0 });


        const tl = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power1.in',
            },
            scrollTrigger: {
                trigger: skillContent as Element,
                start: 'top 100%',
                end: 'top 70%',
                scrub: true
            },
        });

        tl.fromTo(skillContent, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 });

    }, []);

  return (
    <>
      <div className="skill-div">
        {/* <span id="title">Skills</span> */}
        <div className="skills-container" ref={skillDiv}>
          <div className="programming-languages">
            <span>Programming Languages: </span>
            <div className="programming-languages-skills">
              {
                programmingLanguages.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Development Framework: </span>
            <div className="programming-languages-skills">
              {
                devFrameworks.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Database: </span>
            <div className="programming-languages-skills">
              {
                databases.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Cloud Computing: </span>
            <div className="programming-languages-skills">
              {
                cloudComputing.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Version Control: </span>
            <div className="programming-languages-skills">
              {
                versionControl.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Miscellaneous: </span>
            <div className="programming-languages-skills">
              {
                misc.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Coding Platforms: </span>
            <div className="programming-languages-skills">
              {
                codingPlatforms.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="programming-languages">
            <span>Soft Skills: </span>
            <div className="programming-languages-skills">
              {
                softSkills.map((skill, index) => (
                  <div key={index} className="skill-card">{skill}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;


