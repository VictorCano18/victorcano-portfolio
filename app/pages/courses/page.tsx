"use client"; // This is a client component

import React from 'react';
import { Avatar } from 'flowbite-react';
import UdemyLogo from '../../../public/assets/udemy.png'
import CourseraLogo from '../../../public/assets/coursera-logo.png'
import EdxLogo from '../../../public/assets/edx-logo.png'


export default function Courses() {
    return (
        <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
            <h1 className="text-yellow-400 text-4xl sm:text-5xl mb-5">Courses</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={UdemyLogo.src} alt='udemy-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Udemyww</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Modern React with Redux</div>
                        </div>
                        <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={UdemyLogo.src} alt='udemy-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Udemy</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">The Complete 2023 Web Development Bootcamp</div>
                        </div>
                        <a href='https://www.udemy.com/certificate/UC-ee0323d1-5b1c-470d-9cbd-8eaab4c60a74' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={CourseraLogo.src} alt='coursera-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Coursera</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Front-End Web UI Frameworks and Tools: Bootstrap 4</div>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/ADZCRPCV5ENE' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={CourseraLogo.src} alt='coursera-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Coursera</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Data Collection and Processing with Python</div>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/YV5MGJLAVVLL' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={CourseraLogo.src} alt='coursera-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Coursera</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Python Classes and Inheritance</div>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/BX9G6W9FJDGN' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={CourseraLogo.src} alt='coursera-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Coursera</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Python Functions, Files, and Dictionaries</div>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/8E5XCQ59LBUX' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={CourseraLogo.src} alt='coursera-logo' className='flex h-fit imgWidth' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>Coursera</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">Python Basics</div>
                        </div>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/7LXQSYMKHY5K' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row sm:gap-2 max-w-sm p-6 bg-black bg-black rounded-lg shadow dark:bg-black dark:border-gray-700 justify-between">
                    <img src={EdxLogo.src} alt='edx-logo' className='flex h-fit imgWidthEdx' />
                    <div className="w-52 space-y-1 font-medium text-white dark:text-white flex flex-col justify-between">
                        <div>
                            <div><strong>EdX</strong></div>
                            <div className="text-sm text-gray-300 dark:text-gray-300">AI&#39;s Introduction</div>
                        </div>
                        <a href='https://courses.edx.org/certificates/5208d5357c3f4fe198e885ef13a8cc52' target='_blank' className="animationIcon mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-fit rounded">
                            Certificate
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg] animateIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
