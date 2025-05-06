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
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom right, #0E0E10, #1A1A1E)",
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
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "text-shimmer": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 6s infinite ease-in-out',
        'pan-grid': 'pan-grid 15s infinite linear',
        'fade-up': 'fade-up 0.6s ease-out',
        'expand-underline': 'expand-underline 0.3s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s infinite ease-in-out',
        shimmer: "shimmer 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
