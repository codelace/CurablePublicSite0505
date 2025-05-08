
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const AboutBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Enhanced fixed background patterns with more dramatic effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern with enhanced animations */}
        <div className="absolute inset-0">
          <CommandPatternBackground 
            variant="grid" 
            color="violet" 
            intensity="medium" 
            animated={true}
          />
        </div>
        
        {/* Node pattern overlay with intensified pulse */}
        <div className="absolute inset-0 opacity-70">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="high" 
            animated={true}
          />
        </div>
        
        {/* Enhanced floating particles with more dramatic animation */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute h-3 w-3 rounded-full bg-bio-blue/70 top-1/4 left-1/3 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute h-4 w-4 rounded-full bg-plasma-violet/60 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-quantum-red/50 bottom-1/3 left-1/2 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-bio-green/70 top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-logo-blue/60 bottom-1/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Added more particles for enhanced effect */}
          <div className="absolute h-2 w-2 rounded-full bg-bio-green/50 top-1/5 right-1/5 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-logo-blue/40 bottom-1/5 left-1/4 animate-ping" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Added circuit-like lines for futuristic effect */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute bottom-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute left-[10%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
          <div className="absolute right-[20%] h-full w-[1px] bg-gradient-to-b from-transparent via-logo-blue/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay for better depth and contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-dark-base/20 to-gunmetal-900/80"></div>
    </>
  );
};

export default AboutBackgroundEffects;
