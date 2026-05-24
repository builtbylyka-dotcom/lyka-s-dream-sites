import chibi from "@/assets/lyka-logo.png";
import { Facebook, Mail, MessageCircle } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590488216046";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={chibi}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/20"
            width={36}
            height={36}
            loading="lazy"
          />
          <p className="font-display text-base text-foreground">
            Built with <span className="text-primary">love</span> by Lyka{" "}
            <span className="inline-block animate-sparkle">✨</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <a
            href="mailto:builtbylyka@gmail.com"
            aria-label="Email"
            className="h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center hover:shadow-glow hover:text-primary transition-all"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/639518235203"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center hover:shadow-glow hover:text-primary transition-all"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={FACEBOOK_URL}
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center hover:shadow-glow hover:text-primary transition-all"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <span className="ml-3">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
