'use client'

import React from 'react';
import { Timeline } from 'flowbite-react';
import { HiCalendar, HiBadgeCheck } from 'react-icons/hi';

export default function Experience() {
    return (
        <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
            <h1 className="text-yellow-600 text-4xl sm:text-5xl mb-5">Experience</h1>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={HiBadgeCheck} />
                    <Timeline.Content>
                        <Timeline.Time><div className='text-lg'>June 2023 - Currently working here</div></Timeline.Time>
                        <Timeline.Title>Fullstack Developer @ <a type='button' href='https://entersol.com.mx/' target="_blank" className='underline'>Entersol</a></Timeline.Title>
                        <Timeline.Body>
                            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                            E-commerce & Marketing pages.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time><div className='text-lg'>July 2022 - June 2023</div></Timeline.Time>
                        <Timeline.Title>Frontend Developer @ <a type='button' href='https://www.vinneren.com.mx/' target="_blank" className='underline'>Vinneren</a></Timeline.Title>
                        <Timeline.Body>
                            All of the pages and components are first designed in Figma and we keep a parity between the two versions
                            even as we update the project.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time><div className='text-lg'>January 2021 - January 2022</div></Timeline.Time>
                        <Timeline.Title>Frontend Developer @ Smart Seguros</Timeline.Title>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time><div className='text-lg'>February 2021 - June 2021</div></Timeline.Time>
                        <Timeline.Title>Intern as Fullstack Developer @ <a type='button' href='https://amazon.com.mx/' target="_blank" className='underline'>Amazon</a></Timeline.Title>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    );
}
