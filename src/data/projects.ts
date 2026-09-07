import type { CaseStudy, Testimonial, TeamMember, Job } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "kannur-airport-fire-panel",
    client: "Kannur International Airport",
    industry: "Aviation",
    title: "Siemens fire panel rectification that kept an airport running",
    summary:
      "Rapid, expert rectification of a Siemens fire panel issue at Kannur Airport — restoring operations with priority response.",
    description:
      "When a critical Siemens fire panel issue threatened operations at Kannur International Airport, the SLN team responded to resolve the rectification within the stipulated time.\n\nThe work was appreciated for its responsiveness and professionalism, ensuring the airport's fire safety systems remained reliable and compliant.",
    challenge:
      "A critical Siemens fire panel issue at the airport needed urgent, expert rectification to restore full fire detection and alarm functionality without compromising safety.",
    solution:
      "Our experienced engineers diagnosed the panel fault and completed the rectification within the agreed timeframe, restoring the system to full reliability with minimum disruption.",
    results: [
      { value: "100%", label: "timely rectification" },
      { value: "24/7", label: "system restored to operation" },
      { value: "5/5", label: "client rating" },
      { value: "0", label: "operational downtime" },
    ],
    technologies: ["Siemens Fire Panel", "Fire Alarm System", "Testing", "Commissioning"],
    services: ["Fire Alarm System", "EHS Audit & Safety Officer Service"],
    duration: "Priority response",
    year: "2025",
    tint: "blue",
  },
  {
    slug: "government-institution-security",
    client: "Government Research Institution",
    industry: "Government & Defence",
    title: "Complete security and fire safety for a government research campus",
    summary:
      "Designed and installed integrated CCTV, access control and fire alarm systems across a high-security research campus.",
    description:
      "A government research campus required comprehensive, compliant security and fire safety. We designed and installed integrated CCTV surveillance, access control and fire alarm systems across the facility.\n\nThe project was delivered end-to-end — design, supply, installation, testing and commissioning — meeting stringent government security requirements.",
    challenge:
      "The institution needed layered electronic security and reliable fire protection across a large campus, with strict adherence to government security and procurement standards.",
    solution:
      "We delivered a unified solution: high-resolution CCTV, biometric access control at sensitive zones, and an addressable fire alarm system — engineered, installed and commissioned by our in-house team.",
    results: [
      { value: "100+", label: "cameras installed" },
      { value: "10+", label: "access control zones" },
      { value: "100%", label: "security requirements met" },
      { value: "24/7", label: "system monitoring" },
    ],
    technologies: ["Hikvision", "Access Control", "Fire Alarm", "Structured Cabling", "Networking"],
    services: ["CCTV Camera System", "Access Control System", "Fire Alarm System", "IT Networking Services"],
    duration: "6 months",
    year: "2025",
    tint: "navy",
  },
  {
    slug: "hospital-nurse-call",
    client: "Multi-Speciality Hospital",
    industry: "Healthcare",
    title: "Nurse call system that cut patient response times across a hospital",
    summary:
      "Installed a comprehensive nurse call system connecting patient rooms to nurse stations for faster response.",
    description:
      "A multi-speciality hospital needed a reliable way for patients to reach caregivers instantly. We designed and installed a comprehensive nurse call system connecting patient rooms, wards and nurse stations.\n\nWith real-time alarm and response tracking, the system improved response times and staff coordination across shifts.",
    challenge:
      "Managing patient-to-caregiver communication across multiple wards, with a requirement for reliable alarms and clear response accountability.",
    solution:
      "We installed wired and wireless nurse call points, central nurse station consoles and response tracking — with integration to hospital operations and full testing and staff training.",
    results: [
      { value: "-40%", label: "average response time" },
      { value: "100%", label: "wards connected" },
      { value: "24/7", label: "alarm coverage" },
      { value: "100%", label: "staff trained" },
    ],
    technologies: ["Nurse Call System", "Wireless Call Points", "Nurse Station", "Alarm Tracking"],
    services: ["Nurse Call System", "Fire Alarm System", "IT Networking Services"],
    duration: "3 months",
    year: "2024",
    tint: "teal",
  },
  {
    slug: "corporate-tower-bms",
    client: "Corporate Office Tower",
    industry: "Corporate",
    title: "BMS, CCTV and access control for a premium office tower",
    summary:
      "Integrated building management, surveillance and access control across a corporate tower for efficiency and safety.",
    description:
      "A premium corporate tower needed integrated building management, surveillance and access control. We delivered a building management system (BMS), high-resolution CCTV and biometric access control across the property.\n\nThe unified solution improved energy efficiency, security and occupant safety while giving facility teams central management.",
    challenge:
      "Coordinating BMS, electronic security and access control across multiple floors, with a mandate for energy efficiency and uninterrupted operations.",
    solution:
      "Our team delivered an integrated BMS for HVAC and lighting, CCTV coverage across common areas, and biometric access control — all centrally managed and maintained under AMC.",
    results: [
      { value: "-25%", label: "energy consumption" },
      { value: "100%", label: "facility coverage" },
      { value: "1", label: "central management" },
      { value: "24/7", label: "security monitoring" },
    ],
    technologies: ["BMS", "CCTV", "Access Control", "Lighting Control", "Energy Management"],
    services: ["Smart Energy Management System", "CCTV Camera System", "Access Control System", "Lighting Control System"],
    duration: "5 months",
    year: "2024",
    tint: "violet",
  },
];

export const caseStudiesBySlug = Object.fromEntries(caseStudies.map((c) => [c.slug, c])) as Record<string, CaseStudy>;

export const testimonials: Testimonial[] = [
  {
    name: "SHINOD EDATHATTA",
    role: "Client",
    company: "Kannur Airport Client",
    quote:
      "Their service is extremely nice! Specially thanks to Rajib and Muniraju to support closing our issue of our Kannur Airport Siemens Fire Panel Issue Rectification. I recommend them for their service, response is also very good. Thank you.",
    rating: 5,
    initials: "SE",
  },
  {
    name: "Narsappa PC",
    role: "Client",
    company: "Google Review",
    quote:
      "Good service. SLN Automation delivered clean, professional work and the follow-up support has been reliable.",
    rating: 5,
    initials: "NP",
  },
  {
    name: "Alen Wilson",
    role: "Client",
    company: "Google Review",
    quote:
      "Committed service. The team stayed engaged through installation and after with dependable annual maintenance support.",
    rating: 5,
    initials: "AW",
  },
  {
    name: "Ramesh Babu",
    role: "Client",
    company: "Google Review",
    quote:
      "SLN team did the rectification works at my site within the stipulated time. Professional and dependable.",
    rating: 5,
    initials: "RB",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Yograj Sharma", role: "Chief Executive Officer", department: "Leadership", bio: "Leads the vision, strategy and partnerships of SLN Automation, driving 10+ years of excellence since 2016.", initials: "YS" },
  { name: "Anil Kumar N", role: "Head of Operations and Sales", department: "Leadership", bio: "Owns operations and sales, ensuring every project is delivered on time with complete client satisfaction.", initials: "AK" },
  { name: "Muniraju M", role: "Projects Manager", department: "Projects", bio: "Manages project delivery end-to-end — from design and installation to testing and commissioning.", initials: "MM" },
  { name: "Bhumika Sharma", role: "Head of Finance and Accounts", department: "Leadership", bio: "Oversees finance, accounts and compliance, keeping the business transparent and well-governed.", initials: "BS" },
  { name: "Shivani J", role: "Head of HR and Admin", department: "Leadership", bio: "Leads human resources and administration, building the team that delivers excellence on every project.", initials: "SJ" },
  { name: "Chandana B", role: "Accounts Manager", department: "Finance", bio: "Manages accounts and financial operations with precision and reliability.", initials: "CB" },
  { name: "Abhishek M", role: "Technical Support Engineer", department: "Engineering", bio: "Provides hands-on technical support, maintenance and rapid response for client systems.", initials: "AM" },
];

export const jobs: Job[] = [
  {
    slug: "security-system-installation-engineer",
    title: "Security System Installation Engineer",
    department: "Projects",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Install, configure and commission CCTV, access control and fire alarm systems for commercial and industrial clients across India.",
    responsibilities: [
      "Install and configure CCTV, access control and fire alarm systems",
      "Perform site surveys and plan installations",
      "Test, commission and document completed systems",
      "Provide on-site support and maintenance (AMC)",
    ],
    requirements: [
      "2+ years installing security and low-voltage systems",
      "Knowledge of CCTV, access control or fire alarm systems",
      "Ability to read wiring and system drawings",
      "Willingness to travel across India for projects",
    ],
    benefits: ["Competitive compensation", "On-site allowances", "Training and certifications", "Growth path to project lead"],
    posted: "2 weeks ago",
  },
  {
    slug: "fire-safety-engineer",
    title: "Fire Safety Engineer",
    department: "Projects",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Design and deliver fire alarm, hydrant and sprinkler systems — from hydraulic design to testing and commissioning.",
    responsibilities: [
      "Design fire alarm and fire fighting systems",
      "Prepare hydraulic calculations and compliance documentation",
      "Supervise installation and lead testing/commissioning",
      "Support AMC and emergency response",
    ],
    requirements: [
      "3+ years in fire protection systems",
      "Knowledge of NFPA / Indian fire codes",
      "Experience with fire panels and suppression systems",
      "Strong documentation and site management skills",
    ],
    benefits: ["Competitive compensation", "Certification support", "Project allowances", "Professional development"],
    posted: "1 week ago",
  },
  {
    slug: "field-service-technician",
    title: "Field Service Technician",
    department: "Service",
    location: "Multiple Offices (All India)",
    type: "Full-time",
    experience: "1+ years",
    description:
      "Provide on-site service, troubleshooting and AMC support for CCTV, access control, fire alarm and automation systems.",
    responsibilities: [
      "Respond to AMC calls and service requests",
      "Troubleshoot and repair security and fire systems",
      "Perform preventive maintenance visits",
      "Document service reports and client follow-ups",
    ],
    requirements: [
      "1+ years of field service experience",
      "Basic knowledge of CCTV, access control or fire systems",
      "Strong communication and client handling skills",
      "Willingness to travel locally and nationally",
    ],
    benefits: ["Competitive compensation", "Travel allowances", "Tooling and support", "Career growth"],
    posted: "3 weeks ago",
  },
  {
    slug: "projects-coordinator",
    title: "Projects Coordinator",
    department: "Projects",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Coordinate project planning, scheduling, materials and client communication for security and automation projects.",
    responsibilities: [
      "Plan and schedule project activities",
      "Coordinate materials, vendors and site teams",
      "Track project progress and documentation",
      "Liaise with clients and internal teams",
    ],
    requirements: [
      "2+ years in project coordination",
      "Familiarity with installations or construction",
      "Strong organizational and communication skills",
      "Proficiency with project tools and reporting",
    ],
    benefits: ["Competitive compensation", "Health and support", "Training budget", "Development opportunities"],
    posted: "1 month ago",
  },
];

export const jobsBySlug = Object.fromEntries(jobs.map((j) => [j.slug, j])) as Record<string, Job>;