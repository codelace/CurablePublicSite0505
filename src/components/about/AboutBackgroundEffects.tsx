
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import CircuitPattern from '@/components/patterns/CircuitPattern';
import NodesPattern from '@/components/patterns/NodesPattern';
import DotsPattern from '@/components/patterns/DotsPattern';

const AboutBackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Minimal, clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/2 via-transparent to-quantum-purple/2"></div>
      
      {/* Single elegant orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/4 to-transparent blur-3xl"></div>
      
      {/* Subtle field line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-full h-[1px] top-1/2 bg-gradient-to-r from-transparent via-quantum-cyan/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default AboutBackgroundEffects;
