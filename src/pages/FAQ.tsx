
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Curable Labs?",
      answer: "Curable Labs is a decentralized science (DeSci) organization that uses AI agents, community governance, and token incentives to accelerate the discovery and development of new therapeutics. It focuses on taking promising molecules from early-stage proposals through validation, optimization, and regulatory review all in an open, transparent ecosystem."
    },
    {
      question: "What is the role of the Agentic AI Platform?",
      answer: "It powers the entire molecule-to-market pipeline by enabling specialized AI agents to:\n\n• Validate compounds\n• Optimize molecules\n• Assess clinical fits\n\nThis allows for faster and more decentralized drug development."
    },
    {
      question: "Who can contribute to Curable Labs?",
      answer: "Anyone can contribute especially:\n\n• Scientists & researchers\n• Developers & AI engineers\n• Designers & storytellers\n• Legal & regulatory professionals\n• Curious citizens interested in health innovation\n\nContributors are rewarded with tokens, XP badges, and roles."
    },
    {
      question: "How does Curable Labs maintain scientific credibility?",
      answer: "Through domain-specific validation arenas, where open-source researchers:\n\n• Compete or collaborate to validate scientific claims\n• Earn badge-based credibility across metrics like data quality, reproducibility, and impact\n• Create transparent audit trails that support trustworthy decision-making"
    },
    {
      question: "What incentives are there for participation?",
      answer: "Participants can earn:\n\n• XP badges and roles\n• $CURE tokens\n• IP-linked NFTs\n\nThese incentives drive engagement while ensuring ownership and credit stay with contributors."
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
  ];

  return (
    <div className="min-h-screen bg-gunmetal-900 text-titanium-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial from-dark-surface/20 to-dark-base/95 pointer-events-none"></div>
      <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="fixed top-0 left-0 w-72 h-72 rounded-full bg-logo-blue/10 blur-3xl"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-plasma-violet/10 blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-logo-blue animate-pulse-dot"></div>
              <h1 className="text-4xl sm:text-6xl font-bold font-space">
                <span className="bg-gradient-to-r from-logo-blue via-plasma-violet to-warm-rose bg-clip-text text-transparent">
                  CURABLE LABS
                </span>
              </h1>
              <div className="w-3 h-3 rounded-full bg-warm-rose animate-pulse-dot"></div>
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-logo-blue to-transparent mx-auto"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-logo-blue">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-titanium-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Curable Labs' decentralized science platform, 
            AI-powered drug discovery, and community-driven therapeutic innovation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-graphite-700/20 backdrop-blur-sm border border-logo-blue/20 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-logo-blue/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-graphite-700/40 rounded-lg bg-gunmetal-900/50 hover:bg-gunmetal-900/70 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg font-semibold text-titanium-white group-hover:text-logo-blue transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pt-2 border-t border-graphite-700/30">
                      <p className="text-titanium-white/90 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-logo-blue/10 via-plasma-violet/10 to-warm-rose/10 rounded-2xl p-8 sm:p-12 border border-logo-blue/20 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-logo-blue">
              Ready to Join the Revolution?
            </h3>
            <p className="text-titanium-white/80 mb-6 leading-relaxed">
              Have more questions? Connect with our community or dive deeper into our mission to decentralize drug discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://curableda-oi-codelace77.replit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-logo-blue hover:bg-logo-blue/80 text-gunmetal-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-logo-blue/30"
              >
                Explore CureWorld
              </a>
              <a 
                href="/join"
                className="px-6 py-3 border border-plasma-violet text-plasma-violet hover:bg-plasma-violet hover:text-gunmetal-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-plasma-violet/30"
              >
                Join the Labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
