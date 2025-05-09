
export interface PatternProps {
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  color?: 'blue' | 'green' | 'violet' | 'multi' | 'red';
}

export const getOpacity = (intensity: PatternProps['intensity'] = 'medium') => {
  switch (intensity) {
    case 'low': return 'opacity-[0.08]';
    case 'high': return 'opacity-[0.20]';
    default: return 'opacity-[0.12]';
  }
};

export const getAnimationSpeed = (speed: PatternProps['speed'] = 'medium') => {
  switch (speed) {
    case 'slow': return 'animate-[pan-grid_30s_linear_infinite]';
    case 'fast': return 'animate-[pan-grid_10s_linear_infinite]';
    default: return 'animate-[pan-grid_20s_linear_infinite]';
  }
};

export const getColor = (color: PatternProps['color'] = 'blue') => {
  switch (color) {
    case 'green': return 'text-bio-green';
    case 'violet': return 'text-plasma-violet';
    case 'multi': return 'bg-gradient-to-br from-bio-blue via-plasma-violet to-quantum-red bg-clip-text';
    case 'red': return 'text-quantum-red';
    default: return 'text-bio-blue';
  }
};
