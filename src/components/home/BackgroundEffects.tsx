
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Enhanced quantum rainbow background system */}
        <div className="absolute inset-0 opacity-6">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_80%_70%,hsl(var(--quantum-purple))_1px,transparent_1px),radial-gradient(circle_at_60%_40%,hsl(var(--quantum-emerald))_1px,transparent_1px)] bg-[length:120px_120px,140px_140px,100px_100px] animate-pulse"></div>
        </div>
        
        {/* Multi-layered quantum rainbow gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/4 via-quantum-purple/3 to-quantum-emerald/4"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-quantum-sapphire/3 via-quantum-violet/2 to-quantum-teal/3"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-quantum-mint/2 via-quantum-amber/2 to-quantum-rose/3"></div>
        
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
