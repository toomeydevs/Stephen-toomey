import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

const education = [
  {
    institution: "University of the People",
    degree: "Bachelor of Science in Computer Science",
    dates: "Graduated 2025",
    icon: GraduationCap,
    labelColor: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    chipBorder: "border-emerald-500/20",
    chipBg: "bg-emerald-500/8",
    topBar: "from-emerald-500 to-teal-500",
    glow: "[box-shadow:0_0_30px_hsl(160_80%_55%/0.1)]",
    highlights: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    institution: "Self-Directed Learning",
    degree: "Intensive Project-Based Full-Stack Curriculum",
    dates: "2024 – 2025",
    icon: Briefcase,
    labelColor: "text-cyan-400",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/5",
    chipBorder: "border-cyan-500/20",
    chipBg: "bg-cyan-500/8",
    topBar: "from-cyan-500 to-sky-500",
    glow: "[box-shadow:0_0_30px_hsl(190_85%_60%/0.1)]",
    highlights: [
      "7 Deployed Applications",
      "Cloud Deployment (Vercel, Railway)",
      "Payment Integration (Paystack)",
      "CS Fundamentals Applied",
    ],
  },
];

const Education = () => (
  <div className="section-padding relative overflow-hidden">
    {/* BG orbs */}
    <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/4 blur-[130px]" />
    <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/4 blur-[100px]" />

    <div className="relative mx-auto max-w-4xl">
      <SectionHeading
        title="Education"
        subtitle="My academic background and hands-on learning journey"
        badge="// background"
      />

      {/* Timeline */}
      <div className="relative space-y-10">
        {/* Glowing vertical line (desktop) */}
        <div className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-primary/50 via-cyan-500/30 to-transparent md:block" />

        {education.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <div
              key={edu.institution}
              className="flex gap-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Timeline icon node */}
              <div className="relative z-10 hidden md:flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${edu.border} ${edu.bg} ${edu.glow}`}
                >
                  <Icon className={`h-5 w-5 ${edu.labelColor}`} />
                </div>
              </div>

              {/* Card */}
              <div
                className={`flex-1 overflow-hidden rounded-2xl border ${edu.border} bg-card/50 backdrop-blur-sm ${edu.glow} transition-all duration-300 hover:scale-[1.01]`}
              >
                {/* Top gradient bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${edu.topBar}`} />

                <div className="p-7">
                  {/* Date badge */}
                  <span
                    className={`inline-block rounded-full border ${edu.chipBorder} ${edu.chipBg} px-3 py-1 font-mono text-xs font-semibold ${edu.labelColor}`}
                  >
                    {edu.dates}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className={`mt-1 text-sm font-semibold ${edu.labelColor}`}>{edu.institution}</p>

                  {/* Highlight chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className={`flex items-center gap-1.5 rounded-lg border ${edu.chipBorder} ${edu.chipBg} px-3 py-1.5 font-mono text-xs text-foreground/80`}
                      >
                        <CheckCircle2 size={10} className={edu.labelColor} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Education;
