
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
    // Additional brand colors for enhanced theming
    'brand-gradient': 'linear-gradient(135deg, hsl(var(--quantum-red)), hsl(var(--warm-rose)))',
    'biotech-glow': 'hsl(var(--quantum-red) / 0.3)',
  },
  fontFamily: {
    ...typography.fontFamily,
    poppins: ['Poppins', 'sans-serif'],
  },
  backgroundImage: {
    ...backgroundImages,
    'quantum-gradient': 'linear-gradient(135deg, hsl(var(--quantum-red)), hsl(var(--warm-rose)), hsl(var(--logo-blue)))',
    'biotech-mesh': 'radial-gradient(circle at 25% 25%, hsl(var(--quantum-red) / 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--logo-blue) / 0.1) 0%, transparent 50%)',
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
  },
  animation: {
    ...animations,
    'quantum-pulse': 'quantum-pulse 2s ease-in-out infinite',
    'biotech-glow': 'biotech-glow 3s ease-in-out infinite',
  },
  rotate,
};

// Export container configuration separately
export { container };
