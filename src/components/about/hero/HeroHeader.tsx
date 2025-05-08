
import React from 'react';
import CommandHUDHeader from '@/components/CommandHUDHeader';
import GradientText from '@/components/ui/GradientText';

interface HeroHeaderProps {
  isVisible: boolean;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ isVisible }) => {
  return (
    <div className={`relative mb-6 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/15 via-plasma-violet/20 to-bio-green/15 rounded-xl blur-md"></div>
      <CommandHUDHeader 
        title={
          <>
            <span className="text-titanium-white">The Future of Cures: </span>
            <span className="text-logo-blue">Molecule-to-Market</span>
          </>
        }
        subtitle={<>Decentralized <GradientText variant="blue-purple">research & development</GradientText> protocol</>} 
        statusText="CURABLE CORE ACTIVE"
        animated={false}
      />
    </div>
  );
};

export default HeroHeader;
