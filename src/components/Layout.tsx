import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>

      <footer className="relative border-t border-white/5 pb-10 pt-14 px-6">
        {/* Glowing top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-7">
            {/* Logo */}
            <Link to="/" className="font-mono text-2xl font-bold tracking-tight">
              <span className="gradient-text-animated">ST</span>
              <span className="text-foreground/25">.</span>
              <span className="gradient-text">dev</span>
            </Link>

            {/* Tagline */}
            <p className="font-mono text-xs text-muted-foreground/60 text-center max-w-xs leading-relaxed">
              Building the web, one commit at a time.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/toomeydevs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_hsl(160_80%_55%/0.2)]">
                  <Github size={18} />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/60 group-hover:text-primary/70 transition-colors">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/stephentoomey-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 group-hover:border-blue-400/40 group-hover:text-blue-400 group-hover:bg-blue-500/5 group-hover:shadow-[0_0_20px_hsl(214_95%_60%/0.2)]">
                  <Linkedin size={18} />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/60 group-hover:text-blue-400/70 transition-colors">LinkedIn</span>
              </a>

              <a
                href="mailto:hello@stephentoomey.dev"
                aria-label="Email"
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 group-hover:border-violet-400/40 group-hover:text-violet-400 group-hover:bg-violet-500/5 group-hover:shadow-[0_0_20px_hsl(262_80%_60%/0.2)]">
                  <Mail size={18} />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground/60 group-hover:text-violet-400/70 transition-colors">Email</span>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-border/60 to-transparent" />

            {/* Copyright */}
            <p className="font-mono text-xs text-muted-foreground/50">
              © 2026 Stephen Toomey — Built with{" "}
              <span className="text-primary/70">React</span> &{" "}
              <span className="gradient-text font-semibold">passion</span>
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="absolute right-0 bottom-0 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_16px_hsl(160_80%_55%/0.2)]"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
