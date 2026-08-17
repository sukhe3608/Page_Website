import type { CaseStudy, Testimonial, TeamMember, Job } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — client names, results and testimonials are placeholders.
 * Replace with real, verified case studies and quotes before launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "platform-modernization",
    client: "Enterprise Logistics Group",
    industry: "Logistics",
    title: "Modernizing a 15-year-old platform without stopping the business",
    summary:
      "A legacy order platform was rebuilt service-by-service — cutting processing time while the business kept running on the old system in parallel.",
    description:
      "Fifteen years of features had made the platform slow, fragile and expensive to change. Every release was an event, onboarding new developers took months, and seasonal peaks pushed the system to its limits.\n\nThe program was delivered in parallel: the new platform took over one service at a time, with feature parity gates and automated regression suites running against both systems at once.",
    challenge:
      "The existing platform processed thousands of daily orders but couldn't scale, integrate or evolve. Rewrites had been attempted twice before and both were abandoned. Leadership needed modernization without any window of downtime.",
    solution:
      "We executed a strangler-fig migration: new modular services alongside the legacy monolith, with a shared API gateway and feature flags. A regression harness compared old and new behavior on every release, giving the business confidence to cut over one domain at a time.",
    results: [
      { value: "-68%", label: "processing time" },
      { value: "+32%", label: "release frequency" },
      { value: "0", label: "hours of downtime" },
      { value: "3x", label: "faster onboarding" },
    ],
    technologies: ["TypeScript", "Node.js", "Kubernetes", "PostgreSQL", "Kafka", "Terraform"],
    services: ["Software Development", "Cloud Solutions", "DevOps & CI/CD"],
    duration: "14 months",
    year: "2025",
    tint: "blue",
  },
  {
    slug: "ecommerce-storefront",
    client: "Home Goods Retailer",
    industry: "Retail",
    title: "A headless storefront that turned speed into revenue",
    summary:
      "Rebuilt the storefront on a headless stack — page loads dropped under a second and mobile conversion climbed steadily.",
    description:
      "The retailer's monolith storefront was slow on mobile and couldn't support the merchandising flexibility the team needed. A complete rebuild was planned around a headless architecture with a dedicated performance budget: every template had to ship on sub-second mobile loads.\n\nThe new frontend delivered a dramatic mobile experience improvement, and the merchandising team gained control of their storefront without engineering tickets.",
    challenge:
      "Mobile page loads above 5 seconds, rigid templates and a checkout with a 40% abandonment rate. The team wanted full merchandising control and a foundation for new markets.",
    solution:
      "Headless storefront with a CDN-first rendering strategy, streaming SSR and a design system mapped to merchandising blocks. Checkout was rebuilt around a single-page flow with saved payment methods and order tracking.",
    results: [
      { value: "+27%", label: "mobile conversion" },
      { value: "0.9s", label: "median page load" },
      { value: "-31%", label: "checkout abandonment" },
      { value: "4x", label: "faster content launches" },
    ],
    technologies: ["Next.js", "React", "Commercetools", "Stripe", "Algolia", "Vercel"],
    services: ["Web Development", "UI/UX Design", "QA & Testing"],
    duration: "7 months",
    year: "2025",
    tint: "violet",
  },
  {
    slug: "retail-loyalty-app",
    client: "Fashion & Lifestyle Brand",
    industry: "Retail",
    title: "A loyalty app that doubled engagement in six months",
    summary:
      "A cross-platform loyalty app with personalized offers lifted app engagement and repeat purchase rate within two quarters.",
    description:
      "The brand's loyalty program lived in an email list. We designed and shipped a native-feeling cross-platform app: digital card, personalized offers, points-to-rewards flows and in-app purchase tracking.\n\nPersonalization was the core bet — every offer was driven by purchase behavior, and the product team could run campaigns without engineering involvement.",
    challenge:
      "Loyalty activity was declining, and the program offered no personalized experience. The brand needed a mobile experience fast, across both platforms, without a large in-house mobile team.",
    solution:
      "React Native app with a lightweight recommendation engine, real-time offer management console and deep analytics. Launch campaigns, push journeys and personalized reward tiers were all configurable by the marketing team.",
    results: [
      { value: "+64%", label: "app engagement" },
      { value: "+22%", label: "repeat purchase rate" },
      { value: "4.8", label: "app store rating" },
      { value: "40%", label: "push opt-in rate" },
    ],
    technologies: ["React Native", "Expo", "GraphQL", "Segment", "Firebase", "Kubernetes"],
    services: ["Mobile Development", "UI/UX Design", "AI Solutions"],
    duration: "6 months",
    year: "2025",
    tint: "navy",
  },
  {
    slug: "cloud-migration-scale",
    client: "Regional Financial Services Provider",
    industry: "FinTech",
    title: "Migrating to the cloud with zero downtime and 30% lower costs",
    summary:
      "A regulated financial platform moved to cloud-native infrastructure in waves — no service interruption, lower spend and faster releases.",
    description:
      "The provider ran everything on-premises: hundreds of servers, manual deployments and a six-week release cycle. A compliance-first cloud migration moved workloads in waves, with the platform team learning the new operating model alongside the migration.\n\nCost transparency improved dramatically, and the release cycle dropped from weeks to days while passing every security review.",
    challenge:
      "Regulatory requirements, legacy dependencies and a zero-downtime mandate made a big-bang migration impossible. The provider also needed to prove compliance evidence in the new environment.",
    solution:
      "Wave-based migration with Terraform-managed infrastructure, a hardened landing zone built to regulatory standards, and automated compliance checks. Each wave carried its own regression and rollback plan.",
    results: [
      { value: "-30%", label: "infrastructure costs" },
      { value: "0", label: "minutes of downtime" },
      { value: "6x", label: "faster release cycle" },
      { value: "100%", label: "compliance checks automated" },
    ],
    technologies: ["AWS", "Terraform", "Kubernetes", "Vault", "Datadog", "GitOps"],
    services: ["Cloud Solutions", "DevOps & CI/CD", "Cybersecurity"],
    duration: "10 months",
    year: "2024",
    tint: "teal",
  },
  {
    slug: "field-service-platform",
    client: "National Service Provider",
    industry: "Manufacturing",
    title: "Field operations, digitized from dispatch to invoice",
    summary:
      "A field-service platform replaced paper workflows — dispatching, diagnostics and invoicing in one mobile-first system.",
    description:
      "Technicians worked with paper job sheets, dispatchers juggled spreadsheets and invoices took weeks to close. We built a mobile-first platform: smart dispatch, guided diagnostics, parts lookup, time capture and instant invoicing.\n\nWithin two quarters the platform processed the majority of jobs end-to-end, and the data fed service reliability analytics.",
    challenge:
      "Invisible field operations, slow invoicing cycles and no feedback loop between service data and product quality. Technicians resisted the previous tablet systems as too slow and complex.",
    solution:
      "Offline-first React Native app with guided workflows, a dispatch engine with skills-based routing, and API integrations to ERP for parts and invoicing. Adoption was designed in: every screen optimizes for gloves and one hand.",
    results: [
      { value: "-45%", label: "invoicing time" },
      { value: "+18%", label: "jobs completed per tech" },
      { value: "96%", label: "tech adoption rate" },
      { value: "-22%", label: "travel mileage" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Mapbox", "ERP APIs", "AWS"],
    services: ["Mobile Development", "Software Development", "Cloud Solutions"],
    duration: "9 months",
    year: "2024",
    tint: "blue",
  },
  {
    slug: "ai-document-processing",
    client: "Insurance Carrier",
    industry: "Insurance",
    title: "AI that reads the paperwork so teams don't have to",
    summary:
      "An AI document pipeline automates claims intake — classifying, extracting and routing documents in seconds.",
    description:
      "Claims teams spent most of their day opening attachments, reading them and typing data into a system. An AI pipeline now classifies documents, extracts structured data and routes work automatically.\n\nUnclear documents are routed to humans with the AI's best-guess prefilled — accuracy improved month over month as the model learned from corrections.",
    challenge:
      "Thousands of documents per week across dozens of formats, high manual entry error rates and long first-response times on claims.",
    solution:
      "A document intelligence pipeline: OCR, layout analysis, LLM-based classification and extraction, with confidence-scored human review and continuous retraining from corrections.",
    results: [
      { value: "-76%", label: "processing time per claim" },
      { value: "+38%", label: "claims handled per team" },
      { value: "99.2%", label: "extraction accuracy" },
      { value: "12k+", label: "documents automated weekly" },
    ],
    technologies: ["Python", "LangChain", "OpenAI", "PyTorch", "MLflow", "Kubernetes"],
    services: ["AI Solutions", "Software Development", "QA & Testing"],
    duration: "5 months",
    year: "2025",
    tint: "violet",
  },
];

export const caseStudiesBySlug = Object.fromEntries(caseStudies.map((c) => [c.slug, c])) as Record<string, CaseStudy>;

export const testimonials: Testimonial[] = [
  {
    name: "[Client Name]",
    role: "VP of Engineering",
    company: "[Company]",
    quote:
      "NovaCore became a genuine extension of our team. The delivery rhythm was transparent, the quality bar was high, and they pushed back with good judgment when it mattered.",
    rating: 5,
    initials: "CN",
  },
  {
    name: "[Client Name]",
    role: "Chief Digital Officer",
    company: "[Company]",
    quote:
      "They took a platform we were afraid to touch and made it the most reliable part of our stack — with zero downtime during the entire migration.",
    rating: 5,
    initials: "CD",
  },
  {
    name: "[Client Name]",
    role: "Head of Product",
    company: "[Company]",
    quote:
      "The design discipline stood out. Every screen felt considered, every interaction intentional — and users noticed immediately after launch.",
    rating: 5,
    initials: "HP",
  },
  {
    name: "[Client Name]",
    role: "CTO",
    company: "[Company]",
    quote:
      "AI projects usually stall in our industry. This one shipped in five months with measurable ROI and a retraining loop our team actually understands.",
    rating: 5,
    initials: "CT",
  },
  {
    name: "[Client Name]",
    role: "Operations Director",
    company: "[Company]",
    quote:
      "Our field teams adopted the platform within weeks. That never happens — unless the software is genuinely easier than the paper it replaced.",
    rating: 5,
    initials: "OD",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "[Executive Name]", role: "Chief Executive Officer", department: "Leadership", bio: "Leads vision, strategy and partnerships. Placeholder bio — replace before launch.", initials: "EN" },
  { name: "[Executive Name]", role: "Chief Technology Officer", department: "Leadership", bio: "Owns architecture, engineering and delivery quality. Placeholder bio — replace before launch.", initials: "CT" },
  { name: "[Executive Name]", role: "Chief Operating Officer", department: "Leadership", bio: "Runs delivery operations and client success. Placeholder bio — replace before launch.", initials: "CO" },
  { name: "[Executive Name]", role: "Chief Revenue Officer", department: "Leadership", bio: "Leads commercial growth and partnerships. Placeholder bio — replace before launch.", initials: "CR" },
  { name: "[Team Member]", role: "Principal Engineer", department: "Engineering", bio: "Deep expertise in distributed systems. Placeholder bio — replace before launch.", initials: "TM" },
  { name: "[Team Member]", role: "Senior Product Designer", department: "Design", bio: "Design systems and research-driven UX. Placeholder bio — replace before launch.", initials: "TD" },
  { name: "[Team Member]", role: "AI Engineer", department: "Engineering", bio: "LLM applications and ML pipelines. Placeholder bio — replace before launch.", initials: "AI" },
  { name: "[Team Member]", role: "Cloud Architect", department: "Engineering", bio: "AWS, Kubernetes and platform engineering. Placeholder bio — replace before launch.", initials: "CA" },
  { name: "[Team Member]", role: "Delivery Lead", department: "Delivery", bio: "Agile delivery and client partnership. Placeholder bio — replace before launch.", initials: "DL" },
  { name: "[Team Member]", role: "QA Lead", department: "Engineering", bio: "Automation-first quality strategy. Placeholder bio — replace before launch.", initials: "QA" },
  { name: "[Team Member]", role: "Data Engineer", department: "Engineering", bio: "Data platforms and pipelines. Placeholder bio — replace before launch.", initials: "DE" },
  { name: "[Team Member]", role: "Business Analyst", department: "Delivery", bio: "Discovery, requirements and stakeholder alignment. Placeholder bio — replace before launch.", initials: "BA" },
];

export const jobs: Job[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Own product features end-to-end across web, API and cloud — from technical design to production. Placeholder description.",
    responsibilities: [
      "Design and build scalable features across the stack",
      "Collaborate with product and design on scope and approach",
      "Write automated tests and champion code quality",
      "Mentor engineers and review architecture decisions",
    ],
    requirements: [
      "5+ years building production software",
      "Strong TypeScript and React experience",
      "Solid backend experience with Node.js or Python",
      "Comfort with cloud platforms and CI/CD",
    ],
    benefits: ["Competitive compensation", "Health, dental and vision coverage", "Learning budget", "Hybrid and remote-friendly setup"],
    posted: "2 weeks ago",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Design interfaces and systems for complex B2B products — research, flows, prototypes and polished UI. Placeholder description.",
    responsibilities: [
      "Lead design across a product or initiative",
      "Run user research and usability testing",
      "Maintain and extend our design systems",
      "Partner with engineering on implementation quality",
    ],
    requirements: [
      "3+ years of product design experience",
      "Strong portfolio of shipped digital products",
      "Proficiency with Figma and prototyping tools",
      "Experience with design systems and accessibility",
    ],
    benefits: ["Competitive compensation", "Health, dental and vision coverage", "Design tooling budget", "Annual conference allowance"],
    posted: "1 week ago",
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "Engineering",
    location: "Remote (US or EU)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Build production AI systems — LLM applications, document intelligence and ML pipelines. Placeholder description.",
    responsibilities: [
      "Design and ship AI features end-to-end",
      "Build evaluation and guardrail systems",
      "Operate and improve models in production",
      "Translate business problems into AI approaches",
    ],
    requirements: [
      "3+ years of Python and ML experience",
      "Experience with LLM frameworks and RAG",
      "Familiarity with MLOps and monitoring",
      "Strong written communication",
    ],
    benefits: ["Competitive compensation", "Remote-first setup", "Compute and tooling budget", "Conference and learning allowance"],
    posted: "3 weeks ago",
  },
  {
    slug: "cloud-devops-engineer",
    title: "Cloud / DevOps Engineer",
    department: "Engineering",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Own infrastructure, pipelines and platform reliability — Terraform, Kubernetes and GitOps. Placeholder description.",
    responsibilities: [
      "Design and operate cloud infrastructure",
      "Build and improve CI/CD pipelines",
      "Champion reliability and observability",
      "Collaborate with teams on architecture",
    ],
    requirements: [
      "3+ years in cloud infrastructure (AWS or Azure)",
      "Strong Terraform and Kubernetes experience",
      "Experience with GitOps and observability stacks",
      "On-call participation is expected",
    ],
    benefits: ["Competitive compensation", "Health, dental and vision coverage", "Home office budget", "Certification support"],
    posted: "1 month ago",
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Build test strategy and automation for fast-moving product teams. Placeholder description.",
    responsibilities: [
      "Design and maintain automated test suites",
      "Own release quality gates",
      "Perform exploratory testing across browsers",
      "Report and drive defect resolution",
    ],
    requirements: [
      "2+ years of QA experience",
      "Strong Playwright or Cypress experience",
      "API testing experience",
      "Attention to detail and clear reporting",
    ],
    benefits: ["Competitive compensation", "Remote-first setup", "Learning budget", "Flexible hours"],
    posted: "2 weeks ago",
  },
  {
    slug: "delivery-manager",
    title: "Delivery Manager",
    department: "Delivery",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead client engagements end-to-end — scope, roadmap, delivery rhythm and outcomes. Placeholder description.",
    responsibilities: [
      "Own engagement planning and delivery",
      "Build trust with client stakeholders",
      "Coordinate cross-functional teams",
      "Report progress and manage risk",
    ],
    requirements: [
      "5+ years managing software delivery",
      "Experience in consulting or agency environments",
      "Strong stakeholder communication",
      "Agile and delivery frameworks mastery",
    ],
    benefits: ["Competitive compensation", "Health and pension plans", "Flexible hybrid setup", "Professional development budget"],
    posted: "1 week ago",
  },
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Growth",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Build pipeline and partnerships with mid-market and enterprise accounts. Placeholder description.",
    responsibilities: [
      "Identify and qualify new opportunities",
      "Run discovery conversations with prospects",
      "Prepare proposals and estimates with delivery",
      "Maintain CRM and pipeline discipline",
    ],
    requirements: [
      "3+ years in B2B technology sales",
      "Experience selling services or platforms",
      "Excellent written and presentation skills",
      "CRM proficiency (Salesforce or HubSpot)",
    ],
    benefits: ["Competitive base plus commission", "Health and pension plans", "Travel allowance", "Growth path to leadership"],
    posted: "3 weeks ago",
  },
  {
    slug: "technical-writer",
    title: "Technical Writer",
    department: "Marketing",
    location: "Remote (US or EU)",
    type: "Part-time",
    experience: "2+ years",
    description:
      "Turn engineering knowledge into clear product docs, guides and technical marketing. Placeholder description.",
    responsibilities: [
      "Write and maintain product documentation",
      "Publish technical blog content",
      "Collaborate with engineering on accuracy",
      "Maintain documentation quality standards",
    ],
    requirements: [
      "2+ years of technical writing",
      "Comfort with APIs and developer tools",
      "Excellent English writing skills",
      "Experience with docs-as-code workflows",
    ],
    benefits: ["Flexible part-time hours", "Remote-first setup", "Tooling budget", "Published-author credit"],
    posted: "1 month ago",
  },
];

export const jobsBySlug = Object.fromEntries(jobs.map((j) => [j.slug, j])) as Record<string, Job>;
