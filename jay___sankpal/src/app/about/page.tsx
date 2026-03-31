import AboutMe from "@/components/AboutMe";
import { Reveal } from "@/components/Reveal";

const AboutPage = () => {
  return (
    <div className="px-6 pt-24 md:px-20 md:pt-30">
      <section>
        <Reveal>
          <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-foreground tracking-tight">
            About me
            <span className="text-accent">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 text-foreground/90 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-accent leading-relaxed rounded-sm">
            Hey 👋, I am a Frontend Developer with a passion for building
            beautiful and functional user interfaces. I am a self-taught
            developer and I love to learn new things. I am a quick learner and I
            am always ready to take up new challenges. I have experience in
            working with HTML-5, CSS-3, VanillaJS, ReactJS, NextJS, TypeScript,
            Tailwind CSS, Node Js, MongoDB and exploring new efficient
            technologies.
          </p>
        </Reveal>
      </section>
      <AboutMe />
    </div>
  );
};

export default AboutPage;
