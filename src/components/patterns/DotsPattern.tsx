
import React from 'react';
import { PatternProps, getOpacity, getAnimationSpeed, getColor } from './types';

const DotsPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue',
}) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed() : ''} ${getOpacity(intensity)} ${getColor(color)}`} 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id="dot-pattern" 
          width="24" 
          height="24" 
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.8" fill="currentColor" className={animated ? "animate-pulse-glow" : ""} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
};

export default DotsPattern;
