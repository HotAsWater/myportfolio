const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-semibold mb-8 text-primary">
          _about
        </h2>
        
        <div className="space-y-6 text-secondary-foreground/90 leading-relaxed text-base md:text-lg">
          <p>
            I'm a game developer focused on <span className="text-foreground font-medium">C++</span> and low-level game programming.
          </p>
          <p>
            I enjoy building game engines, experimenting with systems, and understanding how things work under the hood.
          </p>
          <p>
            I've worked on multiple games and enjoy turning technical ideas into playable experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;