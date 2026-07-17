/**
 * Portfolio content — Mahmud Hasan
 * Single source of truth for site UI, SEO copy, and resume integrity tests.
 */

export const site = {
  name: "Mahmud Hasan",
  role: "AI Engineer",
  tagline: "Bridging advanced AI research and production-grade systems.",
  /** Extra hero line (kept in data so UI copy does not drift) */
  heroExtra:
    "Multi-agent systems, high-performance RAG, and LLM productization — from Bangladesh to global scale.",
  heroRoles: "coo @ craftly · founder & ceo @ aeitron ai",
  heroFocus: "multi-agent · memory · rag · cybersecurity intelligence",
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
    "High growth AI Engineer and Operator bridging the gap between advanced research and production-grade AI systems. Serving concurrently as the COO of Craftly (building a frontier LLM) and Founder & CEO at Aeitron (engineering multi agent automation workflows for high-ticket sectors like real estate). Specialized in multi agent orchestration, advanced memory architectures, cybersecurity intelligence, and high performance RAG pipelines. Proven track record of leading cross-functional engineering teams to build globally competitive AI technology from Bangladesh.",
  ],
  highlights: [
    { label: "Roles", value: "COO + CEO" },
    { label: "Focus", value: "Agentic AI + LLM" },
    { label: "Based in", value: "Bangladesh" },
    { label: "Shipped focus", value: "Evals · Infra" },
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

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ArchitectureNode = {
  id: string;
  label: string;
};

export type ArchitectureEdge = {
  from: string;
  to: string;
};

export type ProjectArchitecture = {
  title: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
};

export type ProjectAccess = "public" | "private" | "case-study";

export type Project = {
  slug: string;
  title: string;
  /** Short blurb shown on homepage cards */
  summary: string;
  /** Longer intro for the project landing page hero */
  description: string;
  /** Key contribution bullets on the detail page */
  impact: string[];
  /** Recruiter-scannable metrics (latency, coverage, cost, etc.) */
  metrics: ProjectMetric[];
  /** Optional deep-dive sections for the full landing page */
  sections?: ProjectSection[];
  /** Flow diagram for the project case study */
  architecture?: ProjectArchitecture;
  tags: string[];
  year: string;
  links: {
    demo?: string;
    github?: string;
    writeup?: string;
  };
  /** How visitors can verify the work */
  access: ProjectAccess;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aeitron-cybersecurity-agentic-coding-llm",
    title: "Aeitron — Scratch-Trained Cybersecurity & Agentic Coding LLM",
    year: "Present",
    summary:
      "From-scratch cybersecurity & agentic coding LLM: training control plane, safety gates, and distributed ops.",
    description:
      "Aeitron is a research-and-engineering program to train a cybersecurity and agentic coding LLM with owned infrastructure — tokenizer, datasets, training orchestration, qualification gates, and defensive data governance — not a thin fine-tune on a public base model.",
    metrics: [
      { label: "Training path", value: "1k → 1M gated" },
      { label: "Stack", value: "FSDP / DeepSpeed" },
      { label: "Safety", value: "Defensive-only mix" },
      { label: "Access", value: "Case study" },
    ],
    impact: [
      "Scratch-built LLM training infrastructure: tokenizer development, dataset management, training orchestration, and operational workflows.",
      "Milestone qualification staircase — models pass eval, reload verification, and regression checks before promotion.",
      "Defensive-only data governance that filters harmful patterns and prioritizes secure, factual behavior.",
      "Hallucination monitoring for fabricated security claims and unsupported conclusions.",
      "Distributed job management across cloud-native compute with checkpoint validation.",
      "Production-readiness framework that separates proven components from experimental runs.",
    ],
    sections: [
      {
        title: "What makes Aeitron different",
        paragraphs: [
          "Most AI products adapt existing foundation models. Aeitron invests in the full lifecycle for a cybersecurity-focused model: data, training, evaluation, safety, and operations.",
        ],
      },
      {
        title: "Qualification-based training pipeline",
        paragraphs: [
          "Progress is gated. Checkpoints advance only after evaluation, reload verification, and regression suites pass — so infrastructure quality is forced to keep up with model ambition.",
        ],
      },
      {
        title: "Safety and hallucination control",
        paragraphs: [
          "Guardrails and evals target unsafe behavior and misinformation, with continuous checks for fabricated security claims.",
        ],
      },
      {
        title: "Vision",
        paragraphs: [
          "Long-term: a sovereign foundation for defensive cybersecurity intelligence, agentic software engineering, and reliable reasoning systems.",
        ],
      },
    ],
    architecture: {
      title: "Training control plane",
      nodes: [
        { id: "data", label: "Data + mix" },
        { id: "train", label: "Distributed train" },
        { id: "eval", label: "Eval gates" },
        { id: "ckpt", label: "Checkpoints" },
        { id: "promote", label: "Promote" },
      ],
      edges: [
        { from: "data", to: "train" },
        { from: "train", to: "eval" },
        { from: "eval", to: "ckpt" },
        { from: "ckpt", to: "promote" },
      ],
    },
    tags: [
      "PyTorch",
      "FSDP",
      "DeepSpeed",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "FastAPI",
      "CUDA",
      "Cybersecurity",
      "LLM",
    ],
    links: {
      github: "https://github.com/mah5472651",
    },
    access: "case-study",
    featured: true,
  },
  {
    slug: "aeitron-ai-finance-dashboard",
    title: "Aeitron AI Finance Dashboard",
    year: "Present",
    summary:
      "Unified Agency OS for finance, invoicing, CRM, and team tools with an AI copilot on operational data.",
    description:
      "A Unified Agency OS that consolidates finance tracking, automated invoicing, CRM, and team management — with an AI assistant grounded in the same operational data operators already trust.",
    metrics: [
      { label: "Surfaces", value: "Finance · CRM · Team" },
      { label: "Copilot", value: "Ops analytics" },
      { label: "Frontend", value: "React + Vite" },
      { label: "Domain", value: "Real estate ops" },
    ],
    impact: [
      "Unified finance, invoicing, CRM, and team tools into one operator surface.",
      "AI copilot for real-time operational analytics and real-estate lead pipeline tracking.",
      "Responsive TypeScript UI built with React, Vite, and Tailwind — modular for new agency tools.",
    ],
    sections: [
      {
        title: "Unified Agency OS",
        paragraphs: [
          "One surface for money movement, hot leads, and ownership of next actions — fewer tools, clearer state.",
        ],
      },
      {
        title: "AI copilot on trusted data",
        paragraphs: [
          "The assistant sits on the same operational records as the dashboard — not a disconnected chat demo.",
        ],
      },
    ],
    architecture: {
      title: "Agency OS data flow",
      nodes: [
        { id: "ingest", label: "Ingest" },
        { id: "store", label: "Ops DB" },
        { id: "ui", label: "Dashboard" },
        { id: "copilot", label: "AI copilot" },
      ],
      edges: [
        { from: "ingest", to: "store" },
        { from: "store", to: "ui" },
        { from: "store", to: "copilot" },
        { from: "copilot", to: "ui" },
      ],
    },
    tags: ["React", "Vite", "TypeScript", "Tailwind", "AI Copilot", "Dashboard"],
    links: {
      github: "https://github.com/mah5472651",
    },
    access: "case-study",
    featured: true,
  },
  {
    slug: "vectorforge-hybrid-rag",
    title: "VectorForge — Hybrid RAG Retrieval",
    year: "2025",
    summary:
      "Production hybrid retrieval: BM25 + dense + RRF + cross-encoder re-rank under a fixed latency budget.",
    description:
      "VectorForge is a production-oriented RAG retrieval stack: hybrid recall (BM25 + dense), reciprocal rank fusion, cross-encoder re-ranking, and context packing under token budgets — with the metrics needed to improve the right layer.",
    metrics: [
      { label: "Retrieval p99", value: "≤ 180ms" },
      { label: "Hybrid recall", value: "≤ 40ms p99" },
      { label: "Re-rank", value: "50 → 8 docs" },
      { label: "Cache", value: "Redis hot paths" },
    ],
    impact: [
      "Hybrid BM25 + dense (pgvector) recall with reciprocal rank fusion.",
      "Cross-encoder re-rank of fused candidates before context packing.",
      "Latency budgets enforced per stage (recall, re-rank, total retrieval).",
      "Hot-query Redis cache and HNSW tuning for stable p99.",
      "Quality tracked via Recall@k, nDCG, faithfulness, and citation hit rate.",
    ],
    sections: [
      {
        title: "Why hybrid",
        paragraphs: [
          "Dense retrieval handles paraphrase; BM25 still wins on exact IDs, error codes, and rare product names. Production systems need both.",
        ],
      },
      {
        title: "Measure the right layer",
        paragraphs: [
          "Improving embeddings without end-to-end answer faithfulness optimizes the wrong layer. VectorForge reports retrieval and generation metrics separately.",
        ],
      },
    ],
    architecture: {
      title: "Retrieval pipeline",
      nodes: [
        { id: "q", label: "Query" },
        { id: "bm25", label: "BM25" },
        { id: "dense", label: "Dense" },
        { id: "rrf", label: "RRF" },
        { id: "rerank", label: "Re-rank" },
        { id: "pack", label: "Pack" },
      ],
      edges: [
        { from: "q", to: "bm25" },
        { from: "q", to: "dense" },
        { from: "bm25", to: "rrf" },
        { from: "dense", to: "rrf" },
        { from: "rrf", to: "rerank" },
        { from: "rerank", to: "pack" },
      ],
    },
    tags: ["RAG", "pgvector", "BM25", "Hybrid search", "Redis", "Python"],
    links: {
      github: "https://github.com/mah5472651",
    },
    access: "case-study",
    featured: true,
  },
  {
    slug: "agent-release-gates",
    title: "Agent Release Gates — Eval CI for Agents",
    year: "2025",
    summary:
      "Merge-blocking agent quality gates: task suites, faithfulness, tool correctness, cost budgets, and canary deploys.",
    description:
      "A release-gate system that turns agent quality from a vibe-check into merge-blocking CI: offline task suites, faithfulness and tool-correctness scores, latency/cost budgets, plus a traffic canary with automatic rollback.",
    metrics: [
      { label: "Suite size", value: "~120 tasks" },
      { label: "Canary", value: "5% traffic" },
      { label: "Gates", value: "4 offline metrics" },
      { label: "Rollback", value: "Auto on drop" },
    ],
    impact: [
      "Fixed offline suite measuring task success, faithfulness, tool correctness, and cost/latency.",
      "CI asserts scores stay within regression bands vs. baseline before merge.",
      "5% canary with online ratings and automatic rollback on quality drops.",
      "Versioned suites (like code) so gold labels never silently rewrite.",
      "Separated prompt/model vs tool/infra changes in reports for faster root-cause.",
    ],
    sections: [
      {
        title: "Why gates matter",
        paragraphs: [
          "Agent demos look great until a prompt tweak or model upgrade silently drops task completion. Gates make regressions fail the build instead of production.",
        ],
      },
      {
        title: "Suite design",
        paragraphs: [
          "Keep suites small enough for CI, mix difficulty, version gold labels, and isolate flaky tools with mocks where safe.",
        ],
      },
    ],
    architecture: {
      title: "Release flow",
      nodes: [
        { id: "pr", label: "PR / build" },
        { id: "offline", label: "Offline suite" },
        { id: "gate", label: "Score gate" },
        { id: "canary", label: "Canary 5%" },
        { id: "prod", label: "Prod" },
      ],
      edges: [
        { from: "pr", to: "offline" },
        { from: "offline", to: "gate" },
        { from: "gate", to: "canary" },
        { from: "canary", to: "prod" },
      ],
    },
    tags: ["Agents", "Evals", "MLOps", "CI", "Canary", "Python"],
    links: {
      github: "https://github.com/mah5472651",
    },
    access: "case-study",
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
      "Serve as COO while shipping frontier LLM capability — aligning research, engineering, and product delivery.",
      "Own production path: evaluation, reliability, and promotion criteria from prototype to shippable systems.",
      "Lead cross-functional teams building competitive AI products from Bangladesh.",
    ],
  },
  {
    company: "Aeitron AI",
    role: "Founder & CEO",
    period: "Present",
    location: "Barishal, Bangladesh / Remote",
    bullets: [
      "Founded Aeitron AI for multi-agent automation in high-ticket sectors including real estate.",
      "Specialize in multi-agent orchestration, memory architectures, and high-performance RAG pipelines.",
      "Own product vision and technical direction for automation operators can trust in production.",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  group?: string;
  period: string;
  gpa?: string;
  location?: string;
  bullets?: string[];
};

export const education: EducationItem[] = [
  {
    school: "Govt BM College",
    degree: "Higher Secondary Certificate (HSC)",
    group: "Science Group",
    period: "Expected Completion: 2028",
    gpa: "Expected GPA: 5.00",
  },
  {
    school: "Baghia Al-Amin Kamil Madrasah",
    degree: "Secondary School Certificate (SSC)",
    group: "Science Group",
    period: "Completed: 2026",
    gpa: "GPA: 5.00",
  },
];

export const contact = {
  headline: "Let's build production-grade AI.",
  blurb:
    "Open to collaborations, partnerships, and high-impact AI systems work. Prefer email for first contact; WhatsApp available for quick follow-ups.",
  /** Prefer email as primary public channel; phone stays in href only when possible */
  preferEmail: true as const,
};
