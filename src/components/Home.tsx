import './Home.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Blob from './Blob';

function Home() {
   

    useEffect(() => {
        

        const tl = gsap.timeline();

        tl.fromTo('.word1', 
            {
                y: -100,
                rotateY: -800,
                stagger: {
                    each: 0.1
                },
                opacity: 0,
            },
            {
                y: 0,
                rotateY: 0,
                stagger: {
                    each: 0.1
                },
                opacity: 1,
            }
        );

        tl.fromTo('.word2', 
            {
                x: 100,
                rotateX: 500,
                stagger: {
                    each: 0.02
                },
                opacity: 0
            },
            {
                x: 0,
                rotateX: 0,
                stagger: {
                    each: 0.02
                },
                opacity: 1
            }
        );

        tl.fromTo('.word3', 
            {
                x: -500,
                rotateX: -500,
                stagger: {
                    each: 0.02
                },
                opacity: 0
            },
            {
                x: 0,
                rotateX: 0,
                stagger: {
                    each: 0.02
                },
                opacity: 1
            }
        );

        tl.fromTo('.word4', 
            {
                x: 500,
                rotateX: 500,
                stagger: {
                    each: 0.02
                },
                opacity: 0
            },
            {
                x: 0,
                rotateX: 0,
                stagger: {
                    each: 0.02
                },
                opacity: 1
            }
        );

        tl.play();

    }, []);

    const selfStr : string = 'Hi. I am Het Patel.';
    const roleStr : string = 'Full Stack Developer';
    const descStr : string = 'Driven by curiosity, embracing the unknown, and constantly expanding';
    const descStr2 : string = 'my horizons as a passionate software developer.';

    return (
        <>
            <Blob />
            <div className="info">
                <div className="name">
                    {
                        selfStr.split('').map((word, index) => {
                            return word === ' ' ? <div className='word1' key={index}>&nbsp;</div> : <div className='word1' key={index}>{word}</div>
                        })
                    }
                </div>
                <div className="role">
                    {
                        roleStr.split('').map((word, index) => {
                            return word === ' ' ? <div className='word2' key={index}>&nbsp;</div> : <div className='word2' key={index}>{word}</div>
                        })
                    }
                </div>
                <div className="descirption">
                    {
                        descStr.split('').map((word, index) => {
                            return word === ' ' ? <div className='word3' key={index}>&nbsp;</div> : <div className='word3' key={index}>{word}</div>
                        })
                    }
                </div>
                <div className="descirption">
                    {
                        descStr2.split('').map((word, index) => {
                            return word === ' ' ? <div className='word4' key={index}>&nbsp;</div> : <div className='word4' key={index}>{word}</div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Home;
