
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/GradientText';

interface HeroSectionProps {
  mounted: boolean;
  revealSections: string[];
  scrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ mounted, revealSections, scrollToContent }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] pb-12">
      {/* Main Hero Content with dramatic staggered animation */}
      <div className="mb-12 text-center max-w-5xl mx-auto">
        <div className="relative mb-6 inline-block">
          <div className={`h-24 w-24 sm:h-32 sm:w-32 relative mx-auto mb-8 transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            <div className="absolute inset-0 rounded-full border-4 border-logo-blue/20"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-logo-blue animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-4 border-plasma-violet animate-pulse opacity-70"></div>
            <div className="absolute inset-0 m-8 rounded-full bg-logo-blue/20 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className={`transition-all duration-1000 delay-300 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-space leading-tight tracking-tight mb-4">
            <span className="text-titanium-white">Curable</span>
            <span className="text-logo-blue">DAO</span>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl mt-2 text-titanium-white/80 font-light">
            The Future of <GradientText variant="blue-purple" animate>Biomedical Research</GradientText>
          </div>
        </h1>
        
        <p className={`text-titanium-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed mb-8 mt-6 transition-all duration-1000 delay-500 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          An AI-powered, decentralized ecosystem for discovering, validating, and 
          delivering <span className="text-bio-green font-medium">novel cures</span> through 
          blockchain-native governance and collaborative research.
        </p>
        
        {/* Enhanced call to action buttons with dramatic hover effects */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 transform ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            to="/about"
            className="group relative px-8 py-4 bg-logo-blue hover:bg-logo-blue/90 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(30,174,219,0.4)] hover:scale-105"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>Explore Platform</span> 
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-logo-blue to-plasma-violet/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <Link 
            to="/whitepaper"
            className="px-8 py-4 bg-transparent border-2 border-titanium-white/30 hover:border-titanium-white/70 text-titanium-white font-bold rounded-lg transition-all duration-500 hover:shadow-[0_0_15px_rgba(232,241,249,0.15)] hover:scale-105"
          >
            Read Whitepaper
          </Link>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${revealSections.includes('hero-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-titanium-white/60 hover:text-titanium-white transition-colors duration-300"
        >
          <span className="text-xs mb-2 font-mono">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
