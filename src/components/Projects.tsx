import ProjectCard from "./ProjectCard";
import projectEngine from "@/assets/project-engine.jpg";
import projectVoxel from "@/assets/project-voxel.jpg";
import projectPhysics from "@/assets/project-physics.jpg";
import projectPlatformer from "@/assets/project-platformer.jpg";

const projects = [
  {
    title: "Custom Game Engine",
    description: "A lightweight 2D/3D game engine built from scratch in C++ with OpenGL rendering, ECS architecture, and custom physics.",
    media: {
      type: "image" as const,
      src: projectEngine,
    },
    tags: ["C++", "OpenGL", "ECS", "Custom Engine"],
    links: {
      github: "#",
    },
  },
  {
    title: "Voxel World Generator",
    description: "Procedural voxel terrain generation with infinite worlds, chunk streaming, and optimized mesh generation.",
    media: {
      type: "image" as const,
      src: projectVoxel,
    },
    tags: ["C++", "Vulkan", "Procedural Gen"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Physics Sandbox",
    description: "Real-time rigid body physics simulation with collision detection, constraints, and debug visualization.",
    media: {
      type: "image" as const,
      src: projectPhysics,
    },
    tags: ["C++", "Physics", "SIMD"],
    links: {
      github: "#",
    },
  },
  {
    title: "Retro Platformer",
    description: "A precision platformer inspired by classic NES games, featuring tight controls and challenging level design.",
    media: {
      type: "image" as const,
      src: projectPlatformer,
    },
    tags: ["C++", "SDL2", "Pixel Art"],
    links: {
      itch: "#",
      github: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-semibold mb-12 text-primary">
          _projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;