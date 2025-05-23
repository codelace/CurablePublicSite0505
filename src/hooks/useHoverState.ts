
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseHoverStateOptions {
  delay?: number;
  exitDelay?: number;
  isQuickSwitch?: boolean;
}

export function useHoverState(options: UseHoverStateOptions = {}) {
  // Use zero delays for instant transitions by default
  const { 
    delay = 0, 
    exitDelay = 0, 
    isQuickSwitch = true 
  } = options;
  
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
    
    // If delay is specified, use timer, otherwise activate immediately
    if (delay > 0) {
      enterTimerRef.current = setTimeout(() => {
        setIsActive(true);
      }, delay);
    } else {
      setIsActive(true); // Immediate activation
    }
    
    setIsHovered(true);
  }, [delay]);
  
  const handleMouseLeave = useCallback(() => {
    // Clear any existing enter timer
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    
    setIsHovered(false);
    
    // If exitDelay is specified and not quick switch mode, use timer
    if (exitDelay > 0 && !isQuickSwitch) {
      exitTimerRef.current = setTimeout(() => {
        setIsActive(false);
      }, exitDelay);
    } else {
      setIsActive(false); // Immediate deactivation for quick switching
    }
  }, [exitDelay, isQuickSwitch]);
  
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
