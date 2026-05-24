import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, X } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590488216046";

export function FloatingMessenger() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass shadow-glow rounded-3xl p-4 max-w-[260px] border border-primary/15"
          >
            <p className="font-display text-base">Hi, I'm Lyka ✨</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Have a quick question? Message me on Facebook — I usually reply within a few hours.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              Open Messenger <span aria-hidden>→</span>
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        aria-label="Chat with Lyka on Facebook"
        className="relative h-14 w-14 rounded-full bg-rose-gradient text-white shadow-glow flex items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        <span className="relative">
          {open ? <X className="h-5 w-5" /> : <Facebook className="h-6 w-6" />}
        </span>
      </motion.button>
    </div>
  );
}
