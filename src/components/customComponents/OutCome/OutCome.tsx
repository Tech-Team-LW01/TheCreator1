"use client";
import React from "react";
import { WavyBackground } from "../../ui/wavy-background";
import JazbaaCard from "./JazbaaCard";
import InitCard from "./InitCard";
import backgroudnImage from "../../../../public/assets/outCome/backOutCome.jpg"
import { url } from "inspector";
export function OutCome() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="w-full  relative rounded-xl h-[600px] bg-fixed bg-cover bg-center min-h-full overflow-hidden bg-[url(/assets/outCome/backOutCome.jpg)]"
          
        >

< div className="absolute inset-0 bg-black opacity-80" ></div>
          <div className="flex flex-col items-center justify-center py-12 md:py-16 relative z-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl text-[#ff0000] font-bold text- inter-var text-center mb-8 md:mb-12 px-4">
              Outcome of Summer Internship Program
            </h2>

            {/* Cards Container */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4">
              {/* First Card */}
              <div className="w-full md:w-1/2 max-w-[280px]">
                <JazbaaCard />
              </div>
              
              {/* Second Card */}
              <div className="w-full md:w-1/2 max-w-[280px]">
                <InitCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}