
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

  // Generate random pulse delays for more organic animation
  const pulseDelays = [0.5, 0.7, 1.0, 1.2, 0.9, 1.5, 0.3];

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
          width="120" 
          height="120" 
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(5)"
        >
          {/* Enhanced path complexity for more interesting circuit look */}
          <path 
            d="M10,10 L40,10 M40,10 L40,40 M40,40 L70,40 M70,40 L70,70 M70,70 L40,70 
                M40,70 L40,90 M60,30 L90,30 M20,50 L60,50 M60,50 L60,80 M80,10 L80,60 
                M10,90 C20,80 30,85 40,90 M90,80 L110,80 M110,80 L110,50 
                M110,50 L90,50 M90,90 C80,100 70,105 60,95" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeOpacity="0.8"
            className={animated ? 'animate-pulse-glow' : ''}
          />
          
          {/* Additional path for more complex circuit looks */}
          <path 
            d="M15,80 Q30,95 45,80 M100,20 Q85,5 70,20 M20,20 C30,10 40,30 50,20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            strokeOpacity="0.6"
            strokeDasharray="4 2"
            className={animated ? 'animate-pulse-glow' : ''}
            style={{animationDelay: '1.5s'}}
          />
          
          {/* Connection nodes with enhanced animations */}
          <circle cx="40" cy="10" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} />
          <circle cx="70" cy="40" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.5s'}} />
          <circle cx="90" cy="30" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '1s'}} />
          <circle cx="60" cy="50" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.7s'}} />
          <circle cx="80" cy="60" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '1.2s'}} />
          <circle cx="40" cy="90" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.9s'}} />
          <circle cx="110" cy="50" r="3" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.3s'}} />
          <circle cx="20" cy="50" r="2" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '1.5s'}} />
          <circle cx="90" cy="90" r="2" className={`${getFillColor()} ${animated ? 'animate-pulse-dot' : ''}`} style={{animationDelay: '0.2s'}} />
        </pattern>
        
        {/* Enhanced radial gradient for pulse effects */}
        <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="90%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        
        {/* Add a linear gradient for glow line effects */}
        <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      
      {/* Enhanced random pulses with different sizes and positions */}
      {animated && (
        <>
          <circle cx="15%" cy="25%" r="40" fill="url(#pulse-gradient)" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
            <animate attributeName="r" values="30;50;30" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="65%" r="50" fill="url(#pulse-gradient)" opacity="0">
            <animate attributeName="opacity" values="0;0.4;0" dur="5s" repeatCount="indefinite" begin="2s" />
            <animate attributeName="r" values="40;60;40" dur="7s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="45%" cy="85%" r="35" fill="url(#pulse-gradient)" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="6s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="r" values="25;45;25" dur="8s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="30%" cy="40%" r="45" fill="url(#pulse-gradient)" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="7s" repeatCount="indefinite" begin="3s" />
            <animate attributeName="r" values="35;55;35" dur="9s" repeatCount="indefinite" begin="2.5s" />
          </circle>
          
          {/* Add glowing scan lines */}
          <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="url(#line-glow)" strokeWidth="2" opacity="0.3">
            <animate attributeName="y1" values="0%;100%;0%" dur="15s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="y2" values="0%;100%;0%" dur="15s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="15s" repeatCount="indefinite" begin="0s" />
          </line>
          <line x1="0%" y1="60%" x2="100%" y2="60%" stroke="url(#line-glow)" strokeWidth="1" opacity="0.2">
            <animate attributeName="y1" values="100%;0%;100%" dur="18s" repeatCount="indefinite" begin="3s" />
            <animate attributeName="y2" values="100%;0%;100%" dur="18s" repeatCount="indefinite" begin="3s" />
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="18s" repeatCount="indefinite" begin="3s" />
          </line>
        </>
      )}
    </svg>
  );
};

export default CircuitPattern;
