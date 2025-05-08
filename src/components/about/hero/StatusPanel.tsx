
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
        className="mb-6"
        borderGlow="red"
        hover={true}
        intensity="medium"
      >
        <StatusTicker items={items} />
      </GlassPanel>
    </div>
  );
};

export default StatusPanel;
