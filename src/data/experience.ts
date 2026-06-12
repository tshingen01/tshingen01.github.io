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
    id: "nextsprinttech-fullstack",
    company: "NextSprintTech",
    role: "Senior Full-Stack Developer",
    duration: "February 2023 - February 2026",
    location: "San Francisco, California, United States · Remote",
    description:
      "",
    achievements: [
      "Led architecture and development of large-scale SaaS and HealthTech platforms.",
      "Designed full-stack solutions across frontend, backend, databases, and cloud infrastructure.",
      "Integrated AI/ML capabilities into healthcare and biotech products.",
      "Collaborated with product managers, researchers, clinicians, and UX teams.",
      "Mentored junior and mid-level developers.",
      "Conducted performance audits and codebase modernization initiatives.",
      "Built secure HIPAA-compliant healthcare applications.",
      "Implemented CI/CD and cloud deployment pipelines.",
      "Led technical design reviews and architectural decisions.",
      "Optimized platform scalability, reliability, and maintainability."
    ],
    technologies: [
      "Next.js",
      "Python",
      "PostgreSQL",
      "LangChain"
    ],
    type: "full-time"
  },
  {
    id: "coins-senior-fullstack",
    company: "Coins.ph",
    role: "Full-Stack Developer",
    duration: "September 2021 - September 2022",
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
    id: "esl-web-developer",
    company: "Exist Software Labs",
    role: "Web Developer",
    duration: "August 2020 - August 2021",
    location: "Pasig City, Metro Manila, Philippines · Remote",
    description:
      "Worked on enterprise web applications, digital transformation projects, cloud systems, and custom software solutions for local and international clients.",
    achievements: [
      "Developed responsive web interfaces using Angular and Bootstrap.",
      "Created REST API endpoints using Spring Boot.",
      "Developed customer onboarding workflows.",
      "Optimized SQL queries and database indexes.",
      "Assisted DevOps teams during deployments.",
      "Implemented audit logging and transaction tracking.",
    ],
    technologies: ["React.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Material UI"],
    type: "full-time"
  },
  {
    id: "IOL-junior-web-developer",
    company: "IOL Inc.",
    role: "Junior Web Developer",
    duration: "June 2018 - June 2020",
    location: "Baguio City, Benguet, Philippines",
    description:
      "I involved supporting client projects by building and maintaining web applications while learning from more experienced developers.",
    achievements: [
      "Developed and maintained responsive web applications.",
      "Implemented frontend interfaces from UI/UX designs.",
      "Assisted backend developers in API integration.",
      "Created and optimized database-driven features.",
      "Performed website testing and bug fixing.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "AJAX", "Jira/Trello", "basic CI/CD"],
    type: "full-time"
  },
  {
    id: "linkage-frontend-developer-intern",
    company: "Linkage",
    role: "Software Developer Intern",
    duration: "July 20, 2017 - February 20, 2018",
    location: "Baguio City, Benguet, Philippines",
    description:
      "Shadowed senior developers to understand web development workflows.",
    achievements: [
      "Assisted in designing, developing, and maintaining web and mobile applications under supervision.",
      "Participated in code reviews and testing to ensure quality and performance of applications.",
      "Conducted research and prototyping for emerging technologies, including blockchain, dApps, and DeFi concepts."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git/GitHub", "dApps", "NFTs", "DeFi concepts"],
    type: "internship"
  }
];
