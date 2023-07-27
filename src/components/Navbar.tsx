import './Navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import { gsap, Expo, Power4 } from 'gsap';

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
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );

      const letters = navElements.current.querySelectorAll('li');

      gsap.set(letters, { x: '100%', opacity: 0 });

      timeline.to(letters, {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: Power4.easeOut,
        stagger: 0.1,
        delay: 0,
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
        <span>Het Patel</span>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
