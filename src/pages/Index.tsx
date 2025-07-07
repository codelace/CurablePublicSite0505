
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import HeroSection from '@/components/home/HeroSection';
import MainContentSection from '@/components/home/MainContentSection';
import BackgroundEffects from '@/components/home/BackgroundEffects';
import FloatingActionIndicator from '@/components/home/FloatingActionIndicator';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [revealSections, setRevealSections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('mission');
  
  // Memoize status items to prevent unnecessary re-renders
  const statusItems = useMemo(() => [
    { label: 'API CONNECTED', status: 'connected' as const },
    { label: 'LABS PROTOCOL v1.2.4', status: 'connected' as const },
    { label: 'NETWORK UPTIME 99.8%', status: 'connected' as const },
    { label: 'CONSENSUS PROTOCOL', status: 'pending' as const }
  ], []);
  
  // Track scroll position with passive listener for better performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Enhanced staged animation on mount with better timing and performance
  useEffect(() => {
    // Use a single RAF call to optimize browser reflows
    requestAnimationFrame(() => {
      // Initial stage - Basic UI elements
      setTimeout(() => {
        setMounted(true);
      }, 100);
      
      // Second stage - Hero text and intro
      setTimeout(() => {
        setRevealSections(prev => [...prev, 'hero-text']);
      }, 400);
      
      // Third stage - Status indicators
      setTimeout(() => {
        setRevealSections(prev => [...prev, 'status']);
      }, 700);
      
      // Fourth stage - Main content
      setTimeout(() => {
        setRevealSections(prev => [...prev, 'tabs']);
      }, 1000);
    });
  }, []);

  // Improved scroll function with smoother animation and error handling
  const scrollToContent = useCallback(() => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      // More reliable scrolling method with a slight offset
      window.scrollTo({
        top: contentElement.offsetTop - 80, // Offset to account for navbar height
        behavior: 'smooth'
      });
      
      // Focus the content area for accessibility
      contentElement.setAttribute('tabindex', '-1');
      contentElement.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-68px)] flex flex-col">
      {/* Background components */}
      <BackgroundEffects />
      
      {/* Main content with animations - compacted layout */}
      <div className={`container px-4 py-4 relative z-10 flex-1 transition-all duration-700 transform ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section with reduced spacing */}
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
