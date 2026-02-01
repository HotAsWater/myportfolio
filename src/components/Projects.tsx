import ProjectCard from "./ProjectCard";
import projectEngine from "@/assets/project-engine.jpg";
import projectRtype from "@/assets/project-rtype.gif";
import projectRaytracer from "@/assets/project-raytracer.jpg";
import projectPlatformer from "@/assets/project-2d-platformer.gif";
import projectRpg2D from "@/assets/project-rpg.mov";

const projects = [
  {
    title: "Custom Game Engine (ECS)",
    description: (
      <>
        A lightweight 2D game engine built from scratch in <span className="font-extrabold text-orange-300">C++</span> with SFML rendering, ECS architecture, and custom <span className="font-extrabold text-orange-300">physics, network and input systems</span>.
      </>
    ),
    media: {
      type: "image" as const,
      src: projectEngine,
    },
    tags: ["C++", "ECS", "SFML", "Engine Prog"],
    links: {
      github: "https://github.com/HotAsWater/ECS-RType",
    },
  },
  {
    title: "Mutiplayer RType-Rebuild",
    description: (
      <>
        Remaking the famous <span className="font-extrabold text-orange-300">RType</span> game in multiplayer using <span className="font-extrabold text-orange-300">UDP</span> and a <span className="font-extrabold text-orange-300">TCP</span> lobby in full <span className="font-extrabold text-orange-300">C++</span>, using <span className="font-extrabold text-orange-300">custom engine</span>. Using Cmake to port the game on MacOS, Linux (most distro) and Windows.<br /><br />
        This was made in 2 month with a group of 5 dev.<br /> <br />
        <span className="font-extrabold text-orange-300">What I made:</span> Full ECS, Games logic, Server Client network (UDP) logic.
      </>
    ),
    media: {
      type: "gif" as const,
      src: projectRtype,
    },
    tags: ["C++", "UDP", "TCP", "ECS", "SFML", "QT", "SFML", "Gameplay Programming", "Team Project"],
    links: {
      github: "https://github.com/HotAsWater/ECS-RType",
      demo: "https://youtu.be/2Fgwh5xcTw0",
    },
  },
  {
    title: "RayTracer",
    description: (
      <>
        Creation of a RayTracer in pure <span className="font-extrabold text-orange-300">C++</span> using only SFML lib for rendering, making use of a <span className="font-extrabold text-orange-300">BVH and multi-threading</span> for optimizations. Made in 2 weeks alone.
      </>
    ),
    media: {
      type: "image" as const,
      src: projectRaytracer,
    },
    tags: ["C++", "RayTracing", "BVH", "SFML"],
    links: {
      github: "https://github.com/HotAsWater/RayTracer",
    },
  },
  {
    title: "2D Platformer - Prototype",
    description: (
      <>
        A 2D winter themed platformer prototype made in <span className="font-extrabold text-orange-300">Unity</span> during a <span className="font-extrabold text-orange-300">2 days Game Jam</span>.<br /> Making use of <span className="font-extrabold text-orange-300">shaders, lights and particle effects</span> as well as core Unity mechanics
      </>
    ),
    media: {
      type: "gif" as const,
      src: projectPlatformer,
    },
    tags: ["C#", "Unity"],
    links: {
      demo: "https://youtu.be/BIJsjm6Un-s",
    },
  },
  {
    title: "2D Platformer - Prototype",
    description: (
      <>
        A 2D winter themed platformer prototype made in <span className="font-extrabold text-orange-300">Unity</span> during a <span className="font-extrabold text-orange-300">2 days Game Jam</span>.<br /> Making use of <span className="font-extrabold text-orange-300">shaders, lights and particle effects</span> as well as core Unity mechanics
      </>
    ),
    media: {
      type: "gif" as const,
      src: projectPlatformer,
    },
    tags: ["C#", "Unity"],
    links: {
      demo: "https://youtu.be/BIJsjm6Un-s",
    },
  },
  {
    title: "Small 2D RPG",
    description: (
      <>
        Creation of a small 2D <span className="font-extrabold text-orange-300">RPG</span> during the last 2 month of my first school year. Using only <span className="font-extrabold text-orange-300">C and the SFML</span> librairy for rendering. This was a team project of 2 person lasting 1 month.<br /><br />
        <span className="font-extrabold text-orange-300">What I made:</span> All menu UI/logic (inventory, save & sound systems, spell book...), sprites animations, player collision with map, entities, custom event, NPC quest.
      </>
    ),
    media: {
      type: "video" as const,
      src: projectRpg2D,
    },
    tags: ["C", "SFML", "UI", "SFML", "Team Project"],
    links: {
      demo: "https://youtu.be/-ItbgcpxArk",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold font-mono tracking-tight mb-12 animate-fade-up-delay-1">
          <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;