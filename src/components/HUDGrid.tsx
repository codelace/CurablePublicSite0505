
import React from 'react';

const HUDGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <svg 
        className="absolute inset-0 w-full h-full animate-pan-grid opacity-10" 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="grid-pattern" 
            width="32" 
            height="32" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#00E5FF" className="animate-pulse-glow" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default HUDGrid;
