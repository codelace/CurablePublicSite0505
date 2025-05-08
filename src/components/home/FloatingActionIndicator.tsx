
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
        className="bg-logo-blue/20 hover:bg-logo-blue/40 border border-logo-blue/40 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,174,219,0.3)] hover:scale-110"
      >
        <ArrowRight className="w-5 h-5 text-titanium-white transform rotate-[-90deg]" />
      </button>
    </div>
  );
};

export default FloatingActionIndicator;
