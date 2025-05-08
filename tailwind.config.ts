import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Custom colors
        "stealth-black": "#050505",
        "gunmetal-900": "#101418",
        "graphite-700": "#272C33",
        "arc-blue": "#1EAEDB", // Logo blue
        "quantum-red": "#FF3366",
        "plasma-violet": "#A162FF",
        "titanium-white": "#E8F1F9",
        "logo-blue": "#1EAEDB", // Logo blue as a separate color,
        "bio-blue": "#5BC0EB",
        "bio-green": "#8EE4AF",
        "bio-violet": "#CBA6F7",
        "dark-base": "#0E0E10",
        "dark-surface": "#1A1A1E",
        // New warmer colors for magnetic feel
        "warm-amber": "#FF9E2C", 
        "warm-coral": "#FF6B6B",
        "warm-rose": "#FF4676",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom right, #0E0E10, #1A1A1E)",
        "gradient-radial": "radial-gradient(circle at center, transparent 0%, #0E0E10 70%)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-glow": "linear-gradient(to right, rgba(30, 174, 219, 0), rgba(30, 174, 219, 0.3), rgba(30, 174, 219, 0))",
        "gradient-warm": "linear-gradient(to right, rgba(255, 51, 102, 0), rgba(255, 51, 102, 0.3), rgba(255, 51, 102, 0))",
        "noise": "url('/noise.png')",
        "radial-gradient": "radial-gradient(circle at center, transparent 30%, rgba(10, 10, 10, 0.8) 100%)"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 6s infinite ease-in-out',
        'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
        'pan-grid': 'pan-grid 15s infinite linear',
        'fade-up': 'fade-up 0.6s ease-out',
        'expand-underline': 'expand-underline 0.3s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s infinite ease-in-out',
        'shimmer': "shimmer 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        'code-flow': 'code-flow 10s ease-in-out infinite alternate',
        'scan-line': 'scan-line 4s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 30s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'blink': 'blink 1s ease-in-out infinite',
        'expand': 'expand 1s ease-out',
        'data-surge': 'data-surge 8s ease infinite',
        'ripple': 'ripple 1.5s infinite',
        'glitch': 'glitch 0.5s ease-in-out infinite alternate',
        'warm-pulse': 'warm-pulse 3s infinite ease-in-out',
        'magnetic-flow': 'magnetic-flow 8s infinite ease-in-out',
      },
      rotate: {
        '15': '15deg',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
