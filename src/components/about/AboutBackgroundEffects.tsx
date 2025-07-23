
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import CircuitPattern from '@/components/patterns/CircuitPattern';
import NodesPattern from '@/components/patterns/NodesPattern';
import DotsPattern from '@/components/patterns/DotsPattern';

const AboutBackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Clean quantum pattern system */}
      <div className="absolute inset-0 opacity-15">
        <CircuitPattern 
          variant="circuit" 
          color="blue" 
          intensity="low" 
        />
      </div>
      
      {/* Subtle node pattern */}
      <div className="absolute inset-0 opacity-12">
        <NodesPattern 
          variant="nodes" 
          color="blue" 
          intensity="low" 
          animated={false}
        />
      </div>
      
      {/* Professional quantum gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/3 via-transparent to-quantum-purple/3"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-quantum-emerald/2 via-transparent to-quantum-indigo/2"></div>
      
      {/* Elegant quantum orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/5 to-transparent blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full bg-gradient-radial from-quantum-emerald/4 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "3s"}}></div>
      <div className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full bg-gradient-radial from-quantum-purple/3 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "6s"}}></div>
      
      {/* Professional field lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute w-full h-[1px] top-1/3 bg-gradient-to-r from-transparent via-quantum-cyan/40 to-transparent animate-magnetic-flow"></div>
        <div className="absolute w-full h-[1px] top-2/3 bg-gradient-to-r from-transparent via-quantum-purple/30 to-transparent animate-magnetic-flow" style={{animationDelay: "2s"}}></div>
      </div>
    </div>
  );
};

export default AboutBackgroundEffects;
