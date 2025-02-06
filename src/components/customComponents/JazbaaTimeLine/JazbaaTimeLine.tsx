import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import StudentProfileCard from "./StudentProfileCard";

export function JazbaaTimeLine() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
           
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
        


                {/* <StudentProfileCard/>
                <StudentProfileCard/> */}

           
           
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
           
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
                <StudentProfileCard/>
        


                {/* <StudentProfileCard/>
                <StudentProfileCard/> */}

           
           
          </div>
        </div>
      ),
    },
  
  ];
  
  return (
    <div className="w-full">
         <div className="w-full text-center pt-16 pb-4 ">
        <h1 className="text-4xl font-bold  text-[#ff0000] ">INIT RECRUITMENT PLATFORM</h1>
        <p className="text-white text-lg">A UNIQUE PLACEMENT PLATFORM FOR CORE TECHNICAL JOB ROLES IN DREAM COMPANIES</p>
      </div>
      <Timeline data={data} />
    </div>
  );
}