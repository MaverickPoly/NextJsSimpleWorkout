import Link from 'next/link';
import React from 'react';
import { FaDumbbell } from 'react-icons/fa'; 

const ProgramsList = ({ programs }) => {
  return (
    <div id='programs' className="container mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
             Workout Programs
        </h1>
        <div className="container mx-auto px-4 py-8 grid gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => (
            <Link href={`/${program.slug}`}>
                <div
                key={index}
                className="bg-white rounded-lg cursor-pointer duration-300 shadow-md hover:shadow-lg 
                    transition-transform transform hover:scale-105 
                    w-full max-w-[400px] mx-auto sm:mx-0"
                >
                <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800">
                    {program.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                    {program.description.substring(0, 80)}...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                    <span className="font-bold text-base">Focus:</span> {program.focusPart}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-700">
                        <FaDumbbell size={20} />
                        <span className="text-sm">
                        {program.levelOfDifficulty}
                        </span>
                    </span>
                    </div>
                </div>
                </div>
            </Link>
        ))}
        </div>
    </div>
  );
};

export default ProgramsList;
