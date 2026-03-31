"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import avatar from "../../public/avatar.jpg";
import Actions from "@/components/Actions";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease },
  }),
};

export default function HomeHero() {
  return (
    <div className="main__page overflow-x-hidden">
      <div className="flex md:flex-row flex-col-reverse items-center md:items-center justify-between gap-10 px-6 pt-24 md:px-20 md:pt-30">
        <motion.div
          className="flex-1 space-y-4 text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
        >
          <motion.p
            custom={0}
            variants={item}
            className="text-2xl md:text-3xl font-semibold text-foreground/90"
          >
            {"Hey, I'm Jaykumar 👋🏻"}
          </motion.p>
          <motion.h1
            custom={1}
            variants={item}
            className="text-4xl lg:text-8xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 dark:from-violet-400 dark:via-purple-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Front
            </span>
            end
            <br />
            Developer
          </motion.h1>
          <motion.span
            custom={2}
            variants={item}
            className="block text-base md:text-lg lg:text-2xl text-muted max-w-[100%] mx-auto md:mx-0 leading-relaxed"
          >
            Frontend developer with expertise in React.js, Tailwind CSS, and
            state management, aspiring to transition into a full stack developer.
          </motion.span>
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
        >
          <div className="relative animate-float-soft">
            <div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-xl dark:from-violet-500/40 dark:via-purple-500/25 dark:to-cyan-500/15 animate-mesh pointer-events-none"
              aria-hidden
            />
            <div
              className="relative w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] rounded-full overflow-hidden ring-4 ring-violet-500/35 dark:ring-violet-400/45 animate-avatar-ring"
            >
              <Image
                src={avatar}
                alt="Profile Image"
                fill
                className="object-cover rounded-full"
                quality={100}
                placeholder="blur"
                blurDataURL=""
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease }}
      >
        <Actions />
      </motion.div>
    </div>
  );
}
