'use client';

import React from 'react';
import styles from './styles.module.css';

const WavyLine: React.FC = () => {
  return (
    <div className={styles.wavyLineContainer}>
      <svg
        className={styles.wavySvg}
        width="100"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          className={styles.wavyLineBackground}
          d="M50,0 Q60,250 50,500 Q40,750 50,1000"
        />
        <path
          className={styles.wavyLineForeground}
          d="M50,0 Q60,250 50,500 Q40,750 50,1000"
        />
        {[0, 250, 500, 750, 1000].map((y, index) => (
          <circle
            key={index}
            cx="50"
            cy={y}
            r="4"
            className={styles.wavyDot}
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default WavyLine;
