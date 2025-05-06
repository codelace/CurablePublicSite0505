
import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";

interface WhitepaperHeaderProps {
  fullTerminalText: string;
}

const WhitepaperHeader: React.FC<WhitepaperHeaderProps> = ({ fullTerminalText }) => {
  const [terminalText, setTerminalText] = useState('');
  
  // Typewriter effect for terminal header
  useEffect(() => {
    if (terminalText.length < fullTerminalText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullTerminalText.substring(0, terminalText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [terminalText, fullTerminalText]);

  return (
    <div className="bg-dark-surface border-b border-graphite-700/60 p-4 font-mono">
      <div className="text-sm text-arc-blue whitespace-pre-line">{terminalText}</div>
      <h1 className="text-3xl font-bold text-titanium-white mt-2 flex items-center gap-2 font-space">
        <span className="text-arc-blue">&gt;</span> <span className="text-bio-green">CurableDAO</span> Whitepaper
        <Badge className="ml-2 bg-plasma-violet/20 text-plasma-violet text-xs">v2.5</Badge>
      </h1>
    </div>
  );
};

export default WhitepaperHeader;
