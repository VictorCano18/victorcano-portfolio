"use client"; // This is a client component

import React, { useState } from 'react';
import { Button, Alert } from 'flowbite-react';
import { Tooltip } from "@nextui-org/react";
// import { useMyContext } from '../context/context';


export default function Contact() {
    // const { clipboard, updateClipboard } = useMyContext();
    let [clipboard, setClipboard] = useState(false)

    const copyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText('victor.cano.1806@gmail.com');
            setClipboard(true)
            setTimeout(() => {
                setClipboard(false)
            }, 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    return (
        <div>
            {clipboard && <div className='relative'>
                <Alert className='bg-yellow-500 text-black dark:bg-yellow-500 dark:text-black clipboardMessage w-fit p-2'>
                    <span className="font-medium">Copied to clipboard!</span>
                </Alert>
            </div>}
            <div className="text-white relative sm:max-w-full max-w-xs mx-auto">
                <h1 className="text-yellow-600 text-4xl sm:text-5xl mb-5">Contact</h1>
                <div className='flex align-items-center justify-content-center gap-4 flex flex-col sm:flex-row'>
                    <div className="relative sm:w-1/2">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="input-group-1" className="bg-gray-50 border bg-transparent border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="victor.cano.1806@gmail.com" disabled />
                    </div>
                    <div className='flex gap-2'>
                        <Tooltip content="Send me a mail" className='text-black bg-yellow-500 rounded'>
                            <Button href="mailto:victor.cano.1806@gmail.com" className='contactButton animationIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-send animateIcon" viewBox="0 0 16 16"> <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /> </svg>
                            </Button>
                        </Tooltip>

                        <Tooltip content="Copy mail" className='text-black bg-yellow-500 rounded'>
                            <Button onClick={() => copyClipBoard()} className='contactButton animationIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24" className='animateIcon'> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7zM5.002 8L5 20h10V8H5.002zM9 6h8v10h2V4H9v2zm-2 5h6v2H7v-2zm0 4h6v2H7v-2z" /> </g> </svg>
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>

    );
}
