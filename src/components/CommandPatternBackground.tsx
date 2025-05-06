
import React from 'react';

interface CommandPatternBackgroundProps {
  variant?: 'dots' | 'grid' | 'nodes' | 'matrix';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
}

const CommandPatternBackground: React.FC<CommandPatternBackgroundProps> = ({
  variant = 'grid',
  intensity = 'medium',
  animated = true,
  className = '',
}) => {
  // Determine opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-[0.03]';
      case 'high': return 'opacity-[0.12]';
      default: return 'opacity-[0.07]';
    }
  };

  // Get pattern specific styles and SVG
  const getPattern = () => {
    switch (variant) {
      case 'dots':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0',
          svg: (
            <svg 
              className={`absolute inset-0 w-full h-full ${animated ? 'animate-pan-grid' : ''} ${getOpacity()}`} 
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
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-bio-blue" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          )
        };
      case 'nodes':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden',
          svg: (
            <div className={`absolute inset-0 ${getOpacity()}`}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full border border-arc-blue/30 bg-arc-blue/5"
                  style={{
                    width: `${Math.random() * 300 + 100}px`,
                    height: `${Math.random() * 300 + 100}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    opacity: Math.random() * 0.5 + 0.1,
                    animation: animated ? `pulse-glow ${Math.random() * 10 + 5}s infinite ease-in-out` : 'none'
                  }}
                />
              ))}
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={`node-${i}`}
                  className="absolute rounded-full bg-arc-blue/30"
                  style={{
                    width: '4px',
                    height: '4px',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: animated ? `pulse-dot ${Math.random() * 3 + 2}s infinite ease-in-out` : 'none'
                  }}
                />
              ))}
            </div>
          )
        };
      case 'matrix':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden',
          svg: (
            <div className={`absolute inset-0 font-mono text-bio-green/10 ${getOpacity()}`}>
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute text-xs tracking-widest"
                  style={{
                    left: `${i * 7}%`,
                    top: 0,
                    width: '20px',
                    height: '100%',
                    animationDuration: `${Math.random() * 20 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    animation: animated ? 'code-flow infinite linear' : 'none'
                  }}
                >
                  {Array.from({ length: 50 }).map((_, j) => (
                    <div key={j} style={{ opacity: Math.random() > 0.5 ? 0.8 : 0.4 }}>
                      {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )
        };
      default: // grid
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0',
          svg: (
            <svg 
              className={`absolute inset-0 w-full h-full ${animated ? 'animate-pan-grid' : ''} ${getOpacity()}`} 
              width="100%" 
              height="100%" 
              xmlns="http://www.w3.org/2000/svg"
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
                    strokeWidth="0.5" 
                    className="text-graphite-700" 
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          )
        };
    }
  };

  const pattern = getPattern();

  return (
    <div className={`${pattern.container} ${className}`}>
      {pattern.svg}
    </div>
  );
};

export default CommandPatternBackground;
