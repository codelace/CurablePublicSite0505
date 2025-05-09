
import { useState, useEffect, useRef, RefObject } from 'react';

interface MagneticOptions {
  strength?: number;    // How strong the magnetic effect is (1-10)
  radius?: number;      // How far away the mouse activates the effect
  scale?: number;       // How much to scale the element on hover (1.0 = no scale)
  glowColor?: string;   // CSS color for the glow effect
  glowRadius?: number;  // Size of the glow effect in pixels
}

interface MagneticResult {
  ref: RefObject<HTMLElement>;
  style: React.CSSProperties;
  isHovering: boolean;
}

export function useMagneticEffect(
  options: MagneticOptions = {}
): MagneticResult {
  const {
    strength = 5,
    radius = 100,
    scale = 1.02,
    glowColor = 'rgba(255, 70, 118, 0.5)',
    glowRadius = 20
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const strengthFactor = strength / 10;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Check if mouse is within activation radius
      if (distance < radius) {
        setIsHovering(true);
        
        // Calculate movement based on distance from center, adjusted by strength
        const moveX = (distanceX / radius) * 5 * strengthFactor;
        const moveY = (distanceY / radius) * 5 * strengthFactor;
        
        // Update position for the magnetic effect
        setPosition({ x: moveX, y: moveY });
      } else if (isHovering) {
        // Reset position when mouse moves outside radius
        setPosition({ x: 0, y: 0 });
        setIsHovering(false);
      }
    };
    
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovering(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering, radius, strength]);
  
  // Build styles for the magnetic effect
  const style: React.CSSProperties = {
    transform: isHovering 
      ? `translate(${position.x}px, ${position.y}px) scale(${scale})` 
      : 'translate(0, 0) scale(1)',
    transition: isHovering 
      ? 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' 
      : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    boxShadow: isHovering 
      ? `0 0 ${glowRadius}px ${glowColor}` 
      : 'none',
    cursor: isHovering ? 'pointer' : 'default'
  };
  
  return { ref, style, isHovering };
}

export default useMagneticEffect;
