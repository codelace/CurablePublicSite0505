
import React from 'react';
import { Beaker, Shield, Users } from 'lucide-react';

interface FeatureBadgesProps {
  isVisible: boolean;
}

const FeatureBadges: React.FC<FeatureBadgesProps> = ({ isVisible }) => {
  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="magnetic-attraction card-quantum-pro quantum-field flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-charcoal/60 border-2 border-quantum-red/30 text-sm text-foreground/90 font-poppins hover:border-quantum-red/50 transition-all duration-300 group cursor-default shadow-lg shadow-quantum-red/20">
        <Beaker className="w-4 h-4 text-quantum-red group-hover:text-quantum-red/80 transition-colors duration-300" />
        <span className="holographic-text">Research Driven</span>
      </div>
      <div className="magnetic-attraction card-quantum-pro quantum-field flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-charcoal/60 border-2 border-quantum-red/30 text-sm text-foreground/90 font-poppins hover:border-quantum-red/50 transition-all duration-300 group cursor-default shadow-lg shadow-quantum-red/20">
        <Shield className="w-4 h-4 text-quantum-red group-hover:text-quantum-red/80 transition-colors duration-300" />
        <span className="holographic-text">On-Chain Governance</span>
      </div>
      <div className="magnetic-attraction card-quantum-pro quantum-field flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-charcoal/60 border-2 border-quantum-red/30 text-sm text-foreground/90 font-poppins hover:border-quantum-red/50 transition-all duration-300 group cursor-default shadow-lg shadow-quantum-red/20">
        <Users className="w-4 h-4 text-quantum-red group-hover:text-quantum-red/80 transition-colors duration-300" />
        <span className="holographic-text">Community Owned</span>
      </div>
    </div>
  );
};

export default FeatureBadges;
