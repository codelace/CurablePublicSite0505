
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import GradientText from '@/components/ui/GradientText';

interface WhitepaperHeaderProps {
  fullTerminalText: string;
}

const WhitepaperHeader: React.FC<WhitepaperHeaderProps> = ({ fullTerminalText }) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Typewriter effect for terminal header
  useEffect(() => {
    if (terminalText.length < fullTerminalText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullTerminalText.substring(0, terminalText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
    
    // Blink cursor after typing is complete
    if (terminalText.length === fullTerminalText.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);
      return () => clearInterval(cursorInterval);
    }
  }, [terminalText, fullTerminalText]);

  return (
    <div className="bg-dark-surface border-b border-graphite-700/60 p-4 font-mono relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 grid-overlay pointer-events-none"></div>
      
      {/* Data scan lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-logo-blue/10 top-1/4 animate-scan-line" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute w-full h-0.5 bg-plasma-violet/10 top-2/3 animate-scan-line" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      </div>
      
      <div className="text-sm text-bio-blue whitespace-pre-line relative">
        {terminalText}
        <span className={`inline-block w-2 h-4 bg-bio-blue ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{transition: 'opacity 0.1s'}}></span>
      </div>
      
      <h1 className="text-3xl font-bold text-titanium-white mt-2 flex items-center gap-2 font-space relative z-10">
        <span className="text-bio-blue">&gt;</span> 
        <GradientText variant="blue-purple" animate>CurableDAO</GradientText> 
        <span>Whitepaper</span>
        <Badge className="ml-2 bg-plasma-violet/20 text-plasma-violet text-xs glow-pulse">v2.5</Badge>
      </h1>
      
      {/* Decorative circuit pattern */}
      <div className="absolute bottom-2 right-2 text-[0.6rem] text-bio-blue/40 font-mono">
        ~/protocol/whitepaper/v2.5 $ <span className="cursor-blink">_</span>
      </div>
    </div>
  );
};

export default WhitepaperHeader;
