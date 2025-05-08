
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import MainContentSection from '@/components/home/MainContentSection';
import BackgroundEffects from '@/components/home/BackgroundEffects';
import FloatingActionIndicator from '@/components/home/FloatingActionIndicator';

const statusItems = [
  { label: 'API CONNECTED', status: 'connected' as const },
  { label: 'DAO PROTOCOL v1.2.4', status: 'connected' as const },
  { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
  { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [revealSections, setRevealSections] = useState<string[]>([]);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Enhanced dramatic staged animation on mount
  useEffect(() => {
    // Initial stage - Basic UI elements
    setTimeout(() => {
      setMounted(true);
    }, 200);
    
    // Second stage - Hero text and intro
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'hero-text']);
    }, 800);
    
    // Third stage - Status indicators
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'status']);
    }, 1400);
    
    // Fourth stage - Main content
    setTimeout(() => {
      setRevealSections(prev => [...prev, 'tabs']);
    }, 2000);
  }, []);

  // Scroll to content function
  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-68px)] flex flex-col">
      {/* Background components */}
      <BackgroundEffects />
      
      {/* Main content with animations */}
      <div className={`container px-4 py-6 relative z-10 flex-1 transition-all duration-1000 transform ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <HeroSection 
          mounted={mounted} 
          revealSections={revealSections} 
          scrollToContent={scrollToContent} 
        />
        
        {/* Main Content Section */}
        <MainContentSection 
          statusItems={statusItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          revealSections={revealSections}
        />
      </div>
      
      {/* Floating action button */}
      <FloatingActionIndicator isScrolled={isScrolled} />
    </div>
  );
};

export default Index;
