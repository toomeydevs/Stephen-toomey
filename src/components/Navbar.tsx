import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group relative font-mono text-xl font-bold tracking-tight">
          <span className="gradient-text-animated">ST</span>
          <span className="text-foreground/30">.</span>
          <span className="gradient-text">dev</span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative inline-block rounded-lg px-4 py-2 font-mono text-sm transition-all duration-200 ${
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {pathname === item.path && (
                  <span className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_12px_hsl(160_80%_55%/0.15)]" />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute transition-all duration-300 ${
              open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-90"
            }`}
          >
            <X size={18} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              open ? "opacity-0 scale-50 -rotate-90" : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <Menu size={18} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-white/5 px-6 pb-5">
          <ul className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-mono text-sm transition-all duration-200 ${
                    pathname === item.path
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
