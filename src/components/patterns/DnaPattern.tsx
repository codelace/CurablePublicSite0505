
import React from 'react';
import { PatternProps, getOpacity } from './types';

const DnaPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue'
}) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full ${animated ? 'animate-rotate-slow' : ''} ${getOpacity(intensity)}`} 
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
            className={`${color === 'violet' ? 'fill-plasma-violet/50' : color === 'green' ? 'fill-bio-green/50' : 'fill-bio-blue/50'}`}
          />
        );
      })}
    </svg>
  );
};

export default DnaPattern;
