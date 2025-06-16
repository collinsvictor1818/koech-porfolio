import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Users, Zap, Award, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Flutter Engineer",
      company: "Anythink",
      location: "England, UK (Remote)",
      period: "06/2024 – Present",
      type: "Current Role",
      description: "Leading technical and team development in high-performance mobile applications",
      achievements: [
        "Provide technical and team leadership in the development of high-performance mobile applications",
        "Lead the design and implementation of new features, collaborating with cross-functional teams",
        "Champion rigorous code review processes and mentor junior engineers",
        "Foster a team environment focused on continuous improvement and engineering excellence"
      ],
      technologies: ["Flutter", "Dart", "Clean Architecture", "Team Leadership", "Code Review"],
      color: "bg-[#ff4940]",
      icon: Building
    },
    {
      title: "AI/ML & Flutter Engineer",
      company: "Melian Dialogue Research",
      location: "Newcastle, UK (Remote)",
      period: "02/2024 – 05/2024",
      type: "Contract",
      description: "Engineered high-performance cross-platform applications with AI/ML integration",
      achievements: [
        "Engineered a high-performance, cross-platform application serving 5,000+ users",
        "Demonstrated strong understanding of software algorithms and patterns",
        "Managed complex data pipelines and ensured smooth user experience",
        "Applied excellent object-oriented design and analysis skills for scalable architecture"
      ],
      technologies: ["Flutter", "AI/ML", "Data Pipelines", "OOD", "Cross-Platform"],
      color: "bg-[#003a63]",
      icon: Zap
    },
    {
      title: "Fullstack Flutter Engineer",
      company: "MavunoHub",
      location: "Nairobi, Kenya",
      period: "09/2023 – 02/2024",
      type: "Full-time",
      description: "Managed full software development lifecycle for multiple mobile applications",
      achievements: [
        "Managed the full software development lifecycle for three mobile applications",
        "Showcased ability to lead projects from initial design through to deployment",
        "Integrated multiple external services using RESTful APIs",
        "Built robust, multi-threaded features for real-time data synchronization"
      ],
      technologies: ["Flutter", "RESTful APIs", "Multi-threading", "Full-stack", "Project Management"],
      color: "bg-[#ff4940]",
      icon: Users
    },
    {
      title: "Software Engineer",
      company: "DresdenTech",
      location: "Dresden, Germany",
      period: "02/2022 - 09/2023",
      type: "Full-time",
      description: "Developed proof-of-concept applications with external platform integrations",
      achievements: [
        "Developed a proof-of-concept application integrating with external platforms",
        "Required deep understanding of software design patterns",
        "Focused on creating efficient, high-quality code",
        "Gained international experience working with German engineering standards"
      ],
      technologies: ["Software Design Patterns", "External Integrations", "Proof-of-Concept", "Quality Code"],
      color: "bg-[#003a63]",
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Gilmer']">
            Professional <span className="text-[#ff4940]">Experience</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Gilmer']">
            A journey of growth, leadership, and technical excellence across global companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#ff4940]"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#ff4940] border-4 border-[#003a63] z-10">
                  <div className="absolute inset-0 rounded-full bg-[#ff4940] animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 rounded-3xl p-6 border border-white/20 hover:border-[#ff4940]/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-8 h-8 rounded-full ${exp.color} p-2 flex items-center justify-center`}>
                            <exp.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-[#ff4940]/20 text-[#ff4940] border border-[#ff4940]/30 font-['Gilmer']`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1 font-['Gilmer']">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-white/80 text-sm mb-2 font-['Gilmer']">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-[#ff4940] text-sm font-['Gilmer']">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-4 leading-relaxed font-['Gilmer']">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center font-['Gilmer']">
                        <div className="bg-[#ff4940] p-1 rounded-full mr-2">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-white/80 text-sm font-['Gilmer']">
                            <ChevronRight className="w-4 h-4 text-[#ff4940] mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 font-['Gilmer']">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#ff4940]/20 rounded-full text-xs text-[#ff4940] border border-[#ff4940]/30 font-['Gilmer']"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-['Gilmer']">Career Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Global Experience",
                description: "Worked with companies across Kenya, Germany, and the UK",
                icon: MapPin,
                color: "bg-[#ff4940]"
              },
              {
                title: "Leadership Growth",
                description: "Evolved from individual contributor to senior engineering leader",
                icon: Users,
                color: "bg-[#003a63]"
              },
              {
                title: "Technical Excellence",
                description: "Consistently delivered high-quality solutions across different domains",
                icon: Award,
                color: "bg-[#ff4940]"
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/10 rounded-3xl border border-white/20 hover:border-[#ff4940]/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${highlight.color} p-3 flex items-center justify-center`}>
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 font-['Gilmer']">{highlight.title}</h4>
                <p className="text-white/80 text-sm font-['Gilmer']">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 