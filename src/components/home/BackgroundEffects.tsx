
import React from 'react';
import AnimatedCircuitLines from '@/components/home/AnimatedCircuitLines';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Performance-optimized quantum background system */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Enhanced quantum rainbow background system */}
        <div className="absolute inset-0 opacity-8">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--quantum-cyan))_1px,transparent_1px),radial-gradient(circle_at_80%_70%,hsl(var(--quantum-purple))_1px,transparent_1px),radial-gradient(circle_at_60%_40%,hsl(var(--quantum-emerald))_1px,transparent_1px),radial-gradient(circle_at_40%_80%,hsl(var(--quantum-amber))_1px,transparent_1px)] bg-[length:120px_120px,140px_140px,100px_100px,110px_110px] animate-pulse"></div>
        </div>
        
        {/* Rich multi-layered quantum rainbow gradients */}
        <div className="absolute inset-0 bg-gradient-quantum-primary opacity-12"></div>
        <div className="absolute inset-0 bg-gradient-quantum-secondary opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-quantum-accent opacity-8"></div>
        <div className="absolute inset-0 bg-gradient-quantum-aurora opacity-6"></div>
        
        {/* Enhanced quantum rainbow orbs with more colors */}
        <div className="absolute top-[20%] right-[18%] w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/8 to-transparent blur-3xl animate-pulse-glow will-change-transform"></div>
        <div className="absolute bottom-[25%] left-[12%] w-88 h-88 rounded-full bg-gradient-radial from-quantum-emerald/7 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-[55%] right-[8%] w-80 h-80 rounded-full bg-gradient-radial from-quantum-purple/6 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '6s'}}></div>
        <div className="absolute bottom-[40%] left-[70%] w-72 h-72 rounded-full bg-gradient-radial from-quantum-amber/5 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '9s'}}></div>
        <div className="absolute top-[35%] left-[5%] w-64 h-64 rounded-full bg-gradient-radial from-quantum-rose/5 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '12s'}}></div>
        <div className="absolute bottom-[15%] right-[40%] w-68 h-68 rounded-full bg-gradient-radial from-quantum-mint/4 to-transparent blur-3xl animate-pulse-glow will-change-transform" style={{animationDelay: '15s'}}></div>
      </div>
      
      {/* Dynamic animated circuit lines */}
      <div className="absolute inset-0 z-0">
        <AnimatedCircuitLines />
      </div>
    </>
  );
};

export default BackgroundEffects;
