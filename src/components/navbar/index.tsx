
import { useIsMobile } from '@/hooks/use-mobile';
import { NavLogo } from './NavLogo';
import { DesktopNav } from './DesktopNav';
import { ActionButtons } from './ActionButtons';
import { MobileNav } from './MobileNav';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] sm:h-[68px] bg-brand-charcoal/80 backdrop-blur-lg border-b border-quantum-red/30 shadow-lg shadow-quantum-red/20 navbar-glow">
      <div className="container mx-auto px-3 sm:px-4 h-full flex items-center justify-between">
        {/* Logo & Pulse Dot with subtle animation */}
        <NavLogo />
        
        {/* Desktop Navigation with hover effects */}
        <DesktopNav />
        
        {/* Action Buttons with consistent sizing */}
        <ActionButtons />
        
        {/* Mobile Menu Button */}
        {isMobile && <MobileNav />}
      </div>
    </header>
  );
};

export default Navbar;
