"use client";

import { useProtfolioUtils } from "@/utils/portfolio.utils";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

const ChallengesPage = () => {
  const { challenges } = useProtfolioUtils();

  return (
    <div className="px-6 pt-24 md:px-20 md:pt-30 pb-30">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
        className="text-4xl font-bold text-foreground mb-10"
      >
        My{" "}
        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          Challenges
        </span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group bg-card/95 backdrop-blur-sm shadow-lg border border-card-border hover:border-accent/40 hover:shadow-xl hover:shadow-violet-500/15 dark:hover:shadow-violet-500/10 transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
              {challenge.name}
            </h2>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={challenge.codeLink}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-violet-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"</>"} Code
              </motion.a>
              <motion.a
                href={challenge.liveLink}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-accent/50 text-accent hover:bg-accent/15 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Live
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="mt-12 text-center text-muted italic text-lg"
      >
        ...and many more coming soon 🚀
      </motion.p>
    </div>
  );
};

export default ChallengesPage;
