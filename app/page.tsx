
"use client"; // This is a client component

import React, {useState} from 'react';
import Typed from "typed.js"

export default function page() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Víctor Cano', 'Frontend developer', 'Backend developer', 'Fullstack developer', 'Software engineer' ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
      <div className="container mx-auto flex justify-center align-items-center">
          <div>
              <h2 className="text-white xl:text-5xl lg:text-3xl md:text-2xl w-max">Hi I am: <br/><span className='text-yellow-600 xl:text-5xl lg:text-3xl md:text-2xl' ref={el} /></h2>
          </div>
      </div>
  )
}