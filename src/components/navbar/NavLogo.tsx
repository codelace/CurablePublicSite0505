
import { Link, useLocation } from 'react-router-dom';

export const NavLogo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  
  return (
    <div className="flex items-center logo-instant">
      <Link 
        to="/home" 
        className="flex items-center nav-instant"
      >        
        {isHomePage ? (
          // Molecular structure logo for home page
          <img 
            src="/lovable-uploads/771c6d8b-9ba9-4f5e-a255-d7b1dc828db3.png" 
            alt="CURABLE LABS" 
            className="h-14 sm:h-16 w-auto"
          />
        ) : (
          // Default logo for all other pages
          <img 
            src="/lovable-uploads/7fa7cf70-1810-42ff-af5b-012906495a54.png" 
            alt="CURABLE LABS" 
            className="h-9 sm:h-11 w-auto"
          />
        )}
      </Link>
    </div>
  );
};
