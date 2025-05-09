
import React from 'react';
import StatusTicker from '@/components/StatusTicker';
import GlassPanel from '@/components/ui/GlassPanel';

interface StatusPanelProps {
  isVisible: boolean;
  items: string[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ isVisible, items }) => {
  return (
    <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <GlassPanel 
        className="mb-4 warm-border"
        borderGlow="red"
        hover={true}
        intensity="medium"
      >
        {/* Warm pulse highlight for important status updates */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-warm-rose/50 animate-warm-pulse"></div>
        
        {/* Enhanced status ticker */}
        <div className="relative overflow-hidden h-8">
          <StatusTicker items={items} />
          
          {/* Scan line effect */}
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-warm-rose/30 to-transparent animate-scan-line"></div>
        </div>
      </GlassPanel>
    </div>
  );
};

export default StatusPanel;
