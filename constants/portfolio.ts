import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Server,
  Sparkles,
  TerminalSquare,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Mohammad Alfaz",
  nickname: "Alfu",
  role: "Full-Stack and AI-Focused Software Engineering Student",
  location: "Bengaluru, India",
  email: "alfazfarz24@gmail.com",
  phone: "+91 8867301768",
  github: "https://github.com/alfaz1824",
  linkedin: "https://linkedin.com/in/alfaz1824",
  resume: "/resume.pdf",
  availability: "Seeking Software Engineering and AI Engineering internships",
  headline:
    "I build production-minded web applications, REST APIs, AI integrations, and graph-based systems across frontend, backend, and database layers.",
  summary:
    "Software Engineering student specializing in full-stack and AI-focused development with hands-on work in Python, Java, React, Next.js, TypeScript, FastAPI, Express.js, PostgreSQL, and Supabase. Alfaz has shipped end-to-end projects independently, built REST APIs, modeled relational data, integrated LLM workflows, and won four hackathon awards by turning real-world problems into working products.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "4x", label: "Hackathon award winner" },
  { value: "4", label: "Featured engineering projects" },
  { value: "2", label: "Internship tracks completed" },
  { value: "VTU", label: "Information Science Engineering" },
];

export const strengths = [
  {
    icon: BrainCircuit,
    title: "AI Product Engineering",
    description:
      "Integrates LLM APIs, prompt engineering, and backend logic into practical user-facing tools.",
  },
  {
    icon: Workflow,
    title: "Graph-Based Problem Solving",
    description:
      "Applies DSA, Dijkstra-style pathfinding, OSMnx, and NetworkX to real optimization problems.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Delivery",
    description:
      "Builds responsive UIs, REST APIs, relational schemas, authentication flows, and deployable product slices.",
  },
];

export const education = [
  {
    degree: "B.E. in Information Science Engineering",
    school: "Visvesvaraya Technological University (VTU)",
    period: "2023 - 2027",
    detail: "Bachelor of Engineering in Information Science & Engineering",
  },
  {
    degree: "PCMC Pre-University",
    school: "MGM PU College, Udupi",
    period: "2021 - 2023",
    detail: "Score: 89%",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    skills: ["Next.js", "React", "TypeScript", "Responsive UI", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "REST API Design", "Postman"],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: ["Generative AI", "LLM API Integration", "Prompt Engineering", "AI Workflows"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "DBMS"],
  },
  {
    title: "Data & Graphs",
    icon: TerminalSquare,
    skills: ["NetworkX", "OSMnx", "Pandas", "NumPy", "Power BI"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker Basics", "Linux"],
  },
  {
    title: "Core Strengths",
    icon: Users,
    skills: ["OOP", "DSA", "Multithreading", "Graph Algorithms"],
  },
];

export const experiences = [
  {
    title: "Java Development Intern",
    company: "Shadow Fox",
    period: "2024",
    icon: BriefcaseBusiness,
    bullets: [
      "Built a Bank Account Management System in core Java with account creation, balance tracking, deposits, and withdrawals.",
      "Designed a modular com.bank.core package structure to separate business logic from application entry points and improve maintainability.",
      "Developed an interactive quiz application with JavaScript, HTML, and CSS, including dynamic rendering, real-time scoring, and instant UI updates.",
      "Strengthened Java fundamentals across OOP, exception handling, and collections while translating requirements into working code independently.",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Prodigy InfoTech",
    period: "2024",
    icon: BriefcaseBusiness,
    bullets: [
      "Completed a four-project full-stack development track with independently built and deployed responsive web applications.",
      "Engineered cross-browser UI components from scratch using semantic HTML, CSS best practices, and modern frontend tooling.",
      "Implemented client-side interactivity with vanilla JavaScript, including DOM manipulation, event handling, and form validation.",
      "Managed delivery through Git and GitHub across four repositories with clean milestone-based version control.",
    ],
  },
  {
    title: "Hackathon Builder",
    company: "National and 24-hour competitions",
    period: "2024 - 2026",
    icon: Trophy,
    bullets: [
      "Won awards across national-level hackathons, web development competitions, and 24-hour build challenges.",
      "Converted open-ended problem statements into working prototypes across AI, navigation, academic tooling, and web platforms.",
    ],
  },
];

export const projects = [
  {
    title: "VTU Buddy",
    subtitle: "AI-powered academic platform for VTU students",
    image: "/images/Profile.png",
    repo: "https://github.com/alfaz1824/vtu-buddy",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    overview:
      "An academic platform for VTU engineering students that centralizes previous-year papers, study materials, authentication, and AI-assisted resource discovery.",
    problem:
      "Students often prepare from scattered academic resources, making previous-year papers and semester-wise materials slow to discover.",
    solution:
      "Structured a scalable Next.js App Router codebase with Supabase Auth, resource metadata, and dynamic content retrieval.",
    architecture:
      "Next.js and TypeScript frontend with reusable React components, Supabase APIs, PostgreSQL relational tables, and secure session management.",
    features: [
      "Supabase authentication",
      "Previous-year paper library",
      "Semester-wise study materials",
      "Responsive React UI",
    ],
    challenges:
      "Designing a data model that can organize academic resources cleanly while staying fast and easy for students to browse.",
    lessons:
      "Useful academic software depends on reliable data structure, clear navigation, and quick retrieval more than visual complexity.",
  },
  {
    title: "EV Route Optimiser",
    subtitle: "Slope-aware routing for energy-efficient electric vehicle trips",
    image: "/globe.svg",
    repo: "https://github.com/alfaz1824/ev_optimiser",
    stack: ["Python", "OSMnx", "NetworkX", "Graph Algorithms", "Folium"],
    overview:
      "A Python route optimization engine that models real roads as weighted graphs and recommends EV routes with energy-aware pathfinding.",
    problem:
      "Shortest routes are not always the most efficient for EVs when road structure and estimated energy consumption are considered.",
    solution:
      "Implemented Dijkstra-based routing over OSMnx and NetworkX graphs, balancing travel distance against estimated energy use.",
    architecture:
      "OSMnx extracts road networks, NetworkX processes weighted graph paths, and a local cache stores processed map data for repeated queries.",
    features: [
      "Real-world road network analysis",
      "Energy-aware pathfinding",
      "Dijkstra-based routing",
      "Local graph caching",
    ],
    challenges:
      "Creating route weights that capture practical EV energy behavior without making the system too slow for repeated use.",
    lessons:
      "Graph algorithms become much more useful when the edge weights reflect the real-world outcome being optimized.",
  },
  {
    title: "JeevaSetu AI",
    subtitle: "Full-stack AI platform with a decoupled client-server architecture",
    image: "/window.svg",
    repo: "https://github.com/alfaz1824/JeevaSetu-AI",
    stack: ["JavaScript", "Node.js", "Express.js", "REST APIs", "AI Integration"],
    overview:
      "A full-stack AI-powered platform that separates frontend interaction from backend AI processing for cleaner development and future scaling.",
    problem:
      "AI features can become difficult to maintain when frontend flows, API routing, and backend processing logic are tightly coupled.",
    solution:
      "Separated the JavaScript client from an Express.js backend and exposed RESTful endpoints for context-aware AI responses.",
    architecture:
      "Client and server modules communicate through REST APIs, with backend routes managing AI processing logic independently from the UI.",
    features: [
      "Decoupled client-server codebase",
      "Express REST endpoints",
      "AI response routing",
      "Scalable module structure",
    ],
    challenges:
      "Designing the backend boundary so AI processing stays independent while still feeling immediate in the frontend.",
    lessons:
      "A clean API boundary makes AI-powered products easier to test, deploy, and evolve.",
  },
  {
    title: "NirbhayaPath",
    subtitle: "AI-driven safety navigation platform for real-time route decisions",
    image: "/globe.svg",
    repo: "https://github.com/alfaz1824/NirbhayaPath",
    stack: ["React", "Vite", "Node.js", "Mapping APIs", "Route Logic"],
    overview:
      "A safety navigation platform designed to help users identify safer routes in real time through interactive mapping and risk-aware routing concepts.",
    problem:
      "Traditional route tools optimize for speed or distance, but safety-focused travel needs route context and risk signals.",
    solution:
      "Built a React and Vite frontend with a dedicated saferoute-server backend for route computation and safety-related logic.",
    architecture:
      "A Vite client handles the interactive map experience while a Node.js backend service manages route computation separately.",
    features: [
      "Interactive mapping",
      "Dedicated saferoute server",
      "Risk-aware route concepts",
      "Fast Vite frontend",
    ],
    challenges:
      "Separating route computation from the UI while keeping the navigation experience understandable and responsive.",
    lessons:
      "Navigation tools need more than pathfinding; they need context that matches the user's actual decision criteria.",
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "Runner-Up",
    event: "National Level Hackathon, KNSIT",
    year: "2026",
    detail:
      "Secured runner-up position at Tech Takshak, a national-level tech fest organized by KNSIT.",
  },
  {
    icon: Award,
    title: "Best Project Award",
    event: "Full Stack Face-Off",
    year: "2026",
    detail:
      "Won Best Project and a Rs. 5,000 cash prize in the Full Stack Face Off web development competition conducted by HKBKCE.",
  },
  {
    icon: Sparkles,
    title: "Future Innovation Excellence Award",
    event: "Aavishkar Pravah 2.0",
    year: "2026",
    detail:
      "Recognized at a national-level hackathon organized by Brainovisions in collaboration with HKBKCE.",
  },
  {
    icon: Users,
    title: "Best Student with a Vision",
    event: "Brainovision 24-Hour Hackathon",
    year: "2024",
    detail:
      "Built an agri-commerce platform helping farmers sell directly to consumers and target 15-20% better margins.",
  },
];

export const certifications = [
  "Microsoft Power BI",
  "Generative AI",
  "IoT & its Applications",
  "Advanced Java",
  "Python Libraries for Data Science",
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", href: "#contact", icon: MapPin },
];
