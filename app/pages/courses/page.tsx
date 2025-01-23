'use client'; // This is a client component

import React from 'react';
import ModernReactCourse from '../../../public/assets/modern-react-w-redux.png';
import IntroIACourse from '../../../public/assets/intro-ia.png';
import FrontUIFrameworksCourse from '../../../public/assets/front-ui-frameworks.png';
import WebDevBootcampCourse from '../../../public/assets/web-dev-bootcamp.png';
import PythonClassesCourse from '../../../public/assets/python-classes.png';
import PythonBasicsCourse from '../../../public/assets/python-basics.png';
import PythonFunctionsCourse from '../../../public/assets/python-functions.png';
import PythonDataCollectionCourse from '../../../public/assets/python-data-collection.png';

export default function Courses() {
  return (
    <div className="relative mx-auto max-w-xs text-white sm:max-w-full">
      <h1 className="text-4xl text-yellow-400 sm:text-5xl">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="grid">
          <div>
            <a
              href="https://www.udemy.com/certificate/UC-8cf9dd67-aa27-4ea8-b311-94852bda78a9/"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={ModernReactCourse.src}
                alt="Udemy Logo"
              />
              <div className="mt-2">
                <div>
                  <strong>Udemy</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Modern React with Redux
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/ADZCRPCV5ENE"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={FrontUIFrameworksCourse.src}
                alt="Coursera Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Coursera</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Front-End Web UI Frameworks and Tools: Bootstrap 4
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/8E5XCQ59LBUX"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={PythonFunctionsCourse.src}
                alt="Coursera Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Coursera</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Python Functions, Files, and Dictionaries
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="grid">
          <div>
            <a
              href="https://courses.edx.org/certificates/5208d5357c3f4fe198e885ef13a8cc52"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={IntroIACourse.src}
                alt="EDX Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>EDX</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  AI&#39;s Introduction
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/7LXQSYMKHY5K"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={PythonBasicsCourse.src}
                alt="Coursera Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Coursera</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Python Basics
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/BX9G6W9FJDGN"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={PythonClassesCourse.src}
                alt="Coursera Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Coursera</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Python Classes and Inheritance
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/YV5MGJLAVVLL"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={PythonDataCollectionCourse.src}
                alt="Coursera Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Coursera</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  Data Collection and Processing with Python
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://www.udemy.com/certificate/UC-ee0323d1-5b1c-470d-9cbd-8eaab4c60a74"
              target="_blank"
              className="dark mt-8 flex inline-flex w-fit flex-col items-center rounded-md px-3 py-4 text-center text-sm font-medium hover:bg-[#2626268a] focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-gray-800 dark:hover:bg-[#2626268a] dark:focus:ring-gray-800"
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={WebDevBootcampCourse.src}
                alt="Udemy Logo"
              />
              <div>
                <div className="mt-2">
                  <strong>Udemy</strong>
                </div>
                <div className="text-sm text-gray-300 dark:text-gray-300">
                  The Complete 2023 Web Development Bootcamp
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
