import type { Service } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — replace all copy with real company information before launch.
 */
export const services: Service[] = [
  {
    slug: "software-development",
    name: "Software Development",
    tagline: "Custom, scalable software engineered around your business",
    description:
      "From web platforms to mission-critical enterprise systems, we design and build software that scales with your growth.",
    longDescription:
      "Every business runs on software — and the right software is an advantage, not an expense. Our engineers partner with your teams to design, build and ship reliable platforms that remove friction from your operations, open new revenue streams and stand the test of scale.\n\nWe follow a pragmatic, product-led approach: small cross-functional teams, short delivery cycles, and continuous feedback. You always see working software, not slideware.",
    icon: "code",
    features: [
      "Custom web and enterprise applications",
      "Product and platform engineering",
      "Legacy system modernization",
      "API design and system integration",
      "Performance and scalability engineering",
      "Technical architecture consulting",
    ],
    capabilities: [
      "Full-stack web development",
      "Microservices and serverless architecture",
      "REST and GraphQL APIs",
      "Integration with third-party systems",
      "Database design and optimization",
      "Code review and quality gates",
      "Continuous delivery pipelines",
      "Application maintenance and evolution",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Kubernetes", "AWS"],
    benefits: [
      "Faster time to market with iterative delivery",
      "Software that scales without rewrites",
      "Lower long-term maintenance costs",
      "Full transparency on progress and priorities",
    ],
    faqs: [
      {
        q: "How do you scope a custom software project?",
        a: "We start with a discovery workshop to map business goals, user needs and technical constraints. From there we define an MVP scope with clear priorities, so you fund the features that deliver value first.",
      },
      {
        q: "Can you work with our existing team and stack?",
        a: "Yes. We regularly embed with in-house teams, take over legacy codebases, or build from scratch — always with a clear handover plan and documentation standards.",
      },
      {
        q: "What does your development process look like?",
        a: "Two-week sprints, weekly demos, automated testing and continuous deployment. You see progress every week, and priorities can shift based on what you learn.",
      },
    ],
    caseStudySlugs: ["platform-modernization", "retail-loyalty-app"],
    order: 1,
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "High-performance websites built to convert and rank",
    description:
      "Fast, accessible and SEO-optimized websites that turn visitors into customers — engineered with modern web standards.",
    longDescription:
      "Your website is your most visible product. We build marketing sites, web applications and e-commerce storefronts that are fast, beautiful and engineered for conversion and search performance.\n\nOur builds start with performance budgets and accessibility standards, so every page loads quickly on any device and every visitor gets a premium experience.",
    icon: "globe",
    features: [
      "Marketing and corporate websites",
      "Web applications and portals",
      "E-commerce and checkout experiences",
      "Headless CMS integration",
      "Performance and Core Web Vitals optimization",
      "Internationalization and localization",
    ],
    capabilities: [
      "React and Next.js development",
      "Headless CMS (Contentful, Sanity, Strapi)",
      "Server-side rendering and static generation",
      "SEO and technical content optimization",
      "Analytics and conversion tracking",
      "A/B testing and experimentation",
      "Accessibility (WCAG) compliance",
      "Design system implementation",
    ],
    technologies: ["Next.js", "React", "Vite", "Tailwind CSS", "Node.js", "Vercel", "Contentful", "Sanity"],
    benefits: [
      "Faster pages, better search rankings",
      "Conversion-focused user journeys",
      "Easy content updates without developers",
      "Secure, maintainable codebases",
    ],
    faqs: [
      {
        q: "How fast will our new website load?",
        a: "We set a performance budget before we write a line of code — typically under 2 seconds on 4G for marketing pages, with Core Web Vitals in the green.",
      },
      {
        q: "Will we be able to edit content ourselves?",
        a: "Yes. We build on a headless CMS with a tailored editing experience, so your team can update content, add pages and publish without developer involvement.",
      },
      {
        q: "Do you redesign existing websites or only build new ones?",
        a: "Both. We frequently migrate legacy sites to modern stacks while preserving SEO equity and improving design and performance.",
      },
    ],
    caseStudySlugs: ["ecommerce-storefront", "platform-modernization"],
    order: 2,
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    tagline: "Native-quality mobile apps for iOS and Android",
    description:
      "Apps your customers love to use — built once, delivered everywhere, with performance that feels native.",
    longDescription:
      "Mobile is where your customers spend their attention. We design and develop mobile experiences that are fast, delightful and deeply integrated with your backend systems.\n\nFrom strategy and UX to App Store release and beyond, we take ownership of the entire mobile journey — including analytics, push infrastructure and ongoing iteration.",
    icon: "smartphone",
    features: [
      "Cross-platform apps (iOS and Android)",
      "Native app development",
      "Mobile UI/UX design",
      "Offline-first architecture",
      "Push notifications and engagement",
      "App Store and Play Store launch support",
    ],
    capabilities: [
      "React Native and Expo development",
      "Swift and Kotlin native builds",
      "Secure authentication and payments",
      "Offline synchronization",
      "Analytics and crash reporting",
      "App release and review management",
      "Mobile performance optimization",
      "Accessibility on mobile",
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "GraphQL", "Stripe"],
    benefits: [
      "One codebase, both platforms",
      "Engaging, high-retention UX",
      "Secure by design",
      "Continuous delivery to stores",
    ],
    faqs: [
      {
        q: "React Native or native — which should we choose?",
        a: "For most products React Native delivers native quality with a single codebase and faster iteration. When your app needs extreme platform-specific performance, we go native. We recommend based on your use case, not a default.",
      },
      {
        q: "Can you maintain our app after launch?",
        a: "Yes, we offer ongoing app maintenance: OS updates, new features, store compliance and performance monitoring as a continuous partnership.",
      },
      {
        q: "How long does a typical mobile app take?",
        a: "A well-scoped MVP typically takes 8–12 weeks. We can also phase delivery so your team and users start learning early.",
      },
    ],
    caseStudySlugs: ["retail-loyalty-app", "field-service-platform"],
    order: 3,
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    tagline: "Cloud architecture that scales with demand, not cost",
    description:
      "Migration, architecture and optimization on AWS, Azure and GCP — built for resilience and controlled spend.",
    longDescription:
      "Cloud done well is elastic, resilient and cost-efficient. We design cloud architectures that grow with your traffic and shrink with your demand — automating everything that can be automated.\n\nFrom migration planning to Kubernetes platforms to FinOps discipline, we make sure cloud complexity never lands on your team.",
    icon: "cloud",
    features: [
      "Cloud migration and modernization",
      "Cloud-native architecture",
      "Kubernetes and container platforms",
      "Cost optimization (FinOps)",
      "Disaster recovery and high availability",
      "Security and compliance hardening",
    ],
    capabilities: [
      "AWS, Azure and GCP architecture",
      "Infrastructure as Code (Terraform)",
      "CI/CD pipeline design",
      "Multi-region deployments",
      "Observability and alerting",
      "Cloud cost analytics",
      "Well-Architected reviews",
      "Serverless and event-driven systems",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Serverless", "Datadog"],
    benefits: [
      "Predictable cloud costs",
      "High availability without over-engineering",
      "Faster, safer releases",
      "Compliance-ready infrastructure",
    ],
    faqs: [
      {
        q: "Is our current infrastructure too complex to migrate?",
        a: "Almost never. We de-risk migration with a phased plan: assess, pilot, migrate in waves, and roll back safely if anything looks off. You keep running the business while we move the platform.",
      },
      {
        q: "How do you control cloud costs?",
        a: "We set budgets, tagging and alerts from day one, and run regular cost reviews. Our FinOps practice typically identifies 20–30% savings in the first quarter.",
      },
      {
        q: "Do you manage our cloud after migration?",
        a: "We offer managed platform operations — monitoring, upgrades, security patches and cost governance — so your team can focus on product work.",
      },
    ],
    caseStudySlugs: ["cloud-migration-scale", "platform-modernization"],
    order: 4,
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    tagline: "Interfaces that feel effortless and convert naturally",
    description:
      "Research-driven design that turns complex products into clear, intuitive and premium experiences.",
    longDescription:
      "Great design is invisible — it removes friction before users notice it exists. Our designers combine research, prototyping and rigorous usability testing to create products people genuinely enjoy using.\n\nWe design systems, not one-off screens: scalable component libraries that keep every future screen consistent, accessible and on-brand.",
    icon: "palette",
    features: [
      "Product and UX strategy",
      "User research and testing",
      "Interface design and prototyping",
      "Design systems and component libraries",
      "Design engineering (handoff that builds)",
      "Accessibility and inclusive design",
    ],
    capabilities: [
      "Discovery and stakeholder workshops",
      "User journeys and flows",
      "Wireframes and interactive prototypes",
      "Visual design and branding",
      "Design tokens and documentation",
      "Usability testing and analytics",
      "Frontend design implementation",
      "Design operations",
    ],
    technologies: ["Figma", "Framer", "Storybook", "Tailwind CSS", "Maze", "Hotjar"],
    benefits: [
      "Higher conversion and retention",
      "Faster development with design systems",
      "Consistent brand experience",
      "Products validated before code is written",
    ],
    faqs: [
      {
        q: "Do you design before development or with development?",
        a: "Both — we recommend design running one sprint ahead of engineering so developers build from validated specs, while edge cases still get resolved in collaboration.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We extend your brand into a product design system — preserving identity while making it consistent across screens and devices.",
      },
      {
        q: "What does a design sprint involve?",
        a: "Typically 1–2 weeks: research synthesis, flow mapping, wireframes, high-fidelity design and usability testing with real users before any code is committed.",
      },
    ],
    caseStudySlugs: ["ecommerce-storefront", "retail-loyalty-app"],
    order: 5,
  },
  {
    slug: "qa-testing",
    name: "QA & Testing",
    tagline: "Quality built in, not bolted on",
    description:
      "Automated and manual testing that catches problems before your customers do.",
    longDescription:
      "Quality is a discipline, not a phase. We build testing into every stage of development — from test strategy and automation frameworks to exploratory testing and performance validation.\n\nOur QA engineers work alongside developers so bugs are caught in minutes, not weeks, and releases ship with confidence.",
    icon: "shield-check",
    features: [
      "Test strategy and planning",
      "Automated functional testing",
      "Performance and load testing",
      "API and integration testing",
      "Accessibility testing",
      "Exploratory and manual QA",
    ],
    capabilities: [
      "Test automation frameworks (Playwright, Cypress)",
      "CI-integrated test suites",
      "Visual regression testing",
      "Security and penetration testing support",
      "Test data management",
      "Release quality gates",
      "QA process consulting",
      "Cross-browser and device testing",
    ],
    technologies: ["Playwright", "Cypress", "Selenium", "JMeter", "k6", "Lighthouse", "axe"],
    benefits: [
      "Fewer production incidents",
      "Faster release cycles with confidence",
      "Lower cost of defects",
      "Measurable quality metrics",
    ],
    faqs: [
      {
        q: "How much automation vs. manual testing do we need?",
        a: "We typically automate everything that runs repeatedly and reserve human testing for complex journeys, usability and edge cases. We start by mapping your highest-risk flows.",
      },
      {
        q: "Can you test a system we didn't build?",
        a: "Yes — we routinely come into existing products, build regression coverage and stabilize quality before new feature work begins.",
      },
      {
        q: "How do you measure QA value?",
        a: "We track defect escape rate, automated coverage, release confidence and time-to-detect, and report them transparently every sprint.",
      },
    ],
    caseStudySlugs: ["field-service-platform", "ecommerce-storefront"],
    order: 6,
  },
  {
    slug: "devops",
    name: "DevOps & CI/CD",
    tagline: "Ship faster with pipelines your team can trust",
    description:
      "Automated delivery pipelines, infrastructure as code and observability that turn deployment from risk into routine.",
    longDescription:
      "If you're not deploying daily, you're carrying unnecessary risk. We build the automation backbone — continuous integration, delivery and observability — that lets your team ship small, frequently and safely.\n\nFrom a single repository to multi-environment Kubernetes platforms, we make release day feel like any other day.",
    icon: "git-branch",
    features: [
      "CI/CD pipeline design and automation",
      "Infrastructure as Code",
      "Kubernetes platform engineering",
      "Observability, logging and tracing",
      "Release management and rollbacks",
      "Site reliability engineering",
    ],
    capabilities: [
      "GitHub Actions, GitLab CI, CircleCI",
      "Terraform and Ansible",
      "ArgoCD and GitOps workflows",
      "Monitoring stacks (Prometheus, Grafana, Datadog)",
      "Incident response playbooks",
      "Environment provisioning",
      "Secrets management",
      "Developer experience tooling",
    ],
    technologies: ["GitHub Actions", "GitLab CI", "Terraform", "ArgoCD", "Kubernetes", "Grafana", "Prometheus", "Docker"],
    benefits: [
      "Deployments measured in minutes, not weeks",
      "Instant rollback capability",
      "Clear, centralized observability",
      "Platform engineers, not firefighters",
    ],
    faqs: [
      {
        q: "We deploy manually — where do we start?",
        a: "We begin with a low-risk automation win: automated builds and tests on every commit, then incremental deployment automation. You get value in the first two weeks.",
      },
      {
        q: "Do you provide on-call support?",
        a: "Yes, we offer SRE services including monitoring, alerting and on-call coverage with defined SLAs and escalation paths.",
      },
      {
        q: "Can you work with our on-premises environment?",
        a: "Absolutely. Many of our practices are hybrid: same automation discipline, adapted to your infrastructure and constraints.",
      },
    ],
    caseStudySlugs: ["cloud-migration-scale", "platform-modernization"],
    order: 7,
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    tagline: "Practical AI that ships, not pilots that stall",
    description:
      "AI features and systems that solve real business problems — from LLM applications to machine learning pipelines.",
    longDescription:
      "The gap between AI hype and AI value is execution. We build production AI — intelligent document processing, conversational assistants, recommendation engines, and ML pipelines that are measured, monitored and genuinely useful.\n\nEvery AI engagement starts with the business problem, not the model. We evaluate, prototype and ship AI where it demonstrably pays off.",
    icon: "bot",
    features: [
      "LLM-powered applications",
      "Conversational AI and assistants",
      "Intelligent document processing",
      "Machine learning pipelines",
      "AI strategy and opportunity mapping",
      "Model evaluation and guardrails",
    ],
    capabilities: [
      "RAG architectures",
      "Fine-tuning and prompt engineering",
      "Data pipelines and feature stores",
      "MLOps and model monitoring",
      "Responsible AI and privacy review",
      "Computer vision solutions",
      "Predictive analytics",
      "AI cost and performance optimization",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI", "Anthropic", "Hugging Face", "Vector DBs", "MLflow"],
    benefits: [
      "Automation of high-volume, repetitive work",
      "Smarter decisions from your own data",
      "AI that respects privacy and compliance",
      "Measurable ROI from day one",
    ],
    faqs: [
      {
        q: "Where should our business start with AI?",
        a: "With a discovery workshop we map candidate use cases against data availability, effort and ROI, then prototype the two or three most promising ones in weeks — not months.",
      },
      {
        q: "Is my data safe with AI providers?",
        a: "We design with privacy first: data residency, encryption, access controls and provider agreements are evaluated before anything is built. On-premise and VPC deployments are options where required.",
      },
      {
        q: "How do you measure AI success?",
        a: "Every AI feature ships with business metrics — accuracy, handling rate, time saved, cost per transaction — monitored in production with clear improvement loops.",
      },
    ],
    caseStudySlugs: ["ai-document-processing", "retail-loyalty-app"],
    order: 8,
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>;
