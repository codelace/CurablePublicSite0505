import { useState, useEffect, useCallback } from 'react';
import { PoetryBackground } from '@/components/poetry/PoetryBackground';
import { PoetryTitle } from '@/components/poetry/PoetryTitle';
import { PoetryControls } from '@/components/poetry/PoetryControls';
import { HaikuDisplay } from '@/components/poetry/HaikuDisplay';
import { PoetryFooter } from '@/components/poetry/PoetryFooter';
import { haikus } from '@/data/haikus';

const Poetry = () => {
  // State management
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [displayedHaikus, setDisplayedHaikus] = useState<number[]>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  // Derived state
  const categories = Array.from(new Set(haikus.map(h => h.category)));
  const filteredHaikus = activeCategory 
    ? haikus.filter(h => h.category === activeCategory)
    : haikus;

  // Event handlers
  const addRandomHaiku = useCallback(() => {
    console.log('addRandomHaiku called');
    console.log('filteredHaikus.length:', filteredHaikus.length);
    console.log('displayedHaikus:', displayedHaikus);
    
    if (filteredHaikus.length === 0) {
      console.log('No filtered haikus available');
      return;
    }
    
    const availableHaikus = filteredHaikus.filter(h => !displayedHaikus.includes(h.id));
    console.log('availableHaikus.length:', availableHaikus.length);
    
    if (availableHaikus.length === 0) {
      console.log('No available haikus (all already displayed)');
      return;
    }
    
    const randomHaiku = availableHaikus[Math.floor(Math.random() * availableHaikus.length)];
    console.log('Selected haiku:', randomHaiku);
    
    setDisplayedHaikus(prev => {
      const newDisplayed = [...prev, randomHaiku.id];
      console.log('New displayed haikus:', newDisplayed);
      return newDisplayed;
    });
  }, [filteredHaikus, displayedHaikus]);

  const clearHaikus = useCallback(() => {
    console.log('clearHaikus called');
    setDisplayedHaikus([]);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    console.log('Auto-play button clicked, current state:', isAutoPlay);
    setIsAutoPlay(prev => !prev);
  }, [isAutoPlay]);

  const handleHaikuComplete = useCallback((haikuId: number) => {
    setTimeout(() => {
      setDisplayedHaikus(prev => prev.filter(id => id !== haikuId));
    }, 3000);
  }, []);

  const handleCategoryChange = useCallback((category: string | null) => {
    console.log('Category changed to:', category);
    setActiveCategory(category);
  }, []);

  // Effects
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      if (displayedHaikus.length < 3) {
        addRandomHaiku();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, displayedHaikus, addRandomHaiku]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gunmetal-900">
      <PoetryBackground />
      
      <div className="relative z-10 min-h-screen">
        <PoetryTitle showTitle={showTitle} />

        <PoetryControls
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          filteredHaikus={filteredHaikus}
          isAutoPlay={isAutoPlay}
          onToggleAutoPlay={toggleAutoPlay}
          onShowRandom={addRandomHaiku}
          onClearAll={clearHaikus}
        />

        <HaikuDisplay
          displayedHaikus={displayedHaikus}
          onHaikuComplete={handleHaikuComplete}
        />

        <PoetryFooter
          displayedHaikus={displayedHaikus}
          isAutoPlay={isAutoPlay}
        />
      </div>
    </div>
  );
};

export default Poetry;