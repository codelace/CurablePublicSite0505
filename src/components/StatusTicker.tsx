
import React, { useState, useEffect } from 'react';

interface StatusTickerProps {
  items: string[];
  className?: string;
  interval?: number;
}

const StatusTicker: React.FC<StatusTickerProps> = ({
  items,
  className = '',
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) return null;

  return (
    <div className={`bg-gunmetal-900/60 backdrop-blur-sm border border-graphite-700/40 rounded-lg p-3 overflow-hidden ${className}`}>
      <div className="flex items-center space-x-4">
        <div className="whitespace-nowrap flex items-center font-mono text-plasma-violet animate-fade-in">
          <span className="text-logo-blue mr-2">$</span> {items[currentIndex]}
        </div>
      </div>
    </div>
  );
};

export default StatusTicker;
