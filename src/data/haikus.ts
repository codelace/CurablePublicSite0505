export interface Haiku {
  id: number;
  lines: [string, string, string];
  theme: string;
  category: 'philosophy' | 'science' | 'healing' | 'technology' | 'nature';
}

export const haikus: Haiku[] = [
  {
    id: 1,
    lines: [
      "Cardinal chaos",
      "Beauty is in the storm's eye",
      "A molecular muse"
    ],
    theme: "Beauty in Complexity",
    category: "philosophy"
  },
  {
    id: 2,
    lines: [
      "Empowering the heart",
      "Souls perform miracles",
      "We share love"
    ],
    theme: "Collective Healing",
    category: "healing"
  },
  {
    id: 3,
    lines: [
      "Patient's voice rings clear,",
      "Science and healing unite,",
      "Hope's new path unfolds."
    ],
    theme: "Patient-Centered Care",
    category: "science"
  },
  {
    id: 4,
    lines: [
      "No single hero,",
      "We're stronger when we build it",
      "Side by side as one."
    ],
    theme: "Unity in Purpose",
    category: "philosophy"
  },
  {
    id: 5,
    lines: [
      "Working together.",
      "The thrill of discovery.",
      "Patients own the cure."
    ],
    theme: "Collaborative Research",
    category: "science"
  },
  {
    id: 6,
    lines: [
      "Atoms dance in grace,",
      "Through our lens, life's code unfolds—",
      "Beauty binds us all."
    ],
    theme: "Molecular Beauty",
    category: "philosophy"
  }
];