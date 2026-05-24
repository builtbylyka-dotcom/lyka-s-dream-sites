import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex h-9 w-[68px] items-center rounded-full glass shadow-soft border border-primary/15 overflow-hidden transition-colors hover:shadow-glow ${className}`}
    >
      <span className="absolute inset-0 bg-rose-gradient opacity-0 dark:opacity-20 transition-opacity" />
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`relative z-10 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-gradient text-white shadow-soft ${
          isDark ? "translate-x-[32px]" : "translate-x-0"
        } transition-transform duration-500`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
      <Sun className="absolute left-2 h-3.5 w-3.5 text-mauve opacity-70 dark:opacity-0 transition-opacity" />
      <Moon className="absolute right-2 h-3.5 w-3.5 text-primary opacity-0 dark:opacity-80 transition-opacity" />
    </button>
  );
}
