import type { LocationInfo, Partner, Stat, ProcessStep, Faq } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — addresses, phone numbers, partner names and client names are placeholders.
 * Replace with real data before launch.
 */
export const clients: string[] = [
  "Acme Corp",
  "Globex Inc",
  "Initech",
  "Umbrella Co",
  "Stark Industries",
  "Wayne Enterprises",
  "Hooli",
  "Pied Piper",
];
export const locations: LocationInfo[] = [
  {
    city: "Austin",
    country: "USA",
    address: "100 Innovation Drive, Suite 400, Austin, TX 78701",
    phone: "+1 (555) 000-0000",
    email: "hello@novacore.example.com",
    hours: "Mon – Fri, 9:00 – 18:00 (CT)",
    marker: [30.27, -97.74],
  },
  {
    city: "London",
    country: "UK",
    address: "50 Aldgate High Street, London EC3N 1AL",
    phone: "+44 (0) 20 0000 0000",
    email: "uk@novacore.example.com",
    hours: "Mon – Fri, 9:00 – 18:00 (GMT)",
    marker: [51.51, -0.07],
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "1 Raffles Place, #20-00, Singapore 048616",
    phone: "+65 0000 0000",
    email: "apac@novacore.example.com",
    hours: "Mon – Fri, 9:00 – 18:00 (SGT)",
    marker: [1.28, 103.85],
  },
];

export const partners: Partner[] = [
  { name: "Partner One", category: "Technology" },
  { name: "Partner Two", category: "Cloud" },
  { name: "Partner Three", category: "Platform" },
  { name: "Partner Four", category: "Technology" },
  { name: "Partner Five", category: "Consulting" },
  { name: "Partner Six", category: "Cloud" },
  { name: "Partner Seven", category: "Security" },
  { name: "Partner Eight", category: "Technology" },
];

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Clients served" },
  { value: 50, suffix: "+", label: "Professionals on the team" },
];

export const processSteps: ProcessStep[] = [
  { title: "Discovery", description: "We map your goals, constraints and success metrics in collaborative workshops." },
  { title: "Strategy", description: "We define scope, architecture and a roadmap with clear priorities and milestones." },
  { title: "Design", description: "Interfaces, flows and systems are designed, prototyped and validated with users." },
  { title: "Development", description: "Cross-functional teams build in two-week sprints with weekly demos and automated quality." },
  { title: "Testing", description: "Automated and exploratory testing verifies every release before it reaches users." },
  { title: "Deployment", description: "Automated pipelines ship features safely, with monitoring and instant rollback." },
  { title: "Support", description: "We stay engaged: monitoring, iteration and continuous improvement as your product grows." },
];

export const generalFaqs: Faq[] = [
  {
    q: "How does NovaCore engage with clients?",
    a: "We work as a dedicated partner — fixed-scope projects, monthly retainers or embedded teams. Every engagement starts with discovery to define goals, scope and success metrics before any commitment.",
  },
  {
    q: "What does a typical project timeline look like?",
    a: "Most MVP engagements run 8–16 weeks depending on scope. We deliver in two-week increments so you see working software early and can steer priorities as you learn.",
  },
  {
    q: "How do you price projects?",
    a: "We use a mix of fixed-scope pricing for well-defined projects and time-and-materials for ongoing partnerships. You always know what you're paying for, and estimates are reviewed transparently.",
  },
  {
    q: "Can NovaCore work with our existing team?",
    a: "Yes. We regularly embed with in-house teams, augment capacity or take ownership of specific platforms — always with clear boundaries, documentation and knowledge transfer.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. All code, designs and documentation produced for your project are delivered and owned by you. No lock-in, no licensing surprises.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across healthcare, fintech, education, manufacturing, retail, logistics, real estate, government and e-commerce — with depth in regulated, data-heavy sectors.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Security is designed in from day one: encryption, access control, audit trails and compliance reviews for SOC 2, HIPAA, GDPR and PCI-DSS as your context requires.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Most engagements continue with a support retainer covering monitoring, maintenance, upgrades and iteration. You're never left with a handover and a handshake.",
  },
  {
    q: "Can you take over an existing project from another vendor?",
    a: "We do this regularly — codebase audits, documentation review and a stabilization period before new feature work begins. We're transparent about what we find.",
  },
  {
    q: "How do you keep projects on schedule and budget?",
    a: "Transparent reporting, fixed cadence demos and early risk surfacing. When scope changes, we show the impact on timeline and budget before anything moves.",
  },
  {
    q: "What does your development process look like?",
    a: "Two-week sprints with weekly demos, automated testing, continuous deployment and honest progress reporting. You always know where things stand.",
  },
  {
    q: "How do I get started?",
    a: "Book a consultation or request a quote. We'll respond within one business day and schedule a discovery conversation to understand your goals — no obligation.",
  },
];
