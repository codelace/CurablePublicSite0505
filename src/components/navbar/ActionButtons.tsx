
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
  
  // Magnetic effect handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, ref: React.RefObject<HTMLElement>, buttonId: string) => {
      if (!ref.current || hoveredButton !== buttonId) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Adjust intensity of the magnetic effect
      const intensity = 0.15;
      ref.current.style.transform = `translate(${x * intensity}px, ${y * intensity}px) scale(1.05)`;
    };
    
    const handleMouseLeave = (ref: React.RefObject<HTMLElement>) => {
      if (!ref.current) return;
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
        ref={dnaRef}
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${dnaButtonClasses} transform transition-all duration-300 hover:scale-105`}
        style={{ width: '90px' }}
        onMouseEnter={() => setHoveredButton('dna')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (dnaRef.current) dnaRef.current.style.transform = '';
        }}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <div className="flex items-center gap-0.5 relative z-10">
          {/* Enhanced animated icons with individual animations */}
          <span className={`transition-all duration-300 ${hoveredButton === 'dna' ? 'animate-pulse scale-110' : ''}`}>⚛️</span>
          <span className={`transition-all duration-300 ${hoveredButton === 'dna' ? 'animate-bounce scale-110' : ''}`} style={{animationDuration: '2s'}}>🧬</span>
          <span className={`transition-all duration-300 ${hoveredButton === 'dna' ? 'animate-pulse scale-110' : ''}`} style={{animationDelay: '0.5s'}}>⚗️</span>
        </div>
        
        {/* Enhanced shine effect */}
        <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-effect ${hoveredButton === 'dna' ? 'opacity-100' : 'opacity-0'}`}></span>
        
        {/* Add pulsing ring */}
        {hoveredButton === 'dna' && (
          <span className="absolute -inset-1 border border-logo-blue/30 rounded-lg animate-pulse opacity-70"></span>
        )}
      </a>
      
      <Link 
        ref={joinRef}
        to="/join" 
        className={`${joinButtonClasses} transform transition-all duration-300 hover:scale-105`}
        onMouseEnter={() => setHoveredButton('join')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (joinRef.current) joinRef.current.style.transform = '';
        }}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">JOIN</span>
        
        {/* Enhanced shine effect */}
        <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-effect ${hoveredButton === 'join' ? 'opacity-100' : 'opacity-0'}`}></span>
        
        {/* Add pulsing ring */}
        {hoveredButton === 'join' && (
          <span className="absolute -inset-1 border border-quantum-red/30 rounded-lg animate-pulse opacity-70"></span>
        )}
      </Link>
      
      <Link 
        ref={novelRef}
        to="/novel" 
        className={`${novelButtonClasses} transform transition-all duration-300 hover:scale-105`}
        onMouseEnter={() => setHoveredButton('novel')}
        onMouseLeave={() => {
          setHoveredButton(null);
          if (novelRef.current) novelRef.current.style.transform = '';
        }}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10">NOVEL</span>
        
        {/* Enhanced shine effect */}
        <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shine-effect ${hoveredButton === 'novel' ? 'opacity-100' : 'opacity-0'}`}></span>
        
        {/* Add pulsing ring */}
        {hoveredButton === 'novel' && (
          <span className="absolute -inset-1 border border-purple-600/30 rounded-lg animate-pulse opacity-70"></span>
        )}
      </Link>
    </div>
  );
};
