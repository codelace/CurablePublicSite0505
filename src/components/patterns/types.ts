
export interface PatternProps {
  variant: "grid" | "nodes" | "circuit" | "dna" | "dots" | "matrix";
  color: "blue" | "green" | "violet" | "multi" | "red";
  intensity: "low" | "medium" | "high";
  animated?: boolean;
  speed?: "slow" | "medium" | "fast";
}

// Helper functions for pattern styling
export const getOpacity = (intensity: "low" | "medium" | "high") => {
  switch (intensity) {
    case "low": return "0.1";
    case "medium": return "0.2";
    case "high": return "0.3";
    default: return "0.2";
  }
};

export const getAnimationSpeed = (speed: "slow" | "medium" | "fast") => {
  switch (speed) {
    case "slow": return "60s";
    case "medium": return "40s";
    case "fast": return "20s";
    default: return "40s";
  }
};

export const getColor = (color: "blue" | "green" | "violet" | "multi" | "red") => {
  switch (color) {
    case "blue": return "var(--logo-blue)";
    case "green": return "var(--bio-green)";
    case "violet": return "var(--plasma-violet)";
    case "red": return "var(--quantum-red)";
    case "multi": return "url(#pattern-gradient)";
    default: return "var(--logo-blue)";
  }
};
