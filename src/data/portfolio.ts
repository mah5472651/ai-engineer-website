/**
 * Portfolio content — edit this file to personalize the site.
 */

export const site = {
  name: "Alex Rivera",
  role: "AI Engineer",
  tagline: "Building reliable ML systems that ship.",
  email: "alex.rivera@example.com",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    x: "https://x.com/alexrivera",
    scholar: "https://scholar.google.com",
  },
};

export const about = {
  paragraphs: [
    "I'm an AI engineer focused on production ML systems — from research prototypes to low-latency inference at scale. I care about model quality, evaluation rigor, and the glue that makes AI products actually work.",
    "Recently I've shipped LLM agents, retrieval pipelines, and fine-tuned models for real users. I work across the stack: Python services, vector search, training loops, and frontend surfaces when the product needs it.",
    "Outside of shipping models, I write about evaluation, prompt systems, and the messy middle between notebooks and production. Read the latest on the blog.",
  ],
  highlights: [
    { label: "Years building ML", value: "6+" },
    { label: "Models in production", value: "20+" },
    { label: "Latency budgets hit", value: "p99 < 200ms" },
  ],
};

export const skills = {
  categories: [
    {
      title: "ML & Deep Learning",
      items: [
        "PyTorch",
        "Transformers",
        "Fine-tuning / LoRA",
        "RLHF / DPO",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      title: "LLM Systems",
      items: [
        "RAG",
        "Agents & tools",
        "Eval harnesses",
        "Prompt engineering",
        "vLLM / TGI",
        "LangChain / LlamaIndex",
      ],
    },
    {
      title: "MLOps & Infra",
      items: [
        "Kubernetes",
        "Docker",
        "MLflow / W&B",
        "Feature stores",
        "CI/CD for models",
        "GPU optimization",
      ],
    },
    {
      title: "Software",
      items: [
        "Python",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "AWS / GCP",
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
    slug: "aether-agents",
    title: "Aether — Multi-agent research system",
    year: "2025",
    summary:
      "Orchestrates research agents with tool use, long-term memory, and automated evals. Cut literature review time by ~70% for internal teams.",
    description:
      "Aether is a multi-agent system for technical research. Planner, search, reader, and critic agents collaborate over a shared memory store. Tools include web/search APIs, PDF parsing, and code execution sandboxes. An offline eval suite scores faithfulness, citation coverage, and task completion on a fixed benchmark of 120 research tasks.",
    impact: [
      "~70% faster literature reviews for ML and product research teams",
      "Faithfulness score +18 pts after critic-agent + citation checks",
      "Eval gate blocks regressions before each weekly model/prompt release",
    ],
    tags: ["Agents", "LangGraph", "OpenAI", "Evals", "Python"],
    links: {
      demo: "https://github.com/alexrivera/aether",
      github: "https://github.com/alexrivera/aether",
      writeup: "/blog/building-eval-gates-for-agents",
    },
    featured: true,
  },
  {
    slug: "vectorforge-rag",
    title: "VectorForge — Production RAG platform",
    year: "2024",
    summary:
      "End-to-end retrieval with hybrid search, cross-encoder re-ranking, and streaming answers. Serves 2M+ queries/month at p99 < 180ms.",
    description:
      "VectorForge is a multi-tenant RAG platform: document ingest, chunking strategies, hybrid BM25 + dense retrieval (pgvector), cross-encoder re-rank, and streaming generation. Includes tenant isolation, per-collection ACLs, query caching, and latency/quality dashboards. Deployed on Kubernetes with autoscaling GPU inference via vLLM.",
    impact: [
      "2M+ queries/month in production",
      "p99 end-to-end latency under 180ms for retrieval path",
      "Answer faithfulness +22% vs. naive top-k dense-only baseline",
    ],
    tags: ["RAG", "pgvector", "FastAPI", "vLLM", "Redis"],
    links: {
      demo: "https://github.com/alexrivera/vectorforge",
      github: "https://github.com/alexrivera/vectorforge",
      writeup: "/blog/hybrid-search-that-actually-ships",
    },
    featured: true,
  },
  {
    slug: "signalnet",
    title: "SignalNet — Real-time anomaly detection",
    year: "2023",
    summary:
      "Streaming ML for infrastructure metrics. Online learning cut false positives 40% vs. static thresholds.",
    description:
      "SignalNet processes high-volume time-series from Kafka, scores anomalies with a mix of statistical baselines and neural forecasters, and pages on-call only when confidence and business impact pass thresholds. Includes feature store integration, model drift monitors, and shadow-mode rollouts.",
    impact: [
      "40% fewer false-positive pages vs. static thresholds",
      "Sub-second scoring on multi-tenant metric streams",
      "Shadow deploys with automatic rollback on drift alerts",
    ],
    tags: ["PyTorch", "Kafka", "Time-series", "MLOps"],
    links: {
      github: "https://github.com/alexrivera/signalnet",
      writeup: "/blog/online-learning-for-anomaly-detection",
    },
    featured: false,
  },
  {
    slug: "tunekit",
    title: "TuneKit — LoRA fine-tuning toolkit",
    year: "2024",
    summary:
      "Opinionated CLI and configs for domain adaptation of open models. Adopted by five product teams for custom assistants.",
    description:
      "TuneKit wraps PEFT/LoRA training, data recipes, eval harness hooks, and export-to-vLLM in one CLI. Teams define domain datasets and eval sets; TuneKit handles training jobs, artifact versioning, and a one-command smoke test against golden prompts before promotion.",
    impact: [
      "Used by 5 product teams for domain assistants",
      "Median 3 days from dataset ready → canary deploy",
      "Shared eval suite prevents silent quality regressions",
    ],
    tags: ["LoRA", "Hugging Face", "PEFT", "CLI"],
    links: {
      github: "https://github.com/alexrivera/tunekit",
      writeup: "/blog/lora-recipes-that-transfer",
    },
    featured: false,
  },
  {
    slug: "docmind",
    title: "DocMind — Document intelligence pipeline",
    year: "2022",
    summary:
      "Vision + NLP pipeline for invoices and contracts. Reduced manual document review by 60% in production.",
    description:
      "DocMind combines layout-aware OCR, entity extraction, and validation rules for semi-structured documents. Models were trained with weak supervision + active learning. Served behind a FastAPI gateway with human-in-the-loop review UI for low-confidence fields.",
    impact: [
      "60% reduction in manual document review volume",
      "Field-level F1 > 0.94 on internal invoice benchmark",
      "Active learning loop cut labeling cost ~35%",
    ],
    tags: ["Computer Vision", "NLP", "FastAPI", "Active Learning"],
    links: {
      github: "https://github.com/alexrivera/docmind",
    },
    featured: false,
  },
];

export const experience = [
  {
    company: "Nova Labs",
    role: "Senior AI Engineer",
    period: "2023 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Lead LLM platform: RAG, agents, and evals powering core product features for 50k+ users.",
      "Designed multi-tenant retrieval with hybrid search; improved answer faithfulness by 22%.",
      "Mentored 3 engineers; established model review and canary deployment practices.",
    ],
  },
  {
    company: "Horizon AI",
    role: "Machine Learning Engineer",
    period: "2021 — 2023",
    location: "Remote",
    bullets: [
      "Shipped vision + NLP models for document understanding; reduced manual review by 60%.",
      "Built training pipelines on Kubernetes with experiment tracking and automated regression tests.",
      "Partnered with product to define success metrics and offline/online evaluation loops.",
    ],
  },
  {
    company: "DataPulse",
    role: "ML Engineer",
    period: "2019 — 2021",
    location: "New York, NY",
    bullets: [
      "Productionized ranking and recommendation models serving high-throughput APIs.",
      "Owned feature pipelines and monitoring for drift and latency SLOs.",
    ],
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. Machine Learning",
    period: "2017 — 2019",
  },
  {
    school: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2013 — 2017",
  },
];

export const contact = {
  headline: "Let's build something intelligent.",
  blurb:
    "Open to full-time roles, consulting, and interesting AI systems problems. Prefer email — I respond within a few days.",
};
