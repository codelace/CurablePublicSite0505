
/**
 * Utility functions for profile card styling
 */

/**
 * Returns the appropriate background style class based on user group
 */
export const getBackgroundStyle = (group: string): string => {
  switch (group) {
    case 'team': return 'bg-gradient-to-br from-gunmetal-900/90 to-logo-blue/30';
    case 'advisor': return 'bg-gradient-to-br from-gunmetal-900/90 to-quantum-red/30';
    case 'founder': return 'bg-gradient-to-br from-gunmetal-900/90 to-plasma-violet/30';
    default: return 'bg-gunmetal-900/90';
  }
};

/**
 * Returns the appropriate border style class based on user group
 */
export const getBorderStyle = (group: string): string => {
  switch (group) {
    case 'team': return 'border-logo-blue/60';
    case 'advisor': return 'border-quantum-red/60';
    case 'founder': return 'border-plasma-violet/60';
    default: return 'border-graphite-700/60';
  }
};

/**
 * Returns the appropriate glow effect class based on user group
 */
export const getGlowStyle = (group: string): string => {
  switch (group) {
    case 'team': return 'shadow-[0_0_15px_rgba(30,174,219,0.4)]';
    case 'advisor': return 'shadow-[0_0_15px_rgba(255,51,102,0.4)]';
    case 'founder': return 'shadow-[0_0_15px_rgba(161,98,255,0.4)]';
    default: return '';
  }
};

/**
 * Format text as haiku with line breaks after periods
 */
export const formatHaikuDescription = (description?: string): React.ReactNode => {
  if (!description) return null;
  
  // Split by periods only
  const sentences = description.split(/(?<=\.)\s+/);
  
  // Join with line breaks
  return sentences.map((sentence, i) => (
    <React.Fragment key={i}>
      {sentence}
      {i < sentences.length - 1 && <br />}
    </React.Fragment>
  ));
};
