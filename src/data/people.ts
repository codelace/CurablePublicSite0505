
export type Person = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  group: 'team' | 'advisor' | 'founder';
  gptDescription?: string;
  bio?: string;
  website?: string;
};

export const people: Person[] = [
  // ——— FOUNDERS ———
  {
    id: 1,
    name: "Hugh Donatello",
    role: "Chief Executive Officer",
    avatar: "/lovable-uploads/d1b2c6d5-1a88-415d-ae0d-a2fd6669f9ce.png",
    group: "founder",
    gptDescription: "Bench meets brain, code meets clarity. Biotech strategist decoding molecular truth. Designing agents that think like scientists.",
    bio: "Bench meets brain, code meets clarity. Biotech strategist decoding molecular truth. Designing agents that think like scientists."
  },
  {
    id: 2,
    name: "Ilyssa Evans",
    role: "Chief Operations Officer",
    avatar: "/lovable-uploads/b83232dd-6ec6-4bae-b29c-71def935812a.png",
    group: "founder",
    gptDescription: "DeSci architect, systems rebel. Chemical mind with artistic fire. From benchtop to blockchain.",
    bio: "Chemical Engineer. Previously BizOps at Genentech, Pharma Technical Development (pilot plant), Deloitte (government drug pricing), Benchling(LIMS/ELN/Lab/science informatics), and Dassault Systemes Biovia (laboratory, quality, scientific informatics, eln, lims). I have also won chainlink hackathons and scroll hackathons, and have a certificate from MIT IN Machine learning and AI/Data Science."
  },
  
  // ——— TEAM ———
  {
    id: 3,
    name: "Fax",
    role: "Web3 Builders",
    avatar: "/lovable-uploads/9dc560d7-8282-4ac5-aa25-1491ffcfd77f.png",
    group: "team",
    gptDescription: "Tokenomics meets creative flow. Shaping culture with product intuition. Where strategy feels like art.",
    bio: "I Am Currently Project Curator For Multiple Projects @LAMB_sNFT A RWA Backed NFT Project On @AbstractChain With Multiple Different IP's @bigfoot404_ A MPL404 Dynamic NFT/ Fractionalized Token/RWA @ToadsInTrenches A NFT Project On Abstract With IP and A Token Coming Soon @ThePupsNFT A Very Astute Art House Project That Has Tentacles In Multiple Projects"
  },
  {
    id: 4,
    name: "AC",
    role: "Ecosystem & DevRel",
    avatar: "/lovable-uploads/64bce3f9-3ed0-4cc2-90ba-9bc836707a73.png",
    group: "team",
    gptDescription: "Ecosystem builder with a heart for people.\nKnee-deep in content, comms, and connection.\nLives where community thrives.",
    bio: "There is much to say. I've been involved in web3 for 3 years and enjoyed almost every minute. I've taken the experience from web3 small businesses to web3 and now I create content, advise, host spaces/streams, and provide network connections."
  },
  {
    id: 5,
    name: "Devox",
    role: "Engineering & AI",
    avatar: "/lovable-uploads/edfc0e0b-7e7f-439f-b909-d78d05dfb329.png",
    group: "team",
    gptDescription: "Full-stack force since 2018. Chemical roots, crypto branches. Code with soul, built to scale.",
    bio: "Been working in the web3 space since 2018. Full-stack blockchain engineer in the crypto space since 2018. Did my bachelor in chemical engineering and then switched to blockchain and did masters in CS. Worked with huge names like Dafi, SingularityDAO, Cre8ors, Uniswap Foundation."
  },
  {
    id: 6,
    name: "Kenichi",
    role: "DAO Ops & Governance",
    avatar: "/lovable-uploads/ba7ce5e9-c5ee-4e01-9746-5504712070b7.png",
    group: "team",
    gptDescription: "Governance whisperer. DAO-native with systems in their bones. Designing for trust and flow.",
    bio: "I have been deeply involved in decentralized governance, operations, and community building across multiple Web3 projects, with a focus on DeSci, AI, and impact-driven DAOs. My journey started in traditional project management and web development, but I quickly transitioned into the Web3 space, drawn by its potential to revolutionize industries through decentralization and open collaboration."
  },
  {
    id: 7,
    name: "Dope",
    role: "Science & Research",
    avatar: "/lovable-uploads/d558783f-32dc-44c3-9b91-77b76dd49f16.png",
    group: "team",
    gptDescription: "Biotech brain, DeFi heart. Fermentation, AI, and healing frequencies. Where molecules meet music.",
    bio: "I graduated as a nanomaterials chemical engineer, initially focused on material science before discovering my passion for biotechnology through biological applications of nanomaterials. This led me to pursue a career at the intersection of materials and life sciences. I've worked at multiple biotechnology companies, including one partnered with CRISPR Therapeutics, before joining Pfizer as a process engineer/scientist."
  },
  {
    id: 8,
    name: "Trek",
    role: "Regulatory Affairs",
    avatar: "/lovable-uploads/78f3d7f6-b133-4ee6-bea4-b5e4842c9728.png",
    group: "team",
    gptDescription: "Therapeutics shepherd across decades. Wearables, rare disease, and roadmaps. From molecule to market, mapped.",
    bio: "With over 20 years of experience in the pharmaceutical and biotechnology industry, I'm a proven leader who has successfully guided programs from early discovery through clinical development and regulatory approval. I've been working in biotech working on cure for cancer with research and technology."
  },
  {
    id: 9,
    name: "Sensei",
    role: "Human Health",
    avatar: "/lovable-uploads/d40b9bb3-1154-41eb-8f04-9df2c968b110.png",
    group: "team",
    gptDescription: "Four decades in healing hands. Clinical wisdom meets wearable future. Built on care, scaled by tech.",
    bio: "My name is Richard G. Nassab, DC. I am currently in practice with 40 plus years of experience. I specialize in chronic and difficult conditions in which I work interdisciplinary. With curable dao I will be focused on wearable technologies current and future. These will help with our day to day needs and patient assessment and empowerment."
  },
  {
    id: 10,
    name: "Olokoji",
    role: "Legal & Compliance",
    avatar: "/lovable-uploads/90558286-0ee7-4d4f-b509-691581da1995.png",
    group: "team",
    gptDescription: "IP, governance, and data decoded. Law student with DAO firepower. Where compliance meets conviction.",
    bio: "I have over two years of experience contributing to the Decentralized Science (DeSci) ecosystem and more than four years in the broader blockchain space. My contributions span roles such as IP and Compliance Officer at Aragon DAO, as well as tokenomics and governance support at Valley DAO, Cerebrum DAO, and currently, Spine DAO."
  },

  // ——— ADVISORS ———
  {
    id: 11,
    name: "Weblogica",
    role: "Engineering & Security",
    avatar: "/lovable-uploads/a2f4ba16-59a7-4321-a074-79d871ef3491.png",
    group: "advisor",
    gptDescription: "Legacy code, future dreams. From IBM to biotech breakthroughs. Infrastructure with soul.",
    bio: "44 years of software development, project management, and people management. Started with IBM, then went to Silicon Graphics, Silicon Studio, Pro Business, Incyte Genomics, Synovation, ClearWave Software, Cordblood Registry, and Carl Zeiss 3D Xray Microscopy."
  },
  {
    id: 12,
    name: "B. Toshi",
    role: "Web3 Builders",
    avatar: "/lovable-uploads/e12440db-60fb-408c-bef3-081c44b9f807.png",
    group: "advisor",
    gptDescription: "Pixels, protocols, possibility. From dev to content to culture. Exploring what's next, every day.",
    bio: "Just a guy exploring endless possibilities"
  },
  {
    id: 13,
    name: "Ravish",
    role: "Agentic Infrastructure",
    avatar: "/lovable-uploads/b6f57fff-8618-41e8-ae67-aa9643b7a86d.png",
    group: "advisor",
    gptDescription: "Minimizing pain through agentic code. AI that thinks with purpose. Quiet logic, loud impact.",
    bio: "tl;dt : too long didnt tell - i want to minimize human suffering. this aligns. let's do it!"
  },
  {
    id: 14,
    name: "Tamas",
    role: "DAO Ops & Gov",
    avatar: "/lovable-uploads/4c90c926-820b-4db0-9a47-a457463c075a.png",
    group: "advisor",
    gptDescription: "Builds startups from the inside out. Fractional CHRO with deep people wisdom. Scaling culture with care.",
    bio: "Builds startups from the inside out. Fractional CHRO with deep people wisdom. Scaling culture with care.",
    website: "https://www.linkedin.com/in/tholczer"
  },
  {
    id: 15,
    name: "Iggy",
    role: "Engineering & AI",
    avatar: "/lovable-uploads/6a79f3bb-c709-4794-9b5a-40ac0a922f6e.png",
    group: "advisor",
    gptDescription: "Code meets purpose in the new economy. Web3 engineer shaping safer systems. Quiet builder with vision.",
    bio: "Software Engineer interested in creating a better and safer digital economy"
  },
  {
    id: 16,
    name: "Pink",
    role: "Content & Community",
    avatar: "/lovable-uploads/31f14b9a-7672-4ad1-a74e-b7ef1e0fd867.png",
    group: "advisor",
    gptDescription: "Organic growth, intentional reach. Content meets community with impact. Always building with love.",
    bio: "Web 3 community builder/ building. Building connections, supporting only organic projects and sharing only organic content. Goal for me is to GROW with purpose, find genuine connections and maximize my impact with intention!"
  },
  {
    id: 17,
    name: "Rocks",
    role: "Content & Community",
    avatar: "/lovable-uploads/d02246f5-470f-4d66-a2cb-88d9748dfcef.png",
    group: "advisor",
    gptDescription: "Radiology by day, Blender by night. Health, art, and Web3 in perfect symmetry. Creative care in every detail.",
    bio: "I work in the medical field for 8 years. I am a certified Radiologic Technologist. Have been cross trained in CT and Mammo as well, but have not sat for the certification exam. I have hospital and outpatient experience. My hobby and passion is Art, physical and on the blockchain. I create in 3D using Blender."
  }
];
