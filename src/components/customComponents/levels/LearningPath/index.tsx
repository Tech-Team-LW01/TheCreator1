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
      title: "The Data Science Beginner",
      items: [
        "Learn Core Mathematical Concepts",
        "Build Python Skills for Analytics",
        "Conduct Foundational Analytics Tasks"
      ],
      badgeConfig: badgeConfigs[1]
    },
    {
      number: 2,
      title: "The Analytics Expert",
      items: [
        "Manage Data Using SQL & Spark",
        "Master Tools like Tableau & Power BI",
        "Create ML Models for Business Cases"
      ],
      badgeConfig: badgeConfigs[2]
    },
    {
      number: 3,
      title: "The Advanced ML & AI Professional",
      items: [
        "Master Advanced Machine Learning Models",
        "Understand Generative AI and MLOps",
        "Develop ML & AI Solutions"
      ],
      badgeConfig: badgeConfigs[3]
    },
    {
      number: 4,
      title: "The Practitioner",
      items: [
        "Choose from 5 Industry Capstone Projects",
        "Create Solutions for Real-world Challenges",
        "Showcase Expertise to Potential Recruiters"
      ],
      badgeConfig: badgeConfigs[4]
    }
  ];

  return (
    <div className={`${styles.learningPathContainer} ${className}`} style={customStyle}>
      <h1 className={styles.mainTitle}>
        Your Master&apos;s Degree Journey
        <div className={styles.subtitle}>4 Levels to Data Science and AI Mastery</div>
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
                <div className={styles.connectorDot} />
                <div className={styles.content}>
                  <h3>{level.title}</h3>
                  <ul>
                    {level.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;