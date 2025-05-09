
import { colors } from './colors';
import { keyframes } from './keyframes';
import { animations } from './animations';
import { backgroundImages } from './backgrounds';
import { typography } from './typography';
import { screens } from './screens';
import { borderRadius } from './borderRadius';
import { container } from './container';
import { rotate } from './rotate';

// Combine all theme extensions
export const themeExtensions = {
  screens,
  colors,
  ...typography,
  backgroundImage: backgroundImages,
  borderRadius,
  keyframes,
  animation: animations,
  rotate,
};

// Export container configuration separately
export { container };
