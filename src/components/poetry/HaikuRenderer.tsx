import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Haiku } from '@/data/haikus';

interface HaikuRendererProps {
  haiku: Haiku;
  position: { x: number; y: number };
  onComplete: () => void;
  delay?: number;
  duration?: number;
}

export const HaikuRenderer = ({ 
  haiku, 
  position, 
  onComplete, 
  delay = 0,
  duration = 8000 
}: HaikuRendererProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const lineInterval = setInterval(() => {
      setCurrentLineIndex(prev => {
        if (prev >= haiku.lines.length - 1) {
          clearInterval(lineInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000);
          }, 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(lineInterval);
  }, [isVisible, haiku.lines.length, onComplete]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'philosophy': return 'text-warm-rose';
      case 'science': return 'text-logo-blue';
      case 'healing': return 'text-warm-amber';
      case 'technology': return 'text-warm-coral';
      case 'nature': return 'text-emerald-400';
      default: return 'text-titanium-white';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-40"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="glass-panel p-6 backdrop-blur-xl bg-dark-surface/30 border border-warm-rose/20 rounded-xl max-w-xs">
            <div className="space-y-3">
              {haiku.lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: index <= currentLineIndex ? 1 : 0.3,
                    x: index <= currentLineIndex ? 0 : -10
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`text-sm font-light leading-relaxed ${
                    index <= currentLineIndex ? getCategoryColor(haiku.category) : 'text-titanium-white/40'
                  }`}
                >
                  {line}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: currentLineIndex >= haiku.lines.length - 1 ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-3 border-t border-warm-rose/20"
              >
                <div className="text-xs text-titanium-white/60">— {haiku.author}</div>
                <div className={`text-xs capitalize ${getCategoryColor(haiku.category)}`}>
                  {haiku.category}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};