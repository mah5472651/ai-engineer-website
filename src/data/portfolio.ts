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
      "From-scratch cybersecurity & agentic coding LLM: training infrastructure, safety systems, qualification pipelines, and distributed ops.",
    description:
      "Aeitron is an advanced research and engineering initiative focused on building a cybersecurity and agentic coding large language model from the ground up. Rather than fine-tuning an existing model, the project is centered around developing the infrastructure, training systems, safety mechanisms, evaluation frameworks, and operational workflows required to support a truly sovereign AI foundation. The project was designed to explore what it takes to build a production-oriented cybersecurity language model capable of reasoning about software systems, understanding complex codebases, assisting engineering workflows, and supporting defensive security operations while maintaining strict safety and reliability standards.",
    impact: [
      "Scratch-built LLM training infrastructure spanning tokenizer development, dataset management, training orchestration, and operational workflows.",
      "Cybersecurity-focused model development workflows oriented toward defensive security, factual accuracy, and responsible outputs.",
      "Agentic coding and software engineering foundations for reasoning about systems, codebases, and engineering assistance.",
      "Distributed training orchestration and job management across cloud-native compute environments.",
      "Automated checkpoint validation and qualification systems with milestone-based promotion gates.",
      "Defensive-only data governance architecture that filters harmful patterns and prioritizes secure behavior.",
      "Hallucination monitoring and regression testing to catch fabricated security claims and unsupported conclusions.",
      "Experiment tracking and model lifecycle management from early milestones through production readiness.",
      "Production-grade infrastructure readiness framework distinguishing proven components from unproven experiments.",
      "Scalable cloud-native AI training architecture for large-scale, reliable training workloads.",
    ],
    sections: [
      {
        title: "What makes Aeitron different",
        paragraphs: [
          "Most AI products are built by adapting existing foundation models. Aeitron takes a different approach by focusing on the complete lifecycle required for training and operating a cybersecurity-focused language model from scratch — including tokenizer development, dataset management, training orchestration, evaluation systems, and qualification pipelines.",
        ],
      },
      {
        title: "Scratch-first development philosophy",
        paragraphs: [
          "Rather than fine-tuning an off-the-shelf model as the primary path, Aeitron invests in the full stack needed to own the foundation: data, training, evaluation, safety, and operations.",
          "This philosophy keeps the team honest about infrastructure quality — if the control plane, datasets, or gates are weak, the model cannot progress.",
        ],
      },
      {
        title: "Cybersecurity-focused architecture",
        paragraphs: [
          "The platform is designed around defensive security use cases. Every major component of the training and evaluation workflow is structured to prioritize secure behavior, factual accuracy, responsible outputs, and operational reliability.",
        ],
      },
      {
        title: "Qualification-based training pipeline",
        paragraphs: [
          "Aeitron introduces a structured model qualification staircase where training progress is validated through milestone-based checkpoints.",
          "Models must successfully pass evaluation, reload verification, and regression testing before advancing to the next stage, helping ensure training quality remains consistent throughout the development lifecycle.",
        ],
      },
      {
        title: "Safety and hallucination control",
        paragraphs: [
          "The project incorporates dedicated guardrails designed to reduce unsafe behavior and misinformation.",
          "Data pipelines are engineered to discourage harmful content patterns while evaluation systems continuously monitor for fabricated security claims, inaccurate outputs, and unsupported conclusions.",
        ],
      },
      {
        title: "Production-oriented infrastructure",
        paragraphs: [
          "Beyond model development, Aeitron includes the engineering systems required to operate large-scale AI workloads.",
          "Training jobs, checkpoint management, distributed execution, infrastructure orchestration, and workflow automation are designed using modern cloud-native engineering practices.",
        ],
      },
      {
        title: "Distributed AI training workspace",
        paragraphs: [
          "The platform provides a centralized environment for managing model training operations, experiment tracking, job scheduling, resource allocation, and training lifecycle management across distributed compute environments.",
        ],
      },
      {
        title: "Evaluation-driven development",
        paragraphs: [
          "Every major training milestone is supported by automated evaluation workflows that measure model behavior, quality, consistency, reliability, and operational readiness before progression to subsequent training phases.",
        ],
      },
      {
        title: "Vision",
        paragraphs: [
          "Aeitron's long-term vision is to establish a sovereign AI foundation capable of supporting advanced cybersecurity intelligence, autonomous software engineering, large-scale reasoning systems, and next-generation agentic workflows.",
          "The project represents an effort to combine AI research, systems engineering, security principles, and production infrastructure into a unified platform built for reliability, scalability, and long-term innovation.",
        ],
      },
    ],
    tags: [
      "PyTorch",
      "FSDP",
      "DeepSpeed",
      "PostgreSQL",
      "Redis",
      "S3/MinIO",
      "Kubernetes",
      "FastAPI",
      "CUDA",
      "Cybersecurity",
      "LLM",
      "Agentic Coding",
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
