
import React from 'react';
import { PatternProps, getOpacity, getAnimationSpeed } from './types';

const CircuitPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue',
  speed = 'medium'
}) => {
  const getColor = () => {
    switch (color) {
      case 'green': return 'text-bio-green';
      case 'violet': return 'text-plasma-violet';
      default: return 'text-bio-blue';
    }
  };
  
  const getFillColor = () => {
    switch (color) {
      case 'green': return 'fill-bio-green';
      case 'violet': return 'fill-plasma-violet';
      default: return 'fill-bio-blue';
    }
  };

  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed(speed) : ''} ${getOpacity(intensity)} ${getColor()}`} 
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
            d="M10,10 L40,10 M40,10 L40,40 M40,40 L70,40 M70,40 L70,70 M70,70 L40,70 M40,70 L40,90 M60,30 L90,30 M20,50 L60,50 M60,50 L60,80 M80,10 L80,60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeOpacity="0.8"
            className={animated ? 'animate-pulse-glow' : ''}
          />
          <circle cx="40" cy="10" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} />
          <circle cx="70" cy="40" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.5s'}} />
          <circle cx="90" cy="30" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '1s'}} />
          <circle cx="60" cy="50" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.7s'}} />
          <circle cx="80" cy="60" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '1.2s'}} />
          <circle cx="40" cy="90" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.9s'}} />
        </pattern>
        
        {/* Add a radial gradient for pulse effects */}
        <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="90%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      
      {/* Add subtle random pulses for more dynamic effect */}
      {animated && (
        <>
          <circle cx="15%" cy="25%" r="30" fill="url(#pulse-gradient)" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="65%" r="40" fill="url(#pulse-gradient)" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="5s" repeatCount="indefinite" begin="2s" />
          </circle>
          <circle cx="45%" cy="85%" r="25" fill="url(#pulse-gradient)" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" begin="1s" />
          </circle>
        </>
      )}
    </svg>
  );
};

export default CircuitPattern;
