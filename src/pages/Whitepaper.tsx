
import React, { useState } from 'react';
import { sections } from '@/data/whitepaperSections';
import { keyCards } from '@/data/keySections';
import Card from '@/components/Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Whitepaper = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container px-4 py-8">
      <div className="mb-6 animate-fade-up">
        <div className="inline-block px-3 py-1 mb-2 rounded-full font-mono text-xs bg-gunmetal-900/70 border border-graphite-700/40">
          WHITEPAPER v1.2 — UPDATED MAY 2024
        </div>
        <h1 className="text-3xl font-bold text-titanium-white">
          Curable<span className="text-arc-blue">DAO</span> Whitepaper
        </h1>
        <p className="text-titanium-white/90">
          A comprehensive overview of our mission, technology, and governance framework
        </p>
      </div>
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">All Sections</TabsTrigger>
          <TabsTrigger value="download">Download</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyCards.map((card, index) => (
              <Card key={index} className="h-full p-4">
                <h3 className="text-xl font-bold mb-2 text-arc-blue">{card.heading}</h3>
                <p className="text-titanium-white/80 text-sm">{card.sub}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sections">
          <Accordion type="multiple" className="space-y-2">
            {sections.map((section, index) => (
              <AccordionItem 
                key={index} 
                value={`section-${index}`}
                className="border border-graphite-700/60 bg-gunmetal-900/60 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-graphite-700/20 text-left font-rajdhani text-lg">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-titanium-white/80 leading-relaxed max-h-60 overflow-y-auto">
                  {section.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="download" className="space-y-4">
          <div className="flex flex-col gap-4 items-center justify-center p-8 bg-gunmetal-900/40 backdrop-blur-sm border border-graphite-700/40 rounded-xl">
            <h3 className="text-xl font-bold text-titanium-white mb-2">Download Options</h3>
            <div className="flex flex-wrap justify-center gap-4">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Whitepaper;
