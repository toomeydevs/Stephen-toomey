import { useState, useEffect } from "react";
import { ArrowRight, FileDown, Globe, Server, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const TYPEWRITER_TEXTS = [
  "Full-Stack Software Engineer",
  "React & Node.js Developer",
  "Backend API Designer",
  "CS Graduate",
];

const stats = [
  { value: "7+", label: "Projects Deployed" },
  { value: "2+", label: "Years Building" },
  { value: "BSc", label: "Computer Science" },
  { value: "10+", label: "Technologies" },
];

const highlights = [
  {
    icon: Globe,
    label: "Full-Stack Dev",
    desc: "End-to-end React frontends & Node.js backends",
    from: "from-emerald-500/20",
    to: "to-teal-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Server,
    label: "Backend APIs",
    desc: "REST APIs, Express, MongoDB & Docker",
    from: "from-cyan-500/20",
    to: "to-sky-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: BarChart3,
    label: "CS Fundamentals",
    desc: "Data structures, algorithms & systems",
    from: "from-violet-500/20",
    to: "to-purple-500/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
];

const Index = () => {
  const [typeText, setTypeText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = TYPEWRITER_TEXTS[textIndex];
    const speed = deleting ? 38 : 75;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, charIndex + 1);
        setTypeText(next);
        if (charIndex + 1 === current.length) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setDeleting(true); }, 2200);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        const next = current.slice(0, charIndex - 1);
        setTypeText(next);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, isPaused]);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden hero-mesh">
        {/* Ambient light orbs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-[140px] animate-float-slow" />
        <div className="pointer-events-none absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/6 blur-[130px] animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[100px] animate-float-slow" style={{ animationDelay: "6s" }} />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Status badge */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: "0.05s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-5 py-2 font-mono text-xs text-primary/80 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_hsl(160_80%_55%/0.8)]" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up mb-4 font-extrabold leading-[0.9] tracking-tight" style={{ animationDelay: "0.15s" }}>
            <span className="block text-[clamp(3.5rem,10vw,7rem)] text-foreground/90">Stephen</span>
            <span className="block text-[clamp(3.5rem,10vw,7rem)] gradient-text-animated">Toomey</span>
          </h1>

          {/* Typewriter */}
          <div className="animate-fade-in-up mb-8 flex h-12 items-center justify-center" style={{ animationDelay: "0.3s" }}>
            <p className="font-mono text-lg text-muted-foreground md:text-xl">
              <span className="text-foreground/50">&gt;&nbsp;</span>
              <span className="text-primary">{typeText}</span>
              <span className="animate-blink-cursor ml-0.5 inline-block h-5 w-0.5 bg-primary align-middle" />
            </p>
          </div>

          {/* Description */}
          <p
            className="animate-fade-in-up mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            I build performant, production-ready web applications with modern tools.
            Passionate about clean code, robust APIs, and strong CS fundamentals.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(160_80%_55%/0.45)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              View Projects <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/40 px-8 py-3.5 font-semibold text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="border-y border-white/5 bg-card/20 py-10 px-6 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-black gradient-text md:text-5xl">{stat.value}</div>
              <div className="mt-1.5 font-mono text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, label, desc, from, to, border, iconColor, iconBg }, i) => (
            <div
              key={label}
              className={`group relative overflow-hidden rounded-2xl border ${border} bg-gradient-to-br ${from} ${to} p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-scale-in`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Decorative corner circle */}
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-white/5 opacity-60" />
              <div className="absolute -right-3 -top-3 h-10 w-10 rounded-full border border-white/5 opacity-40" />

              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg} ${iconColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <Icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Resume CTA ─── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/8 via-background to-cyan-500/5 p-12 text-center">
            {/* Glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-primary/15 blur-[70px]" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                <FileDown className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
                <span className="gradient-text-animated">Download My Resume</span>
              </h2>
              <p className="mb-8 mx-auto max-w-md text-muted-foreground">
                Get a detailed overview of my experience, skills, and education.
              </p>
              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(160_80%_55%/0.45)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <FileDown size={18} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
