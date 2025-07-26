
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Clean minimal quantum background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Single subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        
        {/* Two minimal orbs for depth */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-primary/8 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-radial from-accent/6 to-transparent blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Subtle circuit lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
