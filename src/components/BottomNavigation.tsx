import { X, Github, Linkedin, Youtube, Instagram } from 'lucide-react';

export const BottomNavigation = () => {
  const socialLinks = [
    { 
      name: "Discord", 
      url: "https://discord.gg/6ysU6ge653", 
      active: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="1"/>
          <circle cx="15" cy="12" r="1"/>
          <path d="M7.5 7.2c.2-.4.5-.8.9-1.2A10 10 0 0 1 12 5a10 10 0 0 1 3.6 1.1c.4.4.7.8.9 1.2"/>
          <path d="M5 15.2c2.9 1.2 7.1 1.2 10 0"/>
          <path d="M16.8 14.5c-.2.8-.7 1.5-1.2 2-1.3 1.2-3 2-4.6 2s-3.3-.8-4.6-2c-.5-.5-1-1.2-1.2-2"/>
          <path d="M12 22a8 8 0 0 0 8-8V9.5a5 5 0 0 0-2.7-4.3A10 10 0 0 0 12 4a10 10 0 0 0-5.3 1.2A5 5 0 0 0 4 9.5V14a8 8 0 0 0 8 8Z"/>
        </svg>
      )
    },
    { 
      name: "X", 
      url: "https://x.com/curabledao", 
      active: true,
      icon: <X size={20} />
    },
    { 
      name: "LinkedIn", 
      url: "#", 
      active: false,
      icon: <Linkedin size={20} />
    },
    { 
      name: "YouTube", 
      url: "#", 
      active: false,
      icon: <Youtube size={20} />
    },
    { 
      name: "Instagram", 
      url: "#", 
      active: false,
      icon: <Instagram size={20} />
    },
    { 
      name: "GitHub", 
      url: "#", 
      active: false,
      icon: <Github size={20} />
    }
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-gunmetal-900/95 backdrop-blur-lg border-t border-warm-amber/20"
      role="navigation"
      aria-label="Social media navigation"
    >
      {/* Mobile-friendly container with proper spacing */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center space-x-6 sm:space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.active ? social.url : undefined}
              target={social.active ? "_blank" : undefined}
              rel={social.active ? "noopener noreferrer" : undefined}
              className={`
                group flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-lg transition-all duration-300
                ${social.active 
                  ? 'text-titanium-white/70 hover:text-warm-amber hover:bg-warm-amber/10 active:scale-95' 
                  : 'text-titanium-white/30 cursor-not-allowed'
                }
              `}
              aria-label={`${social.name}${social.active ? '' : ' (Coming Soon)'}`}
              aria-disabled={!social.active}
              tabIndex={social.active ? 0 : -1}
            >
              {/* Icon */}
              <div className="transition-transform duration-200 group-hover:scale-110">
                {social.icon}
              </div>
              
              {/* Label - hidden on small screens, visible on larger screens */}
              <span className="hidden sm:block text-xs mt-1 font-medium">
                {social.name}
              </span>
              
              {/* Coming Soon indicator for mobile */}
              {!social.active && (
                <span className="sm:hidden text-[10px] text-titanium-white/20 mt-0.5">
                  Soon
                </span>
              )}
            </a>
          ))}
        </div>
        
        {/* Copyright notice - only on desktop */}
        <div className="hidden md:block text-center mt-2 pt-2 border-t border-warm-amber/10">
          <p className="text-xs text-titanium-white/40">
            © 2025 Curable Labs. All rights reserved.
          </p>
        </div>
      </div>
    </nav>
  );
};