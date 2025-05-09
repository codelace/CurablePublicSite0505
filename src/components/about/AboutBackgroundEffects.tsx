import React from 'react';
import CommandPatternBackground from '@/components/CommandPatternBackground';
import CircuitPattern from '@/components/patterns/CircuitPattern';
import NodesPattern from '@/components/patterns/NodesPattern';

interface PatternProps {
  variant: "grid" | "nodes" | "circuit" | "dna" | "dots" | "matrix";
  color: "blue" | "green" | "violet" | "multi" | "red";
  intensity: "low" | "medium" | "high";
  animated?: boolean;
}

const AboutBackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base circuit pattern */}
      <div className="absolute inset-0 opacity-40">
        <CircuitPattern 
          variant="circuit" 
          color="violet" 
          intensity="medium" 
        />
      </div>
      
      {/* Node pattern - using violet to match theme */}
      <div className="absolute inset-0 opacity-50">
        <NodesPattern 
          variant="nodes" 
          color="violet" 
          intensity="low" 
          animated={false}
        />
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="fixed inset-0 z-1 pointer-events-none bg-gradient-radial opacity-90"></div>
      
      {/* Warm glow spots */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-warm-rose/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-warm-amber/5 blur-3xl"></div>
    </div>
  );
};

export default AboutBackgroundEffects;
