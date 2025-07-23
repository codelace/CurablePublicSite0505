
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center">
      <Link 
        to="/home" 
        className="flex items-center group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`absolute -inset-2 bg-gradient-radial from-logo-blue/10 to-plasma-violet/5 rounded-lg blur-md transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0'}`}
        ></div>
        <div className={`absolute -inset-px rounded-lg border border-logo-blue/0 transition-all duration-500 ${isHovered ? 'border-logo-blue/40 scale-105' : ''}`}></div>
        <img 
          src="/lovable-uploads/40cee2f5-b09e-4f15-bf52-9dd4b77719e6.png" 
          alt="CURABLE LABS" 
          className={`h-24 sm:h-32 w-auto transition-all duration-500 ${isHovered ? 'filter brightness-125 scale-105' : ''}`}
        />
        
        {/* Add subtle particles effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute w-1 h-1 bg-logo-blue/40 rounded-full top-1/4 left-1/2 animate-ping"></div>
            <div className="absolute w-1 h-1 bg-plasma-violet/40 rounded-full top-3/4 left-1/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute w-1 h-1 bg-logo-blue/30 rounded-full bottom-1/4 right-1/4 animate-ping" style={{animationDelay: '0.8s'}}></div>
          </div>  
        )}
      </Link>
      <div className="relative ml-2">
        <div className="absolute -inset-1 bg-quantum-red/30 rounded-full blur-sm animate-pulse"></div>
        <div className="relative w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
        {/* Add pulsing ring */}
        <div className="absolute -inset-2 border border-quantum-red/20 rounded-full animate-ping opacity-70" style={{animationDuration: '3s'}}></div>
      </div>
    </div>
  );
};
