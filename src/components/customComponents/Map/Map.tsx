"use client"

import React from "react";
import { Button } from "@/components/ui/button";
// import { IndiaMap } from "@/components/ui/India-map";
import { Badge } from "@/components/ui/badge"

// import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { AiOutlineHourglass } from "react-icons/ai"
// import { HiShieldCheck } from "react-icons/hi2"
import { Album ,ShieldCheck} from "lucide-react";
import MapScroll from "./MapScroll";

const Map = () => {
  return (
    <section className=" max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

{/* left section  */}

<div className="bg-black h-full p-6 lg:p-10">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-red-700/30" />
            </div>

            <div className="relative z-10 text-white space-y-5">
              {/* Main Content Stack */}
              <div className="space-y-2 font-[Poppins]">
                   <h1 className="text-2xl lg:text-4xl xl:text-5xl font-Khand tracking-tight">
                      Summer Internship 2025
                    </h1>
                    <p className="text-2xl lg:text-4xl font-bold text-red-100">
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
                className="bg-white text-[#ff0000] hover:bg-red-50 font-semibold relative z-10 shadow-lg"
              >
                Applications Open
              </Button>

                <MapScroll/>
            </div>
          </div>

{/* end left section  */}

{/* start right section */}

<div className="w-full h-full">
  <img src="/assets/map/map.png" className="w-full h-[550px]"/>
</div>

{/* end right section  */}
      </div>
     
    
    </section>
  );
};

export default Map;