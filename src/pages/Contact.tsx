import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin, Mail, Send, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@toomeydevs",
    href: "https://github.com/toomeydevs",
    hoverClass: "group-hover:border-white/25 group-hover:text-white group-hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "stephentoomey-dev",
    href: "https://www.linkedin.com/in/stephentoomey-dev",
    hoverClass: "group-hover:border-blue-400/35 group-hover:text-blue-400 group-hover:shadow-[0_0_18px_hsl(214_95%_60%/0.15)]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@stephentoomey.dev",
    href: "mailto:hello@stephentoomey.dev",
    hoverClass: "group-hover:border-violet-400/35 group-hover:text-violet-400 group-hover:shadow-[0_0_18px_hsl(262_80%_60%/0.15)]",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Message sent! ✓",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const inputBase =
    "w-full rounded-xl border bg-card/50 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 outline-none backdrop-blur-sm text-sm";

  const inputClass = (field: string) =>
    `${inputBase} ${
      focused === field
        ? "border-primary/50 shadow-[0_0_20px_hsl(160_80%_55%/0.12)] ring-1 ring-primary/20"
        : "border-border/60 hover:border-border"
    }`;

  return (
    <div className="section-padding relative overflow-hidden">
      {/* BG orbs */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/4 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-violet-500/4 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Let's Talk"
          subtitle="Have a project in mind or just want to connect? Drop me a message."
          badge="// contact"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* ─── Form (3 cols) ─── */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-xs text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass("name")}
                    placeholder="Stephen Toomey"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-xs text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass("email")}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-xs text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    maxLength={1000}
                    value={form.message}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="What's on your mind?"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(160_80%_55%/0.4)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    Send Message <Send size={15} />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* ─── Info panel (2 cols) ─── */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-fade-in-right">
            {/* Availability card */}
            <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-7">
              <h3 className="mb-4 text-lg font-bold text-foreground">Get in Touch</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span>Available for Remote Work Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock size={14} className="text-primary shrink-0" />
                  <span>Typical reply: within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-semibold text-emerald-400">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Socials card */}
            <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-7">
              <h3 className="mb-5 text-base font-bold text-foreground">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, handle, href, hoverClass }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 text-muted-foreground transition-all duration-200 ${hoverClass}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/70 transition-all duration-200 group-hover:bg-secondary">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">{label}</div>
                      <div className="truncate font-mono text-xs text-muted-foreground">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
