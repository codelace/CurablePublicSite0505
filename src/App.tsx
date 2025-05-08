
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CommandPatternBackground from "./components/CommandPatternBackground";
import ParticleBackground from "./components/ParticleBackground";
import Index from "./pages/Index";
import About from "./pages/About";
import Whitepaper from "./pages/Whitepaper";
import Tokenomics from "./pages/Tokenomics";
import Join from "./pages/Join";
import Novel from "./pages/Novel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loader effect for dramatic entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* App Loader */}
            <div 
              className={`fixed inset-0 bg-gunmetal-900 z-50 flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-logo-blue/20"></div>
                  <div className="absolute inset-0 rounded-full border-t-4 border-logo-blue animate-spin"></div>
                </div>
                <div className="mt-4 font-space text-titanium-white text-xl">
                  <span className="text-logo-blue">Curable</span>DAO
                </div>
              </div>
            </div>

            <div className="flex min-h-screen w-full bg-gunmetal-900 text-titanium-white">
              <div className="flex-1 relative overflow-x-hidden">
                {/* Base background gradient */}
                <div className="fixed inset-0 bg-gradient-radial from-dark-surface/20 to-dark-base/95 pointer-events-none"></div>
                
                {/* Subtle noise texture */}
                <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none"></div>
                
                <Navbar />
                <main className={`pt-16 sm:pt-20 relative z-10 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/whitepaper" element={<Whitepaper />} />
                    <Route path="/tokenomics" element={<Tokenomics />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/novel" element={<Novel />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
