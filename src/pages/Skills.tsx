import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript (ES6+)", level: 95, category: "Languages" },
  { name: "HTML5 / CSS3", level: 95, category: "Languages" },
  { name: "Node.js", level: 90, category: "Languages" },
  { name: "SQL Basics", level: 75, category: "Languages" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Vite", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "GitHub Actions", level: 80, category: "DevOps" },
  { name: "Jest / Vitest", level: 75, category: "Testing" },
  { name: "Data Structures", level: 85, category: "Computer Science" },
  { name: "Algorithms", level: 80, category: "Computer Science" },
];

const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 font-mono text-xs font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground box-glow"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-card-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
