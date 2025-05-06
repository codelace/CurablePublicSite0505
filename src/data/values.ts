
export type Value = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const values: Value[] = [
  {
    id: 1,
    title: "Transparency",
    description: "All research funding, data, and governance decisions are recorded on-chain for complete visibility and accountability to the community.",
    icon: "transparency"
  },
  {
    id: 2,
    title: "Scientific Rigor",
    description: "We maintain the highest standards of scientific methodology, peer review, and evidence-based decision making.",
    icon: "rigor"
  },
  {
    id: 3,
    title: "Inclusive Governance",
    description: "Our multi-tiered governance system ensures both expert guidance and community participation in setting research priorities.",
    icon: "governance"
  },
  {
    id: 4,
    title: "Open Access",
    description: "Research outputs funded by the DAO are made available to the global community, maximizing their impact and utility.",
    icon: "access"
  }
];
