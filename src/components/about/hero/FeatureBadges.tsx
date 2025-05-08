
import React from 'react';
import { Beaker, Shield, Users } from 'lucide-react';

interface FeatureBadgesProps {
  isVisible: boolean;
}

const FeatureBadges: React.FC<FeatureBadgesProps> = ({ isVisible }) => {
  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-gunmetal-900/50 border border-logo-blue/20 text-sm text-titanium-white/90 font-mono hover:border-bio-green/40 transition-all duration-300 group cursor-default shadow-sm">
        <Beaker className="w-4 h-4 text-bio-green group-hover:scale-110 transition-transform duration-300" />
        <span>Research Driven</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-gunmetal-900/50 border border-logo-blue/20 text-sm text-titanium-white/90 font-mono hover:border-bio-blue/40 transition-all duration-300 group cursor-default shadow-sm">
        <Shield className="w-4 h-4 text-bio-blue group-hover:scale-110 transition-transform duration-300" />
        <span>On-Chain Governance</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-gunmetal-900/50 border border-logo-blue/20 text-sm text-titanium-white/90 font-mono hover:border-plasma-violet/40 transition-all duration-300 group cursor-default shadow-sm">
        <Users className="w-4 h-4 text-plasma-violet group-hover:scale-110 transition-transform duration-300" />
        <span>Community Owned</span>
      </div>
    </div>
  );
};

export default FeatureBadges;
