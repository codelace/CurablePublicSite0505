import { useState, useCallback, useMemo } from 'react';
import { haikus, type Haiku } from '@/data/haikus';

export interface PoetryState {
  activeCategory: string | null;
  displayedHaikus: Map<number, { haiku: Haiku; timestamp: number; position: { x: number; y: number } }>;
  isAutoPlay: boolean;
  maxDisplayed: number;
}

export const usePoetryEngine = () => {
  const [state, setState] = useState<PoetryState>({
    activeCategory: null,
    displayedHaikus: new Map(),
    isAutoPlay: false,
    maxDisplayed: 3
  });

  // Derived state
  const categories = useMemo(() => 
    Array.from(new Set(haikus.map(h => h.category))), []
  );

  const filteredHaikus = useMemo(() => 
    state.activeCategory 
      ? haikus.filter(h => h.category === state.activeCategory)
      : haikus
  , [state.activeCategory]);

  const displayedHaikuIds = useMemo(() => 
    Array.from(state.displayedHaikus.keys()), [state.displayedHaikus]
  );

  // Generate random position that doesn't overlap with existing ones
  const generatePosition = useCallback(() => {
    const existingPositions = Array.from(state.displayedHaikus.values()).map(item => item.position);
    let attempts = 0;
    let position;

    do {
      position = {
        x: Math.random() * 60 + 20, // 20% to 80% from left
        y: Math.random() * 50 + 25  // 25% to 75% from top
      };
      attempts++;
    } while (
      attempts < 20 && 
      existingPositions.some(existing => 
        Math.abs(existing.x - position.x) < 25 || Math.abs(existing.y - position.y) < 20
      )
    );

    return position;
  }, [state.displayedHaikus]);

  // Actions
  const setCategory = useCallback((category: string | null) => {
    setState(prev => ({ ...prev, activeCategory: category }));
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setState(prev => ({ ...prev, isAutoPlay: !prev.isAutoPlay }));
  }, []);

  const addRandomHaiku = useCallback(() => {
    setState(prev => {
      if (prev.displayedHaikus.size >= prev.maxDisplayed) return prev;

      const currentFilteredHaikus = state.activeCategory 
        ? haikus.filter(h => h.category === state.activeCategory)
        : haikus;
      
      const availableHaikus = currentFilteredHaikus.filter(h => !prev.displayedHaikus.has(h.id));
      if (availableHaikus.length === 0) return prev;

      const randomHaiku = availableHaikus[Math.floor(Math.random() * availableHaikus.length)];
      
      // Generate position
      const existingPositions = Array.from(prev.displayedHaikus.values()).map(item => item.position);
      let attempts = 0;
      let position;

      do {
        position = {
          x: Math.random() * 60 + 20,
          y: Math.random() * 50 + 25
        };
        attempts++;
      } while (
        attempts < 20 && 
        existingPositions.some(existing => 
          Math.abs(existing.x - position.x) < 25 || Math.abs(existing.y - position.y) < 20
        )
      );

      return {
        ...prev,
        displayedHaikus: new Map([
          ...prev.displayedHaikus,
          [randomHaiku.id, { 
            haiku: randomHaiku, 
            timestamp: Date.now(),
            position 
          }]
        ])
      };
    });
  }, [state.activeCategory]);

  const removeHaiku = useCallback((haikuId: number) => {
    setState(prev => {
      const newDisplayed = new Map(prev.displayedHaikus);
      newDisplayed.delete(haikuId);
      return { ...prev, displayedHaikus: newDisplayed };
    });
  }, []);

  const clearAll = useCallback(() => {
    setState(prev => ({ ...prev, displayedHaikus: new Map() }));
  }, []);

  return {
    state,
    categories,
    filteredHaikus,
    displayedHaikuIds,
    actions: {
      setCategory,
      toggleAutoPlay,
      addRandomHaiku,
      removeHaiku,
      clearAll
    }
  };
};