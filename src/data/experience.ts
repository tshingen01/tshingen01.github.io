export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "freelance-fullstack",
    company: "Freelancer",
    role: "Senior Full-Stack Developer",
    duration: "Feb 2026 - now",
    location: "Remote",
    description:
      "I work as a freelance full-stack developer, collaborating with clients worldwide to deliver web, AI, and blockchain solutions.",
    achievements: [
      "Develop web, AI, and blockchain solutions for international clients.",
      "Design scalable cloud architectures and full-stack applications.",
      "Lead technical planning and system design for startup and enterprise projects.",
      "Recently E-commerce, fintech, and SaaS development with a focus on performance, security, and user experience."
    ],
    technologies: [],
    type: "full-time"
  },
  {
    id: "sprout-solutions-fullstack",
    company: "Sprout Solutions",
    role: "Senior Full-Stack Developer",
    duration: "Jan 2024 - Feb 2026",
    location: "Makati City, Metro Manila, Philippines · Remote",
    description:
      "",
    achievements: [
      "Led development of HR and payroll platform features.",
      "Designed scalable backend services and modern frontend applications.",
      "Mentored junior developers and participated in architecture decisions.",
      "Worked in a hybrid/remote environment serving thousands of business users."
    ],
    technologies: [
      "Agile Environment",
      "Team Support",
      "Bug Fixing & Maintenance",
      "Documentation"
    ],
    type: "full-time"
  },
  {
    id: "coins-senior-fullstack",
    company: "Coins.ph",
    role: "Full-Stack Developer",
    duration: "Aug 2022 - Nov 2023",
    location: "Taguig City, Metro Manila, Philippines · Remote",
    description:
      "Worked as a Full-Stack Developer helping both building robust fintech products and ensuring their secure, scalable operation, while mentoring teams and integrating cutting-edge blockchain functionality.",
    achievements: [
      "Worked on scaling crypto wallet features and integrating new coins for users.",
      "Optimized apps for performance, reliability, and user experience.",
      "Developed or collaborated on blockchain-based solutions.",
      "Improved transaction processing pipelines, handled high-volume traffic, reduced downtime, and fixed critical bugs.",
      "Built dashboards, analytics tools, and monitoring systems to assist operations and support teams."
    ],
    technologies: [
      "End-to-end Development",
      "Blockchain Features",
      "API Development",
      "Security & Compliance",
    ],
    type: "full-time"
  },
  {
    id: "esl-frontend",
    company: "Exist Software Labs",
    role: "Frontend Developer",
    duration: "Mar 2020 - May 2022",
    location: "Pasig City, Metro Manila, Philippines · Remote",
    description:
      "Worked on enterprise web applications, digital transformation projects, cloud systems, and custom software solutions for local and international clients.",
    achievements: [
      "Developed responsive and interactive user interfaces for enterprise and SaaS platforms.",
      "Implemented effective community engagement strategies and learning initiatives",
      "Built reusable UI components and optimized frontend architecture.",
    ],
    technologies: ["React.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI"],
    type: "full-time"
  },
  {
    id: "IOL-web-developer",
    company: "IOL Inc.",
    role: "Web Developer",
    duration: "Jan 2019 - Feb 2020",
    location: "Baguio City, Benguet, Philippines",
    description:
      "I involved supporting client projects by building and maintaining web applications while learning from more experienced developers.",
    achievements: [
      "Developed internal business portals and client-facing web applications.",
      "Implemented responsive layouts and interactive UI features.",
      "Collaborated with backend developers and UI/UX designers in Agile teams.",
      "Improved application performance and browser compatibility."
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Jira/Trello", "basic CI/CD"],
    type: "full-time"
  },
  {
    id: "linkage-frontend-developer-intern",
    company: "Linkage",
    role: "Frontend Developer Intern",
    duration: "Jun 2017 - Feb 2018",
    location: "Baguio City, Benguet, Philippines",
    description:
      "Shadowed senior developers to understand frontend workflows.",
    achievements: [
      "Assisted in building web pages using HTML, CSS, and JavaScript.",
      "Converted UI/UX designs from Figma, Sketch, or Photoshop into functional web interfaces.",
      "Implemented responsive layouts for desktop and mobile devices.",
      "Applied basic interactivity with JavaScript and jQuery."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git/GitHub"],
    type: "internship"
  }
];
