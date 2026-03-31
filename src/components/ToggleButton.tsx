"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="inline-flex h-9 w-9 shrink-0" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-xl text-foreground/70 hover:text-accent bg-accent/5 hover:bg-accent/15 border border-transparent hover:border-accent/20 transition-colors"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={{ rotate: -40, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="block"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-violet-600" />
        )}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
