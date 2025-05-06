
export type Person = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  group: 'team' | 'advisor';
};

export const people: Person[] = [
  // ——— TEAM ———
  {
    id: 1,
    name: "Hugh Donatello",
    role: "Chief Executive Officer",
    avatar: "/lovable-uploads/d1b2c6d5-1a88-415d-ae0d-a2fd6669f9ce.png",
    group: "team"
  },
  {
    id: 2,
    name: "Ilyssa Evans",
    role: "Chief Operations Officer",
    avatar: "/lovable-uploads/b83232dd-6ec6-4bae-b29c-71def935812a.png",
    group: "team"
  },
  {
    id: 3,
    name: "Fax",
    role: "Web3 Builders",
    avatar: "/lovable-uploads/9dc560d7-8282-4ac5-aa25-1491ffcfd77f.png",
    group: "team"
  },
  {
    id: 4,
    name: "AC",
    role: "Ecosystem & DevRel",
    avatar: "/avatars/ac.png",
    group: "team"
  },
  {
    id: 5,
    name: "Devox",
    role: "Engineering & AI",
    avatar: "/lovable-uploads/edfc0e0b-7e7f-439f-b909-d78d05dfb329.png",
    group: "team"
  },
  {
    id: 6,
    name: "Kenichi",
    role: "DAO Ops & Governance",
    avatar: "/avatars/kenichi.png",
    group: "team"
  },
  {
    id: 7,
    name: "Dope",
    role: "Science & Research",
    avatar: "/lovable-uploads/d558783f-32dc-44c3-9b91-77b76dd49f16.png",
    group: "team"
  },
  {
    id: 8,
    name: "Trek",
    role: "Regulatory Affairs",
    avatar: "/avatars/trek.png",
    group: "team"
  },
  {
    id: 9,
    name: "Sensei",
    role: "Human Health",
    avatar: "/avatars/sensei.png",
    group: "team"
  },
  {
    id: 10,
    name: "Olokoji",
    role: "Legal & Compliance",
    avatar: "/avatars/olokoji.png",
    group: "team"
  },

  // ——— ADVISORS ———
  {
    id: 11,
    name: "Weblogica",
    role: "Engineering & Security",
    avatar: "/avatars/weblogica.png",
    group: "advisor"
  },
  {
    id: 12,
    name: "Ravish",
    role: "Agentic Infrastructure",
    avatar: "/avatars/ravish.png",
    group: "advisor"
  },
  {
    id: 13,
    name: "B. Toshi",
    role: "Web3 Builders",
    avatar: "/avatars/toshi.png",
    group: "advisor"
  },
  {
    id: 14,
    name: "Rocks",
    role: "Content & Community",
    avatar: "/avatars/rocks.png",
    group: "advisor"
  },
  {
    id: 15,
    name: "Pink",
    role: "Content & Community",
    avatar: "/avatars/pink.png",
    group: "advisor"
  },
  {
    id: 16,
    name: "Tamas",
    role: "DAO Ops & Gov",
    avatar: "/avatars/tamas.png",
    group: "advisor"
  },
  {
    id: 17,
    name: "Iggy",
    role: "Engineering & AI",
    avatar: "/avatars/iggy.png",
    group: "advisor"
  }
];
