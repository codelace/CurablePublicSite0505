import { Button } from '@/components/ui/button';
import type { Haiku } from '@/data/haikus';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  haikus: Haiku[];
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange, haikus }: CategoryFilterProps) => {
  const getCategoryCount = (category: string) => {
    return haikus.filter(h => h.category === category).length;
  };

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

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
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
        All ({haikus.length})
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
  );
};