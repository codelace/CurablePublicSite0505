
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Consistent background patterns with the rest of the app */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base grid pattern */}
        <div className="absolute inset-0">
          <CommandPatternBackground 
            variant="grid" 
            color="violet" 
            intensity="medium" 
            animated={true}
          />
        </div>
        
        {/* Node pattern - using violet to match other pages */}
        <div className="absolute inset-0 opacity-60">
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="medium" 
            animated={false}
          />
        </div>
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-90"></div>
    </>
  );
};

export default BackgroundPatterns;
