
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FloatingActionIndicatorProps {
  isScrolled: boolean;
}

const FloatingActionIndicator: React.FC<FloatingActionIndicatorProps> = ({ isScrolled }) => {
  return (
    <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="bg-spectral-crimson/20 hover:bg-spectral-crimson/40 border border-spectral-crimson/40 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--spectral-crimson)/0.6)] hover:scale-110 group btn-quantum-magnetic"
      >
        <ArrowRight className="w-5 h-5 text-spectral-glow transform rotate-[-90deg] group-hover:text-white transition-colors duration-300 glow-spectral" />
      </button>
    </div>
  );
};

export default FloatingActionIndicator;
