export const about = {
  name: 'eric chen',
  headline: 'software engineer',
  bio: 'hey, i\'m **eric**!\n\n i\'m currently an undergrad at **ucla** studying mathematics of computation. i\'m interested in **swe**, **ai/ml**, and **quant trading**. i love **competitive programming**, and my main strength probably lies in **data structures and algorithms in c++**. \n\nlately, i\'ve been working as a **qa engineering intern** at **deepiri**, a **usaco instructor** at **c0deex**, and performing **research** on how **reinforcement learning models** can convert their knowledge into english in order to **help humans learn** with **dr. ruoming jin** and **dr. feodor dragan**.\n\n outside of academics, i play poker, **chess**, pickleball, **lift**, **solve rubik\'s cubes**, fold origami, and (ocassionally) play tetris. if you\'re working on anything interesting, want to chat about any of my work, or simply want to say hi, feel free to [[reach out]]!',
  image: '/profile.JPG', // optional: '/profile.jpg' in public/
};

// Contact: each item needs `link` (url) and `label` (e.g. "GitHub"). Use `icon` for built-in (github, linkedin, email, twitter, link) or `iconUrl` for a custom image URL.


export const experience = [
  {
    title: 'qa engineering intern',
    company: 'deepiri',
    dates: 'dec 2025 - present',
    bullets: [
      'verify functionality, security, + adherence to best practices of prs',
      'designed + executed both manual + automated test cases w/ **jest**',
      'deployed services locally w/ **docker** + **kubernetes** for integration + regression testing',
      'worked w/ **scrum framework** w/ weekly team + org standups'
    ],
  },
  {
    title: 'instructor',
    company: 'c0deex',
    dates: 'aug 2025 - present',
    bullets: [
      'taught introductory usaco course, **data structs + algos** in **c++**',
      'covered greedy, sliding window, bin search, stacks, queues, maps, etc.',
    ],
  },
  {
    title: 'server administrator',
    company: 'math advance',
    dates: 'jun 2022 - jul 2024',
    bullets: [
      'hosted math comps w/ **$10k+ in sponsorships** from jane street, wolfram alpha, mit beaver works, d.e. shaw & co, jetbrains, aops, 3blue1brown, & daily challenge w/ po-shen-loh',
      'assissted in development of website w/ **200+ concurrent users** during contest times',
      'physically set up **home server** + dealt w/ **hardware upkeep** + **ip routing**',
      'set up email system w/ **postfix** + **dovecot**, serviced ~20 people'
    ],
  },
];


export const projects = [
  {
    title: 'cifar-10 cnn',
    description: 'a logistic regression cnn trained to perform image classification on the cifar-10 dataset',
    tech: ['python', 'pytorch', 'matplotlib', 'sklearn'],
    links: [{ url: 'https://github.com/ericchen682/cifar-10-cnn', label: 'gh repo'},],
  },
  {
    title: 'candid',
    description: 'a real-time ai fact-checker used to fact-check presidential debate, interviewed by CBS News',
    tech: ['python', 'fastapi', 'react'],
    links: [{ url: 'https://www.cbsnews.com/sanfrancisco/news/amador-valley-high-seniors-develop-ai-tool-that-fact-checked-presidential-debate/', label: 'cbs interview'},],
  },
  {
    title: 'noteworthy',
    description: '1st overall @ hackakhan, personalized study plan maker w/ scheduling based on notes',
    tech: ['tesseract.js', 'postgres', 'nextjs'],
    links: [{url: 'https://github.com/WilyHyperion/KhanHacks2/tree/main/khanhacks', label: 'gh repo'},
      {url:'https://devpost.com/software/noteworthy-og7cu9?_gl=1*6zlse5*_gcl_au*NTA5NzU0MzQ5LjE3NjU4NTQ1NjI.*_ga*OTg3OTM3NTAwLjE3NjU4NTQ1NjM.*_ga_0YHJK3Y10M*czE3NzE0ODc0MDAkbzkkZzEkdDE3NzE0ODc0MjIkajM4JGwwJGgw', label: 'devpost'}]
  },
  {
    title: 'edumaximize',
    description: '1st overall @ milpitas hacks, customized test generator for teachers to prevent cheating',
    tech: ['restful apis', 'jspdf', 'figma', 'tailwind css'],
    links: [{url: 'https://github.com/WilyHyperion/milpitashacks', label: 'gh repo'},
      {url:'https://devpost.com/software/edumaximize?_gl=1*q07mzi*_gcl_au*NTA5NzU0MzQ5LjE3NjU4NTQ1NjI.*_ga*OTg3OTM3NTAwLjE3NjU4NTQ1NjM.*_ga_0YHJK3Y10M*czE3NzE0ODc0MDAkbzkkZzEkdDE3NzE0ODc0MzckajIzJGwwJGgw', label: 'devpost'}]
  },
  {
    title: 'portfolio',
    description: 'portfolio built w/ react + vite, hosted on netlify',
    tech: ['react', 'vite', 'tailwind css'],
    links: [{url: 'https://github.com/ericchen682/personal-portfolio', label: 'gh repo'}]
  },
];


export const honors = [
  { name: 'dean\'s list', issuer: 'ucla', date: '', note: 'f25' },
  { name: 'aime qualifier', issuer: 'maa', date: '', note: '3x qual, 1x w/ distinction' },
  { name: 'usaco gold', issuer: 'usa computing olympiad', date: '', note: 'score of 750/1000 in gold div' },
  { name: 'national merit scholarship finalist', issuer: 'nmsc', date: '', note: 'one of 15,000 selected nationwide' },
  { name: 'avhs ptsa merit scholarship', issuer: 'amador valley hs', date: '', note: 'one of 7 selected for $1k scholarship' },
];


export const extracurriculars = [
  { role: 'member', org: 'acm ai', period: 'sept 2025 – present', note: 'attend learning lectures, learn ai/ml concepts' },
  { role: 'cloud architect', org: 'aws cloud club', period: 'jan 2025 - present', note: 'attend weekly meetings + build products w/ aws cloud services' },
  { role: 'secretary', org: 'avhs cubing club', period: 'aug 2022 - june 2024', note: 'arrange weekly meetings + organize mock competitions, competed officially + solved in 8.89 secs' },
];


export const contact = [
  { icon: 'github', link: 'https://github.com/ericchen682', label: 'GitHub' },
  { icon: 'linkedin', link: 'https://linkedin.com/in/eric-chen-ucla', label: 'LinkedIn' },
  { icon: 'email', link: 'mailto:ericchen682@gmail.com', label: 'Email' },
];