"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RingLoader from "react-spinners/RingLoader";
import { useTheme } from "next-themes";

/** Visible duration before fade-out (total ~2.5–3s with exit animation). */
const DISPLAY_MS = 2400;

export function VisitLoader() {
  const [visible, setVisible] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  const color =
    resolvedTheme === "light" ? "#6d28d9" : "#a78bfa";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="visit-loader"
          role="status"
          aria-label="Loading"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md"
        >
          <RingLoader
            color={color}
            loading
            size={70}
            speedMultiplier={0.9}
            cssOverride={{ display: "block" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
