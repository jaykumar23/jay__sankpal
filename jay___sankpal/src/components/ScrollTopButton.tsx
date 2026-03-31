"use client";

import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-500 dark:via-purple-500 dark:to-fuchsia-500 text-white p-4 rounded-full shadow-lg shadow-violet-500/35 dark:shadow-violet-500/25 group"
          aria-label="Scroll to top"
        >
          <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 rotate-[320deg]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
