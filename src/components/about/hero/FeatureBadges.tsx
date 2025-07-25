
import React from 'react';
import { Beaker, Shield, Users } from 'lucide-react';

interface FeatureBadgesProps {
  isVisible: boolean;
}

const FeatureBadges: React.FC<FeatureBadgesProps> = ({ isVisible }) => {
  const features = [
    { icon: Beaker, text: "Research Driven", delay: "300ms" },
    { icon: Shield, text: "On-Chain Governance", delay: "400ms" },
    { icon: Users, text: "Community Owned", delay: "500ms" }
  ];

  return (
    <div className={`flex flex-wrap gap-4 sm:gap-6 mb-8 justify-center sm:justify-start transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {features.map(({ icon: Icon, text, delay }, index) => (
        <div 
          key={text}
          className="magnetic-attraction card-quantum-pro quantum-field flex items-center gap-3 px-5 py-3 rounded-xl bg-gunmetal-900/80 border-2 border-spectral-crimson/40 text-sm text-titanium-white font-poppins hover:border-spectral-crimson/70 transition-all duration-500 group cursor-default shadow-xl shadow-spectral-crimson/30 hover:shadow-spectral-crimson/50 backdrop-blur-md hover:scale-105"
          style={{ 
            transitionDelay: isVisible ? delay : '0ms',
            background: 'linear-gradient(135deg, rgba(33, 37, 41, 0.9), rgba(52, 58, 64, 0.8))'
          }}
        >
          <Icon className="w-5 h-5 text-spectral-crimson group-hover:text-cosmic-indigo transition-colors duration-500 group-hover:scale-110" />
          <span className="holographic-text font-medium tracking-wide">{text}</span>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-spectral-crimson/10 via-transparent to-cosmic-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBadges;
