'use client'

import React, { useState, useRef } from 'react';

interface HoverableTextProps {
    index: string;
    text: string;
    rating: number;
    onHover: (index: string, newRating: number, elementRef: HTMLDivElement | null) => void;
    onLeave: () => void;
}

const HoverableText: React.FC<HoverableTextProps> = ({ index, text, onHover, onLeave, rating }) => {
    return (
        <div
            className="hover:text-red-300 cursor-pointer py-5"
            onMouseOver={(e) => onHover(index, rating, e.currentTarget as HTMLDivElement)}
            onMouseLeave={onLeave}
        >
            {text}
        </div>
    );
};

export default function Stack() {
    const [elementStates, setElementStates] = useState<{ [key: string]: { rating: number; widthLine: string } }>({});
    const hoveredElementRef = useRef<HTMLDivElement | null>(null);

    const stackTopics: [string, number][][] = [
        [['Javascript', 8],
        ['React', 8],
        ['Bootstrap', 8],
        ['TailwindCSS', 8],
        ['Angular', 4],
        ['JQuery', 7],
        ['Material-UI', 7],
        ['SASS', 8]],
        [['Node JS', 7],
        ['Python', 7],
        ['Express', 7],
        ['AWS', 6],
        ],
        [['MongoDB', 7],
        ['MySQL', 7]
        ],
        [['Java', 6],
        ['Springboot', 5],
        ['C', 6],
        ['C#', 6],
        ['C++', 6],
        ['Unity', 7],
        ['Vue', 6],
        ],
        [['Slack', 10],
        ['Office', 10],
        ['Teams', 10],
        ['Git', 10],
        ['Github', 10],
        ['Gitlab', 10],
        ['Bitbucket', 10],
        ['Jira', 10],]
    ];
    const sectionTitles = ['Frontend', 'Backend', 'Databases', 'More stack', 'Tools'];

    const handleHover = (index: string, newRating: number, elementRef: HTMLDivElement | null) => {
        setElementStates((prevStates) => ({
            ...prevStates,
            [index]: { rating: newRating, widthLine: `${newRating * 10}%` },
        }));
        hoveredElementRef.current = elementRef;
    };

    const handleLeave = () => {
        setElementStates({});
        hoveredElementRef.current = null;
    };

    return (
        <div className="container mx-auto flex justify-center align-items-center flex-col">
            <h1 className="text-yellow-600 xl:text-5xl lg:text-3xl md:text-2xl mb-5">Stack</h1>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex gap-10 mb-5">
                    <div className="text-white">
                        <div className="grid grid-flow-col gap-20">
                            {sectionTitles.map((title, sectionIndex) => (
                                <div key={sectionIndex}>
                                    <h1 className="xl:text-4xl lg:text-3xl md:text-1xl text-red-600">{title}</h1>
                                    {stackTopics[sectionIndex].map((val, innerIndex) => (
                                        <div key={innerIndex} className='xl:text-3xl md:text-1xl'>
                                            <HoverableText
                                                index={innerIndex.toString()}
                                                text={val[0]}
                                                onHover={handleHover}
                                                onLeave={handleLeave}
                                                rating={val[1]}
                                            />
                                            {hoveredElementRef.current?.innerText === val[0] && elementStates[innerIndex.toString()]?.rating > 0 && (
                                                <div className=''><div className="text-center">{elementStates[innerIndex.toString()]?.rating * 10}%</div><hr style={{ width: elementStates[innerIndex.toString()]?.widthLine, height: 4 }} /></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
