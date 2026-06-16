import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border section-padding text-center">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/toomeydevs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/stephentoomey-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@stephentoomey.dev" className="text-muted-foreground transition-colors hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 Stephen Toomey. Built with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
