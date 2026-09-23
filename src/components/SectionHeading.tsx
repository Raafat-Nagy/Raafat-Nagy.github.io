interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
        {'// '}
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
