'use client';

import { BadgeConfig, Point } from './types';
import { useEffect } from 'react';

export const badgeConfigs: { [key: number]: BadgeConfig } = {
  1: {
    position: {
      right: '-60px',
      top: '-40px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#ff0000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(226, 0, 0, 0.3)'
    }
  },
  2: {
    position: {
      left: '-50px',
      top: '-40px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#ff0000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(255, 0, 0, 0.3)'
    }
  },
  3: {
    position: {
      right: '-60px',
      top: '-40px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#ff0000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(230, 12, 12, 0.3)'
    }
  },
  4: {
    position: {
      left: '-58px',
      top: '-25px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#ff0000',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0 4px 8px rgba(224, 11, 11, 0.3)'
    }
  }
};

export const useMediaQuery = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      const updateConfigsForMobile = (isMobile: boolean) => {
        if (isMobile) {
          badgeConfigs[1].position = { left: '-70px', top: '-40px' };
          badgeConfigs[2].position = { left: '-70px', top: '-60px' };
          badgeConfigs[3].position = { left: '-70px', top: '-60px' };
          badgeConfigs[4].position = { left: '-75px', top: '-50px' };
        } else {
          badgeConfigs[1].position = { right: '-60px', top: '-40px' };
          badgeConfigs[2].position = { left: '-50px', top: '-40px' };
          badgeConfigs[3].position = { right: '-60px', top: '-40px' };
          badgeConfigs[4].position = { left: '-58px', top: '-25px' };
        }
      };

      // Initial check
      updateConfigsForMobile(mediaQuery.matches);

      // Event listener for changes
      const handleChange = (e: MediaQueryListEvent) => updateConfigsForMobile(e.matches);
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);
};

export const wavyLinePoints: Point[] = [
  { x: 50, y: 0 },
  { 
    x: 150, 
    y: 200, 
    controlPoint1: { x: -50, y: 100 }, 
    controlPoint2: { x: 200, y: 150 } 
  },
  { 
    x: -50, 
    y: 400, 
    controlPoint1: { x: 100, y: 300 }, 
    controlPoint2: { x: -100, y: 350 } 
  },
  { 
    x: 150, 
    y: 600, 
    controlPoint1: { x: 0, y: 500 }, 
    controlPoint2: { x: 200, y: 550 } 
  },
  { 
    x: -50, 
    y: 800, 
    controlPoint1: { x: 100, y: 700 }, 
    controlPoint2: { x: -100, y: 750 } 
  },
  { 
    x: 150, 
    y: 1000, 
    controlPoint1: { x: 0, y: 900 }, 
    controlPoint2: { x: 200, y: 950 } 
  }
];