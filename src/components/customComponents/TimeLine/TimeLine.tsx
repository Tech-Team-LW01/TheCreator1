import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Inter,Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})

import localFont from "next/font/local";
const khandFont = localFont(
  {
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
  }

)

const TimelineHeader = () => (
  <div className="text-center mb-16">
    <h1 className="text-4xl text-[#ff0000] font-bold  mb-2">Journey of a Summer Intern 2025</h1>
    <p className={`text-gray-200 uppercase text-xl ${poppins.className}`}>LEAN INTEGRATE IMPLEMENT & DEVELOP A LIVE SUMMER PROJECT</p>
  </div>
);

const TimelineItem = ({ number, title, description, side = 'left', avatar = '/api/placeholder/40/40', scrollYProgress }: any) => {
  return (
    <div className={`flex items-center ${side === 'right' ? 'flex-row-reverse' : ''}`}>
      {/* Card */}
      <div className={`w-[450px] min-h-[120px] bg-[#0A0A0A] rounded-lg p-6 flex items-start gap-4
        ${side === 'right' ? 'text-right' : ''}`}>
        <div className={`flex-1 ${side === 'right' ? 'order-2' : ''}`}>
          <h3 className={`font-semibold text-[#ff0000] text-xl mb-3 ${khandFont.className}`}>{title}</h3>
          <p className={`text-gray-200 text-lg leading-relaxed ${poppins.className}`}>{description}</p>
        </div>
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full bg-gray-700"
        />
      </div>

      {/* Spacer to keep cards away from center */}
      <div className={`${side === 'left' ? 'w-[60px]' : 'w-[60px]'}`} />

      {/* Horizontal Line */}
     
    </div>
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
    <div className="min-full bg-[#000000]  p-8  ">
          
    <div className="max-w-6xl px-8 mx-auto bg-[#111111] border border-gray-700 rounded-xl shadow-2xl relative pt-10 pb-32" ref={containerRef}>
      <TimelineHeader />

      {/* Center line container */}
      <div className="absolute left-1/2 top-[140px] bottom-20 w-[3px] transform -translate-x-1/2 bg-white overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-red-500"
          style={{
            height: "100%",
            scaleY: scrollYProgress,
            transformOrigin: "top"
          }}
        />
      </div>

      {/* Timeline content wrapper */}
      <div className="relative pt-[60px]">
        {timelineData.map((item, index) => (
          <div key={index} className="relative" style={{ height: '180px' }}>
            {/* Number circle */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm z-10"
              style={{
                backgroundColor: useTransform(
                  scrollYProgress,
                  [(index) / timelineData.length, (index + 0.5) / timelineData.length],
                  ["#ff0000", "#ff0000"]
                )
              }}
            >
              {item.number}
            </motion.div>

            {/* Timeline item */}
            <div className="absolute w-full top-1/2 -translate-y-1/2">
              <TimelineItem {...item} scrollYProgress={scrollYProgress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  );
};

export default Timeline;