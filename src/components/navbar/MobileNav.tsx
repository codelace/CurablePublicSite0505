
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import { NavLogo } from './NavLogo';
import { ActionButtons } from './ActionButtons';
import { useState } from 'react';

export const MobileNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [productsOpen, setProductsOpen] = useState(false);

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
              <Link 
                to="/faq" 
                className={`text-base font-bold py-3 border-b border-graphite-700/40 ${isActive('/faq') ? 'text-plasma-violet' : 'text-titanium-white'}`}
              >
                FAQ
              </Link>
              
              <div className="border-b border-graphite-700/40">
                <button 
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex items-center justify-between text-base font-bold py-3 text-titanium-white"
                >
                  PRODUCTS
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="pb-3 pl-4 space-y-2">
                    <Link 
                      to="/wearable" 
                      className={`block text-sm py-2 ${isActive('/wearable') ? 'text-plasma-violet' : 'text-titanium-white/80'}`}
                    >
                      Wearable
                    </Link>
                    <Link 
                      to="/agency" 
                      className={`block text-sm py-2 ${isActive('/agency') ? 'text-plasma-violet' : 'text-titanium-white/80'}`}
                    >
                      Agency
                    </Link>
                    <Link 
                      to="/gated-ip-nft" 
                      className={`block text-sm py-2 ${isActive('/gated-ip-nft') ? 'text-plasma-violet' : 'text-titanium-white/80'}`}
                    >
                      Gated IP NFT
                    </Link>
                  </div>
                )}
              </div>
              
              <a 
                href="https://curableda-oi-codelace77.replit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base font-bold py-3 border-b border-graphite-700/40 text-titanium-white hover:text-plasma-violet"
              >
                CUREWORLD
              </a>

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
