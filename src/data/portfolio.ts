/**
 * Portfolio content — Mahmud Hasan
 */

export const site = {
  name: "Mahmud Hasan",
  role: "AI Engineer",
  tagline:
    "Bridging advanced AI research and production-grade systems.",
  email: "mah5472651@gmail.com",
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
    "High-growth AI Engineer and Operator bridging the gap between advanced research and production-grade AI systems. Serving concurrently as the COO of Craftly (building a frontier LLM) and Founder & CEO at Aeitron AI (engineering multi-agent automation workflows for high-ticket sectors like real estate).",
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
    slug: "craftly-frontier-llm",
    title: "Craftly — Frontier LLM platform",
    year: "2024–Present",
    summary:
      "As COO of Craftly, helping build and ship a frontier LLM — connecting research, product, and production systems.",
    description:
      "Craftly is focused on building a frontier-grade language model stack. Work spans model strategy, production readiness, evaluation discipline, and cross-functional delivery so research advances become reliable product capabilities.",
    impact: [
      "COO-level ownership of engineering operations and delivery",
      "Bridge between research direction and production AI systems",
      "Cross-functional leadership across engineering and product",
    ],
    tags: ["LLM", "Research → Prod", "Leadership", "Evals"],
    links: {
      github: "https://github.com/mah5472651",
    },
    featured: true,
  },
  {
    slug: "aeitron-multi-agent",
    title: "Aeitron AI — Multi-agent automation",
    year: "2024–Present",
    summary:
      "Founder & CEO at Aeitron AI: multi-agent automation workflows for high-ticket sectors such as real estate.",
    description:
      "Aeitron AI designs and deploys multi-agent systems that automate complex business workflows. Agents coordinate tools, memory, and domain knowledge for high-ticket verticals, with a focus on reliability and real operational impact.",
    impact: [
      "Founder-led product and technical vision",
      "Multi-agent workflows for real-estate and adjacent verticals",
      "End-to-end automation from research concepts to deployed systems",
    ],
    tags: ["Multi-agent", "Automation", "Real estate", "RAG"],
    links: {
      github: "https://github.com/mah5472651",
      writeup: "/blog/building-eval-gates-for-agents",
    },
    featured: true,
  },
  {
    slug: "high-performance-rag",
    title: "High-performance RAG pipelines",
    year: "2024",
    summary:
      "Production-oriented retrieval pipelines combining hybrid search, re-ranking, and grounded generation for trustworthy answers.",
    description:
      "Design and implementation of high-performance RAG systems: chunking strategies, hybrid retrieval, re-ranking, grounding checks, and latency-aware serving — tailored for operator and product use cases.",
    impact: [
      "Grounded answers with stronger retrieval quality",
      "Patterns reusable across Aeitron AI and platform work",
      "Focus on faithfulness and production constraints",
    ],
    tags: ["RAG", "Vector search", "Evals", "Python"],
    links: {
      github: "https://github.com/mah5472651",
      writeup: "/blog/hybrid-search-that-actually-ships",
    },
    featured: false,
  },
  {
    slug: "agent-memory-architectures",
    title: "Advanced agent memory architectures",
    year: "2025",
    summary:
      "Memory designs for long-running agents — episodic, semantic, and tool-state memory that stays useful in production workflows.",
    description:
      "Exploration and implementation of memory layers for multi-agent systems: what to store, when to retrieve, how to avoid noise, and how memory interfaces with orchestration and RAG.",
    impact: [
      "More coherent multi-step agent sessions",
      "Reusable memory patterns for automation products",
      "Clearer separation of short-term vs long-term agent state",
    ],
    tags: ["Agents", "Memory", "Orchestration"],
    links: {
      github: "https://github.com/mah5472651",
    },
    featured: false,
  },
  {
    slug: "cybersecurity-intelligence",
    title: "Cybersecurity intelligence systems",
    year: "2023–2024",
    summary:
      "AI-assisted cybersecurity intelligence workflows — signal processing, prioritization, and operator-facing insights.",
    description:
      "Application of AI systems to cybersecurity intelligence: structuring noisy signals, assisting analysts, and building pipelines that surface high-value security insights without drowning operators in false positives.",
    impact: [
      "Smarter triage and prioritization of security signals",
      "AI workflows that support human operators",
      "Intersection of security domain knowledge and ML systems",
    ],
    tags: ["Cybersecurity", "Intelligence", "ML systems"],
    links: {
      github: "https://github.com/mah5472651",
    },
    featured: false,
  },
];

export const experience = [
  {
    company: "Craftly",
    role: "COO · AI Engineer / Operator",
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
