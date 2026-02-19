export const about = {
  name: 'eric chen',
  headline: 'software engineer',
  bio: 'hey, i\'m **eric**!\n\n i\'m currently an undergrad at **ucla** studying mathematics of computation. i\'m interested in **swe**, **ai/ml**, and **quant trading**. i love **competitive programming**, and my main strength probably lies in **data structures and algorithms in c++**. \n\nlately, i\'ve been working as a **qa engineering intern** at **deepiri**, a **usaco instructor** at **c0deex**, and performing **research** on how **reinforcement learning models** can convert their knowledge into english in order to **help humans learn** with **dr. ruoming jin** and **dr. feodor dragan**.\n\n outside of academics, i play poker, **chess**, pickleball, lift, **solve rubik\'s cubes**, fold origami, and (ocassionally) play tetris. if you\'re working on anything interesting, want to chat about any of my work, or simply want to say hi, feel free to [[reach out]]!',
  image: '/profile.JPG', // optional: '/profile.jpg' in public/
};

// Contact: each item needs `link` (url) and `label` (e.g. "GitHub"). Use `icon` for built-in (github, linkedin, email, twitter, link) or `iconUrl` for a custom image URL.


export const experience = [
  {
    title: 'Software Engineering Intern',
    company: 'Company Name',
    dates: 'Summer 2024',
    bullets: [
      'Built feature X using Y.',
      'Improved Z by N%.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'University Name',
    dates: 'Fall 2023 – Spring 2024',
    bullets: [
      'Led labs for CS 101.',
      'Graded assignments and held office hours.',
    ],
  },
];


export const projects = [
  {
    title: 'Project One',
    description: 'Brief description of what it does and why it matters.',
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