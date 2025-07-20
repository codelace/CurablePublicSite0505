import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import { FloatingHaiku } from '@/components/poetry/FloatingHaiku';
import { CategoryFilter } from '@/components/poetry/CategoryFilter';
import { TypewriterText } from '@/components/poetry/TypewriterText';
import { haikus } from '@/data/haikus';
import { Button } from '@/components/ui/button';
import { Shuffle, Play, Pause } from 'lucide-react';

const Poetry = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [displayedHaikus, setDisplayedHaikus] = useState<number[]>([]);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const categories = Array.from(new Set(haikus.map(h => h.category)));
  
  const filteredHaikus = activeCategory 
    ? haikus.filter(h => h.category === activeCategory)
    : haikus;

  const getRandomPosition = () => ({
    x: Math.random() * 60 + 20, // 20% to 80% from left
    y: Math.random() * 60 + 20  // 20% to 80% from top
  });

  const addRandomHaiku = () => {
    if (filteredHaikus.length === 0) return;
    
    const availableHaikus = filteredHaikus.filter(h => !displayedHaikus.includes(h.id));
    if (availableHaikus.length === 0) return;
    
    const randomHaiku = availableHaikus[Math.floor(Math.random() * availableHaikus.length)];
    setDisplayedHaikus(prev => [...prev, randomHaiku.id]);
  };

  const clearHaikus = () => {
    setDisplayedHaikus([]);
  };

  const handleHaikuComplete = (haikuId: number) => {
    setTimeout(() => {
      setDisplayedHaikus(prev => prev.filter(id => id !== haikuId));
    }, 3000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      if (displayedHaikus.length < 3) {
        addRandomHaiku();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, displayedHaikus, filteredHaikus]);

  // Hide title after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gunmetal-900">
      {/* Enhanced particle background */}
      <ParticleBackground 
        count={100} 
        color="multi" 
        speed="slow" 
        intensity="medium"
        interactive={true}
      />
      
      {/* Additional atmospheric effects */}
      <div className="fixed inset-0 bg-gradient-radial from-warm-rose/5 via-transparent to-logo-blue/5 pointer-events-none" />
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full bg-warm-amber/10 blur-3xl opacity-30 animate-pulse" />
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-warm-coral/10 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 min-h-screen">
        {/* Title Section */}
        <AnimatePresence>
          {showTitle && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
            >
              <div className="glass-panel p-12 backdrop-blur-xl bg-dark-surface/30 border border-warm-rose/30 rounded-xl">
                <h1 className="text-6xl font-space mb-6 bg-gradient-to-r from-warm-rose via-warm-amber to-logo-blue bg-clip-text text-transparent">
                  <TypewriterText text="Poetry Sanctuary" speed={100} />
                </h1>
                <p className="text-xl text-titanium-white/70 font-mono max-w-2xl">
                  <TypewriterText 
                    text="Where science meets soul, and healing finds its voice in verse"
                    delay={2000}
                    speed={60}
                  />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-30">
          <div className="glass-panel p-4 backdrop-blur-xl bg-dark-surface/20 border border-warm-rose/20 rounded-xl">
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              haikus={filteredHaikus}
            />
            
            <div className="flex justify-center gap-4 mt-4">
              <Button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                variant="outline"
                size="sm"
                className={`font-mono transition-all duration-300 ${
                  isAutoPlay 
                    ? 'bg-warm-rose/20 text-warm-rose border-warm-rose/50' 
                    : 'bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-rose/20 hover:text-warm-rose'
                }`}
              >
                {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isAutoPlay ? 'Auto-Play On' : 'Auto-Play Off'}
              </Button>
              
              <Button
                onClick={addRandomHaiku}
                variant="outline"
                size="sm"
                className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-logo-blue/20 hover:text-logo-blue transition-all duration-300"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Show Random
              </Button>
              
              <Button
                onClick={clearHaikus}
                variant="outline"
                size="sm"
                className="font-mono bg-dark-surface/40 text-titanium-white/70 border-titanium-white/20 hover:bg-warm-coral/20 hover:text-warm-coral transition-all duration-300"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Haikus */}
        <div className="relative h-screen w-full">
          {displayedHaikus.map((haikuId, index) => {
            const haiku = haikus.find(h => h.id === haikuId);
            if (!haiku) return null;

            return (
              <FloatingHaiku
                key={`${haikuId}-${index}`}
                haiku={haiku}
                delay={index * 1000}
                position={getRandomPosition()}
                onComplete={() => handleHaikuComplete(haikuId)}
              />
            );
          })}
        </div>

        {/* Floating inspiration text */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-center">
            <p className="text-sm text-titanium-white/40 font-mono">
              {displayedHaikus.length === 0 && !isAutoPlay && "Click 'Show Random' or enable 'Auto-Play' to begin the poetry flow"}
              {isAutoPlay && "Haikus will appear and fade like digital dreams..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;