
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CommandPatternBackground from "./components/CommandPatternBackground";
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen w-full">
          <div className="flex-1 relative">
            {/* Completely static background with inline styles to force no animation */}
            <div 
              className="pattern-static absolute inset-0" 
              style={{
                animation: 'none !important',
                transition: 'none !important'
              }}
            >
              <CommandPatternBackground 
                variant="grid" 
                intensity="low" 
                animated={false} 
                className="pattern-static" 
              />
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-radial from-transparent to-dark-base/90"></div>
            <Navbar />
            <main className="pt-20 relative z-10">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<Navigate to="/" replace />} />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
