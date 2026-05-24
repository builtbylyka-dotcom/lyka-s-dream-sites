import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Sparkle } from "./Sparkle";

export function Referral() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-rose-gradient text-white p-8 md:p-14 shadow-glow"
        >
          <Sparkle className="absolute right-10 top-8 text-white/70" size={22} />
          <Sparkle className="absolute right-32 bottom-10 text-white/50" size={14} delay={1} />
          <Sparkle className="absolute left-12 bottom-6 text-white/40" size={18} delay={0.5} />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs">
                <Gift className="h-3.5 w-3.5" /> Referral program
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-balance">
                Refer a friend, earn <em className="italic">5% commission</em>.
              </h2>
              <p className="mt-3 max-w-xl text-white/85 text-balance">
                Know someone who needs a website? Send them my way — when they book, you get
                5% back as a thank-you. Sweet, simple, no limits.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-foreground px-6 py-3.5 text-sm font-medium shadow-soft hover:scale-[1.03] transition-transform whitespace-nowrap"
            >
              Refer someone
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
