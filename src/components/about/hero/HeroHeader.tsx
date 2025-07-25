
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import GradientText from '@/components/ui/GradientText';

interface HeroHeaderProps {
  isVisible: boolean;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ isVisible }) => {
  return (
    <div className={`relative mb-4 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Enhanced quantum background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-spectral-crimson/20 via-cosmic-indigo/15 to-spectral-glow/15 rounded-xl blur-md"></div>
      
      {/* Quantum field line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        <div className="absolute left-0 right-0 top-1/3 h-px bg-spectral-glow/30 quantum-field-line"></div>
        <div className="absolute left-0 right-0 bottom-1/3 h-px bg-cosmic-aura/30 quantum-field-line" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <CommandHUDHeader 
        title={
          <>
            <span className="text-foreground font-bold">The Future of Cures: </span>
            <span className="text-spectral-glow font-bold glow-cosmic">Molecule-to-Market</span>
          </>
        }
        subtitle={
          <>
            Decentralized <span className="text-cosmic-aura font-bold glow-spectral">research & development</span> protocol
          </>
        }
        statusText="CURABLE CORE ACTIVE"
        animated={false}
      />
      
      {/* Heat distortion effect */}
      <div className="absolute inset-0 heat-distortion rounded-xl pointer-events-none"></div>
      
      {/* Quantum corners effect */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-spectral-glow/50 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cosmic-aura/50 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-spectral-crimson/50 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cosmic-indigo/50 rounded-br-lg"></div>
    </div>
  );
};

export default HeroHeader;
