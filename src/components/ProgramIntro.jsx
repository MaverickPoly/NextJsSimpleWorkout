import React from 'react';
import { FaRunning, FaCalendarAlt } from 'react-icons/fa';
import { BiTargetLock } from "react-icons/bi";

const ProgramIntro = ({ program }) => {
    return (
        <div className="flex flex-col lg:flex-row relative overflow-hidden bg-gray-800 bg-opacity-90"> {/* Dark background with opacity */}
            {/* Left Side */}
            <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center"> {/* Center text vertically */}
                <h1 className="text-4xl font-bold text-white mb-4">{program.title}</h1> {/* Title styling */}
                <p className="mt-2 text-gray-300 text-lg">{program.description}</p> {/* Description styling */}
                
                {/* Feature Items */}
                <div className="mt-8 flex flex-col space-y-4">
                    <div className="flex items-center">
                        <FaRunning className="text-green-500 mr-2" />
                        <span className="text-gray-300 font-medium">Level: {program.levelOfDifficulty}</span>
                    </div>
                    <div className="flex items-center">
                        <FaCalendarAlt className="text-blue-500 mr-2" />
                        <span className="text-gray-300 font-medium">Days: {program.numberOfDays}</span>
                    </div>
                    <div className="flex items-center">
                        <BiTargetLock className="text-red-500 mr-2" />
                        <span className="text-gray-300 font-medium">Focus: {program.focusPart}</span>
                    </div>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div 
                className="flex-1 bg-cover bg-center lg:h-screen" 
                style={{ 
                    backgroundImage: `url("${program.imageUrl}")`, // Use the uploaded image here
                    backgroundSize: 'contain', // Ensure the image fits within the bounds
                    backgroundRepeat: 'no-repeat', // Prevent repeating of the image
                    backgroundPosition: 'center' // Center the image
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-black to-transparent"></div> {/* Dark gradient overlay */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-600 rounded-full transform translate-x-16 translate-y-16 opacity-30"></div> {/* Decorative shape */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full transform translate-x-16 translate-y-16 opacity-30"></div> {/* Decorative shape */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-600 rounded-md transform rotate-45 translate-x-8 translate-y-4 opacity-30"></div> {/* Decorative shape */}
                
                {/* Additional Decorative Lines */}
                <img 
                    src="https://thumb.tildacdn.com/tild6631-6535-4165-a233-376533353939/-/resize/272x/-/format/webp/Group_10.png" 
                    alt="Decorative" 
                    className="absolute top-10 left-10 w-28 opacity-100"
                /> {/* Add your own image */}
                <img 
                    src="https://thumb.tildacdn.com/tild6631-6535-4165-a233-376533353939/-/resize/272x/-/format/webp/Group_10.png"
                    className="absolute bottom-20 right-20 w-28 opacity-100" 
                /> {/* Add your own image */}
            </div>
        </div>
    );
};

export default ProgramIntro;
