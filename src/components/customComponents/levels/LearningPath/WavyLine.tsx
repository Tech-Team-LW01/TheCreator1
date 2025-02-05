'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const WavyLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / windowHeight, 1);
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the dash-offset based on scroll progress
  const pathLength = 1000; // This should match your SVG viewBox height
  const dashOffset = pathLength - (scrollProgress * pathLength);

  return (
    <div className={styles.wavyLineContainer}>
      <svg
        className={styles.wavySvg}
        width="100"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        style={{ position: 'fixed' }} // Make the SVG fixed
      >
        <path
          className={styles.wavyLineBackground}
          d="M50,0 Q60,250 50,500 Q40,750 50,1000"
        />
        <path
          className={styles.wavyLineForeground}
          d="M50,0 Q60,250 50,500 Q40,750 50,1000"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: dashOffset,
          }}
        />
        {[0, 250, 500, 750, 1000].map((y, index) => (
          <circle
            key={index}
            cx="50"
            cy={y}
            r="4"
            className={styles.wavyDot}
            style={{
              animationDelay: `${index * 0.2}s`,
              opacity: scrollProgress * 1000 >= y ? 1 : 0.2
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default WavyLine;