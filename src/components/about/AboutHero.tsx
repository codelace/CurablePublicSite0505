
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroBackgroundEffects from './hero/HeroBackgroundEffects';
import HeroHeader from './hero/HeroHeader';
import StatusPanel from './hero/StatusPanel';
import MissionPanel from './hero/MissionPanel';
import FeatureBadges from './hero/FeatureBadges';
import CTASection from './hero/CTASection';

const AboutHero = () => {
  const [displayedElements, setDisplayedElements] = useState<string[]>([]);
  const isMobile = useIsMobile();
  
  const [tickerItems] = useState([
    '🔬 Advanced protein modeling initiated',
    '⬇️ New TargetForge scaffold queued',
    '📊 Protocol v2.0 review in progress',
    '🧪 42 active experiments running',
    '💊 Novel cure candidates: 17',
    '🧬 Gene sequence analysis complete'
  ]);
  
  // Simplified animation - no staggered delays
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedElements(['header', 'ticker', 'mission', 'features', 'cta']);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10 w-full overflow-visible">
      {/* Simplified Background effects */}
      <HeroBackgroundEffects />
      
      {/* Clean header component */}
      <div className={`transition-all duration-500 ${displayedElements.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <HeroHeader isVisible={displayedElements.includes('header')} />
      </div>
      
      {/* Status panel without complex animations */}
      <div className={`transition-all duration-500 ${displayedElements.includes('ticker') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <StatusPanel 
          isVisible={displayedElements.includes('ticker')} 
          items={tickerItems} 
        />
      </div>
      
      {/* Mission statement panel */}
      <div className={`transition-all duration-500 ${displayedElements.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <MissionPanel />
      </div>
      
      {/* Feature badges - simplified */}
      <div className="my-6">
        <div className={`transition-all duration-500 ${displayedElements.includes('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <FeatureBadges isVisible={displayedElements.includes('features')} />
        </div>
      </div>
      
      {/* CTA section - clean */}
      <div className={`transition-all duration-500 ${displayedElements.includes('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <CTASection isVisible={displayedElements.includes('cta')} />
      </div>
    </div>
  );
};

export default AboutHero;
