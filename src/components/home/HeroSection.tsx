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
      
      {/* Main Hero Content with more compact spacing */}
      <div className="mb-4 text-center max-w-5xl mx-auto relative z-10">
        <div className="relative mb-2 inline-block">
          <div className={`h-20 w-20 sm:h-24 sm:w-24 relative mx-auto mb-4 transition-all duration-700 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
            {/* Quantum rings with full spectrum */}
            <div className="absolute inset-0 rounded-full border-2 border-spectral-crimson/20"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cosmic-indigo animate-spin will-change-transform opacity-60" style={{animationDuration: '4s'}}></div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-b-2 border-spectral-glow animate-pulse opacity-40" style={{animationDuration: '3s'}}></div>
            <div className="absolute inset-0 rounded-full border-l-2 border-warm-coral/30 animate-pulse opacity-30" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
            
            {/* Subtle inner quantum core */}
            <div className="absolute inset-0 m-8 rounded-full opacity-30 blur-sm animate-pulse will-change-transform" 
                 style={{
                   background: 'linear-gradient(135deg, hsl(var(--spectral-crimson) / 0.2), hsl(var(--warm-coral) / 0.15), hsl(var(--cosmic-indigo) / 0.2), hsl(var(--spectral-glow) / 0.15), hsl(var(--cosmic-aura) / 0.1))',
                   animationDuration: '5s'
                 }}></div>
          </div>
        </div>
        
        <h1 className={`transition-all duration-700 delay-200 transform ${revealClass('hero-text')}`}>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight tracking-tight mb-2">
            <span className="text-primary font-bold">Curable</span>
            <span className="text-foreground font-bold"> Labs</span>
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl mt-4 font-light">
            <span className="relative inline-block group cursor-default">
              {/* Subtle background field */}
              <div className="absolute -inset-4 bg-gradient-to-r from-spectral-crimson/3 via-warm-coral/2 via-cosmic-indigo/4 via-spectral-glow/3 to-cosmic-aura/2 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              
              <span className="relative font-semibold tracking-wide text-white block" 
                    style={{
                      textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 0 40px rgba(96, 165, 250, 0.8), 0 0 80px rgba(34, 197, 94, 0.6)',
                      filter: 'drop-shadow(0 0 30px rgba(96, 165, 250, 0.7))'
                    }}>
                
                {/* Consistent styling for all words */}
                <span className="relative inline-block">
                  <span className="relative z-10 font-bold">Blueprinting</span>
                  {/* Multi-layered glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-spectral-glow/15 via-cosmic-aura/20 to-cosmic-indigo/15 mix-blend-overlay animate-pulse group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spectral-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  {/* Scanning line effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-spectral-glow/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 animate-pulse"></div>
                </span>
                
                <span className="ml-2 relative inline-block">
                  <span className="relative z-10 font-bold">Tomorrow{"'"}s</span>
                  {/* Multi-layered glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-indigo/15 via-warm-coral/20 to-spectral-glow/15 mix-blend-overlay animate-pulse group-hover:scale-110 transition-transform duration-500" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-aura/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  {/* Scanning line effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cosmic-aura/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </span>
                
                <span className="ml-2 relative inline-block">
                  <span className="relative z-10 font-bold">Cures</span>
                  {/* Multi-layered glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-coral/15 via-spectral-crimson/20 to-cosmic-indigo/15 mix-blend-overlay animate-pulse group-hover:scale-110 transition-transform duration-500" style={{animationDelay: '1s'}}></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spectral-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{animationDelay: '1s'}}></div>
                  {/* Scanning line effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-spectral-crimson/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 animate-pulse" style={{animationDelay: '1s'}}></div>
                </span>
              </span>
              
              
              {/* Quantum field particles */}
              <div className="absolute -inset-8 pointer-events-none opacity-30">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-spectral-glow rounded-full animate-ping" 
                     style={{animationDelay: '0s', animationDuration: '5s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cosmic-aura rounded-full animate-ping" 
                     style={{animationDelay: '2s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cosmic-indigo rounded-full animate-ping" 
                     style={{animationDelay: '4s', animationDuration: '6s'}}></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-warm-coral rounded-full animate-ping" 
                     style={{animationDelay: '1s', animationDuration: '3s'}}></div>
                <div className="absolute bottom-1/2 left-1/5 w-1.5 h-1.5 bg-spectral-crimson rounded-full animate-ping" 
                     style={{animationDelay: '3s', animationDuration: '7s'}}></div>
              </div>
            </span>
          </div>
        </h1>
        
        <p className={`text-foreground/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6 mt-4 transition-all duration-700 delay-300 transform ${revealClass('hero-text')} font-poppins`}>
          An AI-powered, decentralized ecosystem for discovering, validating, and 
          delivering <span className="text-warm-coral font-semibold">novel cures</span> through 
          blockchain-native governance and <span className="text-spectral-glow font-semibold">collaborative research</span>.
        </p>
        
        {/* Enhanced call to action buttons with compact spacing */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 transition-all duration-700 delay-400 transform ${revealClass('hero-text')}`}>
          <button
            onClick={scrollToContent}
            className="btn-quantum-rainbow magnetic-attraction group relative px-8 py-4 text-white font-poppins font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 will-change-transform"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--electric-quantum-blue)) 0%, hsl(var(--quantum-emerald)) 25%, hsl(var(--warm-coral)) 50%, hsl(var(--primary)) 75%, hsl(var(--quantum-cyan)) 100%)',
              backgroundSize: '300% 300%',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 20px hsl(var(--electric-quantum-blue) / 0.3), 0 4px 20px hsl(var(--warm-coral) / 0.2)',
              animation: 'rainbow-flow 5s ease-in-out infinite'
            }}
          >
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-lg">Explore Platform</span> 
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-3 transition-transform will-change-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-quantum-blue/15 via-quantum-emerald/10 via-warm-coral/15 to-quantum-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <Link 
            to="/whitepaper"
            className="magnetic-attraction px-8 py-4 text-white font-poppins font-bold rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-105 will-change-transform backdrop-blur-sm group relative overflow-hidden"
            style={{
              border: '2px solid hsl(var(--cosmic-indigo) / 0.6)',
              background: 'linear-gradient(135deg, hsl(var(--cosmic-indigo) / 0.1), hsl(var(--spectral-glow) / 0.08), hsl(var(--warm-coral) / 0.06), hsl(var(--cosmic-aura) / 0.1))',
              backgroundSize: '300% 300%',
              boxShadow: '0 4px 20px hsl(var(--cosmic-indigo) / 0.3), 0 2px 10px hsl(var(--spectral-glow) / 0.2)',
              animation: 'rainbow-flow 8s ease-in-out infinite reverse'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, hsl(var(--cosmic-indigo)), hsl(var(--spectral-glow)), hsl(var(--warm-coral)), hsl(var(--cosmic-aura)))';
              e.currentTarget.style.boxShadow = '0 8px 30px hsl(var(--cosmic-indigo) / 0.4), 0 4px 20px hsl(var(--spectral-glow) / 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, hsl(var(--cosmic-indigo) / 0.1), hsl(var(--spectral-glow) / 0.08), hsl(var(--warm-coral) / 0.06), hsl(var(--cosmic-aura) / 0.1))';
              e.currentTarget.style.boxShadow = '0 4px 20px hsl(var(--cosmic-indigo) / 0.3), 0 2px 10px hsl(var(--spectral-glow) / 0.2)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-spectral-glow/12 via-cosmic-indigo/8 via-warm-coral/6 to-cosmic-aura/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-lg">Read Whitepaper</span>
          </Link>
        </div>
      </div>
      
      {/* Animated scroll indicator - more compact position */}
      <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${revealClass('hero-text')} magnetic-attraction`}>
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-foreground/60 hover:text-spectral-glow transition-all duration-300 group hover:scale-105"
          aria-label="Scroll to content"
        >
          <span className="text-sm mb-2 font-poppins font-medium group-hover:text-spectral-glow">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-spectral-glow group-hover:scale-110 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
