const skills = [
  "C++",
  "Game Programming",
  "Engine Development",
  "Rendering",
  "Systems Programming",
  "Performance Optimization",
  "OpenGL",
  "Vulkan",
  "Physics",
  "ECS Architecture",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-semibold mb-8 text-primary">
          _skills
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 font-mono text-sm bg-secondary border border-border rounded-md text-secondary-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;