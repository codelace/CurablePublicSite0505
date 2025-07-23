
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Minimal quantum background system - reduced dots */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_70%,hsl(var(--quantum-cyan))_1px,transparent_1px)] bg-[length:200px_200px] animate-pulse"></div>
        </div>
        
        {/* Rich multi-layered quantum rainbow gradients */}
        <div className="absolute inset-0 bg-gradient-quantum-primary opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-quantum-secondary opacity-8"></div>
        <div className="absolute inset-0 bg-gradient-quantum-accent opacity-6"></div>
        <div className="absolute inset-0 bg-gradient-quantum-subtle opacity-15"></div>
        
        {/* Professional quantum orbs with varied colors */}
        <div className="absolute top-[20%] right-[18%] w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/6 to-transparent blur-3xl animate-pulse-glow will-change-transform"></div>
        <div className="absolute bottom-[25%] left-[12%] w-80 h-80 rounded-full bg-gradient-radial from-quantum-emerald/5 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[55%] right-[8%] w-72 h-72 rounded-full bg-gradient-radial from-quantum-violet/4 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-[40%] left-[70%] w-64 h-64 rounded-full bg-gradient-radial from-quantum-sapphire/4 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '9s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
