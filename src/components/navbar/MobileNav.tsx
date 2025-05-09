
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import { NavLogo } from './NavLogo';
import { ActionButtons } from './ActionButtons';

export const MobileNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-graphite-700/40 border border-logo-blue/30 shadow-md shadow-logo-blue/20 hover:shadow-logo-blue/40 hover:border-logo-blue/50 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-titanium-white" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 border-0 w-full max-w-full sm:max-w-md bg-gunmetal-900/95 backdrop-blur-lg">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-graphite-700/40">
            <NavLogo />
          </div>
          
          <div className="flex-1 overflow-auto p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/about" 
                className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/about') ? 'text-plasma-violet' : 'text-titanium-white'}`}
              >
                ABOUT
              </Link>
              <Link 
                to="/whitepaper" 
                className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/whitepaper') ? 'text-plasma-violet' : 'text-titanium-white'}`}
              >
                WHITEPAPER
              </Link>
              <Link 
                to="/tokenomics" 
                className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/tokenomics') ? 'text-plasma-violet' : 'text-titanium-white'}`}
              >
                TOKENOMICS
              </Link>

              {/* Social Media Links */}
              <SocialLinks size={22} className="py-3 border-b border-graphite-700/40" />
            </nav>
          </div>
          
          <div className="p-4 pt-0">
            <ActionButtons isMobile={true} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
