import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background noise-overlay">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;