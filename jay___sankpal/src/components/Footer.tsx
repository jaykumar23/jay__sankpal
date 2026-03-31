"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 border-t border-card-border bg-[var(--footer-bg)] backdrop-blur-md py-8 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-muted gap-3 md:gap-0">
        <p>
          © 2026{" "}
          <span className="font-semibold text-accent">Jaykumar Sankpal</span>
        </p>
        <p>All rights reserved</p>
        <p>
          Made with <span className="text-accent">💜</span> by Jaykumar
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
