export interface Haiku {
  id: number;
  author: string;
  lines: [string, string, string];
  theme: string;
  category: 'philosophy' | 'science' | 'healing' | 'technology' | 'nature';
}

export const haikus: Haiku[] = [
  {
    id: 1,
    author: "Marcus Chen",
    lines: [
      "Cells whisper secrets",
      "In quantum fields of healing",
      "Life's code rewrites itself"
    ],
    theme: "Cellular Regeneration",
    category: "science"
  },
  {
    id: 2,
    author: "Dr. Sarah Kim",
    lines: [
      "Data flows like blood",
      "Through digital arteries",
      "Health becomes data"
    ],
    theme: "Digital Health",
    category: "technology"
  },
  {
    id: 3,
    author: "Apollo",
    lines: [
      "Blockchain holds our truth",
      "Each transaction a heartbeat",
      "Trust in mathematics"
    ],
    theme: "Decentralized Trust",
    category: "technology"
  },
  {
    id: 4,
    author: "Zara Okafor",
    lines: [
      "Ancient herbs know best",
      "Molecules dance with wisdom",
      "Old ways meet new tools"
    ],
    theme: "Traditional Medicine",
    category: "healing"
  },
  {
    id: 5,
    author: "Dr. James Wright",
    lines: [
      "Patient data speaks",
      "In patterns we barely see",
      "AI finds the path"
    ],
    theme: "Predictive Medicine",
    category: "science"
  },
  {
    id: 6,
    author: "Elena Rodriguez",
    lines: [
      "Genes like morning dew",
      "Hold tomorrow's medicine",
      "Written in our cells"
    ],
    theme: "Genomic Medicine",
    category: "science"
  },
  {
    id: 7,
    author: "Team Collective",
    lines: [
      "Open source healing",
      "Knowledge shared across borders",
      "Cures belong to all"
    ],
    theme: "Open Science",
    category: "philosophy"
  },
  {
    id: 8,
    author: "Dr. Michael Chen",
    lines: [
      "Sunlight on skin cells",
      "Vitamin D synthesis",
      "Nature's pharmacy"
    ],
    theme: "Natural Healing",
    category: "nature"
  },
  {
    id: 9,
    author: "Research Team",
    lines: [
      "Lab results shimmer",
      "Like stars in a data sky",
      "Each point holds a life"
    ],
    theme: "Clinical Research",
    category: "science"
  },
  {
    id: 10,
    author: "Community Voice",
    lines: [
      "Together we build",
      "A future where pain dissolves",
      "Into digital hope"
    ],
    theme: "Collective Healing",
    category: "philosophy"
  }
];