
import React from 'react';

interface CommandPatternBackgroundProps {
  variant?: 'dots' | 'grid' | 'nodes' | 'matrix' | 'dna' | 'circuit';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  color?: 'blue' | 'green' | 'violet' | 'multi';
}

const CommandPatternBackground: React.FC<CommandPatternBackgroundProps> = ({
  variant = 'grid',
  intensity = 'medium',
  animated = true,
  className = '',
  speed = 'medium',
  color = 'blue',
}) => {
  // Determine opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 'opacity-[0.08]';
      case 'high': return 'opacity-[0.20]';
      default: return 'opacity-[0.12]';
    }
  };

  // Determine animation speed
  const getAnimationSpeed = () => {
    switch (speed) {
      case 'slow': return 'animate-[pan-grid_30s_linear_infinite]';
      case 'fast': return 'animate-[pan-grid_10s_linear_infinite]';
      default: return 'animate-[pan-grid_20s_linear_infinite]';
    }
  };

  // Determine color scheme
  const getColor = () => {
    switch (color) {
      case 'green': return 'text-bio-green';
      case 'violet': return 'text-plasma-violet';
      case 'multi': return 'bg-gradient-to-br from-bio-blue via-plasma-violet to-quantum-red bg-clip-text';
      default: return 'text-bio-blue';
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
              className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed() : ''} ${getOpacity()} ${getColor()}`} 
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
          )
        };
      case 'nodes':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden',
          svg: (
            <div className={`absolute inset-0 ${getOpacity()}`}>
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={i}
                  className={`absolute rounded-full border border-arc-blue/40 ${color === 'violet' ? 'bg-plasma-violet/10' : color === 'green' ? 'bg-bio-green/10' : 'bg-arc-blue/10'}`}
                  style={{
                    width: `${Math.random() * 300 + 120}px`,
                    height: `${Math.random() * 300 + 120}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    opacity: Math.random() * 0.5 + 0.15,
                    animation: animated ? `pulse-glow ${Math.random() * 10 + 5}s infinite ease-in-out` : 'none'
                  }}
                />
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={`node-${i}`}
                  className={`absolute rounded-full ${color === 'violet' ? 'bg-plasma-violet/40' : color === 'green' ? 'bg-bio-green/40' : 'bg-arc-blue/40'}`}
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
            <div className={`absolute inset-0 font-mono ${color === 'green' ? 'text-bio-green/15' : color === 'violet' ? 'text-plasma-violet/15' : 'text-bio-blue/15'} ${getOpacity()}`}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute text-xs tracking-widest"
                  style={{
                    left: `${i * 5}%`,
                    top: 0,
                    width: '20px',
                    height: '100%',
                    animationDuration: `${Math.random() * 20 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    animation: animated ? 'code-flow infinite linear' : 'none'
                  }}
                >
                  {Array.from({ length: 60 }).map((_, j) => (
                    <div key={j} style={{ opacity: Math.random() > 0.5 ? 0.9 : 0.5 }}>
                      {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )
        };
      case 'dna':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0',
          svg: (
            <svg 
              className={`absolute inset-0 w-full h-full ${animated ? 'animate-rotate-slow' : ''} ${getOpacity()}`} 
              width="100%" 
              height="100%" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <radialGradient id="dna-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" className={`${color === 'violet' ? 'stop-color-plasma-violet' : color === 'green' ? 'stop-color-bio-green' : 'stop-color-bio-blue'}`} stopOpacity="0.4" />
                  <stop offset="100%" className={`${color === 'violet' ? 'stop-color-plasma-violet' : color === 'green' ? 'stop-color-bio-green' : 'stop-color-bio-blue'}`} stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* DNA Double Helix */}
              <g className={color === 'violet' ? 'stroke-plasma-violet/30' : color === 'green' ? 'stroke-bio-green/30' : 'stroke-bio-blue/30'} fill="none" strokeWidth="1.5">
                <path d="M300,100 Q500,300 300,500 Q100,700 300,900" />
                <path d="M700,100 Q500,300 700,500 Q900,700 700,900" />
                
                {/* Connecting lines between the helices */}
                {Array.from({ length: 10 }).map((_, i) => {
                  const y = 150 + i * 80;
                  const x1 = 300 + 200 * Math.sin((y - 100) * Math.PI / 400);
                  const x2 = 700 - 200 * Math.sin((y - 100) * Math.PI / 400);
                  return <line key={i} x1={x1} y1={y} x2={x2} y2={y} />
                })}
              </g>
              
              {/* DNA Nodes */}
              {Array.from({ length: 20 }).map((_, i) => {
                const y = 150 + i * 40;
                const isLeft = i % 2 === 0;
                const x = isLeft ? 
                  (300 + 200 * Math.sin((y - 100) * Math.PI / 400)) : 
                  (700 - 200 * Math.sin((y - 100) * Math.PI / 400));
                return (
                  <circle 
                    key={`node-${i}`} 
                    cx={x} 
                    cy={y} 
                    r="4" 
                    className={`${color === 'violet' ? 'fill-plasma-violet/50' : color === 'green' ? 'fill-bio-green/50' : 'fill-bio-blue/50'} ${animated ? 'animate-pulse-glow' : ''}`}
                  />
                );
              })}
            </svg>
          )
        };
      case 'circuit':
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0',
          svg: (
            <svg 
              className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed() : ''} ${getOpacity()}`} 
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
          )
        };
      default: // grid
        return {
          container: 'absolute inset-0 w-full h-full pointer-events-none z-0',
          svg: (
            <svg 
              className={`absolute inset-0 w-full h-full ${animated ? getAnimationSpeed() : ''} ${getOpacity()}`} 
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
                    strokeWidth="0.8" 
                    className={color === 'violet' ? 'text-plasma-violet/70' : color === 'green' ? 'text-bio-green/70' : 'text-bio-blue/70'} 
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
