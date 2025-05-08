
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

interface ParticleBackgroundProps {
  count?: number;
  color?: 'blue' | 'purple' | 'multi';
  speed?: 'slow' | 'medium' | 'fast';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  count = 50, 
  color = 'blue',
  speed = 'medium',
  intensity = 'medium',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  
  // Get color palette based on the color prop
  const getColors = () => {
    switch (color) {
      case 'purple': 
        return ['rgba(161, 98, 255, ', 'rgba(200, 145, 255, ', 'rgba(140, 70, 240, '];
      case 'multi': 
        return ['rgba(30, 174, 219, ', 'rgba(161, 98, 255, ', 'rgba(255, 51, 102, '];
      default: // blue
        return ['rgba(30, 174, 219, ', 'rgba(91, 192, 235, ', 'rgba(10, 140, 180, '];
    }
  };
  
  // Set speed factor based on speed prop
  const getSpeedFactor = () => {
    switch (speed) {
      case 'slow': return 0.1;
      case 'fast': return 0.3;
      default: return 0.2;
    }
  };
  
  // Set size and quantity based on intensity
  const getIntensitySettings = () => {
    switch (intensity) {
      case 'low': return { maxSize: 2, opacity: 0.3, count: count * 0.7 };
      case 'high': return { maxSize: 3, opacity: 0.7, count: count * 1.3 };
      default: return { maxSize: 2.5, opacity: 0.5, count: count };
    }
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const colors = getColors();
    const speedFactor = getSpeedFactor();
    const intensitySettings = getIntensitySettings();
    let particles: Particle[] = [];
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Handle mouse move for interactive mode
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(intensitySettings.count);
      
      for(let i = 0; i < particleCount; i++) {
        const size = Math.random() * intensitySettings.maxSize + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * speedFactor;
        const speedY = (Math.random() - 0.5) * speedFactor;
        const colorIndex = Math.floor(Math.random() * colors.length);
        const alpha = Math.random() * intensitySettings.opacity + 0.1;
        
        particles.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color: colors[colorIndex],
          alpha
        });
      }
      
      particlesRef.current = particles;
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Interactive - respond to mouse
        if (interactive) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * (mouseRef.current.radius - distance) * 0.02;
            const pushY = Math.sin(angle) * (mouseRef.current.radius - distance) * 0.02;
            
            particle.x += pushX;
            particle.y += pushY;
          }
        }
        
        // Connect nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${particle.color}${(1 - distance / 100) * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `${particle.color}${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    handleResize();
    window.addEventListener('resize', handleResize);
    
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [count, color, speed, intensity, interactive]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
