import FloatingNav from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Squares } from "@/components/ui/squares-background";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useColors } from "@/hooks/useColors";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

const Index = () => {
  // Initialize color system
  useColors()
  
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full bg-theme-primary">
        {/* Animated Squares Background */}
        <div className="absolute inset-0 opacity-30">
          <Squares 
            direction="diagonal"
            speed={0.3}
            squareSize={50}
            borderColor="#ffffff20" 
            hoverFillColor="#ffffff10"
          />
        </div>
        
        <div className="relative z-10">
          {/* Center the FloatingNav */}
          <div className="flex justify-center w-full fixed top-4 left-0 z-50 pointer-events-none">
            <div className="pointer-events-auto">
              <FloatingNav 
                logo="Koech"
                navigationItems={[
                  { label: "Home", href: "#home", icon: <Home size={16} /> },
                  { label: "About", href: "#about", icon: <User size={16} /> },
                  { label: "Skills", href: "#skills", icon: <Code size={16} /> },
                  { label: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
                  { label: "Projects", href: "#projects", icon: <Code size={16} /> },
                  { label: "Contact", href: "#contact", icon: <Mail size={16} /> }
                ]}
              />
            </div>
          </div>
          <main className="pt-20">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;