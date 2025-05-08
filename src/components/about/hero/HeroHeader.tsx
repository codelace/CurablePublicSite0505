
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import GradientText from '@/components/ui/GradientText';

interface HeroHeaderProps {
  isVisible: boolean;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ isVisible }) => {
  return (
    <div className={`relative mb-6 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-quantum-red/15 via-plasma-violet/15 to-quantum-red/10 rounded-xl blur-md"></div>
      <CommandHUDHeader 
        title={
          <>
            <span className="text-titanium-white">The Future of Cures: </span>
            <span className="text-quantum-red">Molecule-to-Market</span>
          </>
        }
        subtitle={<>Decentralized <GradientText variant="red-purple">research & development</GradientText> protocol</>} 
        statusText="CURABLE CORE ACTIVE"
        animated={false}
      />
    </div>
  );
};

export default HeroHeader;
