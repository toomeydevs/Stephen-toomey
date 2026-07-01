import SectionHeading from "@/components/SectionHeading";

interface SkillGroup {
  category: string;
  dot: string;
  label: string;
  border: string;
  bg: string;
  chipBorder: string;
  chipBg: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    label: "text-emerald-400",
    dot: "bg-emerald-400",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    chipBorder: "border-emerald-500/20",
    chipBg: "bg-emerald-500/8",
    skills: [
      { name: "JavaScript (ES6+)", level: 5 },
      { name: "HTML5 / CSS3", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Node.js", level: 5 },
      { name: "SQL Basics", level: 4 },
    ],
  },
  {
    category: "Frontend",
    label: "text-cyan-400",
    dot: "bg-cyan-400",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/5",
    chipBorder: "border-cyan-500/20",
    chipBg: "bg-cyan-500/8",
    skills: [
      { name: "React", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Vite", level: 4 },
      { name: "React Router", level: 4 },
    ],
  },
  {
    category: "Backend",
    label: "text-violet-400",
    dot: "bg-violet-400",
    border: "border-violet-500/25",
    bg: "bg-violet-500/5",
    chipBorder: "border-violet-500/20",
    chipBg: "bg-violet-500/8",
    skills: [
      { name: "Express.js", level: 5 },
      { name: "MongoDB", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "JWT Auth", level: 4 },
      { name: "Socket.io", level: 4 },
    ],
  },
  {
    category: "DevOps & Tools",
    label: "text-orange-400",
    dot: "bg-orange-400",
    border: "border-orange-500/25",
    bg: "bg-orange-500/5",
    chipBorder: "border-orange-500/20",
    chipBg: "bg-orange-500/8",
    skills: [
      { name: "Docker", level: 4 },
      { name: "GitHub Actions", level: 4 },
      { name: "Vercel / Railway", level: 5 },
      { name: "Git", level: 5 },
    ],
  },
  {
    category: "CS & Testing",
    label: "text-rose-400",
    dot: "bg-rose-400",
    border: "border-rose-500/25",
    bg: "bg-rose-500/5",
    chipBorder: "border-rose-500/20",
    chipBg: "bg-rose-500/8",
    skills: [
      { name: "Data Structures", level: 4 },
      { name: "Algorithms", level: 4 },
      { name: "Jest / Vitest", level: 4 },
    ],
  },
];

const Skills = () => (
  <div className="section-padding relative overflow-hidden">
    {/* BG orbs */}
    <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/4 blur-[130px]" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/4 blur-[100px]" />

    <div className="relative mx-auto max-w-6xl">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with daily — from frontend to deployment"
        badge="// tech stack"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            className={`rounded-2xl border ${group.border} ${group.bg} backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] animate-scale-in`}
            style={{ animationDelay: `${gi * 100}ms` }}
          >
            {/* Category header */}
            <div className="mb-5 flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${group.dot} shadow-lg`} style={{ boxShadow: `0 0 8px currentColor` }} />
              <h3 className={`font-mono text-sm font-bold ${group.label}`}>{group.category}</h3>
            </div>

            {/* Skill rows */}
            <div className="space-y-2.5">
              {group.skills.map((skill, si) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-between rounded-xl border ${group.chipBorder} bg-background/40 px-3.5 py-2.5 transition-all duration-200 hover:bg-background/60 hover:scale-[1.02] animate-fade-in-up`}
                  style={{ animationDelay: `${gi * 100 + si * 55}ms` }}
                >
                  <span className="text-sm font-medium text-foreground/85">{skill.name}</span>
                  {/* 5-dot proficiency */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, d) => (
                      <div
                        key={d}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          d < skill.level
                            ? `${group.dot} opacity-90 shadow-sm`
                            : "bg-border opacity-35"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
