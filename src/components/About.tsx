import { motion } from "framer-motion";
import { Award, Users, Code, Target, GraduationCap, MapPin } from "lucide-react";
import { Squares } from "@/components/ui/squares-background";

export const About = () => {
  const achievements = [
    {
      icon: Code,
      title: "Senior Flutter Engineer",
      description: "Leading mobile development at Anythink, England UK",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully leading cross-functional engineering teams",
      color: "bg-accent"
    },
    {
      icon: Award,
      title: "High-Performance Apps",
      description: "Built apps serving 5,000+ users with excellent performance",
      color: "bg-accent"
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Consistently delivering innovative solutions on time",
      color: "bg-accent"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 relative">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 opacity-0">
        <Squares 
          direction="up"
          speed={0.2}
          squareSize={45}
          borderColor="#ffffff15" 
          hoverFillColor="#ffffff08"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 font-['Gilmer']">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto font-['Gilmer']">
            Passionate mobile engineer with a track record of transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 font-['Gilmer']">Professional Journey</h3>
              <p className="text-sm sm:text-base text-theme-secondary leading-relaxed font-['Gilmer']">
                With <strong className="text-accent">6 years of experience</strong> in mobile development, 
                I've evolved from a passionate developer to a <strong className="text-accent">Senior Mobile Engineer and Team Lead</strong>. 
                My expertise spans native development with Swift, Kotlin, and C++, as well as cross-platform 
                solutions using Flutter and Dart.
              </p>
              <p className="text-sm sm:text-base text-theme-secondary leading-relaxed font-['Gilmer']">
                Currently serving as a <strong className="text-accent">Senior Flutter Engineer at Anythink</strong> 
                (Remote, England UK), I provide technical leadership while mentoring junior engineers and 
                ensuring the delivery of high-quality mobile applications that enhance user experience 
                and drive business growth.
              </p>
            </div>

            {/* Education & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 sm:mt-8">
              <div className="p-3 sm:p-4 bg-glass rounded-xl border border-accent/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-accent p-2 rounded-full">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-theme-primary font-['Gilmer']">Education</h4>
                </div>
                <p className="text-sm text-theme-secondary font-['Gilmer']">Bachelor of Computer Science</p>
                <p className="text-xs text-accent font-['Gilmer']">Specialization: Intelligent Systems</p>
                <p className="text-xs text-theme-muted font-['Gilmer']">Kenyatta University (2019-2023)</p>
              </div>
              
              <div className="p-3 sm:p-4 bg-glass rounded-xl border border-accent/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-accent p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-theme-primary font-['Gilmer']">Location</h4>
                </div>
                <p className="text-sm text-theme-secondary font-['Gilmer']">Nairobi, Kenya</p>
                <p className="text-xs text-accent font-['Gilmer']">Remote Work Available</p>
                <p className="text-xs text-theme-muted font-['Gilmer']">Global Collaboration</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-semibold text-theme-primary mb-4 font-['Gilmer']">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Quality", "Collaboration", "Continuous Learning", "User-Centric Design"].map((value) => (
                  <span
                    key={value}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-accent/20 rounded-full text-xs sm:text-sm text-accent border border-accent/30 font-['Gilmer']"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-4 sm:p-6 bg-glass rounded-3xl border border-glass hover:border-accent/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full ${achievement.color} p-3 mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-theme-primary mb-2 font-['Gilmer']">{achievement.title}</h3>
                <p className="text-theme-secondary text-xs sm:text-sm leading-relaxed font-['Gilmer']">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-glass rounded-3xl border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4 font-['Gilmer']">My Mission</h3>
            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed font-['Gilmer']">
              "To leverage cutting-edge mobile technologies and innovative design patterns to create 
              exceptional user experiences that not only meet business objectives but also make a 
              meaningful impact on users' daily lives. I believe in the power of collaboration, 
              continuous learning, and technical excellence to drive digital transformation."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};