
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
          className="inline-flex items-center px-3 py-1 rounded-full font-poppins text-xs bg-card/70 backdrop-blur-sm border border-spectral-crimson/40 text-foreground quantum-backdrop"
        >
          <span 
            className={`w-2 h-2 rounded-full mr-2 glow-pulse ${
              item.status === 'connected' ? 'bg-cosmic-aura' : 
              item.status === 'pending' ? 'bg-spectral-glow' : 
              'bg-spectral-crimson'
            }`}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default HeroStatus;
