
import { Person } from '../types/person';
import { founders } from './founders';
import { team } from './team';
import { advisors } from './advisors';
import { guardians } from './guardians';

const allPeople = [
  ...founders,
  ...guardians,
  ...team,
  ...advisors
];

// Define the desired group order
const groupOrder = ['founder', 'guardian', 'team', 'advisor', 'contributor'];

export const people: Person[] = allPeople.sort((a, b) => {
  const aIndex = groupOrder.indexOf(a.group);
  const bIndex = groupOrder.indexOf(b.group);
  return aIndex - bIndex;
});

// Re-export the type for backward compatibility
export type { Person } from '../types/person';
