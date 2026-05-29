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
    id: "shoptoli",
    title: "Shoptoli WooCommerce Multivendor Store",
    description:
      "Shoptoli is a modern multivendor e-commerce marketplace rebuilt and optimized on WordPress + WooCommerce in 2026.",
    longDescription:
      "The project focused on improving performance, navigation, conversion optimization, and marketplace scalability.The development team redesigned the WooCommerce architecture using a custom WordPress theme implementation and multiple advanced WooCommerce extensions. The goal was to transform Shoptoli into a faster and more conversion-focused WooCommerce marketplace with Better product filtering, Improved mobile UX, Faster product browsing, Vendor marketplace functionality, and Optimized checkout flow. The project also addressed common WooCommerce issues such as plugin overload, navigation complexity, and slow product search.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Shop Mania",
      "PHP",
      "HTML5",
      "JavaScript",
      "Custom CSS",
      "WCFM Multivendor",
    ],
    features: [
      "WooCommerce multivendor marketplace",
      "Advanced AJAX product search",
      "Product comparison system",
      "Wishlist functionality",
      "Product variation swatches",
      "Optimized cart experience",
      "Mobile-first responsive design",
      "Vendor management",
      "Conversion-focused UI",
      "Performance optimization",
      "Modern WooCommerce theme customization",
    ],
    image: "/images/projects/Shoptoli/shoptoli-6215.webp",
    demoUrl: "https://shoptoli.in/",
    category: "web"
  },
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
    image: "/images/projects/QRPh-Crypto/qrph_1.jpg",
    demoUrl: "https://www.coins.ph/en-ph?utm_source",
    githubUrl: "https://github.com/tshingen01/crypto-qrpn", // ###
    category: "blockchain"
  },
  {
    id: "poczta-kartkowa",
    title: "Poczta Kartkowa WooCommerce Modernization",
    description:
      "Poczta Kartkowa is a personalized greeting-card e-commerce platform that underwent extensive modernization in 2026 using WordPress and WooCommerce.",
    longDescription:
      "The project focused on stabilizing an aging WooCommerce infrastructure while improving payment reliability, maintainability, and platform performance.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "HTML5", 
      "CSS3", 
      "JavaScript",
      "MySQL",
      "PHP",
      "React",
      "Payment APIs",
      "Caching + Query Optimization",
    ],
    features: [
      "Personalized product ordering",
      "WooCommerce checkout optimization",
      "Payment gateway integrations",
      "Shipping & delivery integrations",
      "Legacy system refactoring",
      "Admin workflow improvements",
      "Responsive storefront",
      "Order automation",
      "Stability monitoring",
      "Platform maintainability upgrades",
    ],
    image: "/images/projects/Poczta-Kartkowa/poczta-kartkowa_1.png",
    demoUrl: "https://pocztakartkowa.pl/",
    category: "web"
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
      "Zustand",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Redis cache",
      "Font Awesome",
      "Elasticsearch",
      "GoLang services",
      "WebSocket streaming",
      "Kafka event streaming",
      "TradingView Charting Library",
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
    image: "/images/projects/Trading/trading_1.jpg",
    demoUrl: "https://www.coins.ph/en-ph?utm_source",
    githubUrl: "https://github.com/tshingen01/portfolio",
    category: "blockchain"
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
    image: "/images/projects/Market-Intel/market_intel_1.jpg",
    demoUrl: "https://nmaroulis.github.io/sibyl/index.html",
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
    githubUrl: "https://github.com/tshingen01/Student-result-analyzer",
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
    githubUrl: "https://github.com/tshingen01/Student-result-analyzer",
    category: "web"
  },
  {
    id: "banking-mobile-app",
    title: "Digital Banking & Mobile Internet Banking Platform",
    description:
      "A modern digital banking platform developed for Philippine banks transitioning from legacy systems into cloud-ready online banking ecosystems.",
    longDescription:
      "The platform supported both desktop and mobile banking experiences with secure financial workflows and enterprise-grade scalability. It featured account management, fund transfers, bill payments, loan applications, and customer support tools. The architecture was designed to integrate with core banking systems while providing a seamless user experience across devices.",
    technologies: [
      "React.js",
      "Express.js",
      "Material UI",
      "Zoom API",
      "TypeScript",
      "Redux",
      "SCSS",
      "WebSocket",
      "Axios"
    ],
    features: [
      "Customer Banking Portal",
      "Mobile Internet Banking",
      "Payment Integrations",
      "Admin Dashboard",
    ],
    image: "/images/projects/Banking/banking_platform_1.jpg",
    demoUrl: "https://exist.com/digital-banking-and-fintech",
    githubUrl: "https://github.com/tshingen01/digital-banking-and-fintech",
    category: "mobile"
  },
  {
    id: "medical-mobile-web",
    title: "Telemedicine & Electronic Medical Records Platform",
    description:
      "A cloud-based telemedicine and EMR platform developed for hospitals and clinics in the Philippines during the rapid digital healthcare adoption period caused by the pandemic.",
    longDescription:
      "The project focused on enabling remote healthcare workflows and centralized medical record access.The platform provided secure video consultations, patient record management, appointment scheduling, and prescription services. It was designed to integrate with existing healthcare systems while ensuring compliance with data privacy regulations and delivering a seamless user experience for both patients and healthcare providers.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "CSS3",
      "Bootstrap",
      "HTML5"
    ],
    features: [
      "Patient Portal",
      "Doctor Dashboard",
      "Hospital Operations",
      "Notifications",
    ],
    image: "/images/projects/Healthcare/healthcare_1.jpg",
    demoUrl: "https://exist.com/healthcare",
    githubUrl: "https://github.com/tshingen01/healthcare",
    category: "mobile"
  },
  {
    id: "enterprise-web-app",
    title: "Enterprise Data Analytics & Executive Dashboard System",
    description:
      "The platform aggregated enterprise data from multiple systems into a single analytics portal. It provided customizable dashboards, real-time reporting, and data visualization tools for executives and business users.",
    longDescription:
      "The system was designed to integrate with various data sources while ensuring security and scalability for large enterprises. It featured role-based access controls, interactive visualizations, and AI-driven insights to help businesses make data-informed decisions. The architecture was built to handle high data volumes while delivering a responsive user experience.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "D3.js",
      "Highcharts",
      "Tailwind CSS"
    ],
    features: [
      "Executive Dashboard",
      "Data Visualization",
      "Enterprise Reporting",
      "User Management",
    ],
    image: "/images/projects/Enterprise/enterprise_1.jpg",
    demoUrl: "https://exist.com/data-solutions",
    githubUrl: "https://github.com/tshingen01/data-solutions",
    category: "web"
  },
  {
    id: "logistics-web-portal",
    title: "Logistics Management Web Portal",
    description:
      "A web portal designed for a logistics company to manage fleets, deliveries, and route optimization. Developed this platform for enterprise clients needing real-time shipment tracking, reporting, and operational dashboards.",
    longDescription:
      "As a Junior Web Developer, I typically handled front-end integration, minor backend scripting, and database query support. The portal featured real-time shipment tracking, route optimization tools, and operational dashboards. It was designed to integrate with GPS tracking systems and provide a seamless user experience for logistics managers and drivers.",
    technologies: [
      "HTML5",
      "JavaScript",
      "PHP",
      "MySQL",
      "CSS3",
      "jQuery",
      "Bootstrap",
      "Git/GitHub",
      "Postman",
    ],
    features: [
      "Shipment tracking dashboard (real-time updates)",
      "Fleet management module",
      "Route optimization visualization",
      "Delivery status notifications",
      "Exportable reports",
      "Admin access with role-based permissions",
    ],
    image: "/images/projects/Logistics/logistics_1.jpg",
    category: "web"
  },
  {
    id: "employee-web-portal",
    title: "Employee Self-Service Portal",
    description:
      "An HR self-service web portal for employees to view payslips, submit leave requests, and track attendance.",
    longDescription:
      "As a junior developer, I  typically worked on front-end pages, form validation, and integration with backend APIs. The portal allowed employees to access their HR information, submit requests, and view company announcements. It was designed to integrate with existing HR systems while providing a user-friendly interface for employees and HR administrators.",
    technologies: [
      "React.js",
      "Material UI",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Git/GitHub",
      "Postman",
    ],
    features: [
      "Employee profile dashboard",
      "Leave request submission and approval workflow",
      "Payslip download portal",
      "Attendance and work schedule tracking",
      "Admin panel for HR staff",
      "Email notifications for leave and payroll updates",
    ],
    image: "/images/projects/Employee/employee_1.png",
    category: "web"
  },
];
