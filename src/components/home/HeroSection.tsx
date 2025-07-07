import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/GradientText';

interface HeroSectionProps {
  mounted: boolean;
  revealSections: string[];
  scrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ mounted, revealSections, scrollToContent }) => {
  // Use transforms instead of opacity+translate for better performance
  const revealClass = useCallback((section: string) => 
    revealSections.includes(section) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
  [revealSections]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-320px)] pb-2 will-change-transform">
      {/* Main Hero Content with more compact spacing */}
      <div className="mb-4 text-center max-w-5xl mx-auto">
        <div className="relative mb-2 inline-block">
          <div className={`h-16 w-16 sm:h-20 sm:w-20 relative mx-auto mb-2 transition-all duration-700 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="absolute inset-0 rounded-full border-4 border-logo-blue/20"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-logo-blue animate-spin will-change-transform" style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-4 border-plasma-violet animate-pulse opacity-70"></div>
            <div className="absolute inset-0 m-6 rounded-full bg-logo-blue/20 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className={`transition-all duration-700 delay-200 transform ${revealClass('hero-text')}`}>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-tight tracking-tight mb-1">
            <span className="text-titanium-white">Curable</span>
            <span className="text-logo-blue"> Labs</span>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl mt-1 text-titanium-white/80 font-light">
            <GradientText variant="blue-purple" animate>Blueprinting Tomorrow's Cures</GradientText>
          </div>
        </h1>
        
        <p className={`text-titanium-white/80 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-4 mt-2 transition-all duration-700 delay-300 transform ${revealClass('hero-text')}`}>
          An AI-powered, decentralized ecosystem for discovering, validating, and 
          delivering <span className="text-bio-green font-medium">novel cures</span> through 
          blockchain-native governance and collaborative research.
        </p>
        
        {/* Enhanced call to action buttons with compact spacing */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-700 delay-400 transform ${revealClass('hero-text')}`}>
          <button
            onClick={scrollToContent}
            className="group relative px-4 py-2 bg-logo-blue hover:bg-logo-blue/90 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(30,174,219,0.4)] hover:scale-105 will-change-transform"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>Explore Platform</span> 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform will-change-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-logo-blue to-plasma-violet/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <Link 
            to="/whitepaper"
            className="px-4 py-2 bg-transparent border-2 border-titanium-white/30 hover:border-titanium-white/70 text-titanium-white font-bold rounded-lg transition-all duration-500 hover:shadow-[0_0_15px_rgba(232,241,249,0.15)] hover:scale-105 will-change-transform"
          >
            Read Whitepaper
          </Link>
        </div>
      </div>
      
      {/* Animated scroll indicator - more compact position */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${revealClass('hero-text')}`}>
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-titanium-white/60 hover:text-titanium-white transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <span className="text-xs mb-1 font-mono">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
