
import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';

export const DesktopNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex items-center space-x-2">
      <Link 
        to="/about" 
        className={`nav-link after:transition-all after:duration-300 ${isActive('/about') ? 'text-logo-blue after:opacity-100 after:left-0 after:right-0' : ''}`}
      >
        ABOUT
      </Link>
      <Link 
        to="/whitepaper" 
        className={`nav-link after:transition-all after:duration-300 ${isActive('/whitepaper') ? 'text-logo-blue after:opacity-100 after:left-0 after:right-0' : ''}`}
      >
        WHITEPAPER
      </Link>
      <Link 
        to="/tokenomics" 
        className={`nav-link after:transition-all after:duration-300 ${isActive('/tokenomics') ? 'text-logo-blue after:opacity-100 after:left-0 after:right-0' : ''}`}
      >
        TOKENOMICS
      </Link>
      <a 
        href="https://curableda-oi-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-link after:transition-all after:duration-300 hover:text-logo-blue"
      >
        CUREWORLD
      </a>

      {/* Social Media Links */}
      <SocialLinks className="ml-4" />
    </nav>
  );
};
