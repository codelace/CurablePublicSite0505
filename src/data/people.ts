
export type Person = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  group: 'team' | 'advisor' | 'founder';
};

export const people: Person[] = [
  // ——— FOUNDERS ———
  {
    id: 1,
    name: "Hugh Donatello",
    role: "Chief Executive Officer",
    avatar: "/lovable-uploads/d1b2c6d5-1a88-415d-ae0d-a2fd6669f9ce.png",
    group: "founder"
  },
  {
    id: 2,
    name: "Ilyssa Evans",
    role: "Chief Operations Officer",
    avatar: "/lovable-uploads/b83232dd-6ec6-4bae-b29c-71def935812a.png",
    group: "founder"
  },
  
  // ——— TEAM ———
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
    avatar: "/lovable-uploads/64bce3f9-3ed0-4cc2-90ba-9bc836707a73.png",
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
    avatar: "/lovable-uploads/ba7ce5e9-c5ee-4e01-9746-5504712070b7.png",
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
    avatar: "/lovable-uploads/78f3d7f6-b133-4ee6-bea4-b5e4842c9728.png",
    group: "team"
  },
  {
    id: 9,
    name: "Sensei",
    role: "Human Health",
    avatar: "/lovable-uploads/d40b9bb3-1154-41eb-8f04-9df2c968b110.png",
    group: "team"
  },
  {
    id: 10,
    name: "Olokoji",
    role: "Legal & Compliance",
    avatar: "/lovable-uploads/90558286-0ee7-4d4f-b509-691581da1995.png",
    group: "team"
  },

  // ——— ADVISORS ———
  {
    id: 11,
    name: "Weblogica",
    role: "Engineering & Security",
    avatar: "/lovable-uploads/a2f4ba16-59a7-4321-a074-79d871ef3491.png",
    group: "advisor"
  },
  {
    id: 12,
    name: "B. Toshi",
    role: "Web3 Builders",
    avatar: "/lovable-uploads/e12440db-60fb-408c-bef3-081c44b9f807.png",
    group: "advisor"
  },
  {
    id: 13,
    name: "Ravish",
    role: "Agentic Infrastructure",
    avatar: "/lovable-uploads/b6f57fff-8618-41e8-ae67-aa9643b7a86d.png",
    group: "advisor"
  },
  {
    id: 14,
    name: "Tamas",
    role: "DAO Ops & Gov",
    avatar: "/lovable-uploads/4c90c926-820b-4db0-9a47-a457463c075a.png",
    group: "advisor"
  },
  {
    id: 15,
    name: "Iggy",
    role: "Engineering & AI",
    avatar: "/lovable-uploads/6a79f3bb-c709-4794-9b5a-40ac0a922f6e.png",
    group: "advisor"
  },
  {
    id: 16,
    name: "Pink",
    role: "Content & Community",
    avatar: "/lovable-uploads/31f14b9a-7672-4ad1-a74e-b7ef1e0fd867.png",
    group: "advisor"
  },
  {
    id: 17,
    name: "Rocks",
    role: "Content & Community",
    avatar: "/lovable-uploads/d02246f5-470f-4d66-a2cb-88d9748dfcef.png",
    group: "advisor"
  }
];
