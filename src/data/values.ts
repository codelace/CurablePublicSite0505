
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
    description: "Every grant, vote, and milestone lives on‑chain—open for anyone to audit.",
    icon: "transparency"
  },
  {
    id: 2,
    title: "Scientific Rigor",
    description: "Peer‑reviewed protocols and reproducible data are non‑negotiable.",
    icon: "rigor"
  },
  {
    id: 3,
    title: "Inclusive Governance",
    description: "Researchers, patients, and supporters share equal power to steer R&D.",
    icon: "governance"
  },
  {
    id: 4,
    title: "Open Access",
    description: "Breakthroughs belong to the world; findings are published for all to build upon.",
    icon: "access"
  }
];
