export interface AboutMe {
  name: string;
  location: string;
  role: string;
  focus: string;
}

export interface EducationInfo {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  deansList: string;
  coursework: string[];
  activities: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  category: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
}

export interface Honor {
  title: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export const aboutMe: AboutMe = {
  name: "Eric Chen",
  location: "Los Angeles, CA",
  role: "CS + Math @ UCLA",
  focus: "SWE / Quant",
};

export const bio =
  "I'm a Computer Science and Mathematics student at UCLA who likes building things at the intersection of software, AI, and quantitative problem-solving \u2014 from RAG systems and browser-automation microservices to competitive trading and algorithms.";

export const education: EducationInfo = {
  school: "University of California, Los Angeles",
  degree: "B.S. Computer Science + B.S. Mathematics",
  period: "Expected June 2028",
  gpa: "4.0 / 4.0",
  deansList: "Dean's List: F25, W26, S26",
  coursework: [
    "Upper Div Data Structures & Algorithms",
    "Upper Div Probability & Statistics",
    "Computer Organization",
    "Software Construction",
    "Discrete Math",
    "Linear Algebra",
    "Multivariable Calculus",
  ],
  activities: [
    "Cloud Architect @ AWS Cloud Club",
    "Backend Developer @ GLITCH",
    "Member of ACM AI",
    "Member of ACA",
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Technical Program Manager Intern",
    company: "Tesla",
    location: "Palo Alto, CA",
    period: "Jun 2026 \u2014 Present",
    points: [
      "Designing and shipping employee-facing programs and the underlying systems, owning outcomes end-to-end.",
    ],
  },
  {
    role: "Cloud Architect (Contract)",
    company: "Amazon Web Services",
    location: "Los Angeles, CA",
    period: "Apr 2026 \u2014 Jun 2026",
    points: [
      "Built and expanded the knowledge base of a RAG system for a UCLA chatbot with AWS Bedrock.",
      "Created scheduled Lambda functions to update the knowledge base via automated web scrapers.",
      "Refactored club KB into 14 semantic sub-KBs with fallback routing to a main KB, reducing latency by 23%.",
    ],
  },
  {
    role: "AI Researcher",
    company: "Kent State University",
    location: "Kent, OH",
    period: "Feb 2026 \u2014 Jun 2026",
    points: [
      "Conducted deep reinforcement learning research under Dr. Ruoming Jin and Dr. Feodor Dragan.",
      "Investigated interpretable learning patterns within models trained to solve Rubik's Cubes.",
      "Identified and validated strategies transferable to human learning and decision-making.",
    ],
  },
  {
    role: "QA Engineering Intern",
    company: "Deepiri",
    location: "Pittsburgh, PA",
    period: "Dec 2025 \u2014 Present",
    points: [
      "Reviewed 40+ pull requests, ensured adherence to best practices, and designed test cases with Jest and Cypress.",
      "Deployed services locally with Docker and Kubernetes for integration and regression testing.",
    ],
  },
  {
    role: "Instructor",
    company: "C0deEX",
    location: "Acton, MA (Remote)",
    period: "Aug 2025 \u2014 May 2026",
    points: [
      "Taught a USACO course covering data structures and algorithms in C++ (part-time, 10 mos).",
      "Covered data structures including stacks, queues, lists, hash maps, trees, and vectors.",
      "Covered algorithmic concepts including time complexity, greedy algorithms, sliding window, and binary search.",
    ],
  },
  {
    role: "Server Administrator",
    company: "Math Advance",
    location: "Pleasanton, CA",
    period: "Jun 2022 \u2014 Jul 2024",
    points: [
      "Hosted math competitions with 200+ competitors and $10,000+ in sponsorships from Jane Street, Wolfram Alpha, MIT Beaver Works, D.E. Shaw & Co, JetBrains, Art of Problem Solving, and 3Blue1Brown.",
      "Physically set up a home server and handled hardware upkeep and IP routing.",
      "Set up an email system with postfix and dovecot servicing ~20 people.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Redirect",
    category: "Web Development",
    description:
      "A web app that helps travelers find ranked alternative flights after cancellations or delays, backed by a Python FastAPI microservice exposing POST /search that runs Nova Act browser automation.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind", "FastAPI", "Python", "REST API"],
  },
  {
    name: "Noteworthy",
    category: "AI / OCR",
    description:
      "1st Place Overall at Hackakhan (100+ participants): a personalized study-plan generator that parses images of notes into text with Tesseract.js OCR, stores SHA-256 hashed logins in Postgres, and persists users' past notes and plans.",
    tech: ["Next.js", "Postgres", "Tesseract.js"],
  },
  {
    name: "CANDID",
    category: "Artificial Intelligence",
    description:
      "A real-time AI-powered fact-checker built to fact-check a presidential debate (interviewed by CBS News). Feeds relevant news to Gemini for context via ScraperAPI, improving accuracy by 17%.",
    tech: ["Python", "FastAPI", "React", "Gemini"],
  },
];

export const honors: Honor[] = [
  { title: "USACO Gold", detail: "Scored 750/1000 in Gold Division" },
  { title: "AIME Qualifier", detail: "Qualified 3x, once with Distinction" },
  { title: "IMC Prosperity 4 Finalist", detail: "Top 1.3% final round, Top 0.4% qualifying" },
  { title: "1st at Codesprint LA", detail: "Sponsored by Jane Street, Citadel, HRT, and more" },
  { title: "1st Overall at Hackakhan", detail: "Sponsored by Khan Academy, Wolfram Alpha, AoPS" },
  { title: "National Merit Finalist", detail: "National Merit Scholarship Program" },
  { title: "1st at Milpitas Hacks", detail: "Hackathon champion" },
  { title: "AWS YouthTech Winner", detail: "Recognized for cloud innovation" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "Rust", "Java", "JavaScript", "TypeScript", "Bash", "HTML", "CSS", "LaTeX"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "Libraries",
    items: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "pandas", "scikit-learn", "matplotlib", "Jest", "jsPDF", "Tesseract.js"],
  },
  {
    label: "Tools / Platforms",
    items: ["AWS", "Docker", "Kubernetes", "Git", "Linux", "Postgres", "REST APIs", "Vite", "WSL", "VS Code"],
  },
];

export const marqueeLanguages: string[] = [
  "Python",
  "C++",
  "Rust",
  "Java",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Bash",
];

export const marqueeTags: string[] = [
  "AI/ML",
  "Web Development",
  "Quantitative",
  "Cloud / RAG",
  "Data Structures & Algorithms",
  "UI/UX",
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Email", href: "mailto:you@example.com", icon: "mail" },
];
