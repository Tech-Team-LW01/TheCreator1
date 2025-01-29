import React from 'react';
import { Card } from "@/components/ui/card";
import { Check, Globe, User, Flag, Award, Mic2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Mentor = () => {
  const achievements = [
    { icon: Globe, text: "Known as the “Integration Guru”" },
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
    <div className="w-full min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 p-8">
      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Improved Contrast */}
        <div className="lg:w-1/2 z-10 space-y-8 text-white">
          <div className="prose prose-invert">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-4">
              Your Summer Internship Mentor
            </h1>
            
            <p className="text-xl text-white font-medium mb-8">
              Visionary Leader Committed to "Making India Future-Ready"
            </p>

            <div className="grid gap-6">
              {achievements.map((item, index) => (
                <Card key={index} className="p-4 bg-gradient-to-r from-red-900/80 to-black/80 border-red-900/30">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-8 h-8 text-red-400" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                </Card>
              ))}
            </div>

            <blockquote className="text-xl italic mt-12 pl-6 border-l-4 border-red-400/50 text-white">
              Mentor to Fortune 500 executives, specializing in knowledge transfer to 
              <span className="text-red-400 font-medium"> C-level technologists</span> 
              {" "}across cutting-edge domains.
            </blockquote>
          </div>
        </div>

        {/* Right Section - Enhanced Contrast */}
        <div className="lg:w-1/2 relative w-full h-[600px]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden group">
            <img 
              src="/assets/Mentor/vimalsir.webp"
              alt="Mentor Profile"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Animated Badges */}
            {transfers.map((transfer, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`absolute ${transfer.position}`}
              >
                <Card className="bg-black/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 border-red-900/50 shadow-xl">
                  <div className="bg-red-400/20 p-2 rounded-full">
                    <Check className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-medium text-red-200">Successful Transfer</div>
                    <div className="text-sm font-semibold">{transfer.amount}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;