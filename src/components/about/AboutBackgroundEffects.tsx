
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import CircuitPattern from '@/components/patterns/CircuitPattern';
import NodesPattern from '@/components/patterns/NodesPattern';
import DotsPattern from '@/components/patterns/DotsPattern';

const AboutBackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Rich quantum rainbow gradients */}
      <div className="absolute inset-0 bg-gradient-quantum-primary opacity-8"></div>
      <div className="absolute inset-0 bg-gradient-quantum-secondary opacity-6"></div>
      <div className="absolute inset-0 bg-gradient-quantum-accent opacity-4"></div>
      
      {/* Beautiful quantum rainbow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/8 to-transparent blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full bg-gradient-radial from-quantum-emerald/6 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "3s"}}></div>
      <div className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-gradient-radial from-quantum-purple/5 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "6s"}}></div>
      <div className="absolute bottom-1/4 left-2/3 w-64 h-64 rounded-full bg-gradient-radial from-quantum-amber/4 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "9s"}}></div>
      <div className="absolute top-1/2 left-1/4 w-56 h-56 rounded-full bg-gradient-radial from-quantum-rose/4 to-transparent blur-3xl animate-pulse-glow" style={{animationDelay: "12s"}}></div>
      
      {/* Quantum rainbow field lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute w-full h-[1px] top-1/3 bg-gradient-to-r from-transparent via-quantum-cyan/50 to-transparent animate-magnetic-flow"></div>
        <div className="absolute w-full h-[1px] top-2/3 bg-gradient-to-r from-transparent via-quantum-purple/40 to-transparent animate-magnetic-flow" style={{animationDelay: "2s"}}></div>
        <div className="absolute h-full w-[1px] left-1/3 bg-gradient-to-b from-transparent via-quantum-emerald/30 to-transparent animate-magnetic-flow" style={{animationDelay: "4s"}}></div>
      </div>
      
      {/* Keep the beautiful quantum rainbow field lines without dots */}
    </div>
  );
};

export default AboutBackgroundEffects;
