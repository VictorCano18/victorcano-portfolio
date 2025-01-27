'use client'; // This is a client component

import React, { useEffect, useState } from 'react';
import { Avatar, Button } from 'flowbite-react';
import AvatarImage from '../../../public/assets/avatar.svg';
import { IoIosMail } from 'react-icons/io';
import { FaFileInvoice } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Tooltip } from '@nextui-org/react';

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
    <header className="bg-black text-white">
      <div className="main-heading flex flex-col">
        {/* Main Header Section */}
        <div className="mb-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Avatar */}
          <div className="w-2/5 sm:w-4/5">
            <AvatarImage aria-label="Avatar of Victor Cano" />
          </div>

          {/* Content */}
          <div className="space-y-1 text-center text-5xl font-medium sm:text-left">
            <div className="font-medium">Víctor Cano</div>
            <div className="text-xl text-gray-300">
              Passionate software engineer focused on web development and
              minimalist design
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-2 pt-2 sm:justify-start">
              <Tooltip content="Mail me" className="rounded bg-yellow-500 text-black">
                <Button
                  href="#section6"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <IoIosMail className="animateIcon text-xl" />
                </Button>
              </Tooltip>
              <Tooltip content="GitHub source" className="rounded bg-yellow-500 text-black">
                <Button
                  href="https://github.com/VictorCano18/victorcano-portfolio"
                  target="_blank"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <FaGithub className="animateIcon text-xl" />
                </Button>
              </Tooltip>
              <Tooltip content="LinkedIn" className="rounded bg-yellow-500 text-black">
                <Button
                  href="https://www.linkedin.com/in/vics1806/"
                  target="_blank"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <FaLinkedin className="animateIcon text-xl" />
                </Button>
              </Tooltip>
              <Tooltip content="Resume" className="rounded bg-yellow-500 text-black">
                <Button
                  onClick={handleDownload}
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <FaFileInvoice className="animateIcon text-xl" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Sticky Header Section */}
        <div className={`${!shouldHide && 'hidden'}`}>
          <a href="#section1">
            <div className="fixed top-0 z-30 w-full bg-black p-2">
              <div className="flex items-center gap-5">
                <AvatarImage
                  aria-label="Avatar of Victor Cano"
                  className="h-16 w-16 sm:h-24 sm:w-24"
                />
                <div className="text-left text-white">
                  <h1 className="text-3xl font-medium sm:text-5xl">Víctor Cano</h1>
                </div>
              </div>
            </div>
          </a>
        </div>

        <hr
          style={{
            width: '100%',
            marginTop: '1rem',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
