"use client";
import React from "react";
import JazbaaCard from "./JazbaaCard";
import InitCard from "./InitCard";

export function OutCome() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="w-full relative rounded-xl h-[600px] bg-fixed bg-cover bg-center min-h-full overflow-hidden bg-[url(/assets/outCome/backOutCome.jpg)]"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          
          <div className="flex flex-col items-center justify-center py-12 md:py-16 relative z-10">
            {/* Heading with position relative for arrow positioning */}
            <div className="relative mb-24"> {/* Increased margin bottom for arrows */}
              <h2 className="text-3xl font-khand md:text-3xl lg:text-4xl text-[#ff0000] font-bold text-inter-var text-center px-4">
                Outcome of Summer Internship Program
              </h2>
              
              {/* Left Arrow */}
              <div className="hidden md:block absolute left-1/4 top-full">
                <div className="relative w-32 h-24">
                  {/* Arrow Stem */}
                  <div className="absolute top-0 left-1/2 h-16 w-1 bg-[#ff0000] transform -rotate-12"></div>
                  {/* Arrow Head */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 border-b-2 border-r-2 border-[#ff0000] transform rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="hidden md:block absolute right-1/4 top-full">
                <div className="relative w-32 h-24">
                  {/* Arrow Stem */}
                  <div className="absolute top-0 left-1/2 h-16 w-1 bg-[#ff0000] transform rotate-12"></div>
                  {/* Arrow Head */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 border-b-2 border-r-2 border-[#ff0000] transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Container */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4">
              {/* First Card */}
              <div className="w-full md:w-1/2 max-w-[280px] relative">
                {/* Mobile Arrow for First Card */}
                <div className="md:hidden absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-8 bg-[#ff0000]"></div>
                  <div className="w-3 h-3 border-b-2 border-r-2 border-[#ff0000] transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
                <JazbaaCard />
              </div>
              
              {/* Second Card */}
              <div className="w-full md:w-1/2 max-w-[280px] relative">
                {/* Mobile Arrow for Second Card */}
                <div className="md:hidden absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-8 bg-[#ff0000]"></div>
                  <div className="w-3 h-3 border-b-2 border-r-2 border-[#ff0000] transform rotate-30 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
                <InitCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add CSS for arrow animations */}
      <style jsx>{`
        @keyframes arrowPulse {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }

        .arrow-animation {
          animation: arrowPulse 2s infinite;
        }
      `}</style>
    </section>
  );
}