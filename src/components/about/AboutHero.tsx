
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
  
  // Simple staggered animation with slightly faster timing
  useEffect(() => {
    const elements = ['header', 'ticker', 'mission', 'features', 'cta'];
    
    const showElements = async () => {
      for (const element of elements) {
        await new Promise(resolve => setTimeout(resolve, 180));
        setDisplayedElements(prev => [...prev, element]);
      }
    };
    
    showElements();
  }, []);

  return (
    <div className="relative z-10 w-full overflow-visible">
      {/* Background effects */}
      <HeroBackgroundEffects />
      
      {/* Header component */}
      <HeroHeader isVisible={displayedElements.includes('header')} />
      
      {/* Status panel with ticker */}
      <StatusPanel 
        isVisible={displayedElements.includes('ticker')} 
        items={tickerItems} 
      />
      
      {/* Mission statement panel */}
      <div className={`transform transition-all duration-1000 ${displayedElements.includes('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <MissionPanel />
      </div>
      
      {/* Feature badges */}
      <FeatureBadges isVisible={displayedElements.includes('features')} />
      
      {/* CTA section (mobile or desktop) */}
      <CTASection isVisible={displayedElements.includes('cta')} />
    </div>
  );
};

export default AboutHero;
