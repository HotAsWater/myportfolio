const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-12 animate-fade-up-delay-1">
          <span className="text-gradient">About</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Photo */}
          <div className="relative mt-20">
            <img
              src="/src/assets/IMG_2505.png"
              alt="Raphaël Maigret"
              className="w-full rounded-xl border border-border object-cover"
            />

            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_60px_rgba(255,140,0,0.15)]" />
          </div>

          {/* Text */}
          <div className="space-y-6 text-secondary-foreground/90 leading-relaxed text-base md:text-lg">
            <p>
              Hey, I’m <span className="font-extrabold text-orange-400">Raphaël Maigret</span>.
              <br /><br />

              My interest in programming started back in high school. Growing up, I would often see my dad coding from afar, and that curiosity slowly turned into a genuine desire to understand how things worked under the hood. That early exposure pushed me toward programming, and eventually toward game development as a serious pursuit.
              <br /><br />

              I am currently enrolled at <span className="font-extrabold text-orange-400">EPITECH</span> in France, following the Programme Grande École (PGE). Along the way, I’ve developed a strong focus on <span className="font-extrabold text-orange-400">C++ and low-level programming</span>, with additional experience in <span className="font-extrabold text-orange-400">C# for Unity</span>. What excites me most is working close to the engine: building robust game systems, experimenting with rendering techniques, and designing foundations that scale well in real-world scenarios.
              <br /><br />

              One project I’m particularly proud of is a <span className="font-extrabold text-orange-400">custom ECS written in C++</span>, designed with <span className="font-extrabold text-orange-400">multiplayer compatibility</span> in mind. Working on it sharpened my understanding of performance, data-oriented design, and system architecture, and confirmed my interest in engine and systems development.
              <br /><br />

              On a personal level, I’m very <span className="font-extrabold text-orange-400">social and I'd say genuinely fun to work with</span>, but I'm always ready to give my everything whenever it's needed. I enjoy collaborating with others, sharing ideas, and pushing projects forward efficiently without losing sight of quality.
              <br /><br />

              Outside of programming, I love traveling and hiking, discovering new places whenever I get the chance. I also have a long-standing passion for Pokémon, with a solid collection of cards and games, and I’m an avid vinyl collector.
              <br /><br />

              If any of this resonates with you, feel free to reach out — I’m always happy to connect and talk about games, tech, or future projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
