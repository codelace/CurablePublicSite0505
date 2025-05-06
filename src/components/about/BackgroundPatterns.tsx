
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Static background patterns with NO animation */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern - static */}
        <CommandPatternBackground 
          variant="grid" 
          color="blue" 
          intensity="high" 
          animated={false} 
          className="pattern-static"
        />
        
        {/* Node pattern - static */}
        <CommandPatternBackground 
          variant="nodes" 
          color="violet" 
          intensity="high" 
          animated={false} 
          className="pattern-static"
        />
        
        {/* DNA pattern - static */}
        <CommandPatternBackground 
          variant="dna" 
          color="violet" 
          intensity="high" 
          animated={false} 
          className="pattern-static"
        />
      </div>
      
      {/* Static gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-80"></div>
    </>
  );
};

export default BackgroundPatterns;
