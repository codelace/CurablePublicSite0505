
import { Link } from 'react-router-dom';

export const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/about" className="flex items-center">
        <img 
          src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
          alt="CURABLE DAO" 
          className="h-8 sm:h-12 w-auto" 
        />
      </Link>
      <div className="ml-2 w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
    </div>
  );
};
