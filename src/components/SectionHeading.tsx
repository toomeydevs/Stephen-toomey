interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const SectionHeading = ({ title, subtitle, badge }: SectionHeadingProps) => (
  <div className="mb-16 text-center">
    {badge && (
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 font-mono text-xs font-medium text-primary/80 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        {badge}
      </span>
    )}
    <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
      <span className="gradient-text-animated">{title}</span>
    </h2>
    {subtitle && (
      <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
        {subtitle}
      </p>
    )}
    <div className="mt-6 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
  </div>
);

export default SectionHeading;
