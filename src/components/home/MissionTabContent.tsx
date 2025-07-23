
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import GradientText from '@/components/ui/GradientText';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beaker, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MissionTabContent: React.FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const navigate = useNavigate();

  // Reveal title animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Header Section with revolutionary quantum design */}
      <section className="mb-6 relative quantum-field">
        {/* Enhanced quantum background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="quantum-particles opacity-20"></div>
          <div className="neural-network opacity-15">
            <div className="neural-node"></div>
            <div className="neural-node"></div>
            <div className="neural-node"></div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-quantum-red/30 to-logo-blue/20 blur-3xl magnetic-attraction"></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-logo-blue/20 to-quantum-red/15 blur-3xl magnetic-attraction"></div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 text-foreground transform transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Medicine's New <br />
            <span className="relative inline-block">
              <GradientText variant="red" animate className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                Operating System
              </GradientText>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-quantum-red via-warm-rose to-transparent shadow-lg shadow-quantum-red/40"></div>
            </span>
          </h1>
          
          <p className={`text-foreground/90 leading-relaxed mb-8 text-base sm:text-lg md:text-xl max-w-3xl font-poppins transform transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Curable Labs is building an agentic, decentralized ecosystem for discovering, validating, and delivering
            <span className="text-quantum-red font-semibold holographic-text"> novel cures</span>. We merge AI-powered research, open IP markets, and blockchain-native governance to transform stalled science into shared progress.
          </p>
          
          <div className={`flex flex-wrap gap-4 mb-12 transform transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              onClick={() => window.open("https://binding-db-integrator-1-codelace77.replit.app/", "_blank")}
              className="btn-quantum-optimized magnetic-attraction-optimized bg-gradient-to-r from-quantum-red to-warm-rose hover:from-quantum-red/90 hover:to-warm-rose/90 text-white font-bold py-6 px-8 rounded-xl flex items-center gap-3 shadow-xl shadow-quantum-red/40 hover:shadow-quantum-red/60 transition-all duration-300 text-lg border border-quantum-red/30"
            >
              Launch Platform
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => navigate("/join")} 
              variant="outline"
              className="magnetic-attraction-optimized border-2 border-quantum-red/50 text-white hover:text-white hover:bg-quantum-red/20 font-bold py-6 px-8 rounded-xl flex items-center gap-3 transition-all duration-300 text-lg backdrop-blur-sm shadow-lg hover:shadow-quantum-red/30 bg-quantum-red/10"
            >
              <span className="text-white font-bold">Join DAO</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Supporting Subheader Section with quantum enhancements */}
      <section className="mb-12">
        <div className="relative card-quantum-pro bg-brand-charcoal/40 backdrop-blur-lg rounded-2xl p-8 md:p-10 border-2 border-quantum-red/30 shadow-xl shadow-quantum-red/20 magnetic-attraction">
          {/* Enhanced quantum effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="neural-network opacity-10">
              <div className="neural-node"></div>
              <div className="neural-node"></div>
              <div className="neural-node"></div>
              <div className="neural-node"></div>
            </div>
            <div className="data-stream-bg opacity-5"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-quantum-red/40 blur-md animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-logo-blue/30 blur-lg animate-pulse"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground font-poppins">
              From <GradientText variant="green-blue" className="inline-block font-extrabold">Molecule</GradientText> to <GradientText variant="red" className="inline-block font-extrabold">Market</GradientText>, Reimagined.
            </h2>
            
            <p className="text-foreground/90 leading-relaxed text-lg mb-8 font-poppins">
              Curable Labs integrates agentic AI, transparent funding, and community-led validation into a living R&D platform.
              Our IP‑NFT framework unlocks collaboration, regulatory traceability, and scientific equity for the diseases that matter most.
            </p>
            
            {/* Feature boxes with quantum enhancements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="magnetic-attraction card-quantum-pro bg-brand-charcoal/50 rounded-xl p-6 border border-quantum-red/20 hover:border-quantum-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-quantum-red/30 group">
                <Beaker className="w-8 h-8 mb-4 text-quantum-red group-hover:text-quantum-red/80 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-2 text-foreground font-poppins">Research Driven</h3>
                <p className="text-foreground/70 font-poppins">Validated data science models accelerate target discovery and drug design.</p>
              </div>
              
              <div className="magnetic-attraction card-quantum-pro bg-brand-charcoal/50 rounded-xl p-6 border border-quantum-red/20 hover:border-quantum-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-quantum-red/30 group">
                <Shield className="w-8 h-8 mb-4 text-logo-blue group-hover:text-logo-blue/80 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-2 text-foreground font-poppins">Secure Governance</h3>
                <p className="text-foreground/70 font-poppins">On-chain protocol ensures transparent consensus and resource allocation.</p>
              </div>
              
              <div className="magnetic-attraction card-quantum-pro bg-brand-charcoal/50 rounded-xl p-6 border border-quantum-red/20 hover:border-quantum-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-quantum-red/30 group">
                <Zap className="w-8 h-8 mb-4 text-warm-rose group-hover:text-warm-rose/80 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-2 text-foreground font-poppins">Rapid Development</h3>
                <p className="text-foreground/70 font-poppins">Accelerated pipeline from discovery to validation through community expertise.</p>
              </div>
            </div>
            
            {/* Progress indicators with enhanced styling */}
            <ProgressIndicators />
          </div>
        </div>
      </section>
    </>
  );
};

const ProgressIndicators: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="relative magnetic-attraction">
        <div className="flex justify-between text-sm mb-3 text-foreground/70 font-poppins">
          <span>Research Pipeline</span>
          <span className="font-poppins font-bold text-quantum-red">78%</span>
        </div>
        <div className="h-3 bg-brand-charcoal/70 rounded-full overflow-hidden border border-quantum-red/20 shadow-inner">
          <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-expand shadow-lg shadow-red-500/40" style={{width: "78%", animationDuration: "2.1s"}}></div>
        </div>
      </div>
      
      <div className="relative magnetic-attraction">
        <div className="flex justify-between text-sm mb-3 text-foreground/70 font-poppins">
          <span>Community Growth</span>
          <span className="font-poppins font-bold text-logo-blue">65%</span>
        </div>
        <div className="h-3 bg-brand-charcoal/70 rounded-full overflow-hidden border border-logo-blue/20 shadow-inner">
          <div className="h-full bg-gradient-to-r from-logo-blue to-warm-rose rounded-full animate-expand shadow-lg shadow-logo-blue/40" style={{width: "65%", animationDuration: "1.7s"}}></div>
        </div>
      </div>
      
      <div className="relative magnetic-attraction">
        <div className="flex justify-between text-sm mb-3 text-foreground/70 font-poppins">
          <span>Protocol Security</span>
          <span className="font-poppins font-bold text-warm-rose">92%</span>
        </div>
        <div className="h-3 bg-brand-charcoal/70 rounded-full overflow-hidden border border-warm-rose/20 shadow-inner">
          <div className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-expand shadow-lg shadow-pink-500/40" style={{width: "92%", animationDuration: "2.5s"}}></div>
        </div>
      </div>
    </div>
  );
};

export default MissionTabContent;
