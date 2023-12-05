"use client"; // This is a client component

import React, { useEffect, useState } from 'react';
import { Avatar, Button } from 'flowbite-react';
import AvatarImage from '../../public/assets/minimalist_me.png'
import { IoIosMail } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

// Use the useClient pragma to mark the component for client-side rendering
// @ts-ignore
// @jsxImportSource @nextui-org/react
const Header: React.FC = () => {
  const handleDownload = () => {
    const pdfFilePath = '/CV_VictorCano_SoftwareDeveloper.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'CV_VictorCano_SoftwareDeveloper.pdf';
    link.click();
  };

  const [shouldHide, setShouldHide] = useState<boolean>(false);

  // @ts-ignore
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const scrollTop = document.documentElement.scrollTop;
      setShouldHide(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="flex flex-col main-heading">
        <div className='flex flex-col gap-4 mb-2'>
          <Avatar img={AvatarImage.src} rounded className='avatarMe sm:space-x-4 space-x-0 mt-5'>
            <div className="text-5xl space-y-1 font-medium dark:text-white text-center sm:text-left">
              <div>Víctor Cano</div>
              <div className="text-xl text-gray-300 dark:text-gray-300">Apassionate software engineer focused on web development and minimalist design</div>
              <div className='flex flex-row gap-2 sm:justify-start justify-center sm:items-start items-center pt-2'>
                <Tooltip content="Mail me" className='text-black bg-yellow-500 rounded'>
                  <Button href='#section5' pill className='w-fit animationIcon'>
                    <IoIosMail className='text-xl animateIcon' />
                  </Button>
                </Tooltip>
                <Tooltip content="GitHub source" className='text-black bg-yellow-500 rounded'>
                  <Button href='https://github.com/VictorCano18/victorcano-portfolio' target='_blank' pill className='w-fit animationIcon' color="purple">
                    <FaGithub className='text-xl animateIcon' />
                  </Button>
                </Tooltip>
                <Tooltip content="LinkedIn" className='text-black bg-yellow-500 rounded'>
                  <Button href="https://www.linkedin.com/in/vics1806/" target='_blank' pill className='w-fit animationIcon' color="blue">
                    <FaLinkedin className='text-xl animateIcon' />
                  </Button>
                </Tooltip>
                <Tooltip content="Resume" className='text-black bg-yellow-500 rounded'>
                  <Button onClick={handleDownload} pill className='w-fit animationIcon' color="failure">
                    <FaFileInvoice className='text-xl animateIcon' />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </Avatar>
        </div>
        <div className={`${!shouldHide && 'hidden'}`}>
          <a href='#section1'>
            <Avatar img={AvatarImage.src} rounded className='avatarMeHeader justify-start fixed sm:space-x-4 space-x-0 z-30 w-full xl:w-1/2 p-2 bg-black sm:gap-0 gap-5 top-0'>
              <div className="sm:text-5xl text-3xl space-y-1 font-medium dark:text-white text-left">
                <div>Víctor Cano</div>
              </div>
            </Avatar>
          </a>
        </div>
        <hr style={{
          width: '100%',
          marginTop: '1rem'
        }} />
      </div>
    </header>
  );
}

export default Header;

