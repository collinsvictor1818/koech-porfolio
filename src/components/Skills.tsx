import { motion } from "framer-motion";
import { Smartphone, Code2, Server, Database, Wrench, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Native Development",
      icon: Smartphone,
      color: "bg-[#ff4940]",
      skills: [
        { name: "Swift", level: 85, description: "iOS native development" },
        { name: "Objective-C", level: 75, description: "Legacy iOS support" },
        { name: "Kotlin", level: 88, description: "Android native development" },
        { name: "Java", level: 80, description: "Android development" },
        { name: "C++", level: 70, description: "Performance-critical components" },
      ]
    },
    {
      title: "Cross-Platform",
      icon: Code2,
      color: "bg-[#003a63]",
      skills: [
        { name: "Flutter", level: 95, description: "Primary framework" },
        { name: "Dart", level: 92, description: "Flutter's language" },
        { name: "TypeScript", level: 78, description: "Type-safe JavaScript" },
      ]
    },
    {
      title: "Architecture & Design",
      icon: Server,
      color: "bg-[#ff4940]",
      skills: [
        { name: "MVVM", level: 90, description: "Model-View-ViewModel pattern" },
        { name: "Clean Architecture", level: 85, description: "Scalable app structure" },
        { name: "SOLID Principles", level: 88, description: "Object-oriented design" },
        { name: "Design Patterns", level: 82, description: "Software engineering patterns" },
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "bg-[#003a63]",
      skills: [
        { name: "Python", level: 75, description: "Backend development" },
        { name: "RESTful APIs", level: 85, description: "API integration" },
        { name: "GraphQL", level: 70, description: "Query language" },
        { name: "Firebase", level: 88, description: "Backend-as-a-Service" },
        { name: "PostgreSQL", level: 72, description: "Relational database" },
        { name: "MongoDB", level: 75, description: "NoSQL database" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "bg-[#ff4940]",
      skills: [
        { name: "Git", level: 90, description: "Version control" },
        { name: "CI/CD", level: 80, description: "Continuous integration" },
        { name: "Docker", level: 70, description: "Containerization" },
        { name: "Google Play Console", level: 85, description: "Android deployment" },
        { name: "TestFlight", level: 82, description: "iOS beta testing" },
      ]
    },
    {
      title: "Core Competencies",
      icon: Users,
      color: "bg-[#003a63]",
      skills: [
        { name: "Team Leadership", level: 92, description: "Leading engineering teams" },
        { name: "UX/UI Principles", level: 80, description: "User experience design" },
        { name: "Multi-threading", level: 85, description: "Performance optimization" },
        { name: "Problem-Solving", level: 90, description: "Analytical thinking" },
        { name: "Communication", level: 88, description: "Cross-functional collaboration" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
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
            Technical <span className="text-[#ff4940]">Skills</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Gilmer']">
            A comprehensive toolkit built through 6 years of hands-on mobile development experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-3xl p-6 border border-white/20 hover:border-[#ff4940]/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-full ${category.color} p-3 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white font-['Gilmer']">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-medium font-['Gilmer']">{skill.name}</span>
                        <p className="text-xs text-white/60 font-['Gilmer']">{skill.description}</p>
                      </div>
                      <span className="text-sm text-[#ff4940] font-medium font-['Gilmer']">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 font-['Gilmer']">Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Mobile App Architecture",
              "Cross-Platform Development",
              "Performance Optimization",
              "Team Leadership",
              "Code Review & Mentoring",
              "Agile Development",
              "Multi-threaded Applications",
              "API Integration",
              "UI/UX Implementation",
              "DevOps Integration"
            ].map((specialization, index) => (
              <motion.span
                key={specialization}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-[#ff4940]/20 rounded-full text-sm text-[#ff4940] border border-[#ff4940]/30 hover:border-[#ff4940]/50 transition-all duration-300 font-['Gilmer']"
              >
                {specialization}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "6+", label: "Years Experience", color: "text-[#ff4940]" },
              { number: "50+", label: "Projects Delivered", color: "text-[#ff4940]" },
              { number: "10+", label: "Technologies Mastered", color: "text-[#ff4940]" },
              { number: "5K+", label: "Users Impacted", color: "text-[#ff4940]" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/10 rounded-full border border-white/20"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2 font-['Gilmer']`}>{stat.number}</div>
                <div className="text-white/80 text-sm font-['Gilmer']">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 