
import { Link } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/about" className="flex items-center group relative">
        <div className="absolute -inset-1 bg-logo-blue/5 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
          alt="CURABLE DAO" 
          className="h-8 sm:h-12 w-auto transform transition-all duration-500 group-hover:scale-105" 
        />
      </Link>
      <div className="relative ml-2">
        <div className="absolute -inset-1 bg-quantum-red/30 rounded-full blur-sm animate-pulse"></div>
        <div className="relative w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
      </div>
    </div>
  );
};
