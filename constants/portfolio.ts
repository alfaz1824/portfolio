import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
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
  role: "Full-Stack Engineer and AI Builder",
  location: "Bangalore, India",
  email: "alfazafraz24@gmail.com",
  phone: "+91 8867301768",
  github: "https://github.com/alfaz1824",
  linkedin: "https://linkedin.com/in/alfaz1824",
  resume: "/resume.pdf",
  availability: "Open to Software Engineering and Data Science internships",
  headline:
    "I build AI-powered products, data-rich systems, and full-stack experiences that move from idea to shipped prototype fast.",
  summary:
    "Third-year Information Science Engineering student at HKBKCE with hands-on work across full-stack development, data analysis, and ML/AI tooling. I have won four hackathon awards across 2024-2026, including national-level recognitions and a Best Project cash prize, by turning ambiguous problems into working products under pressure.",
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
  { value: "2", label: "National-level recognitions" },
  { value: "2027", label: "B.E. ISE expected graduation" },
  { value: "7.8", label: "Current CGPA" },
];

export const strengths = [
  {
    icon: BrainCircuit,
    title: "AI-First Product Thinking",
    description:
      "Comfortable combining LLM APIs, prompt engineering, and practical workflows into useful student and business tools.",
  },
  {
    icon: Workflow,
    title: "Algorithmic Problem Solving",
    description:
      "Applies graph algorithms, weighted routing, and data structures to solve real optimization problems.",
  },
  {
    icon: Layers3,
    title: "End-to-End Delivery",
    description:
      "Builds responsive interfaces, integrates APIs, designs data models, and ships under tight deadlines.",
  },
];

export const education = [
  {
    degree: "B.E. in Information Science Engineering",
    school: "HKBK College of Engineering, Bangalore",
    period: "2023 - 2027",
    detail: "CGPA: 7.8 / 10",
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
    skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    skills: ["Next.js", "React", "TypeScript", "Responsive UI", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "Socket Programming", "Exception Handling"],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: ["Generative AI", "Prompt Engineering", "LLM APIs", "ML Tooling"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Supabase", "PostgreSQL", "DBMS"],
  },
  {
    title: "Data & BI",
    icon: TerminalSquare,
    skills: ["Power BI", "Tableau", "MS Excel", "Pandas"],
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "JUnit", "Unit Testing"],
  },
  {
    title: "Core Strengths",
    icon: Users,
    skills: ["OOP", "DSA", "Multithreading", "Graph Algorithms"],
  },
];

export const experiences = [
  {
    title: "Full Stack Web Development",
    company: "Prodigy Infotech",
    period: "2026",
    icon: BriefcaseBusiness,
    bullets: [
      "Building production-minded web experiences across frontend and backend workflows.",
      "Strengthening practical delivery habits around responsive UI, API integration, and clean code.",
    ],
  },
  {
    title: "Java Development Intern",
    company: "ShadowFox",
    period: "2024",
    icon: BriefcaseBusiness,
    bullets: [
      "Applied Java fundamentals, OOP, exception handling, and testing practices in internship tasks.",
      "Deepened foundation in backend reasoning, structured programming, and maintainable implementation.",
    ],
  },
  {
    title: "Hackathon Builder",
    company: "National and 24-hour competitions",
    period: "2024 - 2026",
    icon: Trophy,
    bullets: [
      "Led fast product discovery, technical execution, and demo storytelling across award-winning builds.",
      "Converted open-ended problem statements into working prototypes with clear user value.",
    ],
  },
];

export const projects = [
  {
    title: "VTU Buddy",
    subtitle: "AI-powered academic platform for VTU students",
    image: "/images/Profile.png",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    overview:
      "A student platform that turns academic chaos into a searchable, AI-assisted resource hub.",
    problem:
      "VTU students often jump between scattered study materials, previous-year papers, and disconnected tools while preparing for exams.",
    solution:
      "Centralized materials, question papers, AI assistance, and resource management behind a responsive web interface backed by Supabase.",
    architecture:
      "Next.js frontend with typed React components, Supabase APIs for storage and retrieval, and PostgreSQL as the structured data layer.",
    features: [
      "AI study assistance",
      "Previous-year question paper access",
      "Secure resource management",
      "Responsive student-first UI",
    ],
    challenges:
      "Balancing a clean student experience with reliable resource organization and backend integration.",
    lessons:
      "Great academic tools need trust, speed, and simple retrieval more than visual complexity.",
  },
  {
    title: "Energy-Aware EV Route Optimizer",
    subtitle: "Slope-aware routing for energy-efficient electric vehicle trips",
    image: "/globe.svg",
    stack: ["Python", "OSMnx", "NetworkX", "Graph Algorithms", "Folium"],
    overview:
      "A routing engine that evaluates real roads and elevation-aware energy models instead of optimizing only for distance.",
    problem:
      "Shortest paths are not always energy-efficient for EVs, especially when elevation changes affect consumption.",
    solution:
      "Built weighted graph routing with elevation APIs and custom energy-consumption models to recommend smarter routes.",
    architecture:
      "OSMnx road network extraction, NetworkX graph processing, weighted shortest-path algorithms, and Folium map visualization.",
    features: [
      "Real-world road network analysis",
      "Slope-aware energy modeling",
      "Weighted route optimization",
      "Interactive map output",
    ],
    challenges:
      "Designing meaningful edge weights that reflect both route geometry and energy behavior.",
    lessons:
      "Applied graph theory becomes powerful when the weight function models the real world honestly.",
  },
];

export const achievements = [
  {
    icon: Trophy,
    title: "Runner-Up",
    event: "National Level Hackathon, KNSIT",
    year: "2026",
    detail:
      "Secured 2nd place by delivering a functional prototype under strict time constraints.",
  },
  {
    icon: Award,
    title: "Best Project Award",
    event: "Full Stack Face-Off",
    year: "2026",
    detail:
      "Won Best Project with a full-stack application judged on code quality, UI/UX, and feasibility; awarded Rs. 5,000.",
  },
  {
    icon: Sparkles,
    title: "Future Innovation Excellence Award",
    event: "National Level Hackathon",
    year: "2026",
    detail:
      "Recognized for forward-thinking design and scalable technical implementation.",
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
