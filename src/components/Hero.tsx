const Hero = () => {
  return (
    <section id="top" className="fixed inset-0 z-0 min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Warm glow effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/40 rounded-full blur-[120px] animate-glow-pulse" />
      
      {/* Content - Left aligned */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full pt-24">
        <p className="text-lg md:text-xl text-muted-foreground font-mono mb-4 animate-fade-up">
          Hi, I'm
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6 animate-fade-up-delay-1">
          <span className="text-gradient">Raphaël</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-foreground font-mono mb-4 animate-fade-up-delay-2">
          Game Developer
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up-delay-3">
          Building games and engines from the ground up
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;