
import React from 'react';
import { Beaker, Shield, Users } from 'lucide-react';

interface FeatureBadgesProps {
  isVisible: boolean;
}

const FeatureBadges: React.FC<FeatureBadgesProps> = ({ isVisible }) => {
  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-brand-charcoal/50 border border-quantum-red/20 text-sm text-foreground/90 font-poppins hover:border-quantum-red/40 transition-all duration-300 group cursor-default shadow-sm hologram-panel">
        <Beaker className="w-4 h-4 text-quantum-red group-hover:text-quantum-red transition-colors duration-300" />
        <span>Research Driven</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-brand-charcoal/50 border border-quantum-red/20 text-sm text-foreground/90 font-poppins hover:border-quantum-red/40 transition-all duration-300 group cursor-default shadow-sm hologram-panel">
        <Shield className="w-4 h-4 text-quantum-red group-hover:text-quantum-red transition-colors duration-300" />
        <span>On-Chain Governance</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-brand-charcoal/50 border border-quantum-red/20 text-sm text-foreground/90 font-poppins hover:border-quantum-red/40 transition-all duration-300 group cursor-default shadow-sm hologram-panel">
        <Users className="w-4 h-4 text-quantum-red group-hover:text-quantum-red transition-colors duration-300" />
        <span>Community Owned</span>
      </div>
    </div>
  );
};

export default FeatureBadges;
