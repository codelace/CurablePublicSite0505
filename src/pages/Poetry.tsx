import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PoetryBackground } from '@/components/poetry/PoetryBackground';
import { PoetryTitle } from '@/components/poetry/PoetryTitle';
import { PoetryFooter } from '@/components/poetry/PoetryFooter';
import { usePoetryEngine } from '@/components/poetry/PoetryEngine';
import { AutoPlayManager } from '@/components/poetry/AutoPlayManager';
import { HaikuRenderer } from '@/components/poetry/HaikuRenderer';
import { ControlPanel } from '@/components/poetry/ControlPanel';

const Poetry = () => {
  const [showTitle, setShowTitle] = useState(true);
  const { state, categories, filteredHaikus, displayedHaikuIds, actions } = usePoetryEngine();

  // Hide title after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gunmetal-900">
      <PoetryBackground />
      
      <div className="relative z-10 min-h-screen">
        <PoetryTitle showTitle={showTitle} />

        <ControlPanel
          categories={categories}
          activeCategory={state.activeCategory}
          onCategoryChange={actions.setCategory}
          filteredHaikus={filteredHaikus}
          isAutoPlay={state.isAutoPlay}
          onToggleAutoPlay={actions.toggleAutoPlay}
          onShowRandom={actions.addRandomHaiku}
          onClearAll={actions.clearAll}
          displayedCount={state.displayedHaikus.size}
        />

        {/* Haiku Display Area */}
        <div className="relative h-screen w-full">
          {Array.from(state.displayedHaikus.entries()).map(([haikuId, { haiku, position }], index) => (
            <HaikuRenderer
              key={`${haikuId}-${Date.now()}`}
              haiku={haiku}
              position={position}
              delay={index * 800}
              onComplete={() => actions.removeHaiku(haikuId)}
            />
          ))}
        </div>

        <AutoPlayManager
          isActive={state.isAutoPlay}
          displayedCount={state.displayedHaikus.size}
          maxDisplayed={state.maxDisplayed}
          onAddHaiku={actions.addRandomHaiku}
        />

        <PoetryFooter
          displayedHaikus={displayedHaikuIds}
          isAutoPlay={state.isAutoPlay}
        />
      </div>
    </div>
  );
};

export default Poetry;