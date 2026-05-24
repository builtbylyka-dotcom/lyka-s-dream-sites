import chibi from "@/assets/lyka-logo.png";

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

        <div className="flex items-center gap-5 text-xs">
          <a href="mailto:builtbylyka@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://wa.me/639518235203" className="hover:text-primary transition-colors">
            WhatsApp
          </a>
          <a href="https://m.me/builtbylyka" className="hover:text-primary transition-colors">
            Messenger
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
