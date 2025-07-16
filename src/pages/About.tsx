
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
    <div className="w-full relative min-h-screen pb-8 pt-[60px] sm:pt-[68px]">
      {/* Enhanced background effects */}
      <AboutBackgroundEffects />
      
      <div className="container mx-auto px-4 max-w-7xl z-10 relative pt-4">
        {/* Mission Section with enhanced reveal animation */}
        <div className={`transition-all duration-700 ${animatedSections.includes('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <AboutHero />
        </div>

        {/* Smaller divider */}
        <div className="my-2">
          <SectionDivider />
        </div>

        {/* Core values section with enhanced staggered animation */}
        <div className={`transition-all duration-700 delay-100 ${animatedSections.includes('values-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ValuesSection 
            isVisible={animatedSections.includes('values-section')} 
            hoveredValue={hoveredValue} 
            setHoveredValue={setHoveredValue} 
          />
        </div>

        {/* Smaller divider */}
        <div className="my-2">
          <SectionDivider />
        </div>

        {/* Team Section with enhanced animation */}
        <div className={`transition-all duration-700 delay-200 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} mb-8`}>
          <TeamSection 
            isVisible={animatedSections.includes('team-section')}
          />
        </div>
        
        {/* FAQ Section */}
        <div className="my-4">
          <SectionDivider />
        </div>

        <div className={`transition-all duration-700 delay-300 ${animatedSections.includes('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} mb-8`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-logo-blue">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-titanium-white/80 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Curable Labs' decentralized science platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-graphite-700/20 backdrop-blur-sm border border-logo-blue/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-logo-blue/10">
              <div className="space-y-4">
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
                  <div key={index} className="border border-graphite-700/40 rounded-lg bg-gunmetal-900/50 hover:bg-gunmetal-900/70 transition-all duration-300">
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold text-titanium-white mb-3 text-logo-blue">
                        {faq.question}
                      </h3>
                      <div className="pt-2 border-t border-graphite-700/30">
                        <p className="text-titanium-white/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        {/* Enhanced footer element with dramatic call to action */}
        <AboutCallToAction isVisible={animatedSections.includes('team-section')} />
      </div>
    </div>
  );
};

export default About;
