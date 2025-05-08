
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Enhanced background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-dark-surface/10 to-gunmetal-900 opacity-90"></div>
        
        {/* Enhanced particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-2 w-2 rounded-full bg-bio-blue/50 top-1/4 left-1/3 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute h-3 w-3 rounded-full bg-plasma-violet/40 top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-quantum-red/30 bottom-1/3 left-1/2 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute h-1 w-1 rounded-full bg-bio-green/50 top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute h-2 w-2 rounded-full bg-logo-blue/40 bottom-1/4 right-1/3 animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Add more decorative elements */}
          <div className="absolute top-[10%] right-[15%] w-48 h-48 rounded-full bg-plasma-violet/5 blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-[20%] left-[10%] w-64 h-64 rounded-full bg-logo-blue/5 blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(30,174,219,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,174,219,0.1)_1px,transparent_1px)]" style={{backgroundSize: "50px 50px"}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
