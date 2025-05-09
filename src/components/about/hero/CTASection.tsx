
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileCTA from './MobileCTA';
import GlassPanel from '@/components/ui/GlassPanel';

interface CTASectionProps {
  isVisible: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ isVisible }) => {
  const isMobile = useIsMobile();

  // Only render on mobile - desktop CTA is now in StatusPanel
  if (!isMobile) return null;

  return (
    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <GlassPanel 
        borderGlow="red" 
        hover={true}
        intensity="medium"
      >
        <MobileCTA />
      </GlassPanel>
    </div>
  );
};

export default CTASection;
