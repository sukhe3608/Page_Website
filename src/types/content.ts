export type IconName =
  | "code"
  | "globe"
  | "smartphone"
  | "cloud"
  | "palette"
  | "shield-check"
  | "git-branch"
  | "bar-chart"
  | "bot"
  | "network"
  | "refresh"
  | "cart"
  | "users"
  | "cpu"
  | "workflow"
  | "database"
  | "heart-pulse"
  | "landmark"
  | "graduation-cap"
  | "factory"
  | "store"
  | "truck"
  | "building"
  | "land-plot"
  | "rocket"
  | "target"
  | "zap"
  | "layers"
  | "compass"
  | "award"
  | "clock"
  | "trending-up"
  | "life-buoy";

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconName;
  features: string[];
  capabilities: string[];
  technologies: string[];
  benefits: string[];
  faqs: Faq[];
  caseStudySlugs: string[];
  order: number;
}

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconName;
  features: string[];
  industries: string[];
  technologies: string[];
  caseStudySlugs: string[];
  order: number;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconName;
  features: string[];
  metrics: { value: string; label: string }[];
  integrations: string[];
  security: string[];
  screenshots: { title: string; description: string; tint: "blue" | "navy" | "violet" | "teal" }[];
  faqs: Faq[];
  caseStudySlugs: string[];
  order: number;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: IconName;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  technologies: string[];
  caseStudySlugs: string[];
  order: number;
}

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  technologies: string[];
  services: string[];
  duration: string;
  year: string;
  tint: "blue" | "navy" | "violet" | "teal";
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  initials: string;
}

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  posted: string;
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export interface Post {
  slug: string;
  title: string;
  category: "Fire Safety" | "Security" | "CCTV & Surveillance" | "Access Control" | "Automation";
  excerpt: string;
  content: PostBlock[];
  date: string;
  readTime: string;
  author: string;
  tint: "blue" | "navy" | "violet" | "teal";
}

export interface LocationInfo {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  marker: [number, number];
}

export interface Partner {
  name: string;
  category: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
