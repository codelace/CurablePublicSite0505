
import React from 'react';
import { PatternProps, getOpacity, getAnimationSpeed } from './types';

const CircuitPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue',
  speed = 'medium'
}) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed(speed) : ''} ${getOpacity(intensity)}`} 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern 
          id="circuit-pattern" 
          width="100" 
          height="100" 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d="M10,10 L40,10 M40,10 L40,40 M40,40 L70,40 M70,40 L70,70 M70,70 L40,70 M40,70 L40,90 M60,30 L90,30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            className={color === 'violet' ? 'text-plasma-violet' : color === 'green' ? 'text-bio-green' : 'text-bio-blue'} 
          />
          <circle cx="40" cy="10" r="3" className={`${color === 'violet' ? 'fill-plasma-violet' : color === 'green' ? 'fill-bio-green' : 'fill-bio-blue'} ${animated ? 'animate-pulse-dot' : ''}`} />
          <circle cx="70" cy="40" r="3" className={`${color === 'violet' ? 'fill-plasma-violet' : color === 'green' ? 'fill-bio-green' : 'fill-bio-blue'} ${animated ? 'animate-pulse-dot' : ''}`} />
          <circle cx="90" cy="30" r="3" className={`${color === 'violet' ? 'fill-plasma-violet' : color === 'green' ? 'fill-bio-green' : 'fill-bio-blue'} ${animated ? 'animate-pulse-dot' : ''}`} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
};

export default CircuitPattern;
