
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center">
      <Link 
        to="/about" 
        className="flex items-center group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`absolute -inset-1 bg-gradient-to-r from-logo-blue/5 to-plasma-violet/5 rounded-lg blur-md transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        <div className={`absolute -inset-px rounded-lg border border-logo-blue/0 transition-all duration-500 ${isHovered ? 'border-logo-blue/30 scale-105' : ''}`}></div>
        <img 
          src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
          alt="CURABLE DAO" 
          className={`h-8 sm:h-12 w-auto transition-all duration-500 ${isHovered ? 'filter brightness-125' : ''}`}
        />
      </Link>
      <div className="relative ml-2">
        <div className="absolute -inset-1 bg-quantum-red/30 rounded-full blur-sm animate-pulse"></div>
        <div className="relative w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
      </div>
    </div>
  );
};
