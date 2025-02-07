import React from "react";
import { Button } from "@/components/ui/button";
// import { IndiaMap } from "@/components/ui/India-map";
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion';
// import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { AiOutlineHourglass } from "react-icons/ai"
// import { HiShieldCheck } from "react-icons/hi2"
import { Album ,ShieldCheck} from "lucide-react";

import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

import localFont from "next/font/local";
const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});
const Hero2 = () => {    
    return (
        <div className=" h-full mx-auto w-full">
     <div className="relative max-w-full h-full mx-auto">
  {/* Button Container - fixed position using percentages */}
  <div className="absolute left-[4%] top-[72%] z-10">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        size="lg"
        variant="secondary"
        className="bg-white text-[#ff0000] text-lg hover:bg-red-200 font-semibold relative z-10 shadow-lg"
      >
        Applications Open
      </Button>
    </motion.div>
  </div>
  
  {/* Image */}
  <img className="w-full h-full mx-auto" src="/assets/newHero.png" alt="Hero" />
</div>

            {/* strip */}

            <div className="relative md:-mt-12 lg:-mt-4 z-30">
  <div className="bg-black rounded-lg p-6 shadow-lg max-w-6xl border border-white mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Admission Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <BsCalendarCheck className="w-5 h-5 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className={`text-white text-xs font-medium uppercase tracking-wide ${khandFont.className}`}>
              TENTATIVE START DATES
            </span>
            <span className={`font-bold text-xs text-white mt-1 ${poppins.className}`}>
              May 2025 / June 2025 / July 2025
            </span>
            <Badge variant="outline" className="text-[#ff0000] border-red-200 text-[10px] mt-2 w-fit">
              Limited seats
            </Badge>
          </div>
        </div>

        {/* Duration Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <AiOutlineHourglass className="w-5 h-5 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className={`text-white text-xs font-medium uppercase tracking-wide ${khandFont.className}`}>
              DURATION SUMMER PROGRAM​
            </span>
            <span className={`font-bold text-xs text-white mt-1 ${poppins.className}`}>
              6 weeks / 8 weeks
            </span>
          </div>
        </div>

        {/* Internship Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <Album className="w-6 h-6 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className={`text-white text-xs font-medium uppercase tracking-wide ${khandFont.className}`}>
              Internship ​
            </span>
            <span className={`font-bold text-xs text-white mt-1 ${poppins.className}`}>
              Industry Recognised Internship (Project) Certificate
            </span>
          </div>
        </div>

        {/* Training Certificate Section */}
        <div className="flex items-start gap-3 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className={`text-white text-xs font-medium uppercase tracking-wide ${khandFont.className}`}>
              Training Certificate
            </span>
            <span className={`font-bold text-xs text-white mt-1 ${poppins.className}`}>
              Training Certificate from 
              <br></br>
              LinuxWorld Informatics Pvt Ltd
            </span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center justify-center lg:border-l lg:pl-6 w-full lg:w-auto mt-6 lg:mt-0">
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <a href="" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
            <Button className={`bg-[#ff0000] w-full lg:w-auto text-sm py-6 px-8 hover:bg-[#ff0000]/90 hover:shadow-lg transition-all duration-300 ${poppins.className}`}>
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero2;