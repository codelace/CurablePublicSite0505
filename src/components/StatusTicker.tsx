
import React, { useState, useEffect, useCallback, memo } from 'react';

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rotateItems = useCallback(() => {
    if (items.length <= 1) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setIsTransitioning(false);
    }, 300); // Transition duration
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) return;
    
    const timer = setInterval(rotateItems, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, rotateItems]);

  if (!items.length) return null;

  return (
    <div className={`bg-gunmetal-900/60 backdrop-blur-sm border border-graphite-700/40 rounded-lg p-3 overflow-hidden ${className}`}>
      <div className="flex items-center space-x-4 h-6">
        <div 
          className={`whitespace-nowrap flex items-center font-mono text-plasma-violet transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="text-logo-blue mr-2">$</span> {items[currentIndex]}
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(StatusTicker);
