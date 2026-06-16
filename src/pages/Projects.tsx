import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AfriMarket — Multi-Vendor Marketplace",
    description: "Architected a full-stack multi-vendor marketplace enabling sellers to create stores, manage products, and process orders with Paystack integration.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Paystack", "Cloudinary", "Docker", "GitHub Actions"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/afrimarket",
    demo: "#",
  },
  {
    title: "Full-Stack Social Media Dashboard",
    description: "Built real-time social dashboard with live notifications using Socket.io and interactive analytics with Chart.js.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Chart.js", "JWT", "Docker"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/social-dashboard",
    demo: "#",
  },
  {
    title: "Full-Stack Note-Taking Application",
    description: "Full-stack CRUD application with category filtering, full-text search using MongoDB $regex, and user data isolation.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel", "Railway"],
    category: "Full-Stack",
    github: "https://github.com/toomeydevs/note-app.git",
    demo: "https://note-app-zeta-steel.vercel.app/",
  },
  {
    title: "E-Commerce Product Page",
    description: "Feature-rich product listing with search, category filtering, multi-field sorting, and complex cart state management.",
    tags: ["React", "Context API", "useReducer", "useMemo"],
    category: "Frontend",
    github: "https://github.com/toomeydevs/ecommerce-app.git",
    demo: "https://ecommerce-app-khlk.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "Weather application with city search, browser geolocation support, and dynamic weather-responsive gradient backgrounds.",
    tags: ["React", "React Router", "OpenWeatherMap API", "Custom Hooks"],
    category: "Frontend",
    github: "https://github.com/toomeydevs/weather-dashbard.git",
    demo: "https://weather-dashbard.vercel.app/",
  },
  {
    title: "RESTful Blog API",
    description: "Production REST API with full CRUD operations, MongoDB query filtering, search, and server-side validation.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Railway"],
    category: "Backend",
    github: "https://github.com/toomeydevs/blog-api",
    demo: "#",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="A selection of things I've built" />

        {/* Filters */}
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

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:box-glow animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 font-mono text-xs text-primary">{project.category}</div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
