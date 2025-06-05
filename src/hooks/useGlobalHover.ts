
import { useState, useCallback, useRef, useEffect } from 'react';

interface GlobalHoverState {
  activeCard: string | null;
  setActiveCard: (id: string | null) => void;
  registerCard: (id: string, onShow: () => void, onHide: () => void) => void;
  unregisterCard: (id: string) => void;
}

class GlobalHoverManager {
  private activeCard: string | null = null;
  private cards = new Map<string, { onShow: () => void; onHide: () => void }>();
  private listeners = new Set<(activeCard: string | null) => void>();
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  setActiveCard(id: string | null) {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    if (id === this.activeCard) return;

    // Hide current active card
    if (this.activeCard && this.cards.has(this.activeCard)) {
      this.cards.get(this.activeCard)?.onHide();
    }

    this.activeCard = id;

    // Show new active card
    if (id && this.cards.has(id)) {
      this.cards.get(id)?.onShow();
    }

    this.notifyListeners();
  }

  scheduleHide(delay: number = 150) {
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

  registerCard(id: string, onShow: () => void, onHide: () => void) {
    this.cards.set(id, { onShow, onHide });
  }

  unregisterCard(id: string) {
    this.cards.delete(id);
    if (this.activeCard === id) {
      this.activeCard = null;
      this.notifyListeners();
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShow = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleHide = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    globalHoverManager.registerCard(cardId, handleShow, handleHide);
    
    const unsubscribe = globalHoverManager.subscribe((activeCard) => {
      setIsActive(activeCard === cardId);
    });

    return () => {
      globalHoverManager.unregisterCard(cardId);
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [cardId, handleShow, handleHide]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    globalHoverManager.cancelScheduledHide();
    
    // Small delay to prevent flicker
    timeoutRef.current = setTimeout(() => {
      globalHoverManager.setActiveCard(cardId);
    }, 50);
  }, [cardId]);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    globalHoverManager.scheduleHide(100);
  }, []);

  return {
    isActive,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}
