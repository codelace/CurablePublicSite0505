
import React from 'react';
import StatusTicker from '@/components/StatusTicker';

interface StatusPanelProps {
  isVisible: boolean;
  items: string[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ isVisible, items }) => {
  return (
    <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <StatusTicker 
        items={items} 
        className="mb-8 hover:shadow-[0_0_30px_rgba(30,174,219,0.4)] transition-all duration-500 glass-panel"
      />
    </div>
  );
};

export default StatusPanel;
