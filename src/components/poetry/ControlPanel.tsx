import { Button } from '@/components/ui/button';
import { Play, Pause, Shuffle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Haiku } from '@/data/haikus';

interface ControlPanelProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  filteredHaikus: Haiku[];
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  onShowRandom: () => void;
  onClearAll: () => void;
  displayedCount: number;
}

export const ControlPanel = ({
  categories,
  activeCategory,
  onCategoryChange,
  filteredHaikus,
  isAutoPlay,
  onToggleAutoPlay,
  onShowRandom,
  onClearAll,
  displayedCount
}: ControlPanelProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'philosophy': return 'hover:bg-warm-rose/20 hover:text-warm-rose';
      case 'science': return 'hover:bg-logo-blue/20 hover:text-logo-blue';
      case 'healing': return 'hover:bg-warm-amber/20 hover:text-warm-amber';
      case 'technology': return 'hover:bg-warm-coral/20 hover:text-warm-coral';
      case 'nature': return 'hover:bg-emerald-400/20 hover:text-emerald-400';
      default: return 'hover:bg-titanium-white/20';
    }
  };

  const getActiveColor = (category: string) => {
    switch (category) {
      case 'philosophy': return 'bg-warm-rose/20 text-warm-rose border-warm-rose/50';
      case 'science': return 'bg-logo-blue/20 text-logo-blue border-logo-blue/50';
      case 'healing': return 'bg-warm-amber/20 text-warm-amber border-warm-amber/50';
      case 'technology': return 'bg-warm-coral/20 text-warm-coral border-warm-coral/50';
      case 'nature': return 'bg-emerald-400/20 text-emerald-400 border-emerald-400/50';
      default: return 'bg-titanium-white/20 text-titanium-white border-titanium-white/50';
    }
  };

  const getCategoryCount = (category: string) => {
    return filteredHaikus.filter(h => h.category === category).length;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-panel p-6 backdrop-blur-xl bg-dark-surface/20 border border-warm-rose/20 rounded-xl">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onCategoryChange(null)}
            className={`font-mono transition-all duration-300 ${
              activeCategory === null 
                ? 'bg-warm-rose/20 text-warm-rose border-warm-rose/50' 
                : 'bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-rose/20 hover:text-warm-rose'
            }`}
          >
            All ({filteredHaikus.length})
          </Button>
          
          {categories.map(category => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={`font-mono transition-all duration-300 capitalize ${
                activeCategory === category 
                  ? getActiveColor(category)
                  : `bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 ${getCategoryColor(category)}`
              }`}
            >
              {category} ({getCategoryCount(category)})
            </Button>
          ))}
        </div>
        
        {/* Control Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={onToggleAutoPlay}
            variant="outline"
            size="sm"
            className={`font-mono transition-all duration-300 ${
              isAutoPlay 
                ? 'bg-warm-rose/20 text-warm-rose border-warm-rose/50 shadow-warm-rose/20 shadow-lg' 
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
            disabled={displayedCount >= 3}
            className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-logo-blue/20 hover:text-logo-blue transition-all duration-300 disabled:opacity-50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Add Random
          </Button>
          
          <Button
            onClick={onClearAll}
            variant="outline"
            size="sm"
            disabled={displayedCount === 0}
            className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-coral/20 hover:text-warm-coral transition-all duration-300 disabled:opacity-50"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>

        {/* Status Indicator */}
        <div className="mt-4 text-center">
          <div className="text-xs text-titanium-white/60">
            {displayedCount} of 3 haikus displayed
          </div>
        </div>
      </div>
    </motion.div>
  );
};