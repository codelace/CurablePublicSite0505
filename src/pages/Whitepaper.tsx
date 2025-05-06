
import React, { useState } from 'react';
import { sections } from '@/data/whitepaperSections';
import Card from '@/components/Card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Whitepaper = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const keySections = sections.find(section => section.title === 'Key Sections')?.body.split('\n\n') || [];

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
        <div className="inline-block px-3 py-1 mb-4 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40">
          WHITEPAPER v1.2 — UPDATED MAY 2024
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-titanium-white">
          Curable<span className="text-arc-blue">DAO</span> Whitepaper
        </h1>
        <p className="text-lg text-titanium-white/90">
          A comprehensive overview of our mission, technology, and governance framework
        </p>
      </div>
      
      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto mb-16">
        <Accordion type="multiple" className="space-y-4">
          {sections.map((section, index) => (
            section.title !== 'Key Sections' && (
              <AccordionItem 
                key={index} 
                value={`section-${index}`}
                className="border border-graphite-700/60 bg-gunmetal-900/60 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-graphite-700/20 text-left font-rajdhani text-xl">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-titanium-white/80 leading-relaxed">
                  {section.body}
                </AccordionContent>
              </AccordionItem>
            )
          ))}
        </Accordion>
      </div>
      
      {/* Key Section Cards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-titanium-white">Key Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {keySections.map((section, index) => {
            const [title, content] = section.split(' - ');
            return (
              <Card key={index} className="h-full">
                <h3 className="text-xl font-bold mb-3 text-arc-blue">{title.replace('**', '').replace('**', '')}</h3>
                <p className="text-titanium-white/80 text-sm">{content}</p>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Download/View Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        <button className="btn-holo flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download PDF</span>
        </button>
        <button className="btn-holo flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>View Full PDF</span>
        </button>
      </div>
    </div>
  );
};

export default Whitepaper;
