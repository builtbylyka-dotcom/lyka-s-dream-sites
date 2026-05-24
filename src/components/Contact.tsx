import { motion } from "framer-motion";
import { useState } from "react";
import { Facebook, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { Sparkle } from "./Sparkle";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "builtbylyka@gmail.com",
    href: "mailto:builtbylyka@gmail.com",
    hint: "Best for project details",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+63 951 823 5203",
    href: "https://wa.me/639518235203",
    hint: "Quick replies, mon–sat",
  },
  {
    icon: Facebook,
    label: "Messenger",
    value: "Built by Lyka",
    href: "https://m.me/builtbylyka",
    hint: "Chat on Facebook",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero -z-10" />
      <Sparkle className="absolute left-[8%] top-24" size={20} />
      <Sparkle className="absolute right-[12%] top-40" size={16} delay={0.7} />
      <Sparkle className="absolute right-[20%] bottom-24" size={24} delay={1.3} />

      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
            ✿ Let's chat
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-balance">
            Let's build your website <em className="italic text-primary">together</em>
            <Sparkles className="inline ml-2 h-7 w-7 md:h-9 md:w-9 text-primary" />
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Whether you need a portfolio, landing page, or business website, I'll help you
            bring it online beautifully and simply.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          {/* Channels — floating glass cards */}
          <div className="flex flex-col gap-4">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass shadow-card rounded-3xl p-5 flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-rose-gradient text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-primary">{c.label}</p>
                  <p className="font-medium truncate">{c.value}</p>
                  <p className="text-xs text-muted-foreground">{c.hint}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              const subject = encodeURIComponent(`New inquiry from ${fd.get("name") ?? ""}`);
              const body = encodeURIComponent(
                `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nProject type: ${fd.get(
                  "type",
                )}\n\n${fd.get("message")}`,
              );
              window.location.href = `mailto:builtbylyka@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="glass shadow-glow rounded-[2rem] p-7 md:p-9 border border-primary/15"
          >
            <h3 className="font-display text-2xl">Send an inquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell me a little about your project. I usually reply within 24h.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Lyka R." />
              <Field name="email" label="Email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-mauve">Project type</label>
              <select
                name="type"
                className="mt-1.5 w-full rounded-2xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                defaultValue="Portfolio Website"
              >
                <option>Portfolio Website</option>
                <option>Landing Page</option>
                <option>Business Website</option>
                <option>Website Makeover</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-mauve">Tell me about it</label>
              <textarea
                name="message"
                rows={4}
                placeholder="What's the vibe? Any references? Timeline?"
                className="mt-1.5 w-full rounded-2xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 group w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition-all"
            >
              {sent ? "Opening your email…" : "Send inquiry"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="mt-3 text-[11px] text-center text-muted-foreground">
              By sending, you'll open your email client with the message pre-filled. Pinky promise — no spam.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-mauve">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl bg-white/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
