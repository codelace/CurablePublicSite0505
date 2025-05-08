
import React from 'react';

const AnimatedCircuitLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-plasma-violet/20 to-transparent data-flow"></div>
      <div className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-logo-blue/20 to-transparent data-flow" style={{animationDuration: "7s"}}></div>
      <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-bio-green/20 to-transparent data-flow" style={{animationDuration: "9s"}}></div>
    </div>
  );
};

export default AnimatedCircuitLines;
