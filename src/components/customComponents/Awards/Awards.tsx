import React from 'react';
import { Card } from "@/components/ui/card";

const Award = () => {
  return (
    <div className='max-w-6xl mx-auto py-20'>
      <div className="w-full max-w-5xl mx-auto bg-black px-12">
        <Card className="relative bg-white shadow-lg rounded-[40px] px-2 sm:px-6 md:px-10 py-4 h-[140px]"> {/* Reduced height */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between h-full">
            {/* Left Section */}
            <div className="flex justify-center items-center flex-col gap-3 z-10">
              <div className="flex items-center gap-4">
                <img 
                  src="/assets/redhatLogo.png" 
                  alt="Microsoft Logo" 
                  className="h-20 w-20" // Reduced logo size
                />
              </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-col text-center sm:text-left sm:ml-8 sm:mr-auto z-10">
              <h2 className="text-[#000000] text-lg sm:text-2xl md:text-[24px] font-bold leading-tight">
                Awarded as #1 for Internship in India & Asia
              </h2>
            </div>

            {/* Trophy Image */}
            <div className="absolute right-10 -top-12"> {/* Positioned absolutely */}
              <div className="relative border-4 rounded-[100px] border-white">
                {/* <div className="absolute inset-0 bg-white rounded-full w-[150px] h-[150px] -top-2"></div> White border effect */}
                <img 
                  className='relative w-[150px] h-[150px] rounded-full object-cover' 
                  src='/assets/Award/award1.jpg'
                  alt="Award"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Award;