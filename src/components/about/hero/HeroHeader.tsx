
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';

interface HeroHeaderProps {
  isVisible: boolean;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ isVisible }) => {
  return (
    <div className={`relative mb-4 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Warmer, more magnetic background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-rose/20 via-warm-amber/15 to-warm-coral/15 rounded-xl blur-md"></div>
      
      {/* Magnetic field line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute left-0 right-0 top-1/3 h-px bg-warm-rose/30 magnetic-field-line"></div>
        <div className="absolute left-0 right-0 bottom-1/3 h-px bg-warm-amber/30 magnetic-field-line" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <CommandHUDHeader 
        title={
          <>
            <span className="text-foreground font-bold">The Future of Cures: </span>
            <span className="text-quantum-red font-bold glow-text">Molecule-to-Market</span>
          </>
        }
        subtitle={
          <>
            Decentralized <span className="text-quantum-red font-bold glow-text">research & development</span> protocol
          </>
        } 
        statusText="CURABLE CORE ACTIVE"
        animated={false}
      />
      
      {/* Heat distortion effect */}
      <div className="absolute inset-0 heat-distortion rounded-xl pointer-events-none"></div>
      
      {/* Warm corners effect */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-warm-rose/50 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-warm-amber/50 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-warm-coral/50 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-warm-rose/50 rounded-br-lg"></div>
    </div>
  );
};

export default HeroHeader;
