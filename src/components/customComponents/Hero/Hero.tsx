"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { IndiaMap } from "@/components/ui/India-map";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="relative flex flex-col lg:flex-row min-h-[420px] overflow-hidden rounded-xl">
        {/* Left Side Content */}
        <div className="lg:w-3/5 relative">
          <div className="bg-red-600 h-full p-6 lg:p-10">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-red-700/30" />
            </div>

            <div className="relative z-10 text-white space-y-5">
              {/* Main Content Stack */}
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  Summer Internship 2025
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-red-100">
                  Industrial Training Program
                </p>
              </div>


              {/* Target Audience */}
              <div className="space-y-2">
                <h2 className="text-lg lg:text-xl font-medium">
                  For Engineering Students
                </h2>
                <p className="text-base lg:text-lg text-red-100">
                  Open for B.Tech | M.Tech | BCA | MCA | B.SC IT
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold relative z-10 shadow-lg"
              >
                Applications Open
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side Map */}
        <div className="lg:w-2/5 relative">
          {/* Gradient overlay connecting left and right sections */}
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-red-600/20 to-transparent z-10" />
          
          <div className="bg-white/80 backdrop-blur-sm h-full p-6">
            <div className="relative z-10">
            <IndiaMap
  connections={[
    {
      start: { lat: 28.6139, lng: 78.2090, label: "Delhi" }, // Adjusted to accurate location
      end: { lat: 5.0760, lng: 76.8777, label: "Mumbai" }  // Adjusted for better fit
    },
    {
      start: { lat: 22.5726, lng: 88.3639, label: "Kolkata" }, // Corrected
      end: { lat: 13.0827, lng: 80.2707, label: "Chennai" }   // Slightly shifted
    },
    {
      start: { lat: 2.9716, lng: 77.5946, label: "Bengaluru" }, // Fixed longitude
      end: { lat: 12.3850, lng: 81.4867, label: "Hyderabad" }  // Corrected location
    },
    {
        start: { lat: 25.6139, lng: 76.2090, label: "Jaipur" }, // Adjusted to accurate location
        end: { lat: 8.0760, lng: 75.8777, label: "Pune" }  // Adjusted for better fit
      },
  ]}
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;