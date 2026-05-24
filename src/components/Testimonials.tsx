import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lyka made the whole thing feel easy. I had no idea what I wanted and she turned it into something I'm genuinely proud of.",
    name: "Andrea P.",
    role: "Freelance Illustrator",
  },
  {
    quote:
      "Affordable, fast, and SO cute. My café's website finally feels like the brand I always pictured.",
    name: "Mika L.",
    role: "Owner, Café Luma",
  },
  {
    quote:
      "She walked me through everything and gave me tutorials so I can edit my own site. 10/10 would book again.",
    name: "Jules R.",
    role: "Student, BS Comms",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            ✿ Kind words
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Stories from <em className="italic text-primary">happy humans</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl bg-card border border-border/60 shadow-card p-7"
            >
              <Quote className="h-7 w-7 text-primary/30" />
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-gradient flex items-center justify-center text-white font-display">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
