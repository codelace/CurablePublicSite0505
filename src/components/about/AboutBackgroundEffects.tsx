
import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import CircuitPattern from '@/components/patterns/CircuitPattern';
import NodesPattern from '@/components/patterns/NodesPattern';
import DotsPattern from '@/components/patterns/DotsPattern';

const AboutBackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base circuit pattern with warmer coloring */}
      <div className="absolute inset-0 opacity-40">
        <CircuitPattern 
          variant="circuit" 
          color="red" 
          intensity="medium" 
        />
      </div>
      
      {/* Node pattern with warmer colors */}
      <div className="absolute inset-0 opacity-50">
        <NodesPattern 
          variant="nodes" 
          color="red" 
          intensity="low" 
          animated={false}
        />
      </div>
      
      {/* Add dots pattern for enhanced warm aesthetic */}
      <div className="absolute inset-0 opacity-30">
        <DotsPattern 
          variant="dots" 
          color="red" 
          intensity="low" 
          animated={true}
          speed="slow"
        />
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="fixed inset-0 z-1 pointer-events-none bg-gradient-radial opacity-90"></div>
      
      {/* Enhanced warm glow spots */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-warm-rose/8 blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-warm-amber/8 blur-3xl animate-pulse-glow" style={{animationDelay: "1.5s"}}></div>
      <div className="absolute bottom-2/3 right-1/3 w-36 h-36 rounded-full bg-warm-coral/5 blur-3xl animate-pulse-subtle" style={{animationDelay: "3s"}}></div>
      
      {/* Magnetic field lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[1px] top-1/3 bg-gradient-to-r from-transparent via-quantum-red/60 to-transparent animate-magnetic-flow"></div>
        <div className="absolute w-full h-[1px] top-2/3 bg-gradient-to-r from-transparent via-brand-charcoal/70 to-transparent animate-magnetic-flow" style={{animationDelay: "1s"}}></div>
      </div>
    </div>
  );
};

export default AboutBackgroundEffects;
