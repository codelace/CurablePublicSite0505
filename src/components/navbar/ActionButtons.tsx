
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

  // Standardized button classes for consistent sizing and appearance
  const baseButtonClasses = isMobile
    ? "flex items-center justify-center w-full py-2 rounded-lg text-white font-bold text-xs relative overflow-hidden"
    : "flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold text-xs min-w-[90px] transition-all duration-300 relative overflow-hidden btn-hover-effect";

  const dnaButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gradient-to-r from-logo-blue to-logo-blue hover:from-logo-blue hover:to-plasma-violet" 
    : "bg-gradient-to-r from-logo-blue to-logo-blue hover:from-logo-blue hover:to-plasma-violet hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]"}`;

  const joinButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue" 
    : "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue hover:shadow-[0_0_15px_rgba(255,51,102,0.5)]"}`;

  const novelButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet" 
    : "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"}`;

  return (
    <div className={containerClasses}>
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${dnaButtonClasses} transform transition-transform duration-300 hover:scale-105 magnetic-hover`}
        style={{ width: '90px' }}
        onMouseEnter={() => setHoveredButton('dna')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="text-xs flex items-center gap-0.5 relative z-10">
          <span className={hoveredButton === 'dna' ? 'animate-pulse' : ''}>⚛️</span>
          <span>🧬</span>
          <span>⚗️</span>
        </span>
        {hoveredButton === 'dna' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shine-effect"></span>
        )}
      </a>
      
      <Link 
        to="/join" 
        className={`${joinButtonClasses} transform transition-transform duration-300 hover:scale-105 magnetic-hover`}
        onMouseEnter={() => setHoveredButton('join')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">JOIN</span>
        {hoveredButton === 'join' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shine-effect"></span>
        )}
      </Link>
      
      <Link 
        to="/novel" 
        className={`${novelButtonClasses} transform transition-transform duration-300 hover:scale-105 magnetic-hover`}
        onMouseEnter={() => setHoveredButton('novel')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">NOVEL</span>
        {hoveredButton === 'novel' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shine-effect"></span>
        )}
      </Link>
    </div>
  );
};
