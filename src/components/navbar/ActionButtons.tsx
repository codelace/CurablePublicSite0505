
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
    : `hidden md:flex items-center space-x-3 ${className}`;

  // Made buttons narrower by reducing padding and min-width
  const baseButtonClasses = isMobile
    ? "flex items-center justify-center w-full py-2 rounded-lg text-white font-bold text-xs relative overflow-hidden"
    : "flex items-center justify-center px-3 py-2 rounded-lg text-white font-bold text-xs min-w-[75px] transition-colors duration-300 relative overflow-hidden";

  // Using brand charcoal for a more professional, trustworthy look
  const dnaButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gradient-to-r from-gunmetal-900 to-cosmic-indigo/30 hover:from-gunmetal-800 hover:to-cosmic-indigo/50" 
    : "bg-gradient-to-r from-gunmetal-900 to-cosmic-indigo/30 hover:from-gunmetal-800 hover:to-cosmic-indigo/50 hover:shadow-[0_0_12px_hsl(var(--cosmic-indigo)/0.3)] hover:scale-105 transition-all duration-300"}`;

  // Keep other button classes the same
  const joinButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "hover:bg-gradient-to-r hover:from-spectral-crimson hover:to-cosmic-indigo" 
    : "hover:bg-gradient-to-r hover:from-spectral-crimson hover:to-cosmic-indigo hover:shadow-[0_0_12px_hsl(var(--spectral-crimson)/0.6)] transition-all duration-300"}`;
  
  const joinButtonStyle = {
    background: 'linear-gradient(135deg, hsl(var(--spectral-crimson)), hsl(var(--spectral-glow)))',
    border: '2px solid transparent',
    boxShadow: '0 2px 8px hsl(var(--spectral-crimson) / 0.3)'
  };

  const novelButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "hover:bg-gradient-to-r hover:from-cosmic-indigo hover:to-cosmic-aura" 
    : "hover:bg-gradient-to-r hover:from-cosmic-indigo hover:to-cosmic-aura hover:shadow-[0_0_12px_hsl(var(--cosmic-indigo)/0.6)] transition-all duration-300"}`;
  
  const novelButtonStyle = {
    background: 'linear-gradient(135deg, hsl(var(--cosmic-indigo)), hsl(var(--cosmic-aura)), hsl(var(--quantum-cyan)))',
    border: '2px solid hsl(var(--cosmic-aura))',
    color: 'white',
    boxShadow: '0 4px 20px hsl(var(--cosmic-indigo) / 0.4)'
  };

  return (
    <div className={containerClasses}>
      <Link 
        to="/join" 
        className={`${joinButtonClasses} transition-colors duration-300`}
        style={joinButtonStyle}
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
          <span className="absolute inset-0 rounded-lg ring-1 ring-spectral-crimson/70 animate-pulse-subtle"></span>
        )}
      </Link>
      
      <Link 
        to="/novel" 
        className={`${novelButtonClasses} transition-colors duration-300`}
        style={novelButtonStyle}
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
          <span className="absolute inset-0 rounded-lg ring-1 ring-cosmic-aura/70 animate-pulse-subtle"></span>
        )}
      </Link>
    </div>
  );
};
