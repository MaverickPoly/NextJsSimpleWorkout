"use client"

import React, { useState } from "react";

const Features = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="max-w-7xl mx-auto font-[sans-serif] grid xl:grid-cols-2 items-center gap-12">
      {/* Left: Large Image Section */}
      <div>
        <img
          src="https://readymadeui.com/photo.webp"
          className="w-full h-auto rounded-md object-cover"
          alt="Exclusive Features"
        />
      </div>

      {/* Right: Content Section */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-3 opacity-90"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Title */}
        <h1 className="text-gray-800 sm:text-5xl text-4xl font-extrabold leading-tight">
          Discover Our Exclusive Features
        </h1>

        {/* Large Description */}
        <p className="mt-8 text-lg text-gray-700 leading-relaxed">
          Unlock endless possibilities with our innovative solutions. From enhancing performance to seamless integrations, our offerings are designed to empower you in every step of your journey. Explore the future with us and take your experience to the next level.
        </p>
      </div>
    </div>
  );
};

export default Features;
