
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full bg-gunmetal-900 text-titanium-white">
            <div className="flex-1 relative overflow-x-hidden">
              {/* Base background gradient */}
              <div className="fixed inset-0 bg-gradient-radial from-dark-surface/20 to-dark-base/90 pointer-events-none"></div>
              
              <Navbar />
              <main className="pt-16 sm:pt-20 relative z-10">
                <Routes>
                  <Route path="/" element={<Index />} />
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

export default App;
