"use client";
import React from "react";
import { WavyBackground } from "../../ui/wavy-background";
import JazbaaCard from "./JazbaaCard";
import InitCard from "./InitCard";
export function OutCome() {
  return (
<div className=" mx-auto max-w-6xl">
    <WavyBackground className="max-w-6xl h-[400px]  mt-8  mx-auto"> {/* Set a fixed height */}
      <p className="text-2xl md:text-3xl pt- lg:text-3xl text-white font-bold inter-var text-center">
      Outcome of Summer Internship Program
      </p>

      <div className="flex w-full mx-auto item-center justify-center p-4 mt-2 col-1 space-x-4 md:col-2">
        <JazbaaCard/>
        <InitCard/>
      </div>
    </WavyBackground>
    </div>
  );
}