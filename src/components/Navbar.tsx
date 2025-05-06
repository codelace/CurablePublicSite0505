
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-gunmetal-900/60 backdrop-blur-lg border-b border-graphite-700/40">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo & Pulse Dot */}
        <div className="flex items-center">
          <Link to="/about" className="font-rajdhani text-2xl font-bold tracking-wider text-titanium-white">
            CURABLE
          </Link>
          <div className="ml-2 w-2 h-2 rounded-full bg-arc-blue animate-pulse-dot"></div>
        </div>
        
        {/* Desktop Navigation */}
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
        </nav>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/join" className="btn-primary text-sm">
            JOIN
          </Link>
          <Link to="/novel" className="btn-secondary text-sm">
            NOVEL CURE APP
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-gunmetal-900/95 backdrop-blur-lg border-b border-graphite-700/40 animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/tokenomics" 
              className={`nav-link ${isActive('/tokenomics') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              TOKENOMICS
            </Link>
            <Link 
              to="/whitepaper" 
              className={`nav-link ${isActive('/whitepaper') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              WHITEPAPER
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link 
                to="/join" 
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                JOIN
              </Link>
              <Link 
                to="/novel" 
                className="btn-secondary text-center"
                onClick={() => setIsOpen(false)}
              >
                NOVEL CURE APP
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
