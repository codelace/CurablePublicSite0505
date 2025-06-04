
import { useState, useCallback, useEffect } from 'react';

class GlobalHoverManager {
  private activeCard: string | null = null;
  private listeners = new Set<(activeCard: string | null) => void>();
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  setActiveCard(id: string | null) {
    // Clear any pending hide timer
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    // Only update if different
    if (id === this.activeCard) return;

    this.activeCard = id;
    this.notifyListeners();
  }

  scheduleHide(delay: number = 100) {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }
    
    this.hideTimer = setTimeout(() => {
      this.setActiveCard(null);
    }, delay);
  }

  cancelScheduledHide() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  subscribe(listener: (activeCard: string | null) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  getActiveCard() {
    return this.activeCard;
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.activeCard));
  }
}

const globalHoverManager = new GlobalHoverManager();

export function useGlobalHover(cardId: string) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const unsubscribe = globalHoverManager.subscribe((activeCard) => {
      setIsActive(activeCard === cardId);
    });

    return unsubscribe;
  }, [cardId]);

  const handleMouseEnter = useCallback(() => {
    globalHoverManager.cancelScheduledHide();
    globalHoverManager.setActiveCard(cardId);
  }, [cardId]);

  const handleMouseLeave = useCallback(() => {
    globalHoverManager.scheduleHide(50);
  }, []);

  return {
    isActive,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}
