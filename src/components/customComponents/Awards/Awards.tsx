import React from 'react';
import { Card } from "@/components/ui/card";

const Award = () => {
  return (
    <div className='max-w-6xl mx-auto py-12'>
      <div className="w-full max-w-5xl mx-auto bg-black px-4 sm:px-12">
        <Card className="relative bg-white shadow-lg rounded-[40px] px-2 sm:px-6 md:px-10 py-4 sm:h-[140px] min-h-[200px] sm:min-h-0">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full pt-16 sm:pt-0">
            {/* Left Section */}
            <div className="flex justify-center items-center flex-col gap-3 z-10 mt-8 sm:mt-0">
              <div className="flex items-center gap-4">
                <img 
                  src="/assets/redhatLogo.png" 
                  alt="Microsoft Logo" 
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              </div>
            </div>

            {/* Center Section */}
            <div className="flex flex-col text-center sm:text-left sm:ml-8 sm:mr-auto z-10 mt-4 sm:mt-0">
              <h2 className="text-[#000000] text-[20px] sm:text-2xl md:text-[24px] px-2 sm:px-4 font-bold font-khand leading-tight text-center">
                <span className='text-[#ff0000]'>Awarded as #1 </span> 
                <br className="hidden sm:block"/>
                <span className="sm:hidden"> </span>
                for Internship in India & Asia
              </h2>
            </div>

            {/* Trophy Image */}
            <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-10 -top-12">
              <div className="relative border-4 rounded-[100px] border-white">
                <img 
                  className='relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full object-cover' 
                  src='/assets/Award/award-image.png'
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