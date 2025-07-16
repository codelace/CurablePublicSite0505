
import { Link, useLocation } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-sm sm:text-base font-normal">
              PRODUCTS
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 w-48 bg-gunmetal-900/95 border border-logo-blue/30">
                <NavigationMenuLink asChild>
                  <Link 
                    to="/wearable" 
                    className="block px-3 py-2 text-sm text-titanium-white hover:text-logo-blue transition-colors"
                  >
                    Wearable
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/agency" 
                    className="block px-3 py-2 text-sm text-titanium-white hover:text-logo-blue transition-colors"
                  >
                    Agency
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/gated-ip-nft" 
                    className="block px-3 py-2 text-sm text-titanium-white hover:text-logo-blue transition-colors"
                  >
                    Gated IP NFT
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <a 
        href="https://curableda-oi-codelace77.replit.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="nav-link after:transition-all after:duration-300 hover:text-logo-blue"
      >
        CUREWORLD
      </a>

      <Link 
        to="/news" 
        className={`nav-link after:transition-all after:duration-300 ${isActive('/news') ? 'text-logo-blue after:opacity-100 after:left-0 after:right-0' : ''}`}
      >
        NEWS
      </Link>
      
      <Link 
        to="/faq" 
        className={`nav-link after:transition-all after:duration-300 ${isActive('/faq') ? 'text-logo-blue after:opacity-100 after:left-0 after:right-0' : ''}`}
      >
        FAQ
      </Link>

      {/* Social Media Links */}
      <SocialLinks className="ml-4" />
    </nav>
  );
};
