
import React from 'react';

interface HeroStatusProps {
  items: Array<{
    label: string;
    status: 'connected' | 'pending' | 'offline';
  }>;
}

const HeroStatus: React.FC<HeroStatusProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {items.map((item, index) => (
        <div 
          key={index}
          className="inline-flex items-center px-3 py-1 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40"
        >
          <span 
            className={`w-2 h-2 rounded-full mr-2 ${
              item.status === 'connected' ? 'bg-arc-blue' : 
              item.status === 'pending' ? 'bg-amber-400' : 
              'bg-quantum-red'
            }`}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default HeroStatus;
