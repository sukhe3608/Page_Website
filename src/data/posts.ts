import type { Post } from "@/types/content";

/**
 * PLACEHOLDER CONTENT — replace with real articles before launch.
 */
export const posts: Post[] = [
  {
    slug: "practical-guide-llm-production",
    title: "A practical guide to shipping LLM features to production",
    category: "AI",
    excerpt:
      "Most LLM projects stall between demo and production. Here is the evaluation, guardrail and monitoring discipline that gets them across the line.",
    content: [
      {
        type: "p",
        text: "The gap between an impressive LLM demo and a reliable production feature is wide — and it is filled with unglamorous work: evaluation sets, guardrails, cost controls and monitoring. This guide walks through the pieces we treat as non-negotiable when shipping AI features.",
      },
      { type: "h2", text: "Start with an evaluation set, not a prompt" },
      {
        type: "p",
        text: "Before tuning prompts, build a test set of real inputs and expected outputs — even 50–100 examples are enough to catch regressions. Every prompt change and model upgrade runs against it. Without this, AI features quietly degrade and no one notices until customers do.",
      },
      { type: "h2", text: "Guardrails are product requirements" },
      {
        type: "ul",
        items: [
          "Input validation: length limits, content policies and PII detection before the model is called",
          "Output validation: schema checks, confidence thresholds and refusal handling",
          "Human fallback: clear routing when confidence is low — never a silent failure",
        ],
      },
      { type: "h2", text: "Monitor what the model costs you" },
      {
        type: "p",
        text: "Latency, token spend, cache hit rates and retry rates belong in your observability stack alongside everything else. An LLM feature that costs $0.02 per call sounds cheap until it processes a million calls a month.",
      },
      {
        type: "quote",
        text: "Production AI is mostly a discipline problem wearing a model costume.",
        cite: "Engineering lead, NovaCore",
      },
      { type: "h2", text: "The right default: small models, big guardrails" },
      {
        type: "p",
        text: "Start with the smallest model that passes your evaluation set, and treat larger models as an upgrade path. Combined with caching and streaming, this keeps costs predictable while quality improves over time.",
      },
    ],
    date: "Aug 10, 2026",
    readTime: "7 min read",
    author: "[Author Name]",
    tint: "blue",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design systems that survive contact with reality",
    category: "Design",
    excerpt:
      "A design system lives or dies by how it handles the messy 20% — edge cases, legacy screens and opinionated stakeholders.",
    content: [
      {
        type: "p",
        text: "Every design system looks beautiful in its documentation. The test is whether it survives real products: awkward edge cases, legacy screens and teams with conflicting opinions.",
      },
      { type: "h2", text: "Tokenize before you componentize" },
      {
        type: "p",
        text: "Start with design tokens — color, spacing, typography and motion. Tokens are cheap to change and give every product a shared foundation before a single component exists.",
      },
      { type: "h2", text: "Component quality gates" },
      {
        type: "ul",
        items: [
          "Every component has a documented accessibility contract",
          "Every component ships with tests and usage guidance",
          "Adoption is measured; unused components are removed",
        ],
      },
      {
        type: "quote",
        text: "A design system is not a deliverable. It is a service your product teams subscribe to.",
      },
      { type: "h2", text: "Make contribution boring" },
      {
        type: "p",
        text: "The system grows fastest when contributing is routine: templates for new components, review checklists and a predictable release cadence. The moment contribution requires heroics, the system stalls.",
      },
    ],
    date: "Jul 28, 2026",
    readTime: "6 min read",
    author: "[Author Name]",
    tint: "navy",
  },
  {
    slug: "cloud-cost-optimization-fino-ops",
    title: "FinOps for the rest of us: cutting cloud spend without a dashboard",
    category: "Cloud",
    excerpt:
      "Before buying another cost tool, try these five operational changes — most teams find 20–30% savings in the first quarter.",
    content: [
      {
        type: "p",
        text: "Cloud cost tools are useful — after you have fixed the fundamentals. Here are the five operational changes that produce most of the savings, in order of impact.",
      },
      { type: "h2", text: "1. Name your resources" },
      {
        type: "p",
        text: "Tagging everything with cost center, environment and owner is the single highest-leverage change. You cannot manage what you cannot attribute.",
      },
      { type: "h2", text: "2. Make right-sizing a habit" },
      {
        type: "p",
        text: "Reserved capacity and autoscaling policies drift as workloads change. A monthly right-sizing review catches the 20% of resources generating 80% of waste.",
      },
      { type: "h2", text: "3. Enforce budgets at deploy time" },
      {
        type: "ul",
        items: [
          "Set spend alarms on every environment from day one",
          "Gate large resource changes through cost review",
          "Make infrastructure-as-code review include a cost estimate",
        ],
      },
      {
        type: "quote",
        text: "Every dollar of cloud waste is a product decision made by default.",
      },
      {
        type: "p",
        text: "Teams that adopt these habits report 20–30% cost reductions in the first quarter — before touching reserved instances or negotiating discounts.",
      },
    ],
    date: "Jul 14, 2026",
    readTime: "5 min read",
    author: "[Author Name]",
    tint: "teal",
  },
  {
    slug: "microservices-when-to-avoid",
    title: "Microservices: the honest cost-benefit analysis",
    category: "Technology",
    excerpt:
      "Microservices are a scalability strategy, not an architecture style — here is how we decide when they genuinely pay off.",
    content: [
      {
        type: "p",
        text: "We have migrated teams into microservices and teams back into monoliths. Both were the right call at the time. The difference was whether the organization could afford the operational surface area.",
      },
      { type: "h2", text: "The real costs" },
      {
        type: "ul",
        items: [
          "Every service means pipelines, monitoring, secrets and a team that understands it",
          "Distributed debugging is a tax paid on every incident",
          "Versioning and contract discipline become daily work",
        ],
      },
      { type: "h2", text: "When they pay off" },
      {
        type: "ul",
        items: [
          "Teams need independent deploy cycles at scale",
          "Workloads have genuinely different scaling profiles",
          "Organizational structure mirrors service boundaries",
        ],
      },
      {
        type: "quote",
        text: "The best architecture is the one your smallest team can operate confidently at 2am.",
      },
      { type: "h2", text: "The pragmatic middle" },
      {
        type: "p",
        text: "Modular monoliths with strict boundaries and independent deployment paths cover most organizations well into scale. We recommend microservices only when the cost model demonstrably favors them.",
      },
    ],
    date: "Jun 30, 2026",
    readTime: "8 min read",
    author: "[Author Name]",
    tint: "violet",
  },
  {
    slug: "seo-aeo-2026",
    title: "SEO is not dead — but it has a new co-pilot: AEO",
    category: "Business",
    excerpt:
      "Answer engines changed the search game. Here is how to make your site answer-ready without abandoning classic SEO fundamentals.",
    content: [
      {
        type: "p",
        text: "More searches than ever are answered without a single click — by AI overviews, assistants and answer engines. The winners are sites structured so their content can be understood, quoted and cited.",
      },
      { type: "h2", text: "The fundamentals still win" },
      {
        type: "p",
        text: "Core Web Vitals, semantic HTML, unique metadata and authoritative content remain the foundation. Answer-engine visibility is built on top of classic SEO, not instead of it.",
      },
      { type: "h2", text: "Make answers extractable" },
      {
        type: "ul",
        items: [
          "Answer the question in the first paragraph — then expand",
          "Use schema markup: FAQ, Article, Breadcrumb and Organization",
          "Keep headings descriptive and hierarchical",
          "Write scannable structure: lists, tables and short sections",
        ],
      },
      {
        type: "quote",
        text: "Optimize for the machine that decides whether your answer deserves the click.",
      },
      {
        type: "p",
        text: "The practical overlap of SEO and AEO is large: clear structure, fast pages and honest, citable content. Invest there and you cover both.",
      },
    ],
    date: "Jun 12, 2026",
    readTime: "6 min read",
    author: "[Author Name]",
    tint: "blue",
  },
  {
    slug: "mobile-app-offline-first",
    title: "Offline-first is a retention strategy, not a technical nicety",
    category: "Technology",
    excerpt:
      "Field workers, commuters and travelers abandon apps the moment the signal drops. Offline-first architecture keeps them engaged.",
    content: [
      {
        type: "p",
        text: "The most expensive word in mobile is 'unavailable'. For users in the field — or simply in a subway — the app that keeps working is the app that gets kept.",
      },
      { type: "h2", text: "Design for the gap" },
      {
        type: "p",
        text: "Start with a clear offline contract: what can users do without a connection, what is queued, and what is clearly explained when synchronization happens.",
      },
      { type: "h2", text: "Sync is a product feature" },
      {
        type: "ul",
        items: [
          "Queue writes locally and sync them in the background",
          "Resolve conflicts with rules users can understand",
          "Show sync state honestly — never fake 'saved'",
          "Compress and delta-sync to respect poor connections",
        ],
      },
      {
        type: "quote",
        text: "Users don't leave because your app is offline-aware. They leave because it wasn't.",
      },
      {
        type: "p",
        text: "In field operations, offline-first routinely doubles the hours an app is genuinely useful — which is why it belongs in the product strategy, not just the technical architecture.",
      },
    ],
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "[Author Name]",
    tint: "teal",
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p])) as Record<string, Post>;
