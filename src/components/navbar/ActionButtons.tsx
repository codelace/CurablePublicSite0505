import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ActionButtonsProps {
  className?: string;
  isMobile?: boolean;
}

export const ActionButtons = ({ className = "", isMobile = false }: ActionButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const containerClasses = isMobile 
    ? `flex flex-col space-y-3 ${className}`
    : `hidden md:flex items-center space-x-4 ${className}`;

  // Standardized button classes without the transform effects
  const baseButtonClasses = isMobile
    ? "flex items-center justify-center w-full py-2 rounded-lg text-white font-bold text-xs relative overflow-hidden"
    : "flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold text-xs min-w-[90px] transition-colors duration-300 relative overflow-hidden";

  // Changed from quantum-red to dark slate grey (gunmetal-900)
  const dnaButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gunmetal-900 hover:bg-gradient-to-r hover:from-gunmetal-900 hover:to-graphite-700" 
    : "bg-gunmetal-900 hover:bg-gradient-to-r hover:from-gunmetal-900 hover:to-graphite-700 hover:shadow-[0_0_12px_rgba(16,20,24,0.6)] transition-all duration-300"}`;

  // Keep other button classes the same
  const joinButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue" 
    : "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue hover:shadow-[0_0_12px_rgba(255,51,102,0.6)] transition-all duration-300"}`;

  const novelButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-quantum-red" 
    : "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-quantum-red hover:shadow-[0_0_12px_rgba(147,51,234,0.6)] transition-all duration-300"}`;

  return (
    <div className={containerClasses}>
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${dnaButtonClasses} transition-colors duration-300`}
        style={{ width: '90px' }}
        onMouseEnter={() => setHoveredButton('dna')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {/* Enhanced overlay with improved transitions */}
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <div className="flex items-center gap-1 relative z-10">
          <span>⚛️</span>
          <span>🧬</span>
          <span>⚗️</span>
        </div>
        
        {/* Simplified shine effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transform skew-x-15 transition-all duration-700 group-hover:left-[100%]"></span>
        
        {/* Subtle border glow when hovered - adjusted for dark slate grey */}
        {hoveredButton === 'dna' && (
          <span className="absolute inset-0 rounded-lg ring-1 ring-graphite-700/70 animate-pulse-subtle"></span>
        )}
      </a>
      
      <Link 
        to="/join" 
        className={`${joinButtonClasses} transition-colors duration-300`}
        onMouseEnter={() => setHoveredButton('join')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {/* Enhanced overlay with improved transitions */}
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">JOIN</span>
        
        {/* Simplified shine effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transform skew-x-15 transition-all duration-700 group-hover:left-[100%]"></span>
        
        {/* Subtle border glow when hovered */}
        {hoveredButton === 'join' && (
          <span className="absolute inset-0 rounded-lg ring-1 ring-quantum-red/70 animate-pulse-subtle"></span>
        )}
      </Link>
      
      <Link 
        to="/novel" 
        className={`${novelButtonClasses} transition-colors duration-300`}
        onMouseEnter={() => setHoveredButton('novel')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {/* Enhanced overlay with improved transitions */}
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">NOVEL</span>
        
        {/* Simplified shine effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transform skew-x-15 transition-all duration-700 group-hover:left-[100%]"></span>
        
        {/* Subtle border glow when hovered */}
        {hoveredButton === 'novel' && (
          <span className="absolute inset-0 rounded-lg ring-1 ring-purple-600/70 animate-pulse-subtle"></span>
        )}
      </Link>
    </div>
  );
};
