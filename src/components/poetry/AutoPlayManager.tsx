import { useEffect, useRef } from 'react';

interface AutoPlayManagerProps {
  isActive: boolean;
  displayedCount: number;
  maxDisplayed: number;
  onAddHaiku: () => void;
  interval?: number;
}

export const AutoPlayManager = ({ 
  isActive, 
  displayedCount, 
  maxDisplayed, 
  onAddHaiku, 
  interval = 4000 
}: AutoPlayManagerProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      if (displayedCount < maxDisplayed) {
        onAddHaiku();
      }
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, displayedCount, maxDisplayed, onAddHaiku, interval]);

  return null;
};