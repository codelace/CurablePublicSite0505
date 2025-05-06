
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';

const BackgroundPatterns = () => {
  return (
    <>
      {/* Static background patterns with NO animation - using inline styles to force no animation */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ animation: 'none !important' }}>
        {/* Base grid pattern - explicitly static */}
        <div className="pattern-static absolute inset-0" style={{ animation: 'none !important' }}>
          <CommandPatternBackground 
            variant="grid" 
            color="blue" 
            intensity="low" 
            animated={false} 
            className="pattern-static"
          />
        </div>
        
        {/* Node pattern - explicitly static */}
        <div className="pattern-static absolute inset-0" style={{ animation: 'none !important' }}>
          <CommandPatternBackground 
            variant="nodes" 
            color="violet" 
            intensity="low" 
            animated={false}
            className="pattern-static"
          />
        </div>
        
        {/* DNA pattern - explicitly static */}
        <div className="pattern-static absolute inset-0" style={{ animation: 'none !important' }}>
          <CommandPatternBackground 
            variant="dna" 
            color="violet" 
            intensity="low" 
            animated={false}
            className="pattern-static"
          />
        </div>
      </div>
      
      {/* Static gradient overlay to further reduce pattern visibility */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-radial opacity-90"></div>
    </>
  );
};

export default BackgroundPatterns;
