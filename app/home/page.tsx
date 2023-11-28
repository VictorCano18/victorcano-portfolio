// Your React component file

import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Víctor Cano', 'Frontend developer', 'Backend developer', 'Fullstack developer', 'Software engineer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the threshold value as needed
      const threshold = 250;

      if (scrollTop > threshold && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop <= threshold && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="container mx-auto justify-center align-items-center">
      <div id="section1" className={isScrolled ? 'fixed-section' : ''}>
        <h2 className="text-white text-4xl sm:text-5xl">Hi I am: <br /><span className='text-yellow-600 text-4xl sm:text-5xl' ref={el} /></h2>
      </div>
    </div>
  );
}
