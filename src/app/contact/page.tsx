"use client";

import { useProtfolioUtils } from "@/utils/portfolio.utils";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const ContactPage = () => {
  const { contactItems } = useProtfolioUtils();

  return (
    <section className="px-6 pt-24 md:px-20 md:pt-30 lg:pb-62 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease }}
        className="text-4xl lg:text-7xl md:text-6xl font-bold text-foreground mb-12 tracking-tight"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07 } },
        }}
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease },
                },
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-2xl border border-card-border shadow-md hover:shadow-lg hover:border-accent/40 hover:shadow-violet-500/10 transition-shadow duration-300 group"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.span
                  className="inline-flex rounded-xl p-3 bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.span>
                <p className="text-sm font-medium text-muted">{item.label}</p>
                <p className="text-base font-semibold text-foreground text-center break-words">
                  {item.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ContactPage;
