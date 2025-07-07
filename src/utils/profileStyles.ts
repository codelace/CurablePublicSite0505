
export const getBorderStyle = (group: string) => {
  switch (group) {
    case 'team':
      return 'border-logo-blue/40';
    case 'advisor':
      return 'border-quantum-red/40';
    case 'founder':
      return 'border-plasma-violet/40';
    case 'contributor':
      return 'border-warm-amber/40';
    default:
      return 'border-logo-blue/40';
  }
};

export const getBackgroundStyle = (group: string) => {
  switch (group) {
    case 'team':
      return 'bg-gunmetal-900/95';
    case 'advisor':
      return 'bg-gunmetal-900/95';
    case 'founder':
      return 'bg-gunmetal-900/95';
    case 'contributor':
      return 'bg-gunmetal-900/95';
    default:
      return 'bg-gunmetal-900/95';
  }
};

export const getGlowStyle = (group: string) => {
  switch (group) {
    case 'team':
      return 'shadow-lg shadow-logo-blue/20';
    case 'advisor':
      return 'shadow-lg shadow-quantum-red/20';
    case 'founder':
      return 'shadow-lg shadow-plasma-violet/20';
    case 'contributor':
      return 'shadow-lg shadow-warm-amber/20';
    default:
      return 'shadow-lg shadow-logo-blue/20';
  }
};
