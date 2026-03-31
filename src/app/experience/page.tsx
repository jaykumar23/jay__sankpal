import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0 items-start text-foreground/85 lg:text-[20px] leading-relaxed">
      <span className="text-accent select-none leading-relaxed" aria-hidden>
        ✔
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  );
}

const ExperiencePage = () => {
  return (
    <section className="px-6 pt-24 md:px-20 md:pt-30 pb-20">
      <Reveal>
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
          Experience<span className="text-accent">.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 px-2 flex flex-col md:flex-row items-start gap-6 md:gap-0">
          <div className="w-full md:w-[30%] shrink-0">
            <Link
              href="https://www.linkedin.com/company/jioplatforms/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl border-l-4 border-accent px-3 leading-[55px] text-accent hover:opacity-90 transition-opacity"
            >
              Jio Platforms Limited
            </Link>
          </div>
          <div className="w-full md:w-[70%] p-2 rounded-xl md:rounded-2xl md:bg-card/40 md:border md:border-card-border/50 md:backdrop-blur-sm min-w-0">
            <h3 className="text-2xl font-bold text-foreground">
              Software Engineer (Frontend){" "}
              <span className="text-accent">@ Jio Platforms Limited </span>
            </h3>
            <p className="text-muted">August 2023 - Present</p>
            <ul className="mt-4 space-y-3">
              <Bullet>
                Engineering core real-time communication modules for JioMeet
                Plus, supporting high-concurrency collaboration for millions of
                users.
              </Bullet>
              <Bullet>
                Optimized application performance, achieving a{" "}
                <span className="font-semibold text-accent">
                  30% reduction in bundle size
                </span>{" "}
                and{" "}
                <span className="font-semibold text-accent">
                  40% faster rendering
                </span>{" "}
                via virtualization and lazy loading.
              </Bullet>
              <Bullet>
                <div className="text-foreground/90">
                  <p className="font-medium">
                    Architected and scaled key enterprise features:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 pl-0.5">
                    <li>
                      Real-time chat engine with pinning, read receipts, and
                      presence tracking
                    </li>
                    <li>
                      WebRTC-based calling modules and comprehensive call
                      history management
                    </li>
                    <li>
                      AI-integrated interfaces for meeting recaps, live
                      transcriptions, and summaries
                    </li>
                    <li>
                      Secure, RBAC-driven UI flows ensuring 100% compliance
                      with security audits
                    </li>
                  </ul>
                  <p className="mt-3 text-muted">
                    Stack:{" "}
                    <span className="font-semibold text-accent">React</span>,{" "}
                    <span className="font-semibold text-accent">TypeScript</span>
                    ,{" "}
                    <span className="font-semibold text-accent">WebRTC</span>,{" "}
                    <span className="font-semibold text-accent">Zustand</span>,{" "}
                    <span className="font-semibold text-accent">
                      TanStack Query
                    </span>
                    , and{" "}
                    <span className="font-semibold text-accent">
                      Tailwind CSS
                    </span>
                    .
                  </p>
                </div>
              </Bullet>
              <Bullet>
                Standardized{" "}
                <span className="font-semibold text-accent">
                  AI-SDLC workflows
                </span>{" "}
                using Cursor and Claude, accelerating feature delivery and
                improving code consistency.
              </Bullet>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-8 px-2 flex flex-col md:flex-row items-start gap-6 md:gap-0">
          <div className="w-full md:w-[30%] shrink-0">
            <Link
              href="https://dmce.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl border-l-4 border-accent px-3 leading-[55px] text-accent hover:opacity-90 transition-opacity"
            >
              Alumni Portal Platform
            </Link>
          </div>
          <div className="w-full md:w-[70%] p-2 rounded-xl md:rounded-2xl md:bg-card/40 md:border md:border-card-border/50 md:backdrop-blur-sm min-w-0">
            <h3 className="text-2xl font-bold text-foreground">
              Full Stack Developer Intern{" "}
              <span className="text-accent">
                @ Datta Meghe College of Engineering
              </span>
            </h3>
            <p className="text-muted">January 2022 - July 2022</p>
            <ul className="mt-4 space-y-3">
              <Bullet>
                Engineered a mobile-responsive portal for 2,000+ users using
                the MERN stack, facilitating seamless interaction between alumni
                and students.
              </Bullet>
              <Bullet>
                Designed RESTful APIs that automated placement coordination,
                reducing manual administrative effort by{" "}
                <span className="font-semibold text-accent">60%</span>.
              </Bullet>
              <Bullet>
                Built a secure authentication layer using{" "}
                <span className="font-semibold text-accent">JWT and RBAC</span>{" "}
                to ensure data privacy across Admin, Alumni, and Student tiers.
              </Bullet>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ExperiencePage;
