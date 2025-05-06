
import React, { useState, useEffect } from 'react';
import { sections } from '@/data/whitepaperSections';
import { ScrollArea } from "@/components/ui/scroll-area";
import WhitepaperHeader from '@/components/whitepaper/WhitepaperHeader';
import WhitepaperSidebar from '@/components/whitepaper/WhitepaperSidebar';
import WhitepaperSectionComponent from '@/components/whitepaper/WhitepaperSection';
import SignatureBlock from '@/components/whitepaper/SignatureBlock';
import CallToAction from '@/components/whitepaper/CallToAction';

const Whitepaper = () => {
  const [activeSection, setActiveSection] = useState(0);
  const fullTerminalText = '> initializing whitepaper_v2.5...\n> system loaded: curable-core-protocol';

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
      <WhitepaperHeader fullTerminalText={fullTerminalText} />
      
      <div className="flex flex-col md:flex-row">
        <WhitepaperSidebar 
          sections={sections} 
          activeSection={activeSection} 
          onSectionClick={scrollToSection}
          formatHex={formatHex}
        />
        
        {/* Main content area */}
        <main className="flex-1 bg-dark-base backdrop-blur-sm min-h-[calc(100vh-9rem)]">
          <ScrollArea className="h-[calc(100vh-9rem)]">
            <div className="p-6 md:p-8 space-y-12">
              {sections.map((section, index) => (
                <WhitepaperSectionComponent
                  key={index}
                  section={section}
                  index={index}
                  activeSection={activeSection}
                  formatHex={formatHex}
                  isLast={index === sections.length - 1}
                />
              ))}
              
              <SignatureBlock />
              <CallToAction />
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};

export default Whitepaper;
