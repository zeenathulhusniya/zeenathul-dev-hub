import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Download, Mail, Phone, MapPin, Github, Linkedin,
  Code2, Database, GitBranch, Globe, GraduationCap, Briefcase,
  Send, ExternalLink, Sparkles, Brain, Users, Lightbulb,
} from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
const profileImg = profileAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeenathul Husniya — Junior Software Developer" },
      { name: "description", content: "Portfolio of Zeenathul Husniya, an aspiring Junior Software Developer passionate about building efficient software solutions." },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = {
  Languages: [{ name: "Java", icon: Code2 }, { name: "Python", icon: Code2 }, { name: "JavaScript", icon: Code2 }],
  "Web Development": [{ name: "HTML5", icon: Globe }, { name: "Responsive Design", icon: Globe }],
  Database: [{ name: "SQL", icon: Database }],
  Tools: [{ name: "Git", icon: GitBranch }, { name: "GitHub", icon: Github }],
};

const softSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Analytical Thinking", icon: Brain },
  { name: "Team Collaboration", icon: Users },
  { name: "Continuous Learning", icon: Sparkles },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio website showcasing skills, education, and professional goals with smooth animations and clean UI.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Student Management System",
    desc: "Application for managing student records, enrollment data, and academic information with secure database integration.",
    tech: ["Java", "SQL"],
    gradient: "from-indigo-500/10 to-sky-500/10",
  },
  {
    title: "Task Management Application",
    desc: "Application for organizing and tracking daily tasks efficiently with intuitive filtering and persistence.",
    tech: ["JavaScript", "HTML5", "SQL"],
    gradient: "from-sky-500/10 to-blue-500/10",
  },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-lg">
            zeenathul<span className="text-primary">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground hover:text-primary transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition shadow-soft">
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-5 h-0.5 bg-foreground mb-1.5" />
            <div className="w-5 h-0.5 bg-foreground mb-1.5" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="px-6 py-4 space-y-3">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </div>
            <p className="text-muted-foreground mb-3 font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight whitespace-nowrap">
              Zeenathul Husniya
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">Junior Software Developer</p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Passionate about building efficient software solutions and learning modern technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-soft">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted transition">
                Contact Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted transition">
                <Download className="h-4 w-4" /> CV
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-card ring-4 ring-primary/20">
                <img src={profileImg} alt="Zeenathul Husniya" width={896} height={1024} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="text-2xl font-bold text-primary">B.Tech</p>
                <p className="text-xs text-muted-foreground">Class of 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad px-6 bg-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="About Me" title="A passion for clean, purposeful code" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Code2, title: "Software Development", text: "Passionate about building efficient, scalable software using modern programming practices." },
              { icon: Brain, title: "Problem Solver", text: "Analytical mindset focused on breaking down complex challenges into elegant solutions." },
              { icon: Sparkles, title: "Always Learning", text: "Continuously exploring new technologies, frameworks, and best practices to grow as an engineer." },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Education
            </h3>
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-soft">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary font-semibold">Bachelor of Technology (B.Tech)</p>
                <p className="font-semibold text-lg">Mars Tech</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
              </div>
              <span className="self-start md:self-center text-xs font-medium px-3 py-1 rounded-full bg-primary-soft text-primary">In Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Skills" title="Tools & technologies I work with" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s.name} className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium hover:border-primary hover:text-primary transition">
                      <s.icon className="h-4 w-4" /> {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-6">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((s) => (
              <div key={s.name} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary transition">
                <s.icon className="h-7 w-7 mx-auto mb-3 text-primary" />
                <p className="text-sm font-semibold">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad px-6 bg-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Services" title="What I'm offering" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-1 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl p-8 shadow-card">
              <Briefcase className="h-10 w-10 mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Developing reliable, scalable, and user-friendly software applications using modern programming practices and industry standards.
              </p>
            </div>
            <div className="md:col-span-2 bg-card border border-border rounded-2xl p-8">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Career Objective</p>
              <p className="text-lg leading-relaxed">
                "I aim to begin my professional career as a <span className="text-primary font-semibold">Junior Software Developer</span>, contribute to meaningful projects, continuously enhance my technical expertise, and develop innovative software solutions that create value for users."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {projects.map((p) => (
              <article key={p.title} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} flex items-center justify-center border-b border-border`}>
                  <Code2 className="h-16 w-16 text-primary/40 group-hover:scale-110 transition" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary-soft text-primary font-medium">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-sm">
                    <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary font-medium">
                      <Github className="h-4 w-4" /> Code
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary font-medium">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad px-6 bg-[var(--section)]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Contact" title="Let's build something together" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "zeenathul.it@gmail.com", href: "mailto:zeenathul.it@gmail.com" },
                { icon: Phone, label: "Phone", value: "+94 123456789", href: "tel:+94123456789" },
                { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
                { icon: Github, label: "GitHub", value: "github.com/zeenathulhusniya", href: "https://github.com/zeenathulhusniya" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/zeenathul-husniya", href: "https://linkedin.com/in/zeenathul-husniya" },
              ].map((c) => (
                <a key={c.label} href={c.href ?? "#"} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary transition">
                  <div className="h-11 w-11 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="font-medium text-sm truncate">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-soft">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
              <div>
                <label className="text-xs font-semibold text-muted-foreground">Message</label>
                <textarea
                  required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition shadow-soft">
                <Send className="h-4 w-4" /> {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="font-display font-bold">Zeenathul Husniya</p>
            <p className="text-xs text-muted-foreground">Junior Software Developer</p>
          </div>
          <ul className="flex justify-center gap-6 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-primary transition">{n.label}</a></li>
            ))}
          </ul>
          <div className="flex md:justify-end gap-3">
            {[{ Icon: Github, href: "https://github.com/zeenathulhusniya" }, { Icon: Linkedin, href: "https://linkedin.com/in/zeenathul-husniya" }, { Icon: Mail, href: "mailto:zeenathul.it@gmail.com" }].map(({ Icon, href }, i) => (
              <a key={i} href={href} aria-label="social" className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-6">© 2026 Zeenathul Husniya. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        required type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
