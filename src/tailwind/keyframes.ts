
// Animation keyframes configuration
export const keyframes = {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
  'pulse-glow': {
    '0%, 100%': { opacity: '0.1' },
    '50%': { opacity: '0.3' },
  },
  'pulse-subtle': {
    '0%, 100%': { opacity: '0.95' },
    '50%': { opacity: '1' },
  },
  'pan-grid': {
    '0%': { transform: 'translateX(0px)' },
    '100%': { transform: 'translateX(32px)' },
  },
  'fade-up': {
    '0%': { opacity: '0', transform: 'translateY(12px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'expand-underline': {
    '0%': { width: '0%', left: '50%', right: '50%' },
    '100%': { width: '100%', left: '0%', right: '0%' },
  },
  'pulse-dot': {
    '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
    '50%': { transform: 'scale(1.5)', opacity: '1' },
  },
  'shimmer': {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.7" },
  },
  'text-shimmer': {
    "0%, 100%": {
      "background-size": "200% 200%",
      "background-position": "left center",
    },
    "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
    },
  },
  'code-flow': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-10px)' },
  },
  'scan-line': {
    '0%': { top: '-30px' },
    '100%': { top: '100%' },
  },
  'flicker': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.8' },
  },
  'float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-5px)' },
  },
  'rotate-slow': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  'ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  'blink': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0' },
  },
  'expand': {
    '0%': { width: '0%' },
    '100%': { width: '100%' },
  },
  'data-surge': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  'ripple': {
    '0%': { boxShadow: '0 0 0 0 rgba(30, 174, 219, 0.4)' },
    '70%': { boxShadow: '0 0 0 15px rgba(30, 174, 219, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(30, 174, 219, 0)' },
  },
  'glitch': {
    '0%': { transform: 'translate(0)' },
    '20%': { transform: 'translate(-2px, 2px)' },
    '40%': { transform: 'translate(-2px, -2px)' },
    '60%': { transform: 'translate(2px, 2px)' },
    '80%': { transform: 'translate(2px, -2px)' },
    '100%': { transform: 'translate(0)' },
  },
  'warm-pulse': {
    '0%': { boxShadow: '0 0 5px rgba(255, 51, 102, 0.4)' },
    '50%': { boxShadow: '0 0 15px rgba(255, 51, 102, 0.7)' },
    '100%': { boxShadow: '0 0 5px rgba(255, 51, 102, 0.4)' },
  },
  'magnetic-flow': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
};
