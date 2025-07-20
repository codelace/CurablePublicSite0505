import { motion, AnimatePresence } from 'framer-motion';
import { TypewriterText } from './TypewriterText';

interface PoetryTitleProps {
  showTitle: boolean;
}

export const PoetryTitle = ({ showTitle }: PoetryTitleProps) => {
  return (
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
  );
};