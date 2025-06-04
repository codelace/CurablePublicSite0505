
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseHoverStateOptions {
  delay?: number;
  exitDelay?: number;
  isQuickSwitch?: boolean;
}

export function useHoverState(options: UseHoverStateOptions = {}) {
  const { 
    delay = 50, // Small delay to prevent flickering
    exitDelay = 150, // Longer exit delay for better UX
    isQuickSwitch = true 
  } = options;
  
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMouseOverRef = useRef(false);
  
  // Clear all timers on unmount
  useEffect(() => {
    return () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);
  
  const handleMouseEnter = useCallback(() => {
    isMouseOverRef.current = true;
    
    // Clear any existing exit timer
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    
    setIsHovered(true);
    
    // Always use a small delay to prevent rapid flickering
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    enterTimerRef.current = setTimeout(() => {
      if (isMouseOverRef.current) {
        setIsActive(true);
      }
    }, delay);
  }, [delay]);
  
  const handleMouseLeave = useCallback(() => {
    isMouseOverRef.current = false;
    
    // Clear any existing enter timer
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
    
    setIsHovered(false);
    
    // Use exit delay for better UX
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    exitTimerRef.current = setTimeout(() => {
      if (!isMouseOverRef.current) {
        setIsActive(false);
      }
    }, exitDelay);
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
