import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  numColor: string;
}

const projects: Project[] = [
  {
    title: "AfriMarket — Multi-Vendor Marketplace",
    description:
      "Architected a full-stack multi-vendor marketplace enabling sellers to create stores, manage products, and process orders with Paystack integration.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Paystack", "Cloudinary", "Docker", "GitHub Actions"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/afrimarket",
    featured: true,
    gradientFrom: "from-emerald-500/25",
    gradientTo: "to-teal-500/5",
    borderColor: "border-emerald-500/25",
    numColor: "text-emerald-500/10",
  },
  {
    title: "Full-Stack Social Media Dashboard",
    description:
      "Real-time social dashboard with live notifications via Socket.io and interactive analytics with Chart.js.",
    tags: ["React", "Node.js", "Socket.io", "Chart.js", "JWT", "Docker"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/social-dashboard",
    gradientFrom: "from-violet-500/25",
    gradientTo: "to-purple-500/5",
    borderColor: "border-violet-500/25",
    numColor: "text-violet-500/10",
  },
  {
    title: "Full-Stack Note-Taking App",
    description:
      "Full-stack CRUD app with category filtering, full-text MongoDB search, and user data isolation.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/note-app.git",
    demo: "https://note-app-zeta-steel.vercel.app/",
    gradientFrom: "from-blue-500/25",
    gradientTo: "to-indigo-500/5",
    borderColor: "border-blue-500/25",
    numColor: "text-blue-500/10",
  },
  {
    title: "E-Commerce Product Page",
    description:
      "Feature-rich product listing with search, category filtering, multi-field sorting, and complex cart state management.",
    tags: ["React", "Context API", "useReducer", "useMemo"],
    category: "Frontend",
    github: "https://github.com/toomeydevs/ecommerce-app.git",
    demo: "https://ecommerce-app-khlk.vercel.app/",
    gradientFrom: "from-orange-500/25",
    gradientTo: "to-amber-500/5",
    borderColor: "border-orange-500/25",
    numColor: "text-orange-500/10",
  },
  {
    title: "Weather Dashboard",
    description:
      "Weather app with city search, geolocation, and dynamic weather-responsive gradient backgrounds.",
    tags: ["React", "React Router", "OpenWeatherMap API", "Custom Hooks"],
    category: "Frontend",
    github: "https://github.com/toomeydevs/weather-dashbard.git",
    demo: "https://weather-dashbard.vercel.app/",
    gradientFrom: "from-sky-500/25",
    gradientTo: "to-cyan-500/5",
    borderColor: "border-sky-500/25",
    numColor: "text-sky-500/10",
  },
  {
    title: "RESTful Blog API",
    description:
      "Production REST API with full CRUD, MongoDB query filtering, full-text search, and server-side validation.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Railway"],
    category: "Backend",
    github: "https://github.com/toomeydevs/blog-api",
    gradientFrom: "from-rose-500/25",
    gradientTo: "to-pink-500/5",
    borderColor: "border-rose-500/25",
    numColor: "text-rose-500/10",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section-padding relative overflow-hidden">
      {/* BG orbs */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built — from full-stack platforms to polished UIs"
          badge="// my work"
        />

        {/* Filter pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative overflow-hidden rounded-full px-6 py-2 font-mono text-xs font-semibold transition-all duration-300 ${
                filter === cat
                  ? "text-black shadow-[0_0_20px_hsl(160_80%_55%/0.35)]"
                  : "border border-border/70 text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter === cat && (
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500" />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border ${project.borderColor} bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-scale-in`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Gradient header */}
              <div
                className={`relative h-28 overflow-hidden bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}
              >
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1 font-mono text-[10px] text-primary backdrop-blur-sm">
                    <Star size={9} fill="currentColor" /> Featured
                  </div>
                )}
                {/* Decorative rings */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/6" />
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-white/4" />
                {/* Big number watermark */}
                <span className={`absolute bottom-2 left-5 font-mono text-5xl font-black ${project.numColor} select-none`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                  {project.category}
                </div>
                <h3 className="mb-3 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-secondary/60 px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-md border border-border/40 bg-secondary/40 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-5 border-t border-border/40 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
