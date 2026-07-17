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
    return `mailto:${this.email}?subject=${encodeURIComponent(`Hello ${this.name}`)}`;
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

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** Short blurb shown on homepage cards */
  summary: string;
  /** Longer intro for the project landing page hero */
  description: string;
  /** Key contribution bullets on the detail page */
  impact: string[];
  /** Optional deep-dive sections for the full landing page */
  sections?: ProjectSection[];
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
    slug: "aeitron-cybersecurity-agentic-coding-llm",
    title: "Aeitron — Scratch-Trained Cybersecurity & Agentic Coding LLM",
    year: "Present",
    summary:
      "From-scratch cybersecurity LLM with training control plane, defensive data mixing, and distributed training.",
    description:
      "Designed and built a full training control plane for a from-scratch cybersecurity and agentic coding LLM — covering tokenizer/data pipelines, evaluation harnesses, gated qualification, defensive-only curriculum data, and a distributed training workspace with production readiness contracts.",
    impact: [
      "Designed and built a full training control plane for a from-scratch cybersecurity LLM, including tokenizer/data pipelines, evaluation harnesses, and a gated qualification staircase (1k→1M step milestones) requiring checkpoint reload-verification and regression gates before promotion.",
      "Built a curriculum-first defensive-only data mixing system that filters offensive misuse patterns and enforces hallucination guardrails (no fabricated CVEs, no unverified test-pass claims).",
      "Implemented a distributed training workspace with Postgres-backed job state machine, FSDP/DeepSpeed/Megatron scheduler adapters, and production readiness contracts distinguishing proven vs. cluster-unproven components.",
    ],
    sections: [
      {
        title: "Training control plane",
        paragraphs: [
          "End-to-end ownership of the training lifecycle for a cybersecurity LLM trained from scratch: tokenizer and data pipelines, evaluation harnesses, and promotion policy as code.",
          "A gated qualification staircase (1k → 1M step milestones) blocks unsafe promotions. Each milestone requires checkpoint reload-verification and regression gates before a build can advance.",
        ],
      },
      {
        title: "Defensive-only data curriculum",
        paragraphs: [
          "Curriculum-first data mixing keeps the model oriented toward defensive cybersecurity and agentic coding assistance — not offensive misuse.",
          "Guardrails reject offensive patterns and hallucination failure modes such as fabricated CVEs or unverified “test pass” claims, so evaluation and training stay aligned with safe deployment goals.",
        ],
      },
      {
        title: "Distributed training workspace",
        paragraphs: [
          "Postgres-backed job state machine tracks runs, stages, and promotion eligibility across the cluster.",
          "Scheduler adapters for FSDP, DeepSpeed, and Megatron, plus production readiness contracts that clearly separate proven components from cluster-unproven experiments.",
        ],
      },
    ],
    tags: [
      "PyTorch",
      "FSDP/DeepSpeed",
      "Postgres",
      "Redis",
      "S3/MinIO",
      "Kubernetes",
      "FastAPI",
      "CUDA",
      "Cybersecurity",
      "LLM",
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
      "Unified Agency OS for finance, invoicing, CRM, and team tools with an AI copilot.",
    description:
      "A comprehensive Unified Agency OS for finance tracking, automated invoicing, CRM, and team management — with an AI business assistant for real-time operational analytics and automated pipeline tracking for real estate leads.",
    impact: [
      "Unified Agency OS: Engineered a comprehensive enterprise dashboard unifying finance tracking, automated invoicing, CRM, and team management tools.",
      "AI Copilot & Real-Time Analytics: Integrated an AI business assistant providing real-time operational analytics and automated pipeline tracking for real estate leads.",
      "Premium Frontend Stack: Developed a highly responsive, minimalist, and scalable UI from scratch using React, Vite, TypeScript, and Tailwind CSS.",
    ],
    sections: [
      {
        title: "Unified Agency OS",
        paragraphs: [
          "One surface for operators: finance tracking, automated invoicing, CRM, and team management — designed for high-ticket agency workflows, especially real estate.",
          "The product goal is fewer tools and clearer state: what money moved, which leads are hot, and who owns the next action.",
        ],
      },
      {
        title: "AI copilot & analytics",
        paragraphs: [
          "An AI business assistant surfaces operational analytics in real time and helps track pipeline movement for real estate leads.",
          "Copilot flows sit on top of the same operational data the dashboard already trusts — not a disconnected chat demo.",
        ],
      },
      {
        title: "Frontend architecture",
        paragraphs: [
          "Built from scratch with React, Vite, TypeScript, and Tailwind CSS for a minimalist, responsive UI that scales with new modules without layout debt.",
        ],
      },
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

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
