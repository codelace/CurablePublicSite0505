
export type Person = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  group: 'team' | 'advisor';
};

export const people: Person[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Founder & Chief Scientific Officer",
    avatar: "/avatars/avatar-1.png",
    group: "team"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    avatar: "/avatars/avatar-2.png",
    group: "team"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Head of Research",
    avatar: "/avatars/avatar-3.png",
    group: "team"
  },
  {
    id: 4,
    name: "Jason Park",
    role: "Lead DeFi Architect",
    avatar: "/avatars/avatar-4.png",
    group: "team"
  },
  {
    id: 5,
    name: "Emily Nakamura",
    role: "Community Manager",
    avatar: "/avatars/avatar-5.png",
    group: "team"
  },
  {
    id: 6,
    name: "Dr. Robert Wei",
    role: "Blockchain Advisor",
    avatar: "/avatars/avatar-6.png",
    group: "advisor"
  },
  {
    id: 7,
    name: "Dr. Elena Sorokin",
    role: "Pharmaceutical Research Advisor",
    avatar: "/avatars/avatar-7.png",
    group: "advisor"
  },
  {
    id: 8,
    name: "James Montgomery",
    role: "Regulatory Affairs Advisor",
    avatar: "/avatars/avatar-8.png",
    group: "advisor"
  },
  {
    id: 9,
    name: "Dr. Kenji Tanaka",
    role: "Scientific Ethics Advisor",
    avatar: "/avatars/avatar-9.png",
    group: "advisor"
  }
];
