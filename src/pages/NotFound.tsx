
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CommandPatternBackground from "@/components/CommandPatternBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <CommandPatternBackground variant="matrix" intensity="high" />
      <div className="glass-panel p-10 text-center max-w-md relative z-10 border-quantum-red/40 shadow-[0_0_20px_rgba(255,51,102,0.2)]">
        <div className="font-mono text-quantum-red text-4xl mb-4">/ / 404</div>
        <h1 className="text-3xl font-poppins font-bold mb-6 text-titanium-white">Protocol Error</h1>
        <div className="mb-6 font-mono text-sm text-titanium-white/70">
          <p className="mb-2">&gt; exec route.find("{location.pathname}")</p>
          <p className="text-quantum-red mb-2">&gt; Error: Route not found in protocol</p>
          <p>&gt; Recommended action: return to homebase</p>
        </div>
        <Link to="/">
          <Button 
            className="bg-brand-charcoal border border-brand-charcoal/40 text-white hover:bg-brand-charcoal/80 font-poppins font-mono"
          >
            /redirect --home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
