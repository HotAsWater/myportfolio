import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // interpolation factor (lower = more delay)
      const ease = 0.12;

      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${
          pos.current.x - 50
        }px, ${pos.current.y - 50}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0"
    >
      <div className="w-[100px] h-[100px] bg-primary/40 rounded-full blur-[40px]" />
    </div>
  );
};

export default MouseGlow;
