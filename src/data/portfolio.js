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
    description: 'a cnn trained on the cifar-10 dataset',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/you/repo',
    linkLabel: 'Repo',
  },
  {
    title: 'Project Two',
    description: 'Another project: problem, solution, impact.',
    tech: ['Python', 'FastAPI'],
    link: 'https://example.com/demo',
    linkLabel: 'Live Demo',
  },
];


export const honors = [
  { name: 'Dean\'s List', issuer: 'University Name', date: '2023–2024', note: 'Every semester.' },
  { name: 'Hackathon Winner', issuer: 'Local Hackathon', date: '2024', note: 'Best use of API.' },
];


export const extracurriculars = [
  { role: 'Member', org: 'ACM / Programming Club', period: '2022 – present', note: 'Attend talks and practice problems.' },
  { role: 'Volunteer', org: 'Code 2040 / Local Org', period: '2023', note: 'Mentored high school students in coding.' },
];


export const contact = [
  { icon: 'github', link: 'https://github.com/ericchen682', label: 'GitHub' },
  { icon: 'linkedin', link: 'https://linkedin.com/in/eric-chen-ucla', label: 'LinkedIn' },
  { icon: 'email', link: 'mailto:ericchen682@gmail.com', label: 'Email' },
];