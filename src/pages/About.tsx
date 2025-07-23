
import React, { memo } from 'react';
import AboutHero from '@/components/about/AboutHero';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import AboutCallToAction from '@/components/about/AboutCallToAction';

const About = memo(() => {
  return (
    <div className="w-full relative min-h-screen bg-dark-base about-page hw-accelerated">
      {/* Minimal Background - No heavy effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-quantum-cyan/3 to-transparent blur-3xl"></div>
      </div>
      
      {/* Main Content Container - No animations */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-[75px] pb-4">
          <div className="container mx-auto px-4 max-w-8xl">
            <AboutHero />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-4 relative">
          <div className="container mx-auto px-4 max-w-8xl">
            <ValuesSection 
              isVisible={true} 
              hoveredValue={null} 
              setHoveredValue={() => {}} 
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-4 relative">
          <div className="container mx-auto px-4 max-w-8xl">
            <TeamSection isVisible={true} />
          </div>
        </section>

        {/* FAQ Section - Simple, no animations */}
        <section className="py-4 relative">
          <div className="container mx-auto px-4 max-w-8xl">
            <div>
              {/* Ultra Compact FAQ Header */}
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-2 text-white">
                  Frequently Asked <span className="bg-gradient-to-r from-quantum-cyan to-quantum-purple bg-clip-text text-transparent">Questions</span>
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-purple mx-auto mb-2"></div>
                <p className="text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed font-poppins">
                  Everything you need to know about our decentralized science platform
                </p>
              </div>

              {/* Efficient two-column FAQ Grid */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
                      className="bg-brand-charcoal/50 backdrop-blur-sm border border-quantum-cyan/30 rounded-xl p-5 relative overflow-hidden"
                    >
                      {/* Removed hover effects */}
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-poppins font-semibold text-white mb-3">
                          {faq.question}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-purple mb-3"></div>
                        <p className="text-foreground/90 leading-relaxed font-poppins">
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

        {/* Call to Action Section - Ultra Compact */}
        <section className="py-4 relative">
          <div className="container mx-auto px-4 max-w-8xl">
            <AboutCallToAction isVisible={true} />
          </div>
        </section>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
