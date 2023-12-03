
"use client"; // This is a client component

import React, { useEffect } from 'react';
import Header from './header/page';
import Experience from './experience/page';
import Courses from './courses/page';
import Footer from './footer/page';
import Contact from './contact/page';
import { MyContextProvider } from './context/context';



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
          <Contact />
        </div>
      </div>
      <div id="section5">
        <Footer />
      </div>
    </MyContextProvider>
  )
}