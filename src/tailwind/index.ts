
import { colors } from './colors';
import { keyframes } from './keyframes';
import { animations } from './animations';
import { backgroundImages } from './backgrounds';
import { typography } from './typography';
import { screens } from './screens';
import { borderRadius } from './borderRadius';
import { container } from './container';
import { rotate } from './rotate';

// Enhanced theme extensions for Curable Labs brand
export const themeExtensions = {
  screens,
  colors: {
    ...colors,
    // Enhanced biotech color palette
    'bio-cyan': 'hsl(var(--bio-cyan))',
    'bio-emerald': 'hsl(var(--bio-emerald))',
    'bio-violet': 'hsl(var(--bio-violet))',
    'neural-pink': 'hsl(var(--neural-pink))',
    
    // Electric blue molecular branding
    'molecular-royal': 'hsl(var(--molecular-royal))',
    'molecular-bright': 'hsl(var(--molecular-bright))',
    'molecular-deep': 'hsl(var(--molecular-deep))',
    'molecular-accent': 'hsl(var(--molecular-accent))',
    'electric-quantum-blue': 'hsl(var(--electric-quantum-blue))',
    'quantum-electric': 'hsl(var(--quantum-electric))',
    
    // Enhanced quantum rainbow palette for visual richness
    'quantum-teal': 'hsl(var(--quantum-teal))',
    'quantum-purple': 'hsl(var(--quantum-purple))',
    'quantum-cyan': 'hsl(var(--quantum-cyan))',
    'quantum-amber': 'hsl(var(--quantum-amber))',
    'quantum-mint': 'hsl(var(--quantum-mint))',
    'quantum-orange': 'hsl(var(--quantum-orange))',
    'quantum-rose': 'hsl(var(--quantum-rose))',
    'quantum-emerald': 'hsl(var(--quantum-emerald))',
    'quantum-indigo': 'hsl(var(--quantum-indigo))',
    'quantum-lime': 'hsl(var(--quantum-lime))',
    'quantum-fuchsia': 'hsl(var(--quantum-fuchsia))',
  },
  fontFamily: {
    ...typography.fontFamily,
    poppins: ['Poppins', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
  },
  backgroundImage: {
    ...backgroundImages,
    'gradient-warm': 'var(--gradient-warm)',
    'gradient-cool': 'var(--gradient-cool)',
    'gradient-biotech': 'var(--gradient-biotech)',
    'gradient-neural': 'var(--gradient-neural)',
    'gradient-quantum': 'var(--gradient-quantum)',
    'gradient-molecular': 'var(--gradient-molecular)',
    'gradient-electric': 'var(--gradient-electric)',
    'gradient-hero': 'var(--gradient-hero)',
    'gradient-text': 'var(--gradient-text)',
    'gradient-quantum-spectrum': 'var(--gradient-quantum-spectrum)',
    'gradient-aurora': 'var(--gradient-aurora)',
    'gradient-cosmic': 'var(--gradient-cosmic)',
    'gradient-rainbow': 'var(--gradient-rainbow)',
    'gradient-glassmorphic': 'var(--gradient-glassmorphic)',
    'gradient-text-rainbow': 'var(--gradient-text-rainbow)',
    'gradient-mesh': 'var(--gradient-mesh)',
    'noise': 'var(--bg-noise)',
  },
  boxShadow: {
    'glow': 'var(--shadow-glow)',
    'warm': 'var(--shadow-warm)',
    'depth': 'var(--shadow-depth)',
    'neural': '0 0 40px hsl(var(--neural-pink) / 0.3)',
    'biotech': '0 0 30px hsl(var(--bio-cyan) / 0.2)',
  },
  borderRadius,
  keyframes: {
    ...keyframes,
    'quantum-pulse': {
      '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
      '50%': { transform: 'scale(1.05)', opacity: '1' },
    },
    'biotech-glow': {
      '0%, 100%': { boxShadow: '0 0 20px hsl(var(--quantum-red) / 0.3)' },
      '50%': { boxShadow: '0 0 40px hsl(var(--quantum-red) / 0.6)' },
    },
    'neural-wave': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    'mesh-drift': {
      '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
      '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
      '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
    },
  },
  animation: {
    ...animations,
    'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite',
    'biotech-glow': 'biotech-glow 3s ease-in-out infinite',
    'neural-wave': 'neural-wave 8s ease-in-out infinite',
    'mesh-drift': 'mesh-drift 20s ease-in-out infinite',
  },
  rotate,
};

// Export container configuration separately
export { container };
