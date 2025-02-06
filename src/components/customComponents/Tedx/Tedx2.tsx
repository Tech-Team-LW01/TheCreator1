// Tedx2.tsx
import React from 'react';
import { SpeakerProps } from './types';

const Tedx2: React.FC<SpeakerProps> = ({ 
  imageUrl, 
  description, 
  badge, 
  firstName, 
  lastName 
}) => {

  return (
    <>
      <div className="relative w-[300px] h-[300px] group">
        {/* Main circle with gradient border */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${firstName} ${lastName}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Purple semi-transparent card */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-44 max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-900/80 backdrop-blur-sm rounded-lg p-4 text-white shadow-lg">
            <p className="text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute bottom-12 -right-4">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-6 py-2 text-white shadow-lg">
            <p className="text-lg font-semibold">{badge}</p>
          </div>
        </div>

        {/* Name */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
          <h2 className="text-2xl font-bold text-[#ff0000]">
            {firstName} <span className="text-[#ff0000]">{lastName}</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Tedx2;