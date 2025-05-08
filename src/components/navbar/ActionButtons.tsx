
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

interface ActionButtonsProps {
  className?: string;
  isMobile?: boolean;
}

export const ActionButtons = ({ className = "", isMobile = false }: ActionButtonsProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const dnaRef = useRef<HTMLAnchorElement>(null);
  const joinRef = useRef<HTMLAnchorElement>(null);
  const novelRef = useRef<HTMLAnchorElement>(null);
  
  // Enhanced magnetic effect handler with smoother transitions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, ref: React.RefObject<HTMLElement>, buttonId: string) => {
      if (!ref.current || hoveredButton !== buttonId) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Adjusted intensity for a more subtle, professional effect
      const intensity = 0.1;
      ref.current.style.transform = `translate(${x * intensity}px, ${y * intensity}px) scale(1.03)`;
    };
    
    const handleMouseLeave = (ref: React.RefObject<HTMLElement>) => {
      if (!ref.current) return;
      // Smoother transition back to original position
      ref.current.style.transform = '';
    };
    
    const mouseMove = (e: MouseEvent) => {
      handleMouseMove(e, dnaRef, 'dna');
      handleMouseMove(e, joinRef, 'join');
      handleMouseMove(e, novelRef, 'novel');
    };
    
    document.addEventListener('mousemove', mouseMove);
    
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [hoveredButton]);
  
  const containerClasses = isMobile 
    ? `flex flex-col space-y-3 ${className}`
    : `hidden md:flex items-center space-x-4 ${className}`;

  // Standardized button classes with improved transitions
  const baseButtonClasses = isMobile
    ? "flex items-center justify-center w-full py-2 rounded-lg text-white font-bold text-xs relative overflow-hidden"
    : "flex items-center justify-center px-4 py-2 rounded-lg text-white font-bold text-xs min-w-[90px] transition-all duration-300 relative overflow-hidden";

  const dnaButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gradient-to-r from-logo-blue to-logo-blue hover:from-logo-blue hover:to-plasma-violet" 
    : "bg-logo-blue hover:bg-gradient-to-r hover:from-logo-blue hover:to-plasma-violet hover:shadow-[0_0_12px_rgba(30,174,219,0.6)] transition-all duration-300"}`;

  const joinButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue" 
    : "bg-quantum-red hover:bg-gradient-to-r hover:from-quantum-red hover:to-logo-blue hover:shadow-[0_0_12px_rgba(255,51,102,0.6)] transition-all duration-300"}`;

  const novelButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet" 
    : "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet hover:shadow-[0_0_12px_rgba(147,51,234,0.6)] transition-all duration-300"}`;

  return (
    <div className={containerClasses}>
      <a 
        ref={dnaRef}
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${dnaButtonClasses} transform transition-all duration-300 ease-out`}
        style={{ width: '90px' }}
        onMouseEnter={() => setHoveredButton('dna')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (dnaRef.current) dnaRef.current.style.transform = '';
        }}
      >
        {/* Simplified overlay with improved transitions */}
        <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <div className="flex items-center gap-1 relative z-10">
          {/* Simpler animations for a cleaner look */}
          <span className={`transition-transform duration-300 ${hoveredButton === 'dna' ? 'scale-110' : ''}`}>⚛️</span>
          <span className={`transition-transform duration-300 ${hoveredButton === 'dna' ? 'scale-110' : ''}`}>🧬</span>
          <span className={`transition-transform duration-300 ${hoveredButton === 'dna' ? 'scale-110' : ''}`}>⚗️</span>
        </div>
        
        {/* Simplified shine effect */}
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white/10 transform skew-x-15 transition-all duration-700 group-hover:left-[100%]"></span>
        
        {/* Subtle border glow when hovered */}
        {hoveredButton === 'dna' && (
          <span className="absolute inset-0 rounded-lg ring-1 ring-logo-blue/70 animate-pulse-subtle"></span>
        )}
      </a>
      
      <Link 
        ref={joinRef}
        to="/join" 
        className={`${joinButtonClasses} transform transition-all duration-300 ease-out`}
        onMouseEnter={() => setHoveredButton('join')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (joinRef.current) joinRef.current.style.transform = '';
        }}
      >
        {/* Simplified overlay with improved transitions */}
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
        ref={novelRef}
        to="/novel" 
        className={`${novelButtonClasses} transform transition-all duration-300 ease-out`}
        onMouseEnter={() => setHoveredButton('novel')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (novelRef.current) novelRef.current.style.transform = '';
        }}
      >
        {/* Simplified overlay with improved transitions */}
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
