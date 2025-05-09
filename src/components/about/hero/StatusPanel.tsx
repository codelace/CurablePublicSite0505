
import React from 'react';
import StatusTicker from '@/components/StatusTicker';
import DesktopCTA from './DesktopCTA';
import { useIsMobile } from '@/hooks/use-mobile';

interface StatusPanelProps {
  isVisible: boolean;
  items: string[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ isVisible, items }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-2 mb-4 transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Status ticker */}
      <div className="w-full sm:flex-grow">
        <StatusTicker items={items} />
      </div>
      
      {/* CTA button - only show on desktop here, mobile is handled in CTASection */}
      {!isMobile && (
        <div className="sm:flex-shrink-0">
          <DesktopCTA />
        </div>
      )}
    </div>
  );
};

export default StatusPanel;
