
import React from 'react';
import { PatternProps, getOpacity, getColor, getAnimationSpeed } from './types';

const DotsPattern: React.FC<PatternProps> = ({ 
  variant, 
  intensity = "medium", 
  animated = false, 
  color = "blue",
  speed = "medium" 
}) => {
  const opacity = getOpacity(intensity);
  const strokeColor = getColor(color);
  const animationDuration = getAnimationSpeed(speed);

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill={strokeColor} opacity={opacity} />
        </pattern>
        
        <linearGradient id="pattern-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--logo-blue)" />
          <stop offset="50%" stopColor="var(--plasma-violet)" />
          <stop offset="100%" stopColor="var(--bio-green)" />
        </linearGradient>
        
        {animated && (
          <animate
            xlinkHref="#dots-pattern"
            attributeName="x"
            from="0"
            to="20"
            dur={animationDuration}
            repeatCount="indefinite"
          />
        )}
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>
  );
};

export default DotsPattern;
