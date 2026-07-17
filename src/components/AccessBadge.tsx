import type { ProjectAccess } from "@/data/portfolio";

const labels: Record<ProjectAccess, string> = {
  public: "Public",
  private: "Private source",
  "case-study": "Case study",
};

const hints: Record<ProjectAccess, string> = {
  public: "Source or demo is public",
  private: "Codebase not public — details on request",
  "case-study": "Architecture & outcomes documented; source on request",
};

type Props = {
  access: ProjectAccess;
  className?: string;
};

export default function AccessBadge({ access, className = "" }: Props) {
  return (
    <span
      title={hints[access]}
      className={`inline-flex items-center rounded border border-card-border bg-background/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted ${className}`}
    >
      {labels[access]}
    </span>
  );
}
