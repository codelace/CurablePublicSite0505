
import { Person } from '../types/person';
import { founders } from './founders';
import { team } from './team';
import { advisors } from './advisors';

export const people: Person[] = [
  ...founders,
  ...team,
  ...advisors
];

// Re-export the type for backward compatibility
export type { Person } from '../types/person';
