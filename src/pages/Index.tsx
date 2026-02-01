import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay dark">
      {/* Mouse glow */}
      <MouseGlow />
      
      <div className="relative min-h-screen z-0">
        <Hero />
      </div>

      {/* Everything else scrolls over hero */}
      <main className="relative bg-background noise-overlay dark z-10">
        <MouseGlow />
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Index;