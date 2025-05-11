
import { useState, useCallback } from 'react';

interface UseHoverStateOptions {
  delay?: number;
}

export function useHoverState(options: UseHoverStateOptions = {}) {
  const { delay = 0 } = options;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    
    if (delay > 0) {
      setTimeout(() => {
        setIsActive(true);
      }, delay);
    } else {
      setIsActive(true);
    }
  }, [delay]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsActive(false);
  }, []);
  
  return {
    isHovered,
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}

export default useHoverState;
