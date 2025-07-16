import { X, Linkedin, Youtube, Instagram, Facebook, BookOpen, GraduationCap, FileText } from 'lucide-react';

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
      name: "Facebook", 
      url: "#", 
      active: false,
      icon: <Facebook size={20} />
    },
    { 
      name: "TikTok", 
      url: "#", 
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      )
    },
    { 
      name: "Reddit", 
      url: "#", 
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12c0 8-8 8-8 8s-8 0-8-8a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="m7 13 3 3 3-3"/>
        </svg>
      )
    },
    { 
      name: "ResearchGate", 
      url: "#", 
      active: false,
      icon: <BookOpen size={20} />
    },
    { 
      name: "Academia", 
      url: "#", 
      active: false,
      icon: <GraduationCap size={20} />
    },
    { 
      name: "Substack", 
      url: "#", 
      active: false,
      icon: <FileText size={20} />
    },
    { 
      name: "Farcaster", 
      url: "#", 
      active: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" x2="9.01" y1="9" y2="9"/>
          <line x1="15" x2="15.01" y1="9" y2="9"/>
        </svg>
      )
    }
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-gunmetal-900/95 backdrop-blur-lg border-t border-warm-amber/20"
      role="navigation"
      aria-label="Social media navigation"
    >
      {/* Responsive grid layout for social links */}
      <div className="container mx-auto px-4 py-3">
        {/* Horizontal scrollable container for mobile, grid for larger screens */}
        <div className="flex overflow-x-auto space-x-4 sm:grid sm:grid-cols-6 lg:grid-cols-12 sm:gap-4 sm:space-x-0 pb-2 sm:pb-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.active ? social.url : undefined}
              target={social.active ? "_blank" : undefined}
              rel={social.active ? "noopener noreferrer" : undefined}
              className={`
                group flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg transition-all duration-300 flex-shrink-0
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
              
              {/* Label - visible on larger screens only */}
              <span className="hidden lg:block text-xs mt-1 font-medium text-center">
                {social.name}
              </span>
              
              {/* Coming Soon indicator */}
              {!social.active && (
                <span className="lg:hidden text-[10px] text-titanium-white/20 mt-0.5">
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