
import React from 'react';
import { PatternProps, getOpacity, getAnimationSpeed, getColor } from './types';

const GridPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue',
  speed = 'medium',
}) => {
  // Force animation to be visible
  const animationClass = animated ? getAnimationSpeed(speed) : '';
  
  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${animationClass} ${getOpacity(intensity)}`} 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      style={{animation: animated ? 'pan-grid 15s infinite linear' : 'none'}}
    >
      <defs>
        <pattern 
          id="grid-pattern" 
          width="40" 
          height="40" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            className={color === 'violet' ? 'text-plasma-violet/70' : color === 'green' ? 'text-bio-green/70' : 'text-bio-blue/70'} 
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

export default GridPattern;
