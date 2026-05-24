import { motion } from "framer-motion";
import { Briefcase, Layout, Sparkles, Wand2 } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Portfolio Websites",
    desc: "A clean, scrollable home for your work — perfect for students and creatives showing off their craft.",
    tag: "Most loved",
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    desc: "One focused page built to convert visitors into customers, sign-ups, or bookings.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    desc: "Multi-page sites with services, about, and contact — everything a small business needs online.",
  },
  {
    icon: Wand2,
    title: "Website Makeovers",
    desc: "Already have a site? I'll refresh the design, copy, and feel — softer, faster, more you.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            ✿ Services
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Soft, simple websites — built around <em className="italic text-primary">you</em>.
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Pick a package below. Each one is fully responsive, beginner-friendly, and yours
            to keep forever.
          </p>
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full glass shadow-soft px-4 py-2 border border-primary/15">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.18em] text-mauve font-medium">
              Custom quotes · <span className="text-primary">Starting at ₱1,000</span>
            </span>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-card shadow-card p-7 border border-border/60 hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              {s.tag && (
                <span className="absolute -top-2.5 right-6 rounded-full bg-rose-gradient text-white text-[10px] uppercase tracking-wider px-2.5 py-1 shadow-soft">
                  {s.tag}
                </span>
              )}
              <div className="h-12 w-12 rounded-2xl bg-soft-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Starting at <span className="font-medium text-foreground">₱1,000</span>
                </span>
                <a
                  href="#contact"
                  className="text-xs font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Inquire <span aria-hidden>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
