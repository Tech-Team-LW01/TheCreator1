"use client";
import React from "react";
import { WavyBackground } from "../../ui/wavy-background";
import JazbaaCard from "./JazbaaCard";
import InitCard from "./InitCard";

export function OutCome() {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WavyBackground className="w-full relative rounded-xl">
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            {/* Heading */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl text-white font-bold inter-var text-center mb-8 md:mb-12 px-4">
              Outcome of Summer Internship Program
            </h2>

            {/* Cards Container */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4">
              {/* First Card */}
              <div className="w-full md:w-1/2 max-w-[400px]">
                <JazbaaCard />
              </div>
              
              {/* Second Card */}
              <div className="w-full md:w-1/2 max-w-[400px]">
                <InitCard />
              </div>
            </div>
          </div>
        </WavyBackground>
      </div>
    </section>
  );
}