
import { useIsMobile } from '@/hooks/use-mobile';
import { NavLogo } from './NavLogo';
import { DesktopNav } from './DesktopNav';
import { ActionButtons } from './ActionButtons';
import { MobileNav } from './MobileNav';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="nav-modern shadow-biotech">
      <div className="container-modern h-[60px] sm:h-[68px] flex items-center justify-between">
        {/* Enhanced Logo with magnetic effect */}
        <div className="magnetic-hover">
          <NavLogo />
        </div>
        
        {/* Enhanced Desktop Navigation */}
        <DesktopNav />
        
        {/* Enhanced Action Buttons */}
        <ActionButtons />
        
        {/* Mobile Menu Button */}
        {isMobile && <MobileNav />}
      </div>
    </header>
  );
};

export default Navbar;
