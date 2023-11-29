'use client'

import React from 'react';
import { Button } from 'flowbite-react';


export default function Courses() {
    return (
        <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
            <h1 className="text-yellow-600 text-4xl sm:text-5xl mb-5">Courses</h1>
            {/* <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z" />
                            </svg>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modern React with Redux</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on June 6, 2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks,  NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    </div>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank'>
                    <button type="button" className="flex gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2 ">Certificate<svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                    </svg></button></a>
                </li>
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z" />
                            </svg>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modern React with Redux</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on June 6, 2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks,  NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    </div>
                    <button type="button" className="flex gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2 ">Certificate<svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                    </svg></button>
                </li>
                <li className="relative mb-6 sm:mb-0">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z" />
                            </svg>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pe-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modern React with Redux</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on June 6, 2023</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks,  NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    </div>
                    <button type="button" className="flex gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2 ">Certificate<svg className="w-4 h-4 text-blue-800 dark:text-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                    </svg></button>
                </li>
            </ol> */}

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern React with Redux
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Certificate
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern React with Redux
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Certificate
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div><div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern React with Redux
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Certificate
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div><div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern React with Redux
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Certificate
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div><div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modern React with Redux
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Provided by Udemy where I did a Master in React and Redux Toolkit including RTK Query, tons of custom hooks, NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax.</p>
                    <a href='https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/' target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Certificate
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
