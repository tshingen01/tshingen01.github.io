export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  
  {
    id: "qrph-crypto",
    title: "QRPh Crypto Payment Platform",
    description:
      "Nationwide crypto payment platform enabling users to pay merchants through the Philippine QRPh infrastructure using USDT, USDC, BTC, and ETH.",
    longDescription:
      "SyncVerse is an edtech platform designed to help students and developers map out their goals. It allows users to input their current status and generates learning roadmaps, resources, and plans. Built with React and TypeScript and using AI models under the hood, SyncVerse focuses on a clean UI and practical guidance for each person's needs.",
    technologies: [
      "Next.js",
      "Ethereum",
      "2FA",
      "Bitcoin APIs",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "JWT",
      "OAuth2,",
    ],
    features: [
      "QR code crypto payments",
      "Blockchain transaction monitoring",
      "Real-time PHP conversion",
      "Wallet balance synchronization",
      "Merchant transaction tracking",
      "Multi-currency support",
      "Fraud detection system",
      "Payment confirmation notifications",
    ],
    image: "/images/projects/QRPh-crypto/qrph_1.jpg",
    demoUrl: "https://www.coins.ph/en-ph?utm_source",
    githubUrl: "https://github.com/tshingen01/crypto-qrpn", // ###
    category: "blockchain"
  },
  {
    id: "trading-Platform",
    title: "Coins Pro Advanced Trading Platform",
    description:
      "Developed a high-performance trading platform similar to Binance Pro and Coinbase Advanced Trade for Philippine crypto users.",
    longDescription:
      "Professional-grade trading system for active crypto traders. The platform featured real-time market data, advanced charting tools, and a robust order management system. It supported spot trading with various order types, live order books, and portfolio management features. The architecture was designed for scalability and low latency to handle high trading volumes while ensuring security and reliability.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "TradingView Charting Library",
      "Font Awesome",
      "WebSocket streaming",
      "GoLang services",
      "Node.js",
      "Kafka event streaming",
      "Redis cache",
      "PostgreSQL",
      "Elasticsearch",
    ],
    features: [
      "Spot trading engine",
      "Candlestick charts",
      "Live order books",
      "Market/limit orders",
      "Portfolio management",
      "TradingView integration",
      "WebSocket live feeds",
      "Liquidity aggregation",
      "Risk monitoring",
      "Trade history export",
    ],
    image: "/images/projects/trading/trading_1.jpg",
    demoUrl: "https://www.coins.ph/en-ph?utm_source",
    githubUrl: "https://github.com/techieujjwal/portfolio",
    category: "web"
  },
  {
    id: "market-intel-platform",
    title: "AI-Powered Crypto Insights & Market Intelligence Platform",
    description:
      "AI-enhanced analytics and personalized recommendation system integrated into the Coins ecosystem.",
    longDescription:
      "Built intelligent financial insight systems leveraging AI and machine learning for personalized recommendations, market intelligence, risk detection, behavioral analytics, Coins.ph introduced enhanced in-app news and market intelligence integrations during this period.",
    technologies: [
      "Python",
      "TensorFlow",
      "Next.js",
      "Node.js",
      "React",
      "D3.js",
      "React",
      "FastAPI",
      "PostgreSQL",
    ],
    features: [
      "AI market summaries",
      "Personalized crypto recommendations",
      "Portfolio risk analysis",
      "Smart notifications",
      "Behavioral segmentation",
      "Sentiment analysis",
      "AI chatbot support",
      "Price movement alerts",
      "Automated insights feed",
    ],
    image: "/images/projects/Market-intel/market_intel_1.jpg",
    demoUrl: "https://community-dashboard-beige.vercel.app/",
    githubUrl: "https://github.com/tshingen01/market_intel_platform",
    category: "ai"
  },
  {
    id: "sprout-hris-payroll",
    title: "Sprout HRIS & Payroll Management Platform Enhancement",
    description:
      "Beginner-friendly Python tool to manage and analyze student marks using CSV and pandas.",
    longDescription:
      "This project focused on improving Sprout's cloud-based HR Information System (HRIS) and Payroll Management platform for hybrid and remote work environments across Philippine enterprises. The platform centralized, so as a junior full-stack developer, I assisted in frontend module implementation, backend API integration, bug fixing, reporting features, and mobile-responsive improvements.",
    technologies: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "Jira",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Material UI",
      "Node.js",
      "REST APIs",
      "PHP legacy modules",
      "Postman",
      "AWS EC2",
      "AWS RDS",
      "Nginx",
    ],
    features: [
      "employee management",
      "payroll processing",
      "attendance tracking",
      "leave management",
      "government compliance",
      "mobile self-service tools"
    ],
    image: "/images/projects/Sprout-HRIS-Payroll/sprout_hris_payroll_1.jpg",
    demoUrl: "https://www.sprout.ph/hris-payroll",
    githubUrl: "https://github.com/techieujjwal/Student-result-analyzer",
    category: "web"
  },
  {
    id: "sprout-recruitment-performance",
    title: "Sprout Recruitment & Performance+ Platform",
    description:
      "The platform was designed for HR teams managing remote and hybrid hiring operations.",
    longDescription:
      "This project focused on Sprout's talent acquisition and employee performance ecosystem, including recruitment workflows, applicant tracking, performance management, and employee engagement.",
    technologies: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "Zoom API",
      "TypeScript",
      "Redux",
      "SCSS",
      "GraphQL APIs",
      "Node.js",
      "Redis cache",
      "SendGrid",
      "Google Calendar API",
      "Docker",
      "GitLab CI/CD",
    ],
    features: [
      "Applicant Tracking System (ATS)",
      "Recruitment Portal",
      "Performance+ System",
      "Employee Engagement",
      "Analytics",
    ],
    image: "/images/projects/Sprout-RP/sr_perform_1.jpg",
    demoUrl: "https://www.sprout.ph/recruitment-performance",
    githubUrl: "https://github.com/techieujjwal/Student-result-analyzer",
    category: "web"
  }
];
