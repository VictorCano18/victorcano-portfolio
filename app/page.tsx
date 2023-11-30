
"use client"; // This is a client component

import React, { useEffect } from 'react';
import Home from './home/page';
import Stack from './stack/page';
import Experience from './experience/page';
import Courses from './courses/page';
import Footer from './footer/page';
import Contact from './contact/page';


export default function page() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate scroll position
  //     const scrollY = window.scrollY;

  //     // Apply styles based on scroll position
  //     const section1 = document.getElementById('section1');
  //     const section2 = document.getElementById('section2');
  //     const section3 = document.getElementById('section3');
  //     const section4 = document.getElementById('section4');

  //     if (scrollY < 500) {
  //       section1?.style.setProperty('background-color', 'black');
  //       section2?.style.setProperty('background-color', '');
  //       section3?.style.setProperty('background-color', '');
  //     } else if (scrollY < 1000) {
  //       section1?.style.setProperty('background-color', '');
  //       section2?.style.setProperty('background-color', 'black');
  //       section3?.style.setProperty('background-color', '');
  //     } else {
  //       section1?.style.setProperty('background-color', '');
  //       section2?.style.setProperty('background-color', '');
  //       section3?.style.setProperty('background-color', 'black');
  //     }
  //   };

  //   // Attach scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <div id="section1" style={{ height: '100vh' }}>
        <Home />
      </div>
      <div className='flex flex-col gap-20'>
        <div id="section3">
          <Experience />
        </div>
        {/* <div id="section2">
          <Stack />
        </div> */}
        <div id="section4">
          <Courses />
        </div>
        <div id="section5">
          <Contact />
        </div>
      </div>
      <div id="section6">
        <Footer />
      </div>
    </div>
  )
}