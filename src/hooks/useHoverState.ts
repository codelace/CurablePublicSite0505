
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseHoverStateOptions {
  delay?: number;
  exitDelay?: number;
  isQuickSwitch?: boolean; // Add option for quick switching between elements
}

export function useHoverState(options: UseHoverStateOptions = {}) {
  const { delay = 0, exitDelay = 300, isQuickSwitch = false } = options;
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
    
    // For quick switch, use a much lower delay or no delay
    const effectiveDelay = isQuickSwitch ? 0 : delay;
    
    if (effectiveDelay > 0) {
      enterTimerRef.current = setTimeout(() => {
        setIsActive(true);
        enterTimerRef.current = null;
      }, effectiveDelay);
    } else {
      setIsActive(true);
    }
  }, [delay, isQuickSwitch]);
  
  const handleMouseLeave = useCallback(() => {
    // Clear any existing enter timer
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    
    setIsHovered(false);
    
    // For quick switching, use a much shorter exit delay
    const effectiveExitDelay = isQuickSwitch ? 50 : exitDelay;
    
    if (effectiveExitDelay > 0) {
      exitTimerRef.current = setTimeout(() => {
        setIsActive(false);
        exitTimerRef.current = null;
      }, effectiveExitDelay);
    } else {
      setIsActive(false);
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
