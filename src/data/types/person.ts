
export type Person = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  group: 'team' | 'advisor' | 'founder' | 'contributor';
  gptDescription?: string;
  bio?: string;
  website?: string;
};
