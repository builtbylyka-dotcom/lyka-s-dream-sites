import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import chibi from "@/assets/lyka-chibi.png";
import { Sparkle } from "./Sparkle";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      {/* decorative sparkles */}
      <Sparkle className="absolute left-[8%] top-32" size={18} />
      <Sparkle className="absolute right-[10%] top-44" size={26} delay={0.8} />
      <Sparkle className="absolute left-[20%] bottom-24" size={14} delay={1.6} />
      <Sparkle className="absolute right-[24%] bottom-40" size={20} delay={0.3} />

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass shadow-soft px-3.5 py-1.5 text-xs font-medium text-mauve"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now booking · Starting at ₱1,000
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance"
          >
            Websites & portfolios
            <span className="block">
              made <em className="italic text-primary">simple</em>.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-balance"
          >
            I help creators, freelancers, and small businesses build beautiful
            websites from scratch — even if you don't know where to start yet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-soft hover:shadow-glow transition-all"
            >
              Start your website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass shadow-soft px-6 py-3.5 text-sm font-medium hover:bg-card hover:shadow-glow transition-all"
            >
              View services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span>Loved by 30+ clients</span>
            </div>
            <span className="h-3 w-px bg-border" />
            <span>2–7 day turnaround</span>
          </motion.div>
        </div>

        {/* Chibi + floating cards */}
        <div className="relative mx-auto w-full max-w-md aspect-square">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-6 rounded-full bg-rose-gradient blur-3xl opacity-40" />
            <div className="relative h-[88%] w-[88%] rounded-full bg-soft-gradient shadow-glow flex items-end justify-center overflow-hidden">
              <img
                src={chibi}
                alt="Lyka chibi mascot"
                className="h-[95%] w-auto object-contain drop-shadow-xl"
                width={1024}
                height={1024}
              />
            </div>
          </motion.div>

          {/* Floating card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -left-2 top-10 glass shadow-card rounded-2xl px-4 py-3 animate-float"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-rose-gradient flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" fill="white" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground">New inquiry</p>
                <p className="text-xs font-medium">Portfolio site ✨</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{ animationDelay: "1.2s" }}
            className="absolute -right-2 bottom-16 glass shadow-card rounded-2xl px-4 py-3 animate-float"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-secondary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground">Launched</p>
                <p className="text-xs font-medium">In 4 days 🌸</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ animationDelay: "0.6s" }}
            className="absolute right-4 -top-2 glass shadow-card rounded-2xl px-3 py-2 animate-float"
          >
            <p className="text-[11px] text-mauve">
              <span className="font-script text-base text-primary">from ₱1,000</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
