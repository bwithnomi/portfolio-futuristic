export const personalInfo = {
  name: "Noman Malik",
  role: "Full-stack Software Engineer & Architect",
  email: "abidnoman888@gmail.com",
  phone: "+923325671932",
  location: "Lahore, Pakistan",
  github: "https://github.com/bwithnomi",
  linkedin: "https://linkedin.com/in/bwithnomi",
  summary: "Full-stack Software Engineer with 6+ years' experience building scalable web and blockchain applications using Node.js, React, NestJS, and Solidity and specialising in microservice architecture, cloud-native deployments (AWS/Docker/Kubernetes), and Web3 ecosystems. Passionate about delivering secure, performant, and user-centric solutions.",
};

export const stats = {
  experience: "6+",
  projects: "50+",
  clients: "30+",
  technologies: "20+",
};

export const experience = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    company: "Unduit",
    period: "11/2024 – present",
    location: "Lahore, Pakistan",
    achievements: [
      "Architected RESTful APIs, background workers, and service-to-service communication with best practices in security, performance, and reliability",
      "Optimized application performance through efficient database queries, caching strategies, queue systems, and service optimizations",
      "Collaborated on long-term architectural planning including microservices migration, refactoring legacy systems, and improving code quality",
      "Participated in sprint planning, estimations, and technical roadmap discussions, ensuring timely delivery of complex backend features",
      "Advocated for automation, performance testing, and continuous improvements in both development practices and system design",
    ],
    technologies: ["Node.js", "Docker", "MongoDB", "Laravel", "SQL"],
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Developer Studio",
    period: "07/2022 – 10/2024",
    location: "Lahore, Pakistan",
    achievements: [
      "Migrated monolithic architecture to microservices using Node.js and Docker, reducing deployment time by 60% and improving scalability",
      "Refactored legacy codebases and implemented Redis caching, resulting in 30% faster API responses",
      "Designed secure auth flows using OAuth2.0 and encrypted sensitive data, reducing security incident risk",
      "Reduced AWS costs by 20% by optimising compute usage and database queries",
      "Led internal security audits and code reviews, identifying vulnerabilities and enforcing industry best practices",
    ],
    technologies: ["Node.js", "Docker", "Redis", "Vue.js", "Blockchain"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "TecHive Solutions",
    period: "01/2022 – 07/2022",
    location: "Lahore, Pakistan",
    achievements: [
      "Built and maintained custom CMS and e-commerce platforms using Laravel (backend) and Vue.js (frontend), tailored to various client domains",
      "Integrated multiple payment gateways (Stripe, PayPal, local options) and third-party inventory systems to streamline client transactions",
      "Developed responsive, SPA-style UIs using Vue.js, enhancing usability and improving user engagement by 25% based on analytics",
      "Conducted code reviews and performance tuning across multiple client projects, resulting in 20% faster page load times on average",
      "Actively collaborated with clients and designers to translate business needs into scalable technical features",
    ],
    technologies: ["Laravel", "Vue.js", "Stripe", "PayPal", "MySQL"],
  },
  {
    id: 4,
    title: "Full Stack PHP Developer",
    company: "WTechSols",
    period: "12/2019 – 12/2021",
    location: "Lahore, Pakistan",
    achievements: [
      "Engineered full-stack web applications using PHP and Laravel, with dynamic user-facing features and secure backends",
      "Implemented efficient SQL queries and caching mechanisms (Redis), improving server-side load performance by 30%",
      "Built and integrated custom plugins and payment gateways to support diverse business logic and regional payment flows",
    ],
    technologies: ["PHP", "Laravel", "Redis", "MySQL", "JavaScript"],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Pet Store",
    description: "Created a multi-vendor platform for buying/selling pets, booking trainers, and purchasing pet supplies.",
    longDescription: "Large-scale multi-vendor marketplace with 12,000+ active listings and 6,858+ registered users. Features include comprehensive pet categories, veterinary services, event management, real-time chat, payment gateway integration, and featured ad monetization system.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    category: "fullstack",
    highlights: [
      "Multi-vendor marketplace architecture supporting 12,000+ active listings",
      "Implemented payment gateway integration and featured ad monetization",
      "Real-time chat system and notification management",
      "Comprehensive admin panel managing users, orders, and product listings",
      "Multi-category support: Pets, Services, Events, Veterinarians, Bakra Mandi",
    ],
    image: "/projects/pet-store.svg",
    liveUrl: "https://titanspet.pk/",
    githubUrl: null,
  },
  {
    id: 2,
    title: "Web3 Audio dApp",
    description: "Built a Spotify-like audio streaming dApp where artists retain full ownership and control of their content.",
    longDescription: "Decentralized audio streaming platform leveraging Solana blockchain for content ownership, with integrated NFT minting for audio files and Rust-based smart contracts. Features include wallet-based artist discovery, playlist creation, and library management.",
    technologies: ["Solana", "Rust", "React"],
    category: "web3",
    highlights: [
      "Integrated Solana blockchain for decentralised data storage and tokenised access",
      "Implemented Rust-based smart contracts and audio file NFT minting",
      "Wallet-based artist search and discovery system",
      "User library and playlist management",
    ],
    image: "/projects/audio-dapp.svg",
    liveUrl: "https://solify-dev.vercel.app/",
    githubUrl: "https://github.com/bwithnomi/solify",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Developed a HIPAA-compliant platform for managing patient records, appointments, and prescriptions.",
    longDescription: "Enterprise healthcare platform with secure login, real-time notifications, and role-based access control (admin, doctor, patient) for comprehensive patient data management.",
    technologies: ["Laravel", "Vue.js", "PostgreSQL"],
    category: "fullstack",
    highlights: [
      "Implemented secure login, real-time notifications, and role-based access (admin, doctor, patient)",
      "Integrated PostgreSQL for structured data storage and reporting",
    ],
    image: "/projects/hospital.svg",
  },
  {
    id: 4,
    title: "Lawyer Marketplace App",
    description: "Created a platform for users to hire lawyers based on category, ratings, and availability.",
    longDescription: "Comprehensive marketplace connecting users with legal professionals, featuring appointment scheduling, case tracking, and real-time chat functionality.",
    technologies: ["Node.js", "Vue.js", "MongoDB"],
    category: "fullstack",
    highlights: [
      "Developed appointment scheduling, case tracking, and real-time chat functionality",
      "Used MongoDB for flexible case data storage and retrieval",
    ],
    image: "/projects/lawyer-app.svg",
    liveUrl: null,
    githubUrl: "https://github.com/bwithnomi/laywer-app-frontend",
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description: "Developed an NFT trading platform with fiat and crypto purchase support.",
    longDescription: "Decentralized NFT marketplace with MetaMask wallet integration, Ethereum smart contracts, and dynamic NFT listing features supporting both traditional and cryptocurrency payments. Features include collection browsing, floor price tracking, trending collections, and secure transaction handling.",
    technologies: ["Laravel", "Vue.js", "MongoDB", "Ethereum"],
    category: "web3",
    highlights: [
      "Integrated MetaMask wallet, Ethereum smart contracts, and dynamic NFT listing features",
      "Implemented secure APIs for minting, listing, and purchasing NFTs",
      "Collection discovery and floor price tracking system",
      "Support for multiple payment methods including fiat and crypto",
    ],
    image: "/projects/nft-marketplace.svg",
    liveUrl: "https://opensea.io/",
    githubUrl: null,
  },
  {
    id: 6,
    title: "Decentralized KYC System",
    description: "Built a blockchain-based KYC identity system issuing unique identity tokens to users.",
    longDescription: "Privacy-focused KYC platform leveraging Ethereum blockchain, with smart contracts enabling selective disclosure of user data and zero-knowledge proof patterns.",
    technologies: ["Ethereum", "Node.js", "Vue.js", "MongoDB"],
    category: "web3",
    highlights: [
      "Developed smart contracts to enable selective disclosure of user data",
      "Ensured data privacy using encryption and zero-knowledge proof patterns",
    ],
    image: "/projects/kyc-system.svg",
  },
  {
    id: 7,
    title: "HRM Platform",
    description: "Engineered a web platform for HR to manage employee data, payroll, and attendance.",
    longDescription: "Enterprise HR management system with role-based access, CRUD APIs, and Excel export capabilities for comprehensive employee data, payroll, and attendance management.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    category: "fullstack",
    highlights: [
      "Created dashboards for HR/admins and integrated Excel exports and reports",
      "Implemented authentication, role-based access, and CRUD APIs",
    ],
    image: "/projects/hrm.svg",
  },
  {
    id: 8,
    title: "Multi-Chain Crypto Wallet",
    description: "Built a multi-chain crypto wallet supporting transactions on Polygon and Solana.",
    longDescription: "Secure cryptocurrency wallet with Web3.js integration, supporting multiple blockchain networks and featuring transaction history tracking with QR scanner for seamless asset management.",
    technologies: ["Vue.js", "Node.js", "Web3.js"],
    category: "web3",
    highlights: [
      "Developed UI for sending/receiving assets and integrated Web3.js for wallet connections",
      "Implemented transaction history, QR scanner, and basic portfolio tracking",
    ],
    image: "/projects/crypto-wallet.svg",
  },
];

export const skills = {
  languages: [
    { name: "TypeScript", level: 90, category: "language" },
    { name: "Node.js", level: 95, category: "language" },
    { name: "Nest.js", level: 85, category: "language" },
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "Rust", level: 70, category: "language" },
    { name: "MongoDB", level: 85, category: "database" },
    { name: "Git", level: 90, category: "tool" },
    { name: "PHP/Laravel", level: 90, category: "language" },
    { name: "Vue.js", level: 90, category: "framework" },
    { name: "React.js", level: 85, category: "framework" },
    { name: "Solidity", level: 75, category: "language" },
  ],
  infrastructure: [
    { name: "Microservices", level: 90, category: "architecture" },
    { name: "System Design", level: 85, category: "architecture" },
    { name: "Redis", level: 85, category: "database" },
    { name: "Kafka", level: 75, category: "tool" },
    { name: "Solana/Ethereum", level: 80, category: "blockchain" },
    { name: "Docker", level: 85, category: "devops" },
    { name: "AWS Cloud Computing", level: 80, category: "devops" },
  ],
};

export const certifications = [
  {
    id: 1,
    title: "Microservices With Node.js and React.js",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-b5f17fed-6d1c-46a3-9393-03f79676452b/",
  },
  {
    id: 2,
    title: "AWS Certified Developer",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-ba76a561-936b-4aa3-bef5-2426a53b5fd7/",
  },
  {
    id: 3,
    title: "Systems Design",
    issuer: "Udemy",
    year: "2023",
    link: "https://www.udemy.com/certificate/UC-3c6c740a-a84f-4f08-b32f-ab950c38bc76/",
  },
  {
    id: 4,
    title: "Meta Frontend Developer",
    issuer: "Coursera",
    year: "2023",
    link: "https://coursera.org/share/2bc7de3233c4fa651dd63c92de26a35a",
  },
  {
    id: 5,
    title: "IBM Containerization with Docker and K8",
    issuer: "Coursera",
    year: "2023",
    link: "https://coursera.org/share/edb1c78c9e9a6ea8a592c1794392315d",
  },
];

export const education = {
  degree: "BSCS",
  institution: "GCG",
  location: "Lahore, Pakistan",
  period: "09/2017 – 08/2021",
};

export type Project = typeof projects[0];
export type Experience = typeof experience[0];
export type Skill = typeof skills.languages[0];
export type Certification = typeof certifications[0];

