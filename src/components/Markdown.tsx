import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export default function Markdown({ content }: Props) {
  return (
    <div className="prose-terminal">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mb-3 mt-10 text-xl font-semibold tracking-tight text-foreground first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-2 mt-8 text-lg font-semibold text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-base leading-relaxed text-muted">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-5 text-muted">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-5 text-muted">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed marker:text-accent">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-accent underline-offset-4 hover:underline"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className="font-mono text-[13px] leading-relaxed text-accent-2">
                  {children}
                </code>
              );
            }
            return (
              <code className="rounded border border-card-border bg-card px-1.5 py-0.5 font-mono text-[13px] text-accent">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-5 overflow-x-auto rounded-xl border border-card-border bg-card p-4 font-mono text-[13px]">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="mb-5 overflow-x-auto">
              <table className="w-full border-collapse text-sm text-muted">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-card-border bg-card px-3 py-2 text-left font-mono text-xs text-accent">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-card-border px-3 py-2">{children}</td>
          ),
          hr: () => <hr className="my-8 border-card-border" />,
          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-2 border-accent/50 pl-4 text-muted">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
