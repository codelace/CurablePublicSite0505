
import React from 'react';

interface HUDGridProps {
  variant?: 'standard' | 'dense' | 'sparse';
  color?: 'blue' | 'green' | 'violet';
  intensity?: 'low' | 'medium' | 'high';
}

const HUDGrid: React.FC<HUDGridProps> = ({ 
  variant = 'standard',
  color = 'blue',
  intensity = 'medium' 
}) => {
  // Determine grid density
  const getGridDensity = () => {
    switch (variant) {
      case 'dense': return 'w-24 h-24';
      case 'sparse': return 'w-48 h-48';
      default: return 'w-32 h-32';
    }
  };

  // Determine opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-[0.08]';
      case 'high': return 'opacity-[0.18]';
      default: return 'opacity-[0.12]';
    }
  };

  // Determine color class
  const getColorClass = () => {
    switch (color) {
      case 'green': return 'text-bio-green';
      case 'violet': return 'text-plasma-violet';
      default: return 'text-bio-blue';
    }
  };

  const dotSize = variant === 'dense' ? 'r-1.5' : variant === 'sparse' ? 'r-1' : 'r-1.2';

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <svg 
        className={`absolute inset-0 w-full h-full animate-pan-grid ${getOpacity()} ${getColorClass()}`} 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="grid-pattern" 
            width={variant === 'dense' ? "24" : variant === 'sparse' ? "48" : "32"} 
            height={variant === 'dense' ? "24" : variant === 'sparse' ? "48" : "32"} 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r={variant === 'dense' ? "1.2" : variant === 'sparse' ? "1" : "1.1"} fill="currentColor" className="animate-pulse-glow" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default HUDGrid;
