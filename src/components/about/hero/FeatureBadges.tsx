
import React from 'react';
import { Beaker, Shield, Users } from 'lucide-react';

interface FeatureBadgesProps {
  isVisible: boolean;
}

const FeatureBadges: React.FC<FeatureBadgesProps> = ({ isVisible }) => {
  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-bio-green hover:border-bio-green/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(142,228,175,0.3)]">
        <Beaker className="w-5 h-5 text-bio-green group-hover:scale-125 transition-transform duration-300" />
        <span>Research Driven</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-bio-blue hover:border-bio-blue/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(91,192,235,0.3)]">
        <Shield className="w-5 h-5 text-bio-blue group-hover:scale-125 transition-transform duration-300" />
        <span>On-Chain Governance</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gunmetal-900/70 border-2 border-logo-blue/40 text-sm text-titanium-white/90 font-mono hover:text-plasma-violet hover:border-plasma-violet/60 transition-all duration-300 group cursor-default shadow-lg hover:shadow-[0_0_15px_rgba(161,98,255,0.3)]">
        <Users className="w-5 h-5 text-plasma-violet group-hover:scale-125 transition-transform duration-300" />
        <span>Community Owned</span>
      </div>
    </div>
  );
};

export default FeatureBadges;
