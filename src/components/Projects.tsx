import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Users, Zap, TrendingUp, Award, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "VisaMate-Pro",
      category: "AI-Powered Travel App",
      description: "Travel Recommendation App powered by AI and Advanced Machine Learning Algorithms. Helps users find the best travel destinations based on their preferences and budget.",
      longDescription: "A comprehensive travel planning application that leverages artificial intelligence to provide personalized recommendations. Features include destination matching, budget optimization, and real-time travel updates.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "AI/ML", "Firebase", "Google Maps API"],
      features: [
        "AI-powered destination recommendations",
        "Budget optimization algorithms",
        "Real-time travel updates",
        "User preference learning",
        "Integrated booking system"
      ],
      links: {
        github: "https://github.com/collinsvictor1818/VisaMate-Pro",
        live: null
      },
      stats: {
        users: "1K+",
        rating: "4.8",
        downloads: "5K+"
      },
      color: "bg-accent",
      icon: Zap
    },
    {
      title: "Mavuno-Hub",
      category: "Agricultural Platform",
      description: "A Cross platform software for Farmers in Kenya and beyond. Connects farmers, buyers, and agricultural experts in a comprehensive ecosystem.",
      longDescription: "Revolutionary agricultural platform designed to bridge the gap between farmers and the market. Features include crop management, market analytics, weather forecasting, and expert consultation.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Weather API"],
      features: [
        "Crop management system",
        "Market price analytics",
        "Weather forecasting",
        "Expert consultation",
        "Supply chain management"
      ],
      links: {
        github: "https://github.com/Mavuno-Hub/Mavuno-Hub",
        live: null
      },
      stats: {
        users: "3K+",
        rating: "4.9",
        downloads: "10K+"
      },
      color: "bg-accent",
      icon: TrendingUp
    },
    {
      title: "CS Messaging App",
      category: "Customer Service Platform",
      description: "CS Messaging web app designed to streamline customer service inquiries for Branch, allowing agents to respond to messages efficiently.",
      longDescription: "Advanced customer service platform built to handle high-volume customer interactions. Features real-time messaging, automated responses, and comprehensive analytics dashboard.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "WebRTC", "Firebase", "Cloud Functions"],
      features: [
        "Real-time messaging",
        "Automated response system",
        "Agent performance analytics",
        "Multi-channel support",
        "Priority queue management"
      ],
      links: {
        github: "https://github.com/collinsvictor1818/CS_Messaging_App",
        live: null
      },
      stats: {
        users: "500+",
        rating: "4.7",
        downloads: "2K+"
      },
      color: "bg-accent",
      icon: Users
    },
    {
      title: "Saidizi",
      category: "AI Assistant",
      description: "An AI Helper powered by AI and Gemini LLM. Provides intelligent assistance for various tasks and queries.",
      longDescription: "Sophisticated AI assistant leveraging Google's Gemini LLM to provide intelligent responses and task automation. Features include natural language processing, context awareness, and multi-modal interactions.",
      image: "/placeholder.svg",
      technologies: ["C++", "Gemini LLM", "Python", "TensorFlow", "API Integration"],
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-modal interactions",
        "Task automation",
        "Learning from user patterns"
      ],
      links: {
        github: "https://github.com/collinsvictor1818/Saidizi",
        live: null
      },
      stats: {
        users: "2K+",
        rating: "4.6",
        downloads: "8K+"
      },
      color: "bg-accent",
      icon: Code2
    },
    {
      title: "Hela-Pochi",
      category: "FinTech Platform",
      description: "A FinTech product aiming to streamline Crypto exchange in the DeFI space. Provides secure and efficient cryptocurrency trading.",
      longDescription: "Cutting-edge FinTech platform focused on decentralized finance (DeFi) solutions. Features include secure crypto trading, wallet management, and DeFi protocol integration.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "Blockchain", "Web3", "Solidity"],
      features: [
        "Secure crypto trading",
        "Multi-wallet support",
        "DeFi protocol integration",
        "Real-time price tracking",
        "Advanced security features"
      ],
      links: {
        github: "https://github.com/hela-pochi/hela-pochi",
        live: null
      },
      stats: {
        users: "1.5K+",
        rating: "4.5",
        downloads: "6K+"
      },
      color: "bg-accent",
      icon: Award
    },
    {
      title: "H-Kanisa App",
      category: "Religious Platform",
      description: "H-Kanisa App Project - A comprehensive platform for church management and community engagement.",
      longDescription: "Modern church management system designed to enhance community engagement and streamline church operations. Features include event management, donation tracking, and community messaging.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Push Notifications"],
      features: [
        "Event management system",
        "Donation tracking",
        "Community messaging",
        "Prayer request system",
        "Sermon streaming"
      ],
      links: {
        github: "https://github.com/H-Kanisa/H-Kanisa-App",
        live: null
      },
      stats: {
        users: "800+",
        rating: "4.8",
        downloads: "3K+"
      },
      color: "bg-accent",
      icon: Smartphone
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 font-['Gilmer']">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto font-['Gilmer']">
            Showcasing innovative mobile applications and solutions that demonstrate technical excellence and user-centric design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-glass rounded-3xl overflow-hidden border border-glass hover:border-accent/10 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 bg-accent/30 overflow-hidden">
                <div className="absolute inset-0 bg-accent/12"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${project.color} p-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-xs font-medium bg-accent/90 text-white font-['Gilmer']`}>
                    {project.category}
                  </span>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-['Gilmer']">
                    ⭐ {project.stats.rating}
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-['Gilmer']">
                    👥 {project.stats.users}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-theme-primary mb-2 group-hover:text-accent transition-colors duration-300 font-['Gilmer']">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-theme-secondary mb-4 leading-relaxed font-['Gilmer']">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-accent/20 rounded-full text-xs text-accent border border-accent/30 font-['Gilmer']"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-theme-primary mb-2 font-['Gilmer']">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-theme-secondary flex items-center font-['Gilmer']">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-accent/50 text-accent hover:bg-accent/10 flex items-center space-x-1 font-['Gilmer']"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/80 text-white flex items-center space-x-1 font-['Gilmer']"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-6 sm:mb-8 font-['Gilmer']">Project Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "6+", label: "Major Projects", color: "text-accent" },
              { number: "8K+", label: "Total Users", color: "text-accent" },
              { number: "34K+", label: "Total Downloads", color: "text-accent" },
              { number: "4.7", label: "Avg Rating", color: "text-accent" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 bg-glass rounded-full border border-glass"
              >
                <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-2 font-['Gilmer']`}>{stat.number}</div>
                <div className="text-theme-secondary text-xs sm:text-sm font-['Gilmer']">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-glass rounded-3xl border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4 font-['Gilmer']">Interested in Working Together?</h3>
            <p className="text-sm sm:text-base text-theme-secondary mb-6 font-['Gilmer']">
              I'm always excited to work on new projects and collaborate with innovative teams. 
              Let's discuss how we can bring your mobile app ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                className="bg-accent hover:bg-accent/80 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium font-['Gilmer'] text-sm sm:text-base"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium font-['Gilmer'] text-sm sm:text-base"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;