import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Send your idea", desc: "Tell me about your project — vibe, goal, references. No idea is too small." },
  { n: "02", title: "Pay 50% downpayment", desc: "Lock in your slot and I'll start designing within 24 hours." },
  { n: "03", title: "Website gets built", desc: "I share progress with you and refine until it feels right." },
  { n: "04", title: "Final payment + turnover", desc: "Pay the remaining 50%, get your files, repo, and tutorial videos." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            ✿ The process
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-balance">
            Four soft steps. <span className="italic text-primary">That's it.</span>
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 md:-translate-x-px" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex md:items-center gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 shrink-0 md:mx-auto">
                  <div className="h-12 w-12 rounded-full bg-rose-gradient text-white font-display text-lg flex items-center justify-center shadow-glow">
                    {s.n}
                  </div>
                </div>
                <div
                  className={`flex-1 rounded-2xl bg-card border border-border/60 shadow-card p-6 md:p-7 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
