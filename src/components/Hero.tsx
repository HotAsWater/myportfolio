const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight mb-6 animate-fade-up">
          <span className="text-gradient">Game Developer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-mono tracking-wide mb-8 animate-fade-up-delay-1">
          C++ • Game Programming • Engine Development
        </p>
        
        <p className="text-base md:text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
          Building games and engines from the ground up
        </p>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up-delay-3">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;