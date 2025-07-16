
import { Person } from '../types/person';
import { founders } from './founders';
import { team } from './team';
import { advisors } from './advisors';
import { guardians } from './guardians';

export const people: Person[] = [
  ...founders,
  ...team,
  ...advisors,
  ...guardians
];

// Re-export the type for backward compatibility
export type { Person } from '../types/person';
