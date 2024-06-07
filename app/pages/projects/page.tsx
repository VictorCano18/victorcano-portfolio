"use client"; // This is a client component

import { Button, Tooltip } from 'flowbite-react';
import React from 'react';
import worldRank from '../../../public/assets/world_rank_project.png'

export default function Projects() {

    const onHoverStatus = () => {
        console.log('hover')
    }
    return (
        <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
            <h1 className="text-yellow-600 text-4xl sm:text-5xl mb-5">Projects</h1>
            <a href='https://world-rank-liard.vercel.app/' target='_blank' className='relative flex flex-col sm:flex-row items-center gap-6'>
                <img src={worldRank.src} className='sm:w-1/2 w-fit rounded-xl border border-gray-700' alt='world-rank' />
                <div className='flex flex-col items-center justify-center text-center'>
                    <div className='text-2xl strong dateColor'>World Rank</div>
                    <p>Project made with <strong>React + Vite.js</strong> and for styling only <strong>SCSS</strong></p>
                </div>
            </a>
        </div>
    );
}
