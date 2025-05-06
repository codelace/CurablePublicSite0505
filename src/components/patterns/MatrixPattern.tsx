
import React from 'react';
import { PatternProps, getOpacity } from './types';

const MatrixPattern: React.FC<PatternProps> = ({
  intensity = 'medium',
  animated = true,
  color = 'blue'
}) => {
  return (
    <div className={`absolute inset-0 font-mono ${color === 'green' ? 'text-bio-green/15' : color === 'violet' ? 'text-plasma-violet/15' : 'text-bio-blue/15'} ${getOpacity(intensity)}`}>
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
  );
};

export default MatrixPattern;
