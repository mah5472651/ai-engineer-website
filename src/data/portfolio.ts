/**
 * Portfolio content — Mahmud Hasan
 */

export const site = {
  name: "Mahmud Hasan",
  role: "AI Engineer",
  tagline:
    "Bridging advanced AI research and production-grade systems.",
  email: "mah5472651@gmail.com",
  /** Opens the device/browser mail app with this address filled in */
  get emailHref() {
    return `mailto:mah5472651@gmail.com?subject=${encodeURIComponent("Hello Mahmud Hasan")}`;
  },
  location: "Barishal, Bangladesh",
  resumeUrl: "/resume.pdf",
  whatsapp: {
    phone: "+8801606587403",
    username: "iammahmudhasan",
    url: "https://wa.me/8801606587403",
  },
  social: {
    github: "https://github.com/mah5472651",
    linkedin: "https://www.linkedin.com/in/mahmudhasan-ai-engineer/",
    whatsapp: "https://wa.me/8801606587403",
  },
};

export const about = {
  paragraphs: [
    "High-growth AI Engineer bridging the gap between advanced research and production-grade AI systems. Serving concurrently as the COO of Craftly (building a frontier LLM) and Founder & CEO at Aeitron AI (engineering multi-agent automation workflows for high-ticket sectors like real estate).",
    "Specialized in multi-agent orchestration, advanced memory architectures, cybersecurity intelligence, and high-performance RAG pipelines.",
    "Proven track record of leading cross-functional engineering teams to build globally competitive AI technology from Bangladesh.",
  ],
  highlights: [
    { label: "Roles", value: "COO + CEO" },
    { label: "Focus", value: "Agents · RAG" },
    { label: "Based in", value: "Bangladesh" },
  ],
};

export const skills = {
  categories: [
    {
      title: "AI Systems",
      items: [
        "Multi-agent orchestration",
        "Advanced memory architectures",
        "High-performance RAG",
        "LLM productization",
        "Cybersecurity intelligence",
        "Workflow automation",
      ],
    },
    {
      title: "ML & Deep Learning",
      items: [
        "PyTorch",
        "Transformers",
        "Fine-tuning / LoRA",
        "NLP",
        "Evaluation & evals",
        "Prompt systems",
      ],
    },
    {
      title: "LLM Stack",
      items: [
        "RAG pipelines",
        "Agents & tools",
        "Vector search",
        "LangChain / LangGraph",
        "vLLM / inference",
        "Open & frontier models",
      ],
    },
    {
      title: "Software & Leadership",
      items: [
        "Python",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Team leadership",
        "Product & ops (COO/CEO)",
      ],
    },
  ],
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  impact: string[];
  tags: string[];
  year: string;
  links: {
    demo?: string;
    github?: string;
    writeup?: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aeitron-agentic-ai-architecture",
    title: "Aeitron (Agentic AI Architecture)",
    year: "Present",
    summary:
      "Frontier AI architecture for autonomous agentic coding and core cybersecurity operations — deep reasoning, persistent memory, and tool execution.",
    description:
      "Aeitron is an advanced agentic AI architecture engineered for autonomous software creation and cyber defense intelligence. The system integrates deep reasoning, persistent memory structures, and tool execution so agents can operate with autonomy on complex engineering and security workflows.",
    impact: [
      "Frontier AI Architecture: Architecting advanced systems engineered specifically for autonomous agentic coding and core cybersecurity operations.",
      "Autonomous Software Creation: Enabling self-directed software development by integrating deep reasoning, persistent memory structures, and tool execution.",
      "Cyber Defense Intelligence: Developing highly specialized AI capabilities focused on threat detection, vulnerability analysis, and security intelligence.",
    ],
    tags: [
      "Agentic AI",
      "Architecture",
      "Autonomous coding",
      "Cybersecurity",
      "Memory",
    ],
    links: {
      github: "https://github.com/mah5472651",
    },
    featured: true,
  },
  {
    slug: "aeitron-ai-finance-dashboard",
    title: "Aeitron AI Finance Dashboard",
    year: "Present",
    summary:
      "Enterprise dashboard unifying finance, invoicing, CRM, and team tools — with an AI copilot and real-time analytics for real estate leads.",
    description:
      "A comprehensive Unified Agency OS for finance tracking, automated invoicing, CRM, and team management. Includes an AI business assistant for real-time operational analytics and automated pipeline tracking for real estate leads, built with a premium React + Vite + TypeScript + Tailwind frontend.",
    impact: [
      "Unified Agency OS: Engineered a comprehensive enterprise dashboard unifying finance tracking, automated invoicing, CRM, and team management tools.",
      "AI Copilot & Real-Time Analytics: Integrated an AI business assistant providing real-time operational analytics and automated pipeline tracking for real estate leads.",
      "Premium Frontend Stack: Developed a highly responsive, minimalist, and scalable UI from scratch using React, Vite, TypeScript, and Tailwind CSS.",
    ],
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "AI Copilot",
      "Dashboard",
    ],
    links: {
      github: "https://github.com/mah5472651",
    },
    featured: true,
  },
];

export const experience = [
  {
    company: "Craftly",
    role: "COO · AI Engineer",
    period: "Present",
    location: "Bangladesh / Remote",
    bullets: [
      "Serve as COO while building a frontier LLM — aligning research, engineering, and product delivery.",
      "Drive production-grade AI systems: evaluation, reliability, and the path from prototype to shippable capability.",
      "Lead cross-functional teams to compete at a global level from Bangladesh.",
    ],
  },
  {
    company: "Aeitron AI",
    role: "Founder & CEO",
    period: "Present",
    location: "Barishal, Bangladesh / Remote",
    bullets: [
      "Founded Aeitron AI to engineer multi-agent automation workflows for high-ticket sectors including real estate.",
      "Specialize in multi-agent orchestration, advanced memory architectures, and high-performance RAG pipelines.",
      "Own product vision and technical direction for automation systems that operators can trust in production.",
    ],
  },
];

export const education = [
  {
    school: "See resume for full education details",
    degree: "Download resume.pdf",
    period: "",
  },
];

export const contact = {
  headline: "Let's build production-grade AI.",
  blurb:
    "Open to collaborations, partnerships, and high-impact AI systems work. Reach me by email or WhatsApp — I respond as soon as I can.",
};
