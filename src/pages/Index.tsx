import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#010936]">
      {/* Dotted Overlay */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:15px_15px] [mask-image:radial-gradient(circle_145%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;