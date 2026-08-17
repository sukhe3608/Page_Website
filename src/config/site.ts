export const site = {
  name: "NovaCore Technologies",
  shortName: "NovaCore",
  tagline: "Digital solutions that drive real business growth",
  description:
    "NovaCore Technologies is a technology company building enterprise software, cloud platforms, AI solutions and premium digital experiences for ambitious businesses.",
  /* TODO: replace with the real production domain before launch */
  url: "https://www.novacore.example.com",
  email: "hello@novacore.example.com",
  phone: "+1 (555) 000-0000",
  salesPhone: "+1 (555) 000-0001",
  address: "100 Innovation Drive, Suite 400, Austin, TX 78701",
  hours: "Mon – Fri, 9:00 – 18:00 (CT)",
  founded: 2016,
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/example-novacore" },
    { label: "X / Twitter", href: "https://x.com/example-novacore" },
    { label: "GitHub", href: "https://github.com/example-novacore" },
    { label: "YouTube", href: "https://youtube.com/@example-novacore" },
  ],
} as const;

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Company", href: "/about" },
    { label: "Resources", href: "/insights" },
  ],
} as const;
