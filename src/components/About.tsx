import { motion } from "framer-motion";
import { Award, Users, Code, Target, GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: Code,
      title: "Senior Flutter Engineer",
      description: "Leading mobile development at Anythink, England UK",
      color: "bg-[#ff4940]"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Successfully leading cross-functional engineering teams",
      color: "bg-[#003a63]"
    },
    {
      icon: Award,
      title: "High-Performance Apps",
      description: "Built apps serving 5,000+ users with excellent performance",
      color: "bg-[#ff4940]"
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Consistently delivering innovative solutions on time",
      color: "bg-[#003a63]"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
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
            About <span className="text-[#ff4940]">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Gilmer']">
            Passionate mobile engineer with a track record of transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4 font-['Gilmer']">Professional Journey</h3>
              <p className="text-white/80 leading-relaxed font-['Gilmer']">
                With <strong className="text-[#ff4940]">6 years of experience</strong> in mobile development, 
                I've evolved from a passionate developer to a <strong className="text-[#ff4940]">Senior Mobile Engineer and Team Lead</strong>. 
                My expertise spans native development with Swift, Kotlin, and C++, as well as cross-platform 
                solutions using Flutter and Dart.
              </p>
              <p className="text-white/80 leading-relaxed font-['Gilmer']">
                Currently serving as a <strong className="text-[#ff4940]">Senior Flutter Engineer at Anythink</strong> 
                (Remote, England UK), I provide technical leadership while mentoring junior engineers and 
                ensuring the delivery of high-quality mobile applications that enhance user experience 
                and drive business growth.
              </p>
            </div>

            {/* Education & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white/10 rounded-full border border-[#ff4940]/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#ff4940] p-2 rounded-full">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-white font-['Gilmer']">Education</h4>
                </div>
                <p className="text-sm text-white/80 font-['Gilmer']">Bachelor of Computer Science</p>
                <p className="text-xs text-[#ff4940] font-['Gilmer']">Specialization: Intelligent Systems</p>
                <p className="text-xs text-white/60 font-['Gilmer']">Kenyatta University (2019-2023)</p>
              </div>
              
              <div className="p-4 bg-white/10 rounded-full border border-[#ff4940]/30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-[#003a63] p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-white font-['Gilmer']">Location</h4>
                </div>
                <p className="text-sm text-white/80 font-['Gilmer']">Nairobi, Kenya</p>
                <p className="text-xs text-[#ff4940] font-['Gilmer']">Remote Work Available</p>
                <p className="text-xs text-white/60 font-['Gilmer']">Global Collaboration</p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4 font-['Gilmer']">Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Quality", "Collaboration", "Continuous Learning", "User-Centric Design"].map((value) => (
                  <span
                    key={value}
                    className="px-4 py-2 bg-[#ff4940]/20 rounded-full text-sm text-[#ff4940] border border-[#ff4940]/30 font-['Gilmer']"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-3xl border border-white/20 hover:border-[#ff4940]/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full ${achievement.color} p-3 mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-['Gilmer']">{achievement.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-['Gilmer']">{achievement.description}</p>
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
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white/10 rounded-3xl border border-[#ff4940]/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Gilmer']">My Mission</h3>
            <p className="text-lg text-white/80 leading-relaxed font-['Gilmer']">
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