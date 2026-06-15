import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
