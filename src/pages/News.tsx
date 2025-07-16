import { useState, useEffect } from 'react';

const News = () => {
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroInView(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Sample blog posts data - this could come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "Curable Labs Newsletter - July 2025",
      date: "2025-07-01",
      type: "newsletter",
      summary: "Our comprehensive July newsletter featuring the latest updates on Far Eastern Medicine meets Western FDA Science, AI & DAO governance, team updates, and breakthrough research initiatives.",
      imageUrl: "/lovable-uploads/c5a1b4de-8ace-4603-8c44-cccf33c75507.png",
      featured: true
    },
    {
      id: 2,
      title: "Latest Research Breakthroughs in Longevity Science",
      date: "2024-01-15",
      type: "article",
      summary: "Discover the groundbreaking findings in cellular regeneration and anti-aging protocols.",
      imageUrl: "/lovable-uploads/63148301-fd23-4d1a-a630-bb9f9093b3ef.png"
    },
    {
      id: 3,
      title: "Curable Labs Q4 2023 Research Report",
      date: "2024-01-10",
      type: "pdf",
      summary: "Comprehensive overview of our research progress and upcoming initiatives.",
      pdfUrl: "/sample-research-report.pdf" // Placeholder for actual PDF
    },
    {
      id: 4,
      title: "Protocol v2.0 Development Update",
      date: "2024-01-05",
      type: "article",
      summary: "Major improvements to our treatment protocols and clinical trial results.",
      imageUrl: "/lovable-uploads/90558286-0ee7-4d4f-b509-691581da1995.png"
    }
  ];

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

          {/* Blog Posts Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {blogPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className={`bg-gradient-to-br from-graphite-800/40 to-graphite-700/20 border border-warm-rose/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-1000 hover:border-warm-rose/40 hover:shadow-lg hover:shadow-warm-rose/10 ${
                    heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${post.featured ? 'border-warm-amber/30 bg-gradient-to-br from-warm-amber/10 to-warm-rose/5' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex flex-col ${post.featured ? 'lg:flex-col' : 'lg:flex-row'} gap-8`}>
                    {/* Featured Newsletter Layout */}
                    {post.featured ? (
                      <>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm text-warm-amber font-medium px-3 py-1 bg-warm-amber/10 rounded-full">
                            Featured Newsletter
                          </span>
                          <span className="text-sm text-titanium-white/60">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-titanium-white">
                          {post.title}
                        </h2>
                        
                        <p className="text-titanium-white/80 leading-relaxed mb-8 text-lg">
                          {post.summary}
                        </p>
                        
                        {/* Newsletter Preview */}
                        <div className="mb-8">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full rounded-xl border border-warm-amber/20 shadow-lg"
                          />
                        </div>
                        
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-amber to-warm-coral text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-warm-amber/20 transition-all duration-300">
                          View Full Newsletter
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <>
                        {/* Regular Post Layout */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm text-warm-rose font-medium px-3 py-1 bg-warm-rose/10 rounded-full">
                              {post.type === 'pdf' ? 'Research Report' : 'Article'}
                            </span>
                            <span className="text-sm text-titanium-white/60">
                              {new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titanium-white">
                            {post.title}
                          </h2>
                          
                          <p className="text-titanium-white/80 leading-relaxed mb-6">
                            {post.summary}
                          </p>
                          
                          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warm-rose to-warm-amber text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-warm-rose/20 transition-all duration-300">
                            {post.type === 'pdf' ? 'Download PDF' : 'Read More'}
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Media */}
                        <div className="lg:w-80 xl:w-96">
                          {post.type === 'pdf' ? (
                            <div className="aspect-[4/3] bg-gradient-to-br from-warm-rose/20 to-warm-amber/20 rounded-xl border border-warm-rose/30 flex items-center justify-center">
                              <div className="text-center">
                                <svg className="w-16 h-16 mx-auto mb-4 text-warm-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-warm-rose font-medium">PDF Document</p>
                                <p className="text-titanium-white/60 text-sm mt-1">Click to download</p>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-[4/3] rounded-xl overflow-hidden">
                              <img 
                                src={post.imageUrl} 
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-gradient-to-r from-warm-rose/20 to-warm-amber/20 border border-warm-rose/30 rounded-full backdrop-blur-sm text-warm-rose font-medium hover:border-warm-rose/50 hover:bg-warm-rose/10 transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;