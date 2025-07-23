
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/3 via-transparent to-quantum-purple/3 pointer-events-none"></div>
      
      {/* Single subtle orb */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-quantum-cyan/8 blur-3xl"></div>
    </>
  );
};

export default HeroBackgroundEffects;
