
import { Twitter } from 'lucide-react';

interface SocialLinksProps {
  size?: number;
  className?: string;
}

export const SocialLinks = ({ size = 20, className = "" }: SocialLinksProps) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <a 
        href="https://discord.gg/zY4RuyPZ" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-titanium-white/70 hover:text-plasma-violet transition-colors"
        aria-label="Discord"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord">
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
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <Twitter size={size} />
      </a>
    </div>
  );
};
