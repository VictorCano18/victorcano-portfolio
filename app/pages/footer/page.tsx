"use client"; // This is a client component

import React from 'react';
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="container mx-auto justify-center align-items-center mt-20 mb-3">
            <div className="flex flex-col items-center text-white text-1xl text-center">
                Víctor Cano 2024
                <div className='flex gap-6 mt-2'>
                    <a href='https://github.com/VictorCano18' target='_blank'>
                        <FaGithub className='text-xl' />
                    </a>
                    <a href="https://gitlab.com/VictorCano18" target='_blank'>
                        <FaGitlab className='text-xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/vics1806/" target='_blank'>
                        <FaLinkedin className='text-xl' />
                    </a>
                </div>
            </div>
        </div>
    );
}
