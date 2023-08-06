import './Navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import { gsap, Expo, Power1 } from 'gsap';
import logoImg from '/assets/images/hp_fin2.png';

library.add(faBars, faTimes);

function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const navElements = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (menu.current && navElements.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.fromTo(
        menu.current,
        {
          x: -100,
          opacity: 0,
          zIndex: -1
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          zIndex: 1,
          ease: Expo.easeOut,
        }
      );

      const letters = navElements.current.querySelectorAll('li');

      gsap.set(letters, { x: '100%', opacity: 0, zIndex: -1 });

      timeline.to(letters, {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: Power1.easeOut,
        stagger: 0.1,
        delay: 0,
        zIndex: 1
      });

      if (menuClicked) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    }
  }, [menuClicked]);

  function handleMenuClicked() {
    setMenuClicked((prevMenuClicked) => !prevMenuClicked);
  }

  return (
    <>
      <div className="navbar">
        <img src={logoImg} alt="Het" />

        <FontAwesomeIcon
            icon={faBars}
            className="hamburger-icon"
            onClick={handleMenuClicked}
        />
      </div>
      <div ref={menu} className="navbar-overlay">
        <FontAwesomeIcon
          icon={faTimes}
          className="cross-icon"
          onClick={handleMenuClicked}
        />
        <ul ref={navElements}>
          <li>
            <a className='navbar-list-item' onClick={() => setMenuClicked(false)} href="#">Home</a>
          </li>
          <li>
            <a className='navbar-list-item' onClick={() => setMenuClicked(false)} href="#about">About</a>
          </li>
          <li>
            <a className='navbar-list-item' onClick={() => setMenuClicked(false)} href="#experience">Experience</a>
          </li>
          <li>
            <a className='navbar-list-item' onClick={() => setMenuClicked(false)} href="#projects">Projects</a>
          </li>
          <li>
            <a className='navbar-list-item' onClick={() => setMenuClicked(false)} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
