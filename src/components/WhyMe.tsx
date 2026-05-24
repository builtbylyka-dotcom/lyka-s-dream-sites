import { motion } from "framer-motion";
import { BookOpen, GitBranch, Heart, Smartphone, Sparkles, Zap } from "lucide-react";

const items = [
  { icon: Heart, title: "Beginner friendly", desc: "No tech-speak. I explain things like a friend." },
  { icon: GitBranch, title: "Git repo included", desc: "Your code is yours forever — clean and portable." },
  { icon: Sparkles, title: "Lovable integration", desc: "Easily extend your site later with AI tools." },
  { icon: Smartphone, title: "Mobile responsive", desc: "Looks lovely on every screen, every time." },
  { icon: BookOpen, title: "Future edit tutorials", desc: "Short videos so you can update it yourself." },
  { icon: Zap, title: "Fast turnaround", desc: "Most sites are live in under a week." },
];

export function WhyMe() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              ✿ Why choose me
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
              Premium without the <span className="italic text-primary">price tag</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              I'm a one-woman studio. That means fewer middlemen, more love poured into every
              pixel — and pricing that respects your budget.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full glass shadow-soft px-4 py-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Built with care · One project at a time
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl bg-card/80 backdrop-blur border border-border/60 p-5 hover:bg-card hover:shadow-soft transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
