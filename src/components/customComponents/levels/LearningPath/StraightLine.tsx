// StraightLine.tsx
'use client';

import React, { useEffect, useState } from 'react';

const StraightLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline-container');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      if (elementTop > windowHeight) {
        setScrollProgress(0);
      } else if (elementTop + elementHeight < 0) {
        setScrollProgress(1);
      } else {
        const totalScrollDistance = windowHeight + elementHeight;
        const scrolled = windowHeight - elementTop;
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dot positions with spacing
  const getDotPosition = (number: number) => {
    const spacing = 140; // Adjust this value to increase/decrease spacing
    const initialOffset = 40; // Adjust this value to change starting position
    return initialOffset + (number - 1) * spacing;
  };

  // Calculate the maximum height for the red line (position of last dot)
  const maxLineHeight = getDotPosition(6) + 16; // 16 is half the dot height

  return (
    <div 
      className="absolute left-1/2 h-full w-px -translate-x-1/2"
      id="timeline-container"
    >
      {/* Background line - only up to the last dot */}
      <div 
        className="absolute top-0 bg-gray-200" 
        style={{ 
          height: `${maxLineHeight}px`,
          width: '100%'
        }}
      />

      {/* Progress line - only up to the last dot */}
      <div
        className="absolute top-0 left-0 w-full bg-red-600 transition-all duration-300"
        style={{ 
          height: `${Math.min(scrollProgress * maxLineHeight, maxLineHeight)}px`
        }}
      />

      {/* Dots with numbers */}
      {[1, 2, 3, 4, 5, 6].map((number) => {
        const dotPosition = getDotPosition(number);
        const isActive = scrollProgress * maxLineHeight >= dotPosition;
        
        return (
          <div
            key={number}
            className={`
              absolute w-8 h-8 -left-4 
              rounded-full flex items-center justify-center
              transition-all duration-500 ease-in-out
              ${isActive ? 'bg-red-600 scale-110' : 'bg-gray-300'}
              text-white font-bold text-sm
              shadow-lg
            `}
            style={{ 
              top: `${dotPosition}px`
            }}
          >
            <span className={`
              transition-colors duration-500
              ${isActive ? 'text-white' : 'text-gray-600'}
            `}>
              {number}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StraightLine;