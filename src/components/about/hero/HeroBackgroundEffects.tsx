
import React from 'react';

const HeroBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Rich quantum rainbow gradients */}
      <div className="absolute inset-0 bg-gradient-quantum-aurora opacity-12 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-quantum-spectrum opacity-8 pointer-events-none"></div>
      
      {/* Multiple quantum rainbow orbs */}
      <div className="absolute top-1/4 right-1/4 w-88 h-88 rounded-full bg-quantum-cyan/12 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full bg-quantum-emerald/10 blur-3xl animate-pulse-glow" style={{animationDelay: "2s"}}></div>
      <div className="absolute top-3/4 right-1/6 w-64 h-64 rounded-full bg-quantum-purple/8 blur-3xl animate-pulse-glow" style={{animationDelay: "4s"}}></div>
      <div className="absolute top-1/2 left-3/4 w-56 h-56 rounded-full bg-quantum-amber/6 blur-3xl animate-pulse-glow" style={{animationDelay: "6s"}}></div>
      
      {/* Quantum rainbow mesh pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_70%_70%,hsl(var(--quantum-purple))_1px,transparent_1px)] bg-[length:80px_80px,100px_100px] animate-pulse"></div>
      </div>
    </>
  );
};

export default HeroBackgroundEffects;
