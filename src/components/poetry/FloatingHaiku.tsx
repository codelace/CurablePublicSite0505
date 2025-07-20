import { useState, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';
import type { Haiku } from '@/data/haikus';

interface FloatingHaikuProps {
  haiku: Haiku;
  delay: number;
  position: { x: number; y: number };
  onComplete?: () => void;
}

export const FloatingHaiku = ({ haiku, delay, position, onComplete }: FloatingHaikuProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleLineComplete = () => {
    if (currentLine < 2) {
      setCurrentLine(prev => prev + 1);
    } else if (onComplete) {
      setTimeout(onComplete, 2000); // Wait 2 seconds before completing
    }
  };

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

  if (!isVisible) return null;

  return (
    <div 
      className="absolute animate-fade-in"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="glass-panel p-6 max-w-sm backdrop-blur-xl bg-dark-surface/20 border border-warm-rose/20 rounded-lg hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,51,102,0.3)]">
        <div className="text-center space-y-3">
          <div className="font-mono text-xs text-titanium-white/60 mb-4">
            {haiku.theme}
          </div>
          
          <div className="space-y-1 font-serif text-titanium-white">
            {currentLine >= 0 && (
              <div className={getCategoryColor(haiku.category)}>
                <TypewriterText 
                  text={haiku.lines[0]} 
                  delay={0}
                  speed={80}
                  onComplete={currentLine === 0 ? handleLineComplete : undefined}
                />
              </div>
            )}
            
            {currentLine >= 1 && (
              <div className={getCategoryColor(haiku.category)}>
                <TypewriterText 
                  text={haiku.lines[1]} 
                  delay={haiku.lines[0].length * 80 + 500}
                  speed={80}
                  onComplete={currentLine === 1 ? handleLineComplete : undefined}
                />
              </div>
            )}
            
            {currentLine >= 2 && (
              <div className={getCategoryColor(haiku.category)}>
                <TypewriterText 
                  text={haiku.lines[2]} 
                  delay={haiku.lines[0].length * 80 + haiku.lines[1].length * 80 + 1000}
                  speed={80}
                  onComplete={currentLine === 2 ? handleLineComplete : undefined}
                />
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t border-warm-rose/20">
            <div className="text-xs text-titanium-white/40 font-mono">
              — {haiku.author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};