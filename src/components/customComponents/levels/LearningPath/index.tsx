'use client';

import React from 'react';
import styles from './styles.module.css';
import WavyLine from './WavyLine';
import NumberBadge from './NumberBadge';
import { LearningPathProps, LevelItem } from './types';
import { badgeConfigs, useMediaQuery } from './config';

const LearningPath: React.FC<LearningPathProps> = ({ 
  className = '', 
  customStyle = {} 
}) => {
  // Initialize media query handling
  useMediaQuery();

  const levels: LevelItem[] = [
    {
      number: 1,
      title: "Learn & Implement",
      items: [

        "Learn & Implement market trending technologies from the very basics"

      ],
      badgeConfig: badgeConfigs[1],
      image:"/assets/learningPath/1.png"
    },

    {
      number: 2,
      title: "Deep Research",
      items: [
        "Go deep dive into the core architecture,research & think out of the box."
        
      ],
      badgeConfig: badgeConfigs[2],
      image:"/assets/learningPath/1.png"
    },

   
    {
      number: 3,
      title: "Develop a Summer Project",
      items: [
        "Integrate & Develop a project as per industry demand (product/prototype)."
      ],
      badgeConfig: badgeConfigs[3],
      image:"/assets/learningPath/1.png"
    },

    
    {
      number: 4,
      title: "Showcase the Summer Project",
      items: [
        "JAZBAA 3.0, a platform to showcase project to industry experts & investors .",
     
      ],
      badgeConfig: badgeConfigs[4],
      image:"/assets/learningPath/1.png"
    },
  
    {
      number: 5,
      title: "Get Internship (Project) Certificate",
      items: [
        "Achieve Industry Recognized Internship (Project) Certificate.",
     
      ],
      badgeConfig: badgeConfigs[5],
      image:"/assets/learningPath/1.png"
    },
    {
      number: 6,
      title: "Higher Growth",
      items: [
        "A Life Changing Experience of 45 days.",
     
      ],
      badgeConfig: badgeConfigs[6],
      image:"/assets/learningPath/1.png"
    }


  ];

  return (
    <section className="bg-[#000000] py-6 pb-0 h-96  overflow-scroll">
       <div className="max-w-6xl mx-auto px-2">
       <div className="bg-[#111111] border border-gray-700 rounded-xl shadow-2xl ">
     
    <div className={`${styles.learningPathContainer} ${className}`} style={customStyle}>
      <h1 className={styles.mainTitle} >
       Journey of a Summer Intern 2025
        <div className={styles.subtitle}>LEARN, INTEGRATE, IMPLEMENT & DEVELOP A LIVE SUMMER PROJECT</div>
      </h1>

      <div className={styles.pathContainer}>
        <WavyLine />
        
        <div className={styles.timelineContent}>
          {levels.map((level, index) => (
            <div 
              key={level.number}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
           <div className={styles.levelBox}>
  <NumberBadge 
    number={level.number}
    config={level.badgeConfig}
  />
  
  {/* Grid with 2 columns */}
  <div className="grid grid-cols-2 gap-4 items-center">
    {/* Content on the left */}
    <div className={styles.content}>
      <h3 className="text-xl font-semibold text-[#ff0000]">
        {level.title}
      </h3>
      
      {/* Bullet points */}
      <ul className="space-y-2 list-disc list-inside text-gray-600">
        {level.items.map((item, itemIndex) => (
          <li key={itemIndex} className="text-base">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Image on the right */}
    <div className="w-32 h-32 flex-shrink-0">
      <img 
        src={level.image}
        alt={level.title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default LearningPath;