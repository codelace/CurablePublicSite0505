import { Button } from '@/components/ui/button';
import { CategoryFilter } from './CategoryFilter';
import { Shuffle, Play, Pause } from 'lucide-react';
import type { Haiku } from '@/data/haikus';

interface PoetryControlsProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  filteredHaikus: Haiku[];
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  onShowRandom: () => void;
  onClearAll: () => void;
}

export const PoetryControls = ({
  categories,
  activeCategory,
  onCategoryChange,
  filteredHaikus,
  isAutoPlay,
  onToggleAutoPlay,
  onShowRandom,
  onClearAll
}: PoetryControlsProps) => {
  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
      <div className="glass-panel p-4 backdrop-blur-xl bg-dark-surface/20 border border-warm-rose/20 rounded-xl pointer-events-auto">
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          haikus={filteredHaikus}
        />
        
        <div className="flex justify-center gap-4 mt-4">
          <Button
            onClick={onToggleAutoPlay}
            variant="outline"
            size="sm"
            className={`font-mono transition-all duration-300 pointer-events-auto ${
              isAutoPlay 
                ? 'bg-warm-rose/20 text-warm-rose border-warm-rose/50' 
                : 'bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-rose/20 hover:text-warm-rose'
            }`}
          >
            {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isAutoPlay ? 'Auto-Play On' : 'Auto-Play Off'}
          </Button>
          
          <Button
            onClick={onShowRandom}
            variant="outline"
            size="sm"
            className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-logo-blue/20 hover:text-logo-blue transition-all duration-300 pointer-events-auto"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Show Random
          </Button>
          
          <Button
            onClick={onClearAll}
            variant="outline"
            size="sm"
            className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-coral/20 hover:text-warm-coral transition-all duration-300 pointer-events-auto"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};