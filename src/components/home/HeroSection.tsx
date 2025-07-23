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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-320px)] pb-2 will-change-transform relative quantum-field">
      {/* Quantum background effects */}
      <div className="absolute inset-0 quantum-particles"></div>
      <div className="absolute inset-0 dna-helix opacity-10">
        <div className="dna-strand"></div>
        <div className="dna-strand"></div>
      </div>
      
      {/* Main Hero Content with more compact spacing */}
      <div className="mb-4 text-center max-w-5xl mx-auto relative z-10">
        <div className="relative mb-2 inline-block">
          <div className={`h-20 w-20 sm:h-24 sm:w-24 relative mx-auto mb-4 transition-all duration-700 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            {/* Enhanced rotating rings with electric quantum blue */}
            <div className="absolute inset-0 rounded-full border-4 border-quantum-red/30 shadow-lg shadow-quantum-red/20"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-electric-quantum-blue animate-spin will-change-transform shadow-electric-quantum-blue/40" style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-4 border-quantum-electric animate-pulse opacity-70"></div>
            
            {/* Inner quantum core with electric blue gradient */}
            <div className="absolute inset-0 m-8 rounded-full bg-gradient-to-br from-quantum-red via-electric-quantum-blue to-quantum-electric opacity-80 blur-sm animate-pulse"></div>
          </div>
        </div>
        
        <h1 className={`transition-all duration-700 delay-200 transform ${revealClass('hero-text')}`}>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight tracking-tight mb-2">
            <span style={{color: '#4477FF', textShadow: '0 0 20px rgba(68, 119, 255, 0.6)'}}>Curable</span>
            <span className="holographic-text" style={{color: '#6699FF', textShadow: '0 0 15px rgba(102, 153, 255, 0.5)'}}> Labs</span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl mt-2 text-foreground/90 font-light">
            <span style={{
              background: 'linear-gradient(135deg, #4477FF, #6699FF)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(68, 119, 255, 0.4)',
              filter: 'brightness(1.2)'
            }}>Blueprinting Tomorrow's Cures</span>
          </div>
        </h1>
        
        <p className={`text-foreground/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6 mt-4 transition-all duration-700 delay-300 transform ${revealClass('hero-text')} font-poppins`}>
          An AI-powered, decentralized ecosystem for discovering, validating, and 
          delivering <span style={{color: '#5588FF', fontWeight: '600', textShadow: '0 0 10px rgba(85, 136, 255, 0.5)'}}>novel cures</span> through 
          blockchain-native governance and <span style={{color: '#7799FF', fontWeight: '600', textShadow: '0 0 10px rgba(119, 153, 255, 0.4)'}}>collaborative research</span>.
        </p>
        
        {/* Enhanced call to action buttons with compact spacing */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-700 delay-400 transform ${revealClass('hero-text')}`}>
          <button
            onClick={scrollToContent}
            className="btn-quantum-enhanced magnetic-attraction group relative px-8 py-4 text-white font-poppins font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 will-change-transform"
            style={{
              background: 'linear-gradient(135deg, #4477FF, #6699FF)',
              border: '2px solid #5588FF',
              boxShadow: '0 4px 20px rgba(68, 119, 255, 0.4)'
            }}
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-lg">Explore Platform</span> 
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-3 transition-transform will-change-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-quantum-red to-warm-rose opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </button>
          
          <Link 
            to="/whitepaper"
            className="magnetic-attraction px-8 py-4 bg-transparent text-white hover:text-white font-poppins font-bold rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 will-change-transform backdrop-blur-sm"
            style={{
              border: '2px solid #5588FF',
              color: '#5588FF',
              boxShadow: '0 0 15px rgba(85, 136, 255, 0.3)',
              textShadow: '0 0 10px rgba(85, 136, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4477FF';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(68, 119, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#5588FF';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(85, 136, 255, 0.3)';
            }}
          >
            <span className="text-lg">Read Whitepaper</span>
          </Link>
        </div>
      </div>
      
      {/* Animated scroll indicator - more compact position */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${revealClass('hero-text')} magnetic-attraction`}>
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-foreground/60 hover:text-electric-quantum-blue transition-colors duration-300 group"
          aria-label="Scroll to content"
        >
          <span className="text-sm mb-2 font-poppins font-medium group-hover:text-electric-quantum-blue">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-electric-quantum-blue transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
