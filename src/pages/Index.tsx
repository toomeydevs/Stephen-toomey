import { ArrowRight, Code, Database, BarChart3, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Code, label: "Full-Stack Dev" },
  { icon: Database, label: "Backend API Design" },
  { icon: BarChart3, label: "CS Fundamentals" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in-up">
          <p className="mb-4 font-mono text-sm tracking-widest text-primary text-glow uppercase">
            Full-Stack Software Engineer
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="gradient-text">Stephen Toomey</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I build performant web applications with modern tools.
            Passionate about clean code, robust backend APIs, and applying
            strong computer science fundamentals to solve complex problems.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:box-glow-strong hover:scale-105"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3 font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:box-glow"
            >
              <Icon className="h-8 w-8 text-primary" />
              <span className="font-mono text-sm font-medium text-card-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
          <FileDown className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="mb-2 text-2xl font-bold tracking-tight">
            <span className="gradient-text">Download My Resume</span>
          </h2>
          <p className="mb-6 text-muted-foreground">
            Get a detailed overview of my experience, skills, and education.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:box-glow-strong hover:scale-105"
          >
            <FileDown size={18} /> Download PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
