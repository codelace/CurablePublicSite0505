import { useState, useEffect } from 'react';

const News = () => {
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroInView(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Newsletter data - real content only
  const newsletter: {
    id: number;
    title: string;
    date: string;
    type: string;
    summary: string;
    imageUrl?: string;
    pdfUrl?: string;
  } = {
    id: 1,
    title: "Newsletter",
    date: "2025-07-16", 
    type: "newsletter",
    summary: "",
    imageUrl: "/Blue And White Simple Minimalist Modern Newsletter Flyer A4.svg"
  };

  return (
    <div className="min-h-screen bg-gunmetal-900 text-titanium-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial from-dark-surface/20 to-dark-base/95 pointer-events-none"></div>
      <div className="fixed inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="fixed top-0 left-0 w-72 h-72 rounded-full bg-warm-rose/10 blur-3xl"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-warm-amber/10 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Header Section */}
          <div 
            className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* News Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-warm-rose to-warm-amber rounded-full flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                  />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-warm-rose via-warm-coral to-warm-amber bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-titanium-white/80 mb-12 leading-relaxed">
              Stay informed with the latest research, updates, and breakthroughs from Curable Labs
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-5xl mx-auto">
            <article 
              className={`bg-gradient-to-br from-warm-amber/10 to-warm-rose/5 border border-warm-amber/30 rounded-2xl p-8 backdrop-blur-sm transition-all duration-1000 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-warm-amber font-medium px-3 py-1 bg-warm-amber/10 rounded-full">
                  Featured Newsletter
                </span>
                <span className="text-sm text-titanium-white/60">
                  {new Date(newsletter.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-titanium-white">
                {newsletter.title}
              </h2>
              
              {newsletter.summary && (
                <p className="text-titanium-white/80 leading-relaxed mb-8 text-lg">
                  {newsletter.summary}
                </p>
              )}
              
              {/* Newsletter Embed - Smaller, high quality display */}
              <div className="mb-8">
                <div className="max-w-2xl mx-auto">
                  <img 
                    src={newsletter.imageUrl} 
                    alt={newsletter.title}
                    className="w-full h-auto rounded-xl border border-warm-amber/20 shadow-lg bg-white"
                    style={{ 
                      imageRendering: 'auto',
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    loading="lazy"
                    onLoad={() => console.log('Newsletter image loaded successfully')}
                    onError={(e) => {
                      console.log('Newsletter image failed to load');
                      console.log('Attempted URL:', newsletter.imageUrl);
                    }}
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-amber to-warm-coral text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-warm-amber/20 transition-all duration-300">
                  View Full Newsletter
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {newsletter.pdfUrl && (
                  <a 
                    href={newsletter.pdfUrl}
                    download
                    className="inline-flex items-center px-8 py-4 border border-warm-amber text-warm-amber font-semibold rounded-lg hover:bg-warm-amber/10 transition-all duration-300"
                  >
                    Download PDF
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                )}
              </div>
            </article>

          </div>
        </div>
      </div>
    </div>
  );
};

export default News;