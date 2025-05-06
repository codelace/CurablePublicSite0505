
import { Link } from 'react-router-dom';

interface ActionButtonsProps {
  className?: string;
  isMobile?: boolean;
}

export const ActionButtons = ({ className = "", isMobile = false }: ActionButtonsProps) => {
  const containerClasses = isMobile 
    ? `flex flex-col space-y-3 ${className}`
    : `hidden md:flex items-center space-x-4 ${className}`;

  // Standardized button classes for consistent sizing and appearance
  const baseButtonClasses = isMobile
    ? "flex items-center justify-center w-full py-2.5 rounded-lg text-white font-bold text-sm"
    : "flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-bold text-sm min-w-[110px] transition-all duration-300 hover:scale-105";

  const dnaButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gradient-to-r from-quantum-red to-quantum-red hover:from-quantum-red hover:to-logo-blue mb-2" 
    : "bg-gradient-to-r from-quantum-red to-quantum-red hover:from-quantum-red hover:to-logo-blue hover:shadow-[0_0_15px_rgba(255,51,102,0.5)]"}`;

  const joinButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet" 
    : "bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-plasma-violet hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"}`;

  const novelButtonClasses = `${baseButtonClasses} ${isMobile 
    ? "bg-gradient-to-r from-logo-blue to-logo-blue hover:from-logo-blue hover:to-plasma-violet" 
    : "bg-gradient-to-r from-logo-blue to-logo-blue hover:from-logo-blue hover:to-plasma-violet hover:shadow-[0_0_15px_rgba(30,174,219,0.5)]"}`;

  return (
    <div className={containerClasses}>
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={dnaButtonClasses}
      >
        <span className="text-lg">⚛️ 🧬 ⚗️</span>
      </a>
      
      <Link to="/join" className={joinButtonClasses}>
        JOIN DAO
      </Link>
      
      <Link to="/novel" className={novelButtonClasses}>
        NOVEL CURE APP
      </Link>
    </div>
  );
};
