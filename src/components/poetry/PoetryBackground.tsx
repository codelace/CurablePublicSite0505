import ParticleBackground from '@/components/ParticleBackground';

export const PoetryBackground = () => {
  return (
    <>
      {/* Enhanced particle background */}
      <ParticleBackground 
        count={100} 
        color="multi" 
        speed="slow" 
        intensity="medium"
        interactive={true}
      />
      
      {/* Additional atmospheric effects */}
      <div className="fixed inset-0 bg-gradient-radial from-warm-rose/5 via-transparent to-logo-blue/5 pointer-events-none" />
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full bg-warm-amber/10 blur-3xl opacity-30 animate-pulse" />
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-warm-coral/10 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
    </>
  );
};