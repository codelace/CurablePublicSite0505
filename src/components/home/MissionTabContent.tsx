
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
      {/* Hero Header Section with enhanced dramatic design */}
      <section className="mb-6">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-bio-blue/20 to-plasma-violet/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-plasma-violet/20 to-quantum-red/10 blur-3xl"></div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 text-titanium-white transform transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Medicine's New <br />
            <span className="relative inline-block">
              <GradientText variant="blue-purple" animate className="holo-scan text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                Operating System
              </GradientText>
              <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-bio-blue via-plasma-violet to-transparent"></div>
            </span>
          </h1>
          
          <p className={`text-titanium-white/90 leading-relaxed mb-8 text-base sm:text-lg md:text-xl max-w-3xl transform transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} data-surge`}>
            CurableDAO is building an agentic, decentralized ecosystem for discovering, validating, and delivering
            <span className="text-logo-blue font-semibold"> novel cures</span>. We merge AI-powered research, open IP markets, and blockchain-native governance to transform stalled science into shared progress.
          </p>
          
          <div className={`flex flex-wrap gap-4 mb-12 transform transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              onClick={() => window.open("https://binding-db-integrator-1-codelace77.replit.app/", "_blank")}
              className="bg-logo-blue hover:bg-logo-blue/90 text-white font-bold py-6 px-8 rounded-lg flex items-center gap-3 shadow-[0_0_20px_rgba(30,174,219,0.5)] hover:shadow-[0_0_30px_rgba(30,174,219,0.7)] transition-all duration-300 text-lg"
            >
              Launch Platform
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => navigate("/join")} 
              variant="outline"
              className="border-plasma-violet/70 text-plasma-violet hover:text-white hover:bg-plasma-violet/20 font-bold py-6 px-8 rounded-lg flex items-center gap-3 transition-all duration-300 text-lg"
            >
              Join DAO
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Supporting Subheader Section */}
      <section className="mb-12">
        <div className="relative bg-gunmetal-900/30 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-graphite-700/40 shadow-[0_10px_50px_-15px_rgba(30,174,219,0.3)]">
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-logo-blue/30 blur-md"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-plasma-violet/20 blur-lg"></div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-titanium-white">
            From <GradientText variant="green-blue" className="inline-block font-extrabold text-shadow-glow brightness-125 saturate-150">Molecule</GradientText> to <GradientText variant="purple-red" className="inline-block font-extrabold text-shadow-glow brightness-125 saturate-150">Market</GradientText>, Reimagined.
          </h2>
          
          <p className="text-titanium-white/90 leading-relaxed text-lg mb-8">
            CurableDAO integrates agentic AI, transparent funding, and community-led validation into a living R&D platform.
            Our IP‑NFT framework unlocks collaboration, regulatory traceability, and scientific equity for the diseases that matter most.
          </p>
          
          {/* Feature boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gunmetal-900/50 rounded-xl p-6 border border-graphite-700/30 hover:border-logo-blue/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,174,219,0.2)] group">
              <Beaker className="w-8 h-8 mb-4 text-bio-green group-hover:text-bio-green/100 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold mb-2 text-titanium-white">Research Driven</h3>
              <p className="text-titanium-white/70">Validated data science models accelerate target discovery and drug design.</p>
            </div>
            
            <div className="bg-gunmetal-900/50 rounded-xl p-6 border border-graphite-700/30 hover:border-bio-violet/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(161,98,255,0.2)] group">
              <Shield className="w-8 h-8 mb-4 text-plasma-violet group-hover:text-plasma-violet/100 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold mb-2 text-titanium-white">Secure Governance</h3>
              <p className="text-titanium-white/70">On-chain protocol ensures transparent consensus and resource allocation.</p>
            </div>
            
            <div className="bg-gunmetal-900/50 rounded-xl p-6 border border-graphite-700/30 hover:border-quantum-red/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,51,102,0.2)] group">
              <Zap className="w-8 h-8 mb-4 text-quantum-red group-hover:text-quantum-red/100 group-hover:scale-110 transition-all duration-300" />
              <h3 className="text-xl font-bold mb-2 text-titanium-white">Rapid Development</h3>
              <p className="text-titanium-white/70">Accelerated pipeline from discovery to validation through community expertise.</p>
            </div>
          </div>
          
          {/* Progress indicators with enhanced styling */}
          <ProgressIndicators />
        </div>
      </section>
    </>
  );
};

const ProgressIndicators: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="relative">
        <div className="flex justify-between text-xs mb-2 text-titanium-white/70">
          <span>Research Pipeline</span>
          <span className="font-mono text-logo-blue">78%</span>
        </div>
        <div className="h-2 bg-gunmetal-900/70 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-bio-blue to-logo-blue rounded-full animate-expand" style={{width: "78%", animationDuration: "2.1s"}}></div>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex justify-between text-xs mb-2 text-titanium-white/70">
          <span>Community Growth</span>
          <span className="font-mono text-plasma-violet">65%</span>
        </div>
        <div className="h-2 bg-gunmetal-900/70 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-bio-violet to-plasma-violet rounded-full animate-expand" style={{width: "65%", animationDuration: "1.7s"}}></div>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex justify-between text-xs mb-2 text-titanium-white/70">
          <span>Protocol Security</span>
          <span className="font-mono text-quantum-red">92%</span>
        </div>
        <div className="h-2 bg-gunmetal-900/70 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-bio-violet to-quantum-red rounded-full animate-expand" style={{width: "92%", animationDuration: "2.5s"}}></div>
        </div>
      </div>
    </div>
  );
};

export default MissionTabContent;
