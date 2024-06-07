
"use client"; // This is a client component

import React, { useEffect } from 'react';
import Header from './pages/header/page';
import Experience from './pages/experience/page';
import Courses from './pages/courses/page';
import Footer from './pages/footer/page';
import Contact from './pages/contact/page';
import { MyContextProvider } from './context/context';
import Projects from './pages/projects/page';



export default function page() {

  return (
    <MyContextProvider>
      <div className='flex flex-col gap-20'>
        <div id="section1">
          <Header />
        </div>
        <div id="section2">
          <Experience />
        </div>
        <div id="section3">
          <Courses />
        </div>
        <div id="section4">
        <Projects />
      </div>
        <div id="section5">
          <Contact />
        </div>
      </div>
      <div id="section6">
        <Footer />
      </div>
    </MyContextProvider>
  )
}