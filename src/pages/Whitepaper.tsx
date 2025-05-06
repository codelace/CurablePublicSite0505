
import React, { useState, useEffect } from 'react';
import { sections } from '@/data/whitepaperSections';
import { ArrowRight, ExternalLink, Download, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Whitepaper = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const fullTerminalText = '> initializing whitepaper_v2.5...\n> system loaded: curable-core-protocol';
  
  // Typewriter effect for terminal header
  useEffect(() => {
    if (terminalText.length < fullTerminalText.length) {
      const timeout = setTimeout(() => {
        setTerminalText(fullTerminalText.substring(0, terminalText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [terminalText]);

  // Intersection observer for scrollspy functionality
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id.split('-')[1]);
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all section elements
    document.querySelectorAll('.whitepaper-section').forEach(
      section => observer.observe(section)
    );

    return () => {
      document.querySelectorAll('.whitepaper-section').forEach(
        section => observer.unobserve(section)
      );
    };
  }, []);

  // Handle section click
  const scrollToSection = (index: number) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Format section index as hex
  const formatHex = (index: number) => {
    return `0x${index.toString(16).padStart(2, '0')}`;
  };

  return (
    <div className="container max-w-full p-0 min-h-[calc(100vh-5rem)]">
      <div className="bg-gunmetal-900/80 backdrop-blur-sm p-4 border-b border-graphite-700/60 font-mono">
        <div className="text-sm text-bio-blue whitespace-pre-line">{terminalText}</div>
        <h1 className="text-3xl font-bold text-titanium-white mt-2 flex items-center gap-2">
          <span className="text-bio-blue">&gt;</span> <span className="text-bio-green">CurableDAO</span> Whitepaper
          <Badge className="ml-2 bg-bio-violet/20 text-bio-violet text-xs">v2.5</Badge>
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Fixed sidebar navigation */}
        <aside className="w-full md:w-64 md:min-h-[calc(100vh-9rem)] border-r border-graphite-700/60 bg-gunmetal-900/60 p-4 md:sticky md:top-20">
          <div className="font-mono text-sm text-titanium-white/70 mb-3">// Section Index</div>
          <nav className="space-y-1">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-full text-left p-2 rounded transition-all flex items-center gap-2 hover:bg-gunmetal-900/80 
                  ${activeSection === index ? 'text-bio-green bg-gunmetal-900/80' : 'text-titanium-white/70'}`}
              >
                <span className={`inline-block w-2 h-2 rounded-full ${activeSection === index ? 'bg-bio-green animate-pulse' : 'bg-titanium-white/30'}`}></span>
                <span className="text-xs text-bio-blue font-mono mr-1">{formatHex(index)}:</span>
                <span className="font-mono text-sm truncate">{section.title.replace(/^\d+\.\s+/, '')}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-6 pt-6 border-t border-graphite-700/60">
            <Button 
              variant="outline" 
              className="w-full mb-2 bg-gunmetal-900/80 border-graphite-700/60 hover:bg-gunmetal-900 hover:border-bio-blue/60 font-mono text-bio-blue flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              download.pdf
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-gunmetal-900/80 border-graphite-700/60 hover:bg-gunmetal-900 hover:border-bio-green/60 font-mono text-bio-green flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              view.github
            </Button>
          </div>
        </aside>
        
        {/* Main content area */}
        <main className="flex-1 bg-gunmetal-900/30 backdrop-blur-sm min-h-[calc(100vh-9rem)]">
          <ScrollArea className="h-[calc(100vh-9rem)]">
            <div className="p-6 md:p-8 space-y-12">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  id={`section-${index}`} 
                  className={`whitepaper-section space-y-4 transition-opacity duration-300 
                    ${activeSection === index ? 'opacity-100' : 'opacity-80'}`}
                >
                  <div className="font-mono bg-gunmetal-900/80 border border-graphite-700/60 p-3 rounded flex items-center">
                    <span className="text-bio-blue mr-2">{formatHex(index)}:</span>
                    <h2 className="text-xl text-bio-green font-bold">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="font-sans text-titanium-white/90 leading-relaxed whitespace-pre-line pl-4 ml-2 border-l-2 border-graphite-700/60">
                    {section.body}
                  </div>
                  
                  {/* Decorative elements to enhance the terminal/code look */}
                  {index < sections.length - 1 && (
                    <div className="font-mono text-xs text-titanium-white/30 pl-4">
                      # End of section {formatHex(index)}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Final signature block */}
              <div className="font-mono bg-gunmetal-900/40 border border-graphite-700/40 p-6 rounded mt-12">
                <div className="text-titanium-white/80 text-sm">
                  <div className="text-bio-green mb-4">/*</div>
                  <div className="mb-2">CurableDAO is a protocol for collective healing.</div>
                  <div className="mb-2">We, the network, sign this whitepaper in shared pursuit</div>
                  <div className="mb-4">of decentralized biomedical breakthroughs.</div>
                  <div className="mb-2">Signed,</div>
                  <div className="text-bio-blue mb-2">The CurableDAO Genesis Contributors</div>
                  <div className="text-bio-green">*/</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {Array(5).fill(0).map((_, i) => (
                    <TooltipProvider key={i}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-10 h-10 rounded-full bg-bio-blue/20 flex items-center justify-center border border-bio-blue/30">
                            <span className="text-xs font-mono text-bio-blue">0x{i.toString(16).padStart(2, '0')}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-xs font-mono">
                            <div>contributor.{i+1}.eth</div>
                            <div className="text-titanium-white/60">signed: 05/02/2024</div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
              
              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center bg-gunmetal-900/20 border border-graphite-700/20 p-6 rounded-lg">
                <Button 
                  className="bg-bio-green text-gunmetal-900 hover:bg-bio-green/90 font-mono font-bold flex items-center gap-2"
                >
                  fork.protocol()
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="bg-transparent border-bio-blue text-bio-blue hover:bg-bio-blue/10 font-mono flex items-center gap-2"
                >
                  cite.whitepaper()
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default Whitepaper;
