
import { Link } from 'react-router-dom';

interface ActionButtonsProps {
  className?: string;
  isMobile?: boolean;
}

export const ActionButtons = ({ className = "", isMobile = false }: ActionButtonsProps) => {
  const containerClasses = isMobile 
    ? `flex flex-col space-y-3 ${className}`
    : `hidden md:flex items-center space-x-4 ${className}`;

  const dnaButtonClasses = isMobile
    ? "flex items-center justify-center bg-gradient-to-r from-quantum-red to-quantum-red hover:from-quantum-red hover:to-logo-blue py-3 rounded-lg text-white font-bold text-base mb-4"
    : "flex items-center bg-gradient-to-r from-quantum-red to-quantum-red hover:from-quantum-red hover:to-logo-blue px-4 py-2 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,51,102,0.5)]";

  const joinButtonClasses = isMobile
    ? "btn-primary text-center py-3 text-sm"
    : "btn-primary text-sm";

  const novelButtonClasses = isMobile
    ? "flex items-center justify-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-bold text-sm"
    : "flex items-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]";

  return (
    <div className={containerClasses}>
      {/* DNA Button - Now using the Novel Cure App's previous style (red gradient) */}
      <a 
        href="https://binding-db-integrator-1-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={dnaButtonClasses}
      >
        {isMobile ? "🧬 Launch BindingDB" : "🧬"}
      </a>
      <Link to="/join" className={joinButtonClasses}>
        {isMobile ? "JOIN DAO" : "JOIN"}
      </Link>
      <Link to="/novel" className={novelButtonClasses}>
        NOVEL CURE APP
      </Link>
    </div>
  );
};
