// WavyLine.tsx
'use client';

import React from 'react';
import styles from './styles.module.css';

interface Point {
  x: number;
  y: number;
  controlPoint1?: { x: number; y: number };
  controlPoint2?: { x: number; y: number };
}

const WavyLine: React.FC = () => {
  // Define custom points for the wave
  const points: Point[] = [
    {
    x: -70, y: 50,
    controlPoint1: { x: -80, y: 20 },
    controlPoint2: { x: -100, y: 270 }
    },
    {
    x: 100, y: 240,
    controlPoint1: { x: 200, y: 450 },
    controlPoint2: { x: -120, y: 300 },
    
    
    },
    { 
      x: 100, y: 100,
      controlPoint1: { x: 190, y: 600 },
      controlPoint2: { x: 10, y: 750 }
    },
    { 
      x: 50, y: 900,
      controlPoint1: { x: 120, y: 950 },
      controlPoint2: { x: -20, y: 1050 }
    },
    { 
      x: 50, y: 1200 
    }
    ];
  // Generate path from points
  const generatePath = (points: Point[]): string => {
    let path = `M${points[0].x},${points[0].y} `;
    
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      
      if (current.controlPoint1 && current.controlPoint2) {
        path += `C${current.controlPoint1.x},${current.controlPoint1.y} ${current.controlPoint2.x},${current.controlPoint2.y} ${next.x},${next.y} `;
      } else {
        // Default curve if control points aren't specified
        const midY = (current.y + next.y) / 2;
        path += `S${next.x},${midY} ${next.x},${next.y} `;
      }
    }
    
    return path;
  };

  const pathData = generatePath(points);

  return (
    <div className={styles.wavyLineContainer}>
      <svg
        width="100%"
        height="100%"
        viewBox="-50 0 200 1200"
        preserveAspectRatio="none"
        className={styles.wavySvg}
      >
        {/* Background dashed line */}
        <path
          d={pathData}
          className={styles.wavyLineBackground}
        />
        {/* Animated foreground line */}
        <path
          d={pathData}
          className={styles.wavyLineForeground}
        />
        
        {/* Control points visualization (optional, for debugging) */}
        {points.map((point, index) => (
          <React.Fragment key={index}>
            {/* Main point */}
            <circle
              cx={point.x}
              cy={point.y}
              r="4"
              className={styles.waypoint}
            />
            {/* Control points */}
            {point.controlPoint1 && (
              <circle
                cx={point.controlPoint1.x}
                cy={point.controlPoint1.y}
                r="3"
                className={styles.controlPoint}
              />
            )}
            {point.controlPoint2 && (
              <circle
                cx={point.controlPoint2.x}
                cy={point.controlPoint2.y}
                r="3"
                className={styles.controlPoint}
              />
            )}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default WavyLine;