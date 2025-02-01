

import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, Globe, User, Flag, Award, Mic2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Mentor = () => {
  const achievements = [
    { icon: Globe, text: "Known as the 'Integration Guru'" },
    { icon: Mic2, text: "2x TEDx Speaker" },
    { icon: Flag, text: "RedHat Certified Architect Level 25" },
    { icon: Award, text: "11 AWS Global Certifications" }
  ];

  const transfers = [
    { amount: "3500 USD", position: "top-[10%] left-[5%]" },
    { amount: "700 USD", position: "top-[50%] left-[12%]" },
    { amount: "1800 USD", position: "bottom-[20%] left-[8%]" },
    { amount: "3500 USD", position: "top-[15%] right-[5%]" },
    { amount: "700 USD", position: "bottom-[30%] right-[10%]" },
    { amount: "1800 USD", position: "top-[40%] right-[3%]" }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-red-900 via-black to-red-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 z-10 space-y-6 sm:space-y-8">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent 
                mb-3 sm:mb-4">
                Your Summer Internship Mentor
              </h1>
              
              <p className="text-lg sm:text-xl text-white font-medium mb-6 sm:mb-8">
                Visionary Leader Committed to "Making India Future-Ready"
              </p>

              <div className="grid gap-4 sm:gap-6">
                {achievements.map((item, index) => (
                  <Card 
                    key={index} 
                    className="p-3 sm:p-4 bg-gradient-to-r from-red-900/80 to-black/80 
                      border-red-900/30 hover:bg-red-900/90 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                      <span className="text-base sm:text-lg font-medium text-white">{item.text}</span>
                    </div>
                  </Card>
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl italic mt-8 sm:mt-12 
                pl-4 sm:pl-6 border-l-4 border-red-400/50 text-white">
                Mentor to Fortune 500 executives, specializing in knowledge transfer to 
                <span className="text-red-400 font-medium"> C-level technologists</span> 
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
                      border-red-900/50 shadow-xl transform hover:scale-105 
                      transition-transform">
                      <div className="bg-red-400/20 p-1.5 sm:p-2 rounded-full">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      </div>
                      <div className="text-white">
                        <div className="text-[10px] sm:text-xs font-medium text-red-200">
                          Successful Transfer
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