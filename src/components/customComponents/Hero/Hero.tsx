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


const Hero = () => {
  return (
    <section className=" w-full ">
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
                   <h1 className="text-2xl lg:text-4xl xl:text-5xl font-[Khand] tracking-tight">
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
            </div>
          </div>

{/* end left section  */}

{/* start right section */}

<div className="w-full h-full">
  <img src="/assets/Hero/HeroImage.png" className="w-full h-96"/>
</div>

{/* end right section  */}
      </div>
     
        <div className="relative md:-mt-12  lg:-mt-4 z-30">
              <div className={`bg-black rounded-lg p-4 shadow-lg max-w-6xl border border-white mx-auto`}>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4"> {/* Adjusted for consistency */}
                  {/* Info Sections Container */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4 ">
               

                    {/* Admission Section */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <BsCalendarCheck className="text-[#ff0000] text-3xl bg-red-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium"> TENTATIVE START DATES</span>
                        <span className="font-bold text-xs block text-white">May 2025 / June 2025 / July 2025</span>
                        <Badge variant="outline" className="text-[#ff0000] border-red-200 text-[10px] mt-0.5">
                          Limited seats
                        </Badge>
                      </div>
                    </div>

                    {/* Course Fee Section */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <AiOutlineHourglass className="text-[#ff0000] text-3xl bg-red-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">DURATION SUMMER PROGRAM​</span>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-xs text-white">6 weeks / 8 weeks</span>
                             {/* <span className="line-through text-gray-400 text-xs">₹75,000</span>
                             <span className="text-green-600 font-semibold text-[10px]">
                               Save ₹30,000/-
                             </span> */}
                          </div>
                      {/* <div>
                        <span className="text-black text-xs font-medium">Course Fees</span>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-xs">₹45,000 (+taxes)</span>
                             <span className="line-through text-gray-400 text-xs">₹75,000</span>
                             <span className="text-green-600 font-semibold text-[10px]">
                               Save ₹30,000/-
                             </span>
                          </div> */}
                         


                        </div>
                      </div>


                    </div>
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <Album className="text-[#ff0000] text-3xl bg-red-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">Internship ​</span>
                       

                        <span className="font-bold text-xs block text-white">  Industry Recognised Internship    (Project) Certificate
                          
                           </span>

                      </div>

                      
                    </div>
                    {/* text-3xl bg-red-50 p-1 rounded-lg mt-1 */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center  lg:justify-center">
                      <ShieldCheck className="text-[#ff0000] text-3xl bg-red-50  rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">Training Certificate</span>
                        

                        <span className="font-bold text-xs block text-white">  
                          Training Certificate from LinuxWorld Informatics Pvt Ltd 
                          </span>

                      </div>

                      
                    </div>
                  </div>
                 

                  {/* Button Section */}
                  <div className="flex items-center justify-center gap-2 lg:border-l lg:pl-4 w-full lg:w-auto pl-8">
                    <div className="flex flex-col items-start justify-center sm:items-center lg:items-center w-full lg:w-auto">
                      <a href="" target="blank">
                        <Button className="bg-[#ff0000] mt-2 item-center justify-center md:mx-4 hover:bg-[#ff0000] hover:shadow-md hover:shadow-black w-full sm:w-auto text-sm py-6">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
};

export default Hero;