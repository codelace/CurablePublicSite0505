
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
          className="inline-flex items-center px-3 py-1 rounded-full font-poppins text-xs bg-brand-charcoal/70 border border-quantum-red/40 text-foreground"
        >
          <span 
            className={`w-2 h-2 rounded-full mr-2 ${
              item.status === 'connected' ? 'bg-logo-blue' : 
              item.status === 'pending' ? 'bg-warm-amber' : 
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
