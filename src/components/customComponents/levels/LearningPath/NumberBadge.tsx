'use client';

import React from 'react';
import { NumberBadgeProps } from './types';
import styles from './styles.module.css';

const NumberBadge: React.FC<NumberBadgeProps> = ({ 
  number, 
  config, 
  className = '' 
}) => {
  return (
    <div 
      className={`${styles.numberBadge} ${className}`}
      style={{
        ...config.position,
        ...config.size,
        ...config.style
      }}
    >
      {number}
    </div>
  );
};

export default NumberBadge;