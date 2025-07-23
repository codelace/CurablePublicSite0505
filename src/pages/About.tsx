
import React, { useState, useEffect } from 'react';
import SectionDivider from '@/components/SectionDivider';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutBackgroundEffects from '@/components/about/AboutBackgroundEffects';
import AboutCallToAction from '@/components/about/AboutCallToAction';

const About = () => {
  // For value card hover state
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  
  // For device detection
  const isMobile = useIsMobile();
  
  // For advanced section animation with sequential reveal
  const [animatedSections, setAnimatedSections] = useState<string[]>([]);

  // Force all sections to be visible with more compact timing
  useEffect(() => {
    const sections = ['mission-section', 'values-section', 'team-section'];
    
    // Enhanced staggered animation with shorter delays for less scrolling
    const animateSection = (index: number) => {
      if (index >= sections.length) return;
      
      setTimeout(() => {
        setAnimatedSections(prev => [...prev, sections[index]]);
        animateSection(index + 1);
      }, 150); // Even shorter delay between sections for faster reveal
    };
    
    // Slight initial delay for the first section to allow page transition
    setTimeout(() => {
      animateSection(0);
    }, 100); // Shorter initial delay
  }, []);

  return (
    <div className="w-full relative min-h-screen bg-dark-base">
      {/* Revolutionary Background System */}
      <AboutBackgroundEffects />
      
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-[80px] pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className={`transition-all duration-1000 ${animatedSections.includes('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <AboutHero />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className={`transition-all duration-1000 delay-300 ${animatedSections.includes('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <ValuesSection 
                isVisible={animatedSections.includes('values-section')} 
                hoveredValue={hoveredValue} 
                setHoveredValue={setHoveredValue} 
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className={`transition-all duration-1000 delay-500 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <TeamSection 
                isVisible={animatedSections.includes('team-section')}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className={`transition-all duration-1000 delay-700 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* Enhanced FAQ Header */}
              <div className="text-center mb-16">
                <div className="mb-6">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold mb-4">
                    Frequently Asked <span className="holographic-text bg-gradient-to-r from-quantum-red via-warm-rose to-logo-blue bg-clip-text text-transparent">Questions</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-quantum-red to-logo-blue mx-auto mb-6"></div>
                </div>
                <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-poppins">
                  Everything you need to know about our revolutionary decentralized science platform
                </p>
              </div>

              {/* Enhanced FAQ Grid */}
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-6 md:gap-8">
                  {[
                    {
                      question: "What is Curable Labs?",
                      answer: "Curable Labs is a decentralized science (DeSci) organization that uses AI agents, community governance, and token incentives to accelerate the discovery and development of new therapeutics. It focuses on taking promising molecules from early-stage proposals through validation, optimization, and regulatory review all in an open, transparent ecosystem."
                    },
                    {
                      question: "What is the role of the Agentic AI Platform?",
                      answer: "It powers the entire molecule-to-market pipeline by enabling specialized AI agents to validate compounds, optimize molecules, and assess clinical fits. This allows for faster and more decentralized drug development."
                    },
                    {
                      question: "Who can contribute to Curable Labs?",
                      answer: "Anyone can contribute especially scientists & researchers, developers & AI engineers, designers & storytellers, legal & regulatory professionals, and curious citizens interested in health innovation. Contributors are rewarded with tokens, XP badges, and roles."
                    },
                    {
                      question: "How does Curable Labs maintain scientific credibility?",
                      answer: "Through domain-specific validation arenas, where open-source researchers compete or collaborate to validate scientific claims, earn badge-based credibility across metrics like data quality, reproducibility, and impact, and create transparent audit trails that support trustworthy decision-making."
                    },
                    {
                      question: "What incentives are there for participation?",
                      answer: "Participants can earn XP badges and roles, $CURE tokens, and IP-linked NFTs. These incentives drive engagement while ensuring ownership and credit stay with contributors."
                    },
                    {
                      question: "Can I propose my own molecule?",
                      answer: "Yes. Contributors can submit molecules for evaluation. If your compound passes KD + RMSD thresholds and shows promise, it enters the pipeline. You retain IP recognition through NFTs and revenue-sharing models."
                    },
                    {
                      question: "How is governance handled?",
                      answer: "Curable Labs uses on-chain voting, token-weighted decisions, and Merge-Up queues for major proposals. Reputation from contributions also plays a role, and governance is designed to remain community-first and transparent."
                    },
                    {
                      question: "Is Curable Labs funding DeSci projects?",
                      answer: "Yes, Curable Labs is actively funding and supporting DeSci projects, especially those that align with its mission of decentralizing drug discovery and accelerating therapeutic innovation."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index} 
                      className="card-quantum-optimized magnetic-attraction-optimized bg-brand-charcoal/60 backdrop-blur-lg border border-quantum-red/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-quantum-red/20 hover:shadow-quantum-red/40 hover:border-quantum-red/50 transition-all duration-500 group"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Quantum background effects */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                        <div className="neural-network-optimized opacity-5">
                          <div className="neural-node-optimized"></div>
                          <div className="neural-node-optimized"></div>
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-4 holographic-text group-hover:text-quantum-red transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-quantum-red to-transparent mb-4 group-hover:w-24 transition-all duration-300"></div>
                        <p className="text-foreground/90 leading-relaxed font-poppins text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            <AboutCallToAction isVisible={animatedSections.includes('team-section')} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
