import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@stephentoomey.dev" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Contact" subtitle="Let's work together — drop me a message" />

        <form onSubmit={handleSubmit} className="space-y-5 mb-12 animate-fade-in-up">
          <div>
            <label htmlFor="name" className="mb-1 block font-mono text-xs text-muted-foreground">Name</label>
            <input
              id="name"
              type="text"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-muted-foreground">Email</label>
            <input
              id="email"
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block font-mono text-xs text-muted-foreground">Message</label>
            <textarea
              id="message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:box-glow-strong hover:scale-105"
          >
            Send Message <Send size={16} />
          </button>
        </form>

        {/* Socials */}
        <div className="flex justify-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={24} />
              <span className="font-mono text-xs">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
