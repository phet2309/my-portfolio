
import { useEffect, useRef } from 'react';
import './About.css';
import myImage from '/assets/images/self.jpeg';
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
                ease: 'power1.in',
            },
            scrollTrigger: {
                trigger: textContent as Element,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true
            },
        });

        tl.fromTo(textContent, { x: '-70%', opacity: 0 }, { x: '0%', opacity: 1 });
        tl.fromTo(img, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, '-=1');

    }, []);

    return (
        <>
            <div id="about" className="container">
                <div className="text-content" ref={textContentRef}>
                    <p>
                        Full-Time Graduate student with one year of experience in software development including project management, leading team, and agile development of software. Ability to build user-centric web applications, full stack applications, and more designed to scale leveraging my problem-solving skills. A fast learner with strong time management, multi-tasking, and troubleshooting skills with an analytical mindset.
                    </p>
                    <div className="about-links">
                        <div className="link-card">
                            <a href="https://drive.google.com/file/d/1rmzhzRaL6nJWAeB4x_YexvRQFqgZxEYy/view?usp=sharing">
                                Download Resume
                            </a>
                        </div>
                        <div className="link-card">
                            <a href="https://github.com/phet2309/">
                                GitHub Profile
                            </a>
                        </div>
                        <div className="link-card">
                            <a href="https://leetcode.com/phet2309/">
                                LeetCode Profile
                            </a>
                        </div>
                    </div>
                </div>
                <img src={myImage} alt="My Image" ref={imgRef} />
            </div>
        </>
    );
}

export default About;
