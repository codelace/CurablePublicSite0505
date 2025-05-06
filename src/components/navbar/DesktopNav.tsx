
import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';

export const DesktopNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex items-center space-x-1">
      <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
        ABOUT
      </Link>
      <Link to="/tokenomics" className={`nav-link ${isActive('/tokenomics') ? 'active' : ''}`}>
        TOKENOMICS
      </Link>
      <Link to="/whitepaper" className={`nav-link ${isActive('/whitepaper') ? 'active' : ''}`}>
        WHITEPAPER
      </Link>

      {/* Social Media Links */}
      <SocialLinks className="ml-4" />
    </nav>
  );
};
