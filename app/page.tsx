
"use client"; // This is a client component

import React, { useEffect } from 'react';
import Home from './home/page';
import Stack from './stack/page';
import Experience from './experience/page';
import Courses from './courses/page';


export default function page() {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position
      const scrollY = window.scrollY;

      // Apply styles based on scroll position
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');

      if (scrollY < 500) {
        section1?.style.setProperty('background-color', 'black');
        section2?.style.setProperty('background-color', '');
        section3?.style.setProperty('background-color', '');
      } else if (scrollY < 1000) {
        section1?.style.setProperty('background-color', '');
        section2?.style.setProperty('background-color', 'black');
        section3?.style.setProperty('background-color', '');
      } else {
        section1?.style.setProperty('background-color', '');
        section2?.style.setProperty('background-color', '');
        section3?.style.setProperty('background-color', 'black');
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="section1" style={{ height: '100vh' }}>
        <Home />
      </div>
      {/* <div id="section2" style={{ height: '100vh' }}>
        <Stack />
      </div> */}
      <div id="section3" style={{ height: '100vh' }}>
        <Experience />
      </div>

      <div id="section4" style={{ height: '100vh' }}>
        <Courses />
      </div>
    </div>
  )
}