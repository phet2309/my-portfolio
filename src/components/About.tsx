
import { useEffect, useRef } from 'react';
import './About.css';
import myImage from '../assets/images/profile.jpg';
import Skills from './Skills';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const textContentRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const textContent = textContentRef.current;
        const img = imgRef.current;

        gsap.set(textContent, { x: '-70%', opacity: 0 });
        gsap.set(img, { x: '100%', opacity: 0 });


        const tl = gsap.timeline({
            defaults: {
              duration: 1,
              ease: 'power3.out',
            },
            scrollTrigger: {
              trigger: textContent as Element,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: true
            },
        });
    
        tl.fromTo(textContent, { x: '-70%', opacity: 0 }, { x: '0%', opacity: 1 });
        tl.fromTo(img, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=1');

    }, []);

    return (
    <>
        <div className="container">
            <div className="text-content" ref={textContentRef}>
                <p>
                Full-Time Graduate student with one year of experience in software development including project management, leading team, and agile development of software. Ability to build user-centric web applications, full stack applications, and more designed to scale leveraging my problem-solving skills. A fast learner with strong time management, multi-tasking, and troubleshooting skills with an analytical mindset.
                </p>
                <div id="skills">
                    <Skills />
                </div>
            </div>
            <img src={myImage} alt="My Image" ref={imgRef} />
        </div>
    </>
    );
}

export default About;
