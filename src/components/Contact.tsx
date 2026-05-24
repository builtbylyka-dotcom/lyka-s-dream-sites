import { motion } from "framer-motion";
import { useState } from "react";
import { Facebook, Loader2, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Sparkle } from "./Sparkle";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590488216046";

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
    label: "Facebook",
    value: "Built by Lyka",
    href: FACEBOOK_URL,
    hint: "Message me on Facebook",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // Detect successful return from FormSubmit (real email sent)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("success");
      toast.success("Your inquiry has been sent successfully! ✨");
      // Clean the URL without reloading
      const url = window.location.pathname + "#contact";
      window.history.replaceState({}, "", url);
    }
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot spam protection
    if ((fd.get("_honey") as string)?.length) {
      e.preventDefault();
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (name.length < 2 || name.length > 100) {
      e.preventDefault();
      toast.error("Please enter a valid name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      e.preventDefault();
      toast.error("Please enter a valid email.");
      return;
    }
    if (message.length < 5 || message.length > 2000) {
      e.preventDefault();
      toast.error("Message must be between 5 and 2000 characters.");
      return;
    }

    // Allow native top-level POST → FormSubmit will email + redirect back via _next.
    setStatus("loading");
  }

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

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/builtbylyka@gmail.com"
            method="POST"
            className="glass shadow-glow rounded-[2rem] p-7 md:p-9 border border-primary/15"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Website Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value={
                typeof window !== "undefined"
                  ? `${window.location.origin}/?sent=1#contact`
                  : "/?sent=1#contact"
              }
            />


            <h3 className="font-display text-2xl">Send an inquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell me a little about your project. I usually reply within 24h.
            </p>

            {/* Honeypot */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Lyka R." maxLength={100} />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@email.com"
                maxLength={255}
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-mauve">Project type</label>
              <select
                name="type"
                className="mt-1.5 w-full rounded-2xl bg-card/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
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
                maxLength={2000}
                placeholder="What's the vibe? Any references? Timeline?"
                className="mt-1.5 w-full rounded-2xl bg-card/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 group w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium shadow-soft hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : status === "success" ? (
                <>Sent ✨ — talk soon!</>
              ) : (
                <>
                  Send inquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            <p className="mt-3 text-[11px] text-center text-muted-foreground">
              Your message goes straight to builtbylyka@gmail.com. Pinky promise — no spam.
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
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-mauve">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={maxLength}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl bg-card/70 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
