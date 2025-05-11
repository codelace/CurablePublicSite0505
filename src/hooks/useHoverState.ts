
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseHoverStateOptions {
  delay?: number;
  exitDelay?: number;
}

export function useHoverState(options: UseHoverStateOptions = {}) {
  const { delay = 0, exitDelay = 300 } = options;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);
  
  const handleMouseEnter = useCallback(() => {
    // Clear any existing exit timer
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    
    setIsHovered(true);
    
    if (delay > 0) {
      enterTimerRef.current = setTimeout(() => {
        setIsActive(true);
        enterTimerRef.current = null;
      }, delay);
    } else {
      setIsActive(true);
    }
  }, [delay]);
  
  const handleMouseLeave = useCallback(() => {
    // Clear any existing enter timer
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    
    setIsHovered(false);
    
    // Add a slight delay before hiding to prevent flickering
    // when moving between child elements
    if (exitDelay > 0) {
      exitTimerRef.current = setTimeout(() => {
        setIsActive(false);
        exitTimerRef.current = null;
      }, exitDelay);
    } else {
      setIsActive(false);
    }
  }, [exitDelay]);
  
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
