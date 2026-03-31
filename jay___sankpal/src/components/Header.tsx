"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ToggleButton";

const ease = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/challenges", label: "Challenges" },
] as const;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const updateIndicator = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector<HTMLElement>(`[data-nav-link="${pathname}"]`);
    if (!active) {
      setIndicator((s) => ({ ...s, visible: false }));
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left + nav.scrollLeft,
      width: linkRect.width,
      visible: true,
    });
  }, [pathname]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const linkBase =
    "relative z-10 inline-block py-1 font-semibold transition-colors duration-300 hover:text-accent";

  const linkClasses = (path: string) =>
    `${linkBase} ${
      pathname === path ? "text-accent" : "text-foreground/80"
    }`;

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex items-center justify-between border-b border-card-border/60 bg-[var(--header-bg)] backdrop-blur-xl shadow-sm dark:shadow-black/20"
    >
      <Link href="/" className="group flex items-center gap-0.5 shrink-0">
        <motion.span
          className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          Jaykumar
        </motion.span>
        <span className="text-2xl font-bold text-foreground">.</span>
      </Link>

      <div
        ref={navRef}
        className="relative hidden md:flex gap-8 font-medium items-end min-h-[2.25rem]"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            data-nav-link={href}
            className={linkClasses(href)}
          >
            {label}
          </Link>
        ))}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          initial={false}
          animate={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.6 }}
        />
      </div>

      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <ThemeToggle />
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 text-accent" />
          </Link>
        </motion.div>

        <button
          type="button"
          className="md:hidden p-1.5 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease }}
            className="absolute top-full left-0 w-full overflow-hidden md:hidden border-b border-card-border bg-[var(--header-bg)] backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-1 font-medium">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-3 rounded-xl ${linkClasses(href)}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
