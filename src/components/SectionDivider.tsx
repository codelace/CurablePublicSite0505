
import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spectral-crimson/30 to-transparent animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cosmic-indigo rounded-full glow-pulse" />
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-spectral-glow rounded-full animate-pulse" />
      <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cosmic-aura rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
    </div>
  );
};

export default SectionDivider;
