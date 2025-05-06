
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-gunmetal-900/60 backdrop-blur-lg border-b border-graphite-700/40">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo & Pulse Dot */}
        <div className="flex items-center">
          <Link to="/about" className="flex items-center">
            <img 
              src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
              alt="CURABLE DAO" 
              className="h-12 w-auto" 
            />
          </Link>
          <div className="ml-2 w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
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
          {/* DNA Button - Now to the left of JOIN */}
          <a 
            href="https://binding-db-integrator-1-codelace77.replit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] animate-pulse"
          >
            🧬
          </a>
          <Link to="/join" className="btn-primary text-sm">
            JOIN
          </Link>
          <Link to="/novel" className="btn-secondary text-sm">
            NOVEL CURE APP
          </Link>
        </div>
        
        {/* Mobile Menu Button - Enhanced with Sheet Component */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-graphite-700/30 border border-graphite-700/40"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-titanium-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 border-0 w-full max-w-full sm:max-w-md bg-gunmetal-900/95 backdrop-blur-lg">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-graphite-700/40">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
                      alt="CURABLE DAO" 
                      className="h-10 w-auto" 
                    />
                    <div className="ml-2 w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-auto p-6">
                  <nav className="flex flex-col space-y-6">
                    {/* DNA Launch Button */}
                    <a 
                      href="https://binding-db-integrator-1-codelace77.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 py-4 rounded-lg text-white font-bold text-xl mb-6 animate-pulse"
                    >
                      🧬 Launch BindingDB
                    </a>
                    
                    <Link 
                      to="/about" 
                      className={`text-xl font-bold py-3 border-b border-graphite-700/40 ${isActive('/about') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      ABOUT
                    </Link>
                    <Link 
                      to="/tokenomics" 
                      className={`text-xl font-bold py-3 border-b border-graphite-700/40 ${isActive('/tokenomics') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      TOKENOMICS
                    </Link>
                    <Link 
                      to="/whitepaper" 
                      className={`text-xl font-bold py-3 border-b border-graphite-700/40 ${isActive('/whitepaper') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      WHITEPAPER
                    </Link>
                  </nav>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/join" 
                      className="btn-primary text-center py-4 text-base"
                    >
                      JOIN DAO
                    </Link>
                    <Link 
                      to="/novel" 
                      className="btn-secondary text-center py-4 text-base"
                    >
                      NOVEL CURE APP
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Navbar;
