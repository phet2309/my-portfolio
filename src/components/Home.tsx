import './Home.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { SplitText } from "gsap/SplitText";
import SplitText from "gsap-trial/SplitText";


gsap.registerPlugin(SplitText);



function Home() {

    const infoRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const mySplitText = new SplitText(infoRef.current, { type: "chars, words" });
        const splitTextTimeline = gsap.timeline();
        gsap.set(infoRef.current, {perspective:400});

        splitTextTimeline.from(mySplitText.chars, 
            {
                duration: 0.6, 
                scale:4, 
                autoAlpha:0,  
                rotationX:-180,  
                transformOrigin:"100% 50%", 
                ease:"back", 
                stagger: 0.02
            }
        );


    }, []);

    return (
      <>
        <div className="info" ref={infoRef}>
            <p id="name">Hi. I am Het Patel.</p>
            <p id="role">Full Stack Developer</p>
            <p id="descirption">
                Driven by curiosity, embracing the unknown, and constantly expanding my horizons as a passionate software developer.
            </p>
        </div>
      </>
    )
  }
  
  export default Home;
  