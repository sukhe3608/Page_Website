import type { LocationInfo, Partner, Stat, ProcessStep, Faq } from "@/types/content";

export const clients: string[] = [
  "KSCA",
  "DRDO",
  "NIVEDI",
  "Indian Navy",
  "NPCIL",
  "Bharat Petroleum",
  "Reliance Industries",
  "ITC Limited",
  "Coca-Cola",
  "Tata Global Beverages",
  "EY",
  "Blue Star",
  "JSW Steel",
  "Metro",
  "KEC",
  "Unilever",
  "Radisson",
  "Prestige Group",
  "Hilton Hotels",
  "ITC Hotels",
  "Hyundai Glovis",
  "KIA Motors",
  "L&T",
  "HAL",
  "Indian Railways",
  "Cloud Nine Hospital",
  "Aster CMI",
  "GSK",
  "Syngene",
  "Manipal Hospital",
  "Bal Pharma",
  "Mylan",
  "Embassy",
];

export const locations: LocationInfo[] = [
  {
    city: "New Delhi",
    country: "India",
    address: "7/29, Okhla Phase III, New Delhi, Delhi – 110020",
    phone: "+91 98701 25788",
    email: "info@shivaengineer.com",
    hours: "Mon – Sat, 9:00 – 18:00 (IST)",
    marker: [28.6139, 77.209],
  },
];

export const partners: Partner[] = [
  { name: "Honeywell", category: "Fire & Security" },
  { name: "Notifier", category: "Fire Alarm" },
  { name: "Edwards", category: "Fire Detection" },
  { name: "Bosch", category: "Security" },
  { name: "Mircom", category: "Fire & Life Safety" },
  { name: "Hikvision", category: "CCTV & Surveillance" },
];

export const partnerLogos: string[] = Array.from({ length: 120 }, (_, i) => `images/partners/${i + 1}.png`);

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of excellence" },
  { value: 1000, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Top brands served" },
  { value: 4.9, prefix: "", suffix: "/5", label: "Customer rating" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation", description: "We understand your site, requirements and security or automation goals in a free consultation." },
  { title: "Assessment", description: "Our engineers survey the site and design a compliant, cost-effective solution." },
  { title: "Proposal", description: "You receive a transparent quote covering design, supply and installation." },
  { title: "Installation", description: "Certified technicians install, configure and test your system to specification." },
  { title: "Commissioning", description: "We test and commission the system, ensuring everything works as designed." },
  { title: "AMC & Support", description: "Annual maintenance contracts and priority support keep your systems reliable long after launch." },
];

export const generalFaqs: Faq[] = [
  {
    q: "How does Shiva Engineers engage with clients?",
    a: "We work as an end-to-end partner: free site inspection, transparent proposal, professional installation and ongoing AMC support. Every engagement starts by understanding your site and requirements.",
  },
  {
    q: "How do you price projects?",
    a: "Each project is assessed individually. After a free site inspection, you receive a transparent quote covering design, equipment, installation, testing and commissioning — no hidden costs.",
  },
  {
    q: "What is your service coverage area?",
    a: "We provide PAN-India service based out of New Delhi — with trusted installations for clients across India.",
  },
  {
    q: "Do you provide annual maintenance contracts (AMC)?",
    a: "Yes. We offer AMC services for all our installations — covering periodic testing, preventive maintenance, priority response and genuine spare parts.",
  },
  {
    q: "Which equipment brands do you supply?",
    a: "We are authorized distributors for Honeywell, Notifier, Edwards, Bosch, Mircom and Hikvision — ensuring high-end, globally certified products.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve aviation, government & defence, corporate, hospitality, healthcare, industrial, retail, pharma, real estate and many more sectors across India.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Our installations comply with applicable safety and security standards, and our monitoring systems incorporate access control, encryption and audit trails where required.",
  },
  {
    q: "Can you take over maintenance of systems installed by others?",
    a: "Yes. We service and maintain a wide range of systems and brands, providing AMC and rectification support for existing installations.",
  },
  {
    q: "How do you keep projects on schedule?",
    a: "Transparent planning, experienced project management and clear milestones. Our projects manager coordinates every stage from design to commissioning.",
  },
  {
    q: "Do you train our staff?",
    a: "Yes. We train your team on system operation — including security scanning operators, facility teams and safety officers — as part of delivery.",
  },
  {
    q: "How do I get started?",
    a: "Contact us for a free site inspection. We'll assess your requirements and respond with a proposal — no obligation.",
  },
];