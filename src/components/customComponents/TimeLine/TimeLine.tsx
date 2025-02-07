"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const TimelineHeader = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h1 className="text-4xl text-[#ff0000] font-bold mb-2">Journey of a Summer Intern 2025</h1>
    <p className={`text-gray-200 uppercase text-xl ${poppins.className}`}>
      LEAN INTEGRATE IMPLEMENT & DEVELOP A LIVE SUMMER PROJECT
    </p>
  </motion.div>
);

const TimelineItem = ({ number, title, description, side = 'left', avatar = '/api/placeholder/40/40', index }: any) => {
  const xInitial = side === 'left' ? -50 : 50;
  
  return (
    <div className={`flex items-center ${side === 'right' ? 'flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: xInitial }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut"
        }}
        className={`w-[450px] min-h-[120px] rounded-lg p-6 flex items-start gap-4
          ${side === 'right' ? 'text-right' : ''}
          bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]
          shadow-[0_0_15px_rgba(255,0,0,0.1)]
          hover:shadow-[0_0_25px_rgba(255,0,0,0.2)]
          transition-shadow duration-300
          border border-gray-800
          backdrop-blur-sm
        `}
      >
        <div className={`flex-1 ${side === 'right' ? 'order-2' : ''}`}>
          <h3 className={`font-semibold text-[#ff0000] text-xl mb-3 ${khandFont.className}`}>
            {title}
          </h3>
          <p className={`text-gray-200 text-lg leading-relaxed ${poppins.className}`}>
            {description}
          </p>
        </div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full bg-gray-700 shadow-lg"
        />
      </motion.div>

      <div className={`${side === 'left' ? 'w-[60px]' : 'w-[60px]'}`} />
    </div>
  );
};

// Separate component for the circle number
const NumberCircle = ({ number, scrollYProgress, index, total }: any) => {
  const backgroundColor = useTransform(
    scrollYProgress,
    [(index) / total, (index + 0.5) / total],
    ["#ff0000", "#ff0000"]
  );

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm z-10"
      style={{
        backgroundColor,
        boxShadow: "0 0 10px rgba(255,0,0,0.5)"
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {number}
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineData = [
    {
      number: 1,
      title: "Learn & Implement",
      description: "Learn & Implement market trending technologies from the very basics",
      side: "left"
    },
    {
      number: 2,
      title: "Deep Research",
      description: "Go deep dive into the core architecture,research & think out of the box.",
      side: "right"
    },
    {
      number: 3,
      title: "Develop a Summer Project",
      description: "Integrate & Develop a project as per industry demand (product/prototype).",
      side: "left"
    },
    {
      number: 4,
      title: "Showcase the Summer Project",
      description: "JAZBAA 3.0, a platform to showcase project to industry experts & investors .",
      side: "right"
    },
    {
      number: 5,
      title: "Get Internship Certificate",
      description: "Achieve Industry Recognized Internship (Project) Certificate.",
      side: "left"
    },
    {
      number: 6,
      title: "Higher Growth",
      description: "A Life Changing Experience of 45 days.",
      side: "right"
    }
  ];

  return (
    <div className="min-full bg-[#000000] p-8">
      <motion.div 
        className="max-w-6xl px-8 mx-auto bg-[#111111] border border-gray-700 rounded-xl shadow-2xl relative pt-10 pb-32"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <TimelineHeader />

        <div className="absolute left-1/2 top-[140px] bottom-20 w-[3px] transform -translate-x-1/2 bg-white/20 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-red-500"
            style={{
              height: "100%",
              scaleY: scrollYProgress,
              transformOrigin: "top",
              boxShadow: "0 0 10px rgba(255,0,0,0.5)"
            }}
          />
        </div>

        <div className="relative pt-[60px]">
          {timelineData.map((item, index) => (
            <div key={index} className="relative" style={{ height: '180px' }}>
              <NumberCircle 
                number={item.number} 
                scrollYProgress={scrollYProgress} 
                index={index}
                total={timelineData.length}
              />

              <div className="absolute w-full top-1/2 -translate-y-1/2">
                <TimelineItem {...item} index={index} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;