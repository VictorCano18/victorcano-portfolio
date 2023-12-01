// Your React component file

import React from 'react';
import { Avatar, Button } from 'flowbite-react';
import AvatarImage from '../../public/assets/avatarme.jpg'
import { IoIosMail } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

export default function Header() {
  const handleDownload = () => {
    const pdfFilePath = '/CV_VictorCano_SoftwareDeveloper.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'CV_VictorCano_SoftwareDeveloper.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col mt-5">
      <div className='flex flex-row gap-4 mb-2'>
        <Avatar img={AvatarImage.src} rounded className='avatarMe sm:space-x-4 space-x-0'>
          <div className="text-5xl space-y-1 font-medium dark:text-white text-center sm:text-left">
            <div>Víctor Cano</div>
            <div className="text-xl text-gray-500 dark:text-gray-400">Apassionate software engineer focused on web development and minimalist design</div>
            <div className='flex flex-row gap-2 sm:justify-start justify-center sm:items-start items-center'>
              <Tooltip content="Mail me" className='text-black bg-yellow-500 rounded'>
                <a href='#section5' className=''>
                  <Button pill className='w-fit animationIcon'>
                    <IoIosMail className='text-xl animateIcon' />
                  </Button>
                </a>
              </Tooltip>
              <Tooltip content="GitHub source" className='text-black bg-yellow-500 rounded'>
                <a href='https://github.com/VictorCano18/nextjs' target='_blank'>
                  <Button pill className='w-fit animationIcon' color="purple">
                    <FaGithub className='text-xl animateIcon' />
                  </Button>
                </a>
              </Tooltip>
              <Tooltip content="LinkedIn" className='text-black bg-yellow-500 rounded'>
                <a href="https://www.linkedin.com/in/vics1806/" target='_blank'>
                  <Button pill className='w-fit animationIcon' color="blue">
                    <FaLinkedin className='text-xl animateIcon' />
                  </Button>
                </a>
              </Tooltip>
              <Tooltip content="Resume" className='text-black bg-yellow-500 rounded'>
                <a>
                  <Button onClick={handleDownload} pill className='w-fit animationIcon' color="failure">
                    <FaFileInvoice className='text-xl animateIcon' />
                  </Button>
                </a>
              </Tooltip>
            </div>
          </div>
        </Avatar>
      </div>
      {/* <div className='flex flex-row gap-4 mb-2'>
        <Avatar img={AvatarImage.src} rounded className='avatarMeHeader sm:space-x-4 space-x-0'>
          <div className="text-5xl space-y-1 font-medium dark:text-white text-center sm:text-left">
            <div>Víctor Cano</div>
          </div>
        </Avatar>
      </div> */}
      <hr style={{
        width: '100%',
        marginTop: '1rem'
      }} />
    </div>
  );
}
