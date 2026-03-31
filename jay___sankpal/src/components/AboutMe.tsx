import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/Reveal";

const AboutMe = () => {
  const pill =
    "bg-gradient-to-r from-slate-800 to-violet-950 dark:from-violet-950/90 dark:to-slate-900 text-white py-2 px-4 rounded-full text-sm font-medium border border-white/10 shadow-md";

  return (
    <div>
      <section className="pb-20">
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
          <Reveal>
            <div className="w-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Stack
                <span className="text-2xl font-bold text-accent mb-4">.</span>
              </h3>
              <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br from-violet-100/80 via-white to-fuchsia-50/60 dark:from-violet-950/40 dark:via-card dark:to-fuchsia-950/20 shadow-inner">
                <Marquee speed={30}>
                  <div className="flex gap-5 items-center pr-5">
                    <div className={pill}>HTML5/CSS3</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>JavaScript</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>ReactJs</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                  </div>
                </Marquee>
                <Marquee direction="right" speed={30}>
                  <div className="flex gap-5 items-center pr-5">
                    <div className={pill}>TailwindCSS</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>SCSS</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>NodeJS</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                  </div>
                </Marquee>
                <Marquee speed={30}>
                  <div className="flex gap-5 items-center pr-5">
                    <div className={pill}>MongoDB</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>NodeJS</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                    <div className={pill}>TypeScript</div>
                    <Star className="text-accent shrink-0" fill="currentColor" />
                  </div>
                </Marquee>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Special Place
                <span className="text-2xl font-bold text-accent mb-4">.</span>
              </h3>

              <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-2xl border border-card-border shadow-lg ring-1 ring-accent/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537.31630330871!2d72.96180409122518!3d19.166435428227214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8ea39022871%3A0x943ac49accbda37b!2sMHADA%20Colony%2C%20Mulund%20East%2C%20Mumbai%2C%20Maharashtra%20400081!5e0!3m2!1sen!2sin!4v1751196876877!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  title="Location map"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
