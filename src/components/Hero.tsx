import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin, Smartphone, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff4940]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#003a63]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-[#ff4940] p-2 rounded-full">
              <MapPin size={16} className="text-white" />
            </div>
            <span className="font-['Gilmer'] text-gray-300">Nairobi, Kenya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight font-['Gilmer']"
          >
            Hi, I'm{" "}
            <span className="text-[#ff4940]">
             Collins Koech
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 font-['Gilmer']">
              Senior Mobile Engineer
            </h2>
            <h3 className="text-xl text-[#ff4940] font-['Gilmer']">Builder & Creative</h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl font-['Gilmer']"
          >
            With 6 years of experience, I specialize in building high-performance mobile applications 
            using Flutter, Swift, and Kotlin. I lead teams to deliver innovative solutions that 
            enhance user experience and drive business growth.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 py-6"
          >
            <div className="text-center bg-slate-800/50 rounded-full py-4 px-2">
              <div className="text-3xl font-bold text-[#ff4940] font-['Gilmer']">6+</div>
              <div className="text-sm text-gray-400 font-['Gilmer']">Years Experience</div>
            </div>
            <div className="text-center bg-slate-800/50 rounded-full py-4 px-2">
              <div className="text-3xl font-bold text-[#ff4940] font-['Gilmer']">50+</div>
              <div className="text-sm text-gray-400 font-['Gilmer']">Projects Completed</div>
            </div>
            <div className="text-center bg-slate-800/50 rounded-full py-4 px-2">
              <div className="text-3xl font-bold text-[#003a63] font-['Gilmer']">5K+</div>
              <div className="text-sm text-gray-400 font-['Gilmer']">Users Impacted</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#ff4940] hover:bg-[#ff4940]/80 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 font-['Gilmer']"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-[#003a63] text-[#003a63] hover:bg-[#003a63]/10 px-8 py-3 rounded-full font-medium transition-all duration-300 font-['Gilmer']"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4 pt-4"
          >
            <a
              href="https://github.com/collinsvictor1818"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-[#ff4940]/20 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/collins-koech-2a6069180/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-[#003a63]/20 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:collinsvictor1010@gmail.com"
              className="p-3 bg-slate-800 hover:bg-[#ff4940]/20 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Main Profile Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-[#ff4940] p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </motion.div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-[#003a63]/20 backdrop-blur-sm">
                <img
                  src="/profile.png"
                  alt="Koech"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 bg-[#ff4940] rounded-full shadow-lg"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 p-3 bg-[#003a63] rounded-full shadow-lg"
              >
                <Smartphone className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 p-3 bg-[#ff4940] rounded-full shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Tech Stack Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
            >
              {["Flutter", "Swift", "Kotlin"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 bg-slate-800/80 rounded-full text-sm text-[#ff4940] border border-[#ff4940]/30 font-['Gilmer']"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};