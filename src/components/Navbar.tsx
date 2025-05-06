
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Twitter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] sm:h-[68px] bg-gunmetal-900/60 backdrop-blur-lg border-b border-graphite-700/40">
      <div className="container mx-auto px-3 sm:px-4 h-full flex items-center justify-between">
        {/* Logo & Pulse Dot */}
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

          {/* Social Media Links */}
          <div className="ml-4 flex items-center space-x-3">
            <a 
              href="https://discord.gg/kRftHc7e" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-titanium-white/70 hover:text-plasma-violet transition-colors"
              aria-label="Discord"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord">
                <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.2c.2-.4.5-.8.9-1.2A10 10 0 0 1 12 5a10 10 0 0 1 3.6 1.1c.4.4.7.8.9 1.2"/><path d="M5 15.2c2.9 1.2 7.1 1.2 10 0"/><path d="M16.8 14.5c-.2.8-.7 1.5-1.2 2-1.3 1.2-3 2-4.6 2s-3.3-.8-4.6-2c-.5-.5-1-1.2-1.2-2"/><path d="M12 22a8 8 0 0 0 8-8V9.5a5 5 0 0 0-2.7-4.3A10 10 0 0 0 12 4a10 10 0 0 0-5.3 1.2A5 5 0 0 0 4 9.5V14a8 8 0 0 0 8 8Z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/curabledaopublic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-titanium-white/70 hover:text-bio-blue transition-colors"
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.73 2.77a2.5 2.5 0 0 0-2.77.53L6.7 14.4a.5.5 0 0 0 .3.85l2.8.7"></path>
                <path d="M18.5 4.5 9.2 18.1a.5.5 0 0 0 .6.7l7.9-2.4a2.5 2.5 0 0 0 1.8-2.2z"></path>
                <path d="m2 22 5.5-1.5L18.5 9"></path>
              </svg>
            </a>
            <a 
              href="https://x.com/curabledao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-titanium-white/70 hover:text-titanium-white transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>
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
                <div className="p-4 border-b border-graphite-700/40">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/9f48e9db-5a06-4a87-be2f-b514b3153f90.png" 
                      alt="CURABLE DAO" 
                      className="h-8 w-auto" 
                    />
                    <div className="ml-2 w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-auto p-4">
                  <nav className="flex flex-col space-y-4">
                    {/* DNA Launch Button */}
                    <a 
                      href="https://binding-db-integrator-1-codelace77.replit.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white font-bold text-base mb-4 animate-pulse"
                    >
                      🧬 Launch BindingDB
                    </a>
                    
                    <Link 
                      to="/about" 
                      className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/about') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      ABOUT
                    </Link>
                    <Link 
                      to="/tokenomics" 
                      className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/tokenomics') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      TOKENOMICS
                    </Link>
                    <Link 
                      to="/whitepaper" 
                      className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/whitepaper') ? 'text-plasma-violet' : 'text-titanium-white'}`}
                    >
                      WHITEPAPER
                    </Link>

                    {/* Social Media Links */}
                    <div className="flex items-center space-x-6 py-3 border-b border-graphite-700/40">
                      <a 
                        href="https://discord.gg/kRftHc7e" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-titanium-white/70 hover:text-plasma-violet transition-colors"
                        aria-label="Discord"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord">
                          <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.2c.2-.4.5-.8.9-1.2A10 10 0 0 1 12 5a10 10 0 0 1 3.6 1.1c.4.4.7.8.9 1.2"/><path d="M5 15.2c2.9 1.2 7.1 1.2 10 0"/><path d="M16.8 14.5c-.2.8-.7 1.5-1.2 2-1.3 1.2-3 2-4.6 2s-3.3-.8-4.6-2c-.5-.5-1-1.2-1.2-2"/><path d="M12 22a8 8 0 0 0 8-8V9.5a5 5 0 0 0-2.7-4.3A10 10 0 0 0 12 4a10 10 0 0 0-5.3 1.2A5 5 0 0 0 4 9.5V14a8 8 0 0 0 8 8Z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://t.me/curabledaopublic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-titanium-white/70 hover:text-bio-blue transition-colors"
                        aria-label="Telegram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.73 2.77a2.5 2.5 0 0 0-2.77.53L6.7 14.4a.5.5 0 0 0 .3.85l2.8.7"></path>
                          <path d="M18.5 4.5 9.2 18.1a.5.5 0 0 0 .6.7l7.9-2.4a2.5 2.5 0 0 0 1.8-2.2z"></path>
                          <path d="m2 22 5.5-1.5L18.5 9"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://x.com/curabledao" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-titanium-white/70 hover:text-titanium-white transition-colors"
                        aria-label="X (Twitter)"
                      >
                        <Twitter size={22} />
                      </a>
                    </div>
                  </nav>
                </div>
                
                <div className="p-4 pt-0">
                  <div className="flex flex-col space-y-3">
                    <Link 
                      to="/join" 
                      className="btn-primary text-center py-3 text-sm"
                    >
                      JOIN DAO
                    </Link>
                    <Link 
                      to="/novel" 
                      className="btn-secondary text-center py-3 text-sm"
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
