'use client'; // This is a client component

import { Button, Tooltip } from 'flowbite-react';
import React from 'react';
import worldRank from '../../../public/assets/world_rank_project.png';
import bellaNails from '../../../public/assets/bella_nails_project.png';
import { RiShareBoxLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="relative mx-auto max-w-xs text-white sm:max-w-full">
      <h1 className="mb-5 text-4xl text-yellow-400 sm:text-5xl">Projects</h1>
      <div className="flex flex-col items-center gap-16">
        <div className="relative flex flex-col items-center gap-6 sm:flex-row">
          <img
            src={worldRank.src}
            className="w-fit rounded-xl border border-gray-700 sm:w-1/2"
            alt="world-rank"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="strong text-2xl text-[#b2e5eb]">World Rank</div>
              <p>
                Project made with <strong>React + Vite.js</strong> and for
                styling <strong>SCSS</strong>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Tooltip
                content="GitHub source"
                className="rounded bg-yellow-500 text-black text-yellow-400"
              >
                <Button
                  href="https://github.com/VictorCano18/world-rank"
                  target="_blank"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <FaGithub className="animateIcon text-xl" />
                </Button>
              </Tooltip>
              <Tooltip
                content="Project"
                className="rounded bg-yellow-500 text-black text-yellow-400"
              >
                <Button
                  href="https://world-rank-liard.vercel.app/"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <RiShareBoxLine className="animateIcon text-xl" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-6 sm:flex-row">
          <img
            src={bellaNails.src}
            className="w-fit rounded-xl border border-gray-700 sm:w-1/2"
            alt="world-rank"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="strong text-2xl text-[#b2e5eb]">Bella Nails</div>
              <p>
                Project made with <strong>React + Vite.js</strong> and for
                styling <strong>Tailwind</strong> (Frontend)
              </p>
              <p>
                and <strong>Node.js + MySQL + AWS </strong> (Backend)
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Tooltip
                content="GitHub source private"
                className="rounded bg-red-500 text-black text-red-400"
              >
                <Button
                  disabled
                  pill
                  className="animationIcon cursor w-fit"
                  color="dark"
                >
                  <FaGithub className="animateIcon text-xl" />
                </Button>
              </Tooltip>
              <Tooltip
                content="Project"
                className="rounded bg-yellow-500 text-black text-yellow-400"
              >
                <Button
                  href="http://bella.nails.s3-website.us-east-2.amazonaws.com/"
                  pill
                  className="animationIcon w-fit"
                  color="dark"
                >
                  <RiShareBoxLine className="animateIcon text-xl" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
