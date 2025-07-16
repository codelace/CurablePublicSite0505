import { useState, useEffect } from 'react';

const Newsletter = () => {
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroInView(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

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
          <div 
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Newsletter Icon */}
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-warm-rose via-warm-coral to-warm-amber bg-clip-text text-transparent">
                Newsletter
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-titanium-white/80 mb-12 leading-relaxed">
              Stay updated with the latest developments in longevity research and curable protocols
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-rose/20 to-warm-amber/20 border border-warm-rose/30 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-warm-rose rounded-full animate-pulse mr-3"></div>
              <span className="text-lg font-medium text-warm-rose">Coming Soon</span>
            </div>

            {/* Description */}
            <div className="mt-16 max-w-2xl mx-auto">
              <p className="text-titanium-white/60 leading-relaxed">
                Our newsletter will deliver cutting-edge insights, research breakthroughs, 
                and protocol updates directly to your inbox. Be the first to know about 
                new discoveries in the fight against aging and disease.
              </p>
            </div>

            {/* Placeholder Features */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-warm-rose/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-warm-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Research Updates</h3>
                <p className="text-titanium-white/60 text-sm">Latest findings and breakthroughs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-warm-amber/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-warm-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Protocol Updates</h3>
                <p className="text-titanium-white/60 text-sm">New treatments and methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-warm-coral/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-warm-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Insights</h3>
                <p className="text-titanium-white/60 text-sm">Perspectives from our network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;