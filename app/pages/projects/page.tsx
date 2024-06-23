"use client"; // This is a client component

import { Button, Tooltip } from 'flowbite-react';
import React from 'react';
import worldRank from '../../../public/assets/world_rank_project.png'
import { RiShareBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";



export default function Projects() {

    return (
        <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
            <h1 className="text-yellow-600 text-4xl sm:text-5xl mb-5">Projects</h1>
            <div className='relative flex flex-col sm:flex-row items-center gap-6'>
                <img src={worldRank.src} className='sm:w-1/2 w-fit rounded-xl border border-gray-700' alt='world-rank' />
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <div className='text-2xl strong dateColor'>World Rank</div>
                        <p>Project made with <strong>React + Vite.js</strong> and for styling <strong>SCSS</strong></p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <Tooltip content="GitHub source" className='text-black bg-yellow-500 rounded text-yellow-400'>
                            <Button href='https://github.com/VictorCano18/world-rank' target='_blank' pill className='w-fit animationIcon' color="purple">
                                <FaGithub className='text-xl animateIcon' />
                            </Button>
                        </Tooltip>
                        <Tooltip content="Project" className='text-black bg-yellow-500 rounded text-yellow-400'>
                            <Button href='https://world-rank-liard.vercel.app/' pill className='w-fit animationIcon'>
                                <RiShareBoxLine className='text-xl animateIcon' />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
}
