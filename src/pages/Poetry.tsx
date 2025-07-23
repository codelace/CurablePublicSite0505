import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Play, Pause, Shuffle, RotateCcw } from 'lucide-react';
import { haikus, type Haiku } from '@/data/haikus';
import ParticleBackground from '@/components/ParticleBackground';

const Poetry = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentHaiku, setCurrentHaiku] = useState<Haiku | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const categories = Array.from(new Set(haikus.map(h => h.category)));
  
  const filteredHaikus = selectedCategory 
    ? haikus.filter(h => h.category === selectedCategory)
    : haikus;

  // Auto-hide title after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentHaiku(prevHaiku => {
        const availableHaikus = filteredHaikus.filter(h => h.id !== prevHaiku?.id);
        if (availableHaikus.length === 0) return prevHaiku;
        return availableHaikus[Math.floor(Math.random() * availableHaikus.length)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredHaikus]);

  const showRandomHaiku = () => {
    setCurrentHaiku(prevHaiku => {
      const availableHaikus = filteredHaikus.filter(h => h.id !== prevHaiku?.id);
      if (availableHaikus.length === 0) return filteredHaikus[0] || null;
      return availableHaikus[Math.floor(Math.random() * availableHaikus.length)];
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      philosophy: 'bg-warm-rose/20 text-warm-rose border-warm-rose/30',
      science: 'bg-logo-blue/20 text-logo-blue border-logo-blue/30',
      healing: 'bg-warm-amber/20 text-warm-amber border-warm-amber/30',
      technology: 'bg-warm-coral/20 text-warm-coral border-warm-coral/30',
      nature: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-titanium-white/20 text-titanium-white border-titanium-white/30';
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gunmetal-900">
      {/* Background Effects */}
      <ParticleBackground 
        count={80} 
        color="multi" 
        speed="slow" 
        intensity="low"
        interactive={true}
      />
      
      <div className="fixed inset-0 bg-gradient-radial from-quantum-red/10 via-brand-charcoal/5 to-logo-blue/5 pointer-events-none" />
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full bg-warm-amber/5 blur-3xl opacity-30 animate-pulse" />
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-warm-coral/5 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Title Section */}
      <AnimatePresence>
        {showTitle && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
          >
            <Card className="glass-panel p-8 bg-brand-charcoal/40 border-quantum-red/30 shadow-lg shadow-quantum-red/20">
              <h1 className="text-5xl font-poppins mb-4 bg-gradient-to-r from-quantum-red via-brand-charcoal to-logo-blue bg-clip-text text-transparent">
                Poetry Sanctuary
              </h1>
              <p className="text-lg text-titanium-white/70 font-poppins">
                Where science meets soul, healing finds voice
              </p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-8">
        {/* Controls - More visible when haiku is active */}
        <div className={`fixed top-24 left-8 right-8 z-30 transition-all duration-500 ${currentHaiku ? 'opacity-100 scale-100' : 'opacity-60 scale-95 pointer-events-none'}`}>
          <Card className={`glass-panel p-4 border-2 transition-all duration-300 ${currentHaiku ? 'bg-brand-charcoal/60 border-quantum-red/40 shadow-lg shadow-quantum-red/20' : 'bg-brand-charcoal/40 border-titanium-white/10'}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs"
                >
                  All ({haikus.length})
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs capitalize"
                  >
                    {category} ({haikus.filter(h => h.category === category).length})
                  </Button>
                ))}
              </div>

              {/* Action Buttons - More prominent when active */}
              <div className="flex items-center gap-2">
                <Button
                  variant={currentHaiku ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`flex items-center gap-2 transition-all ${currentHaiku ? 'bg-quantum-red/20 border-quantum-red/50 hover:bg-quantum-red/30' : ''}`}
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isAutoPlay ? 'Pause' : 'Auto-Play'}
                </Button>
                <Button
                  variant={currentHaiku ? "default" : "outline"}
                  size="sm"
                  onClick={showRandomHaiku}
                  className={`flex items-center gap-2 transition-all ${currentHaiku ? 'bg-logo-blue/20 border-logo-blue/50 hover:bg-logo-blue/30' : ''}`}
                >
                  <Shuffle className="w-4 h-4" />
                  {currentHaiku ? 'Next' : 'Random'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentHaiku(null)}
                  className={`flex items-center gap-2 transition-all ${currentHaiku ? 'opacity-100' : 'opacity-50'}`}
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Haiku Display */}
        <div className="flex items-center justify-center min-h-screen pt-32">
          <AnimatePresence mode="wait">
            {currentHaiku && (
              <motion.div
                key={currentHaiku.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl w-full"
              >
                <Card className="glass-panel p-12 bg-brand-charcoal/40 border-quantum-red/20 text-center shadow-lg shadow-quantum-red/10">
                  <div className="space-y-6">
                    {/* Haiku Lines */}
                    <div className="space-y-4">
                      {currentHaiku.lines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.3, duration: 0.5 }}
                          className="text-2xl md:text-3xl font-poppins text-titanium-white leading-relaxed"
                        >
                          {line}
                        </motion.div>
                      ))}
                    </div>

                    {/* Metadata */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="flex flex-col items-center gap-3 pt-6 border-t border-titanium-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="outline" 
                          className={`${getCategoryColor(currentHaiku.category)} font-mono text-xs`}
                        >
                          {currentHaiku.category}
                        </Badge>
                        <span className="text-titanium-white/40 text-sm">
                          {currentHaiku.theme}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {!currentHaiku && !showTitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-titanium-white/40 font-poppins text-lg mb-6">
                Ready to explore the poetry sanctuary
              </p>
              <Button
                onClick={showRandomHaiku}
                className="bg-warm-rose/20 hover:bg-warm-rose/30 border-warm-rose/30"
                variant="outline"
              >
                Begin Journey
              </Button>
            </motion.div>
          )}
        </div>

        {/* Footer Status */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-center">
            <p className="text-xs text-titanium-white/30 font-mono">
              {isAutoPlay && currentHaiku ? 'Auto-playing...' : `${filteredHaikus.length} haikus available`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;