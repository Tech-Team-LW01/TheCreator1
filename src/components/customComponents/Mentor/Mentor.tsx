

import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, Globe, User, Flag, Award, Mic2, Briefcase,

  Youtube, Instagram ,Linkedin  ,Cpu ,KeyRound,BriefcaseBusiness 
 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Inter,Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})
const Mentor = () => {
  const achievements = [
    { icon: Globe, text: "The World Record Holder" },
    { icon: Mic2, text: "2 Times TEDx Speaker" },
    { icon: Flag, text: "Sr. Principal IT Consultant " },
    { icon: Award, text: "Known as “Integration Guru”" },
  ];

  const transfers = [
    { amount: "300k+ subscribers", position: "top-[10%] left-[5%]", plateform: "YouTube", logo: Youtube },
    { amount: "1.1M+ followers", position: "top-[50%] left-[12%]",plateform: "InstaGram" , logo: Instagram },
    { amount: "60k+ followers", position: "bottom-[20%] left-[8%]",plateform: "LinkeDin",logo: Linkedin },
    { amount: "22+ years ", position: "top-[15%] right-[3%]",plateform: "Experience",logo: BriefcaseBusiness  },
    { amount: " 152+ tools & technologies", position: "bottom-[30%] right-[10%]" ,plateform: "Knows",logo:Cpu},
    { amount: "1M+ —-> lives Changed ", position: "top-[40%] right-[3%]",plateform: "",logo: Globe }
  ];

  return (
    <section className="w-full ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 z-10 space-y-6 sm:space-y-8">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl  md:text-4xl lg:text-5xl font-bold 
                bg-gradient-to-r from-[#ff0000]  to-[#ef0707] bg-clip-text text-transparent 
                mb-3 sm:mb-4  ">
                  <p className='text-[#ff0000]'>Your Summer Internship Mentor : Mr Vimal Daga</p>

              </h1>
              
              <p className={`text-lg sm:text-xl text-white font-medium mb-6 sm:mb-8 ${poppins.className}`}>
                Visionary Leader Committed to &quot;Making India Future-Ready&quot;
              </p>

              <div className="grid gap-4 sm:gap-6">
                {achievements.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-3 sm:p-4 bg-gradient-to-r from-[#ff0000]  to-black/80 
                      border-[#f0c8c8]  hover:bg-red-900/90 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      <span className={`text-base sm:text-lg font-medium ${poppins.className} text-white`}>{item.text}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl italic mt-8 sm:mt-12 
                pl-4 sm:pl-6 border-l-4 border-[#ff0000]  text-white">
                Mentor to Fortune 500 executives, specializing in knowledge transfer to 
                <span className="text-[#ff0000] font-medium"> C-level technologists</span> 
                {" "}across cutting-edge domains.
              </blockquote>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] 
              rounded-xl sm:rounded-2xl overflow-hidden group">
              <img 
                src="/assets/Mentor/vimalsir.webp"
                alt="Mentor Profile"
                className="w-full h-full object-cover object-center transform 
                  group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Animated Badges - Hidden on smallest screens */}
              <div className="hidden sm:block">
                {transfers.map((transfer, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20 
                    }}
                    className={`absolute ${transfer.position}`}
                  >
                    <Card className="bg-black/90 backdrop-blur-sm p-2 sm:p-3 
                      rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 
                      border-red-200 shadow-xl transform hover:scale-105 
                      transition-transform">
                      <div className="bg-[#ff0000] p-1.5 sm:p-2 rounded-full">
                        <transfer.logo className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="text-white">
                        <div className="text-[10px] sm:text-xs font-medium text-white">
                         {transfer.plateform}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold">
                          {transfer.amount}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;