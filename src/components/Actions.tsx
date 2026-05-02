"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Actions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-6 md:px-20">
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/contact"
          className="inline-block px-7 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-fuchsia-500 shadow-lg shadow-violet-500/25 dark:shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transition-shadow duration-300"
        >
          Get In Touch
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <a
          href="https://drive.google.com/file/d/1KdQUhHBgVZtTo8Fawlvr7at-7zE8y19f/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold border-2 border-foreground/15 dark:border-white/20 text-foreground bg-card/40 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
        >
          <Download
            size={20}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Actions;
