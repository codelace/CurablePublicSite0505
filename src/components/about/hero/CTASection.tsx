
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileCTA from './MobileCTA';
import DesktopCTA from './DesktopCTA';
import GlassPanel from '@/components/ui/GlassPanel';

interface CTASectionProps {
  isVisible: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ isVisible }) => {
  const isMobile = useIsMobile();

  return (
    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <GlassPanel 
        borderGlow="red" 
        hover={true}
        intensity="medium"
      >
        {isMobile ? <MobileCTA /> : <DesktopCTA />}
      </GlassPanel>
    </div>
  );
};

export default CTASection;
