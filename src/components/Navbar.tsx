import { useEffect, useState } from "react";
import chibi from "@/assets/lyka-logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative">
              <img
                src={chibi}
                alt="Built by Lyka"
                className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/20 transition-transform group-hover:scale-105"
                width={36}
                height={36}
              />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
            </span>
            <span className="font-display text-lg font-semibold">
              Built by <span className="text-primary italic">Lyka</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="block w-4 space-y-1">
              <span className="block h-px bg-foreground" />
              <span className="block h-px bg-foreground" />
              <span className="block h-px bg-foreground" />
            </span>
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass shadow-soft rounded-3xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-xl hover:bg-secondary text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex w-full justify-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
