
import React from 'react';

const Novel = () => {
  // Google Form URL for novel cure submissions
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSd4C1W9UXW5cF27y_Ny6RmA1Bc-RmNxq5k8YjglSuiU5nf1kA/viewform";
  
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-titanium-white">
            <span className="text-quantum-red">Novel</span> Cure Application
          </h1>
          <p className="text-lg text-titanium-white/90 max-w-2xl mx-auto">
            Have a breakthrough idea or compound? Pitch it here and tap into CurableDAO's collective power
            to validate, fund, and develop your innovation.
          </p>
        </div>
        
        <div className="bg-graphite-700/30 rounded-lg overflow-hidden border border-graphite-700/60 shadow-lg animate-fade-up">
          <iframe 
            src={`${formURL}?embedded=true`} 
            className="w-full h-[90vh] rounded-lg"
            title="Novel Cure Application"
          />
        </div>
      </div>
    </div>
  );
};

export default Novel;
