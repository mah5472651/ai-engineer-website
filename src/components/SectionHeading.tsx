type Props = {
  id?: string;
  command: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ command, title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-accent">$ {command}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
