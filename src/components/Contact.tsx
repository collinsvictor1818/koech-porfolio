import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, MessageCircle, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "collinsvictor1010@gmail.com",
      href: "mailto:collinsvictor1010@gmail.com",
      color: "bg-[#ff4940]"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 758 214 490",
      href: "tel:+254758214490",
      color: "bg-[#003a63]"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,
      color: "bg-[#ff4940]"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@collinsvictor1818",
      href: "https://github.com/collinsvictor1818",
      color: "bg-[#003a63]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Collins Koech",
      href: "https://www.linkedin.com/in/collins-koech-2a6069180/",
      color: "bg-[#003a63]"
    },
    {
      icon: MessageCircle,
      label: "Portfolio",
      value: "Live Portfolio",
      href: "https://portfolio-2e563.web.app/",
      color: "bg-[#ff4940]"
    }
  ];

  const availabilityItems = [
    "Full-time positions",
    "Contract projects",
    "Remote collaborations",
    "Technical consultancy",
    "Team leadership roles",
    "Flutter development projects"
  ];

  return (
    <section id="contact" className="py-20 px-4">
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
            Let's <span className="text-[#ff4940]">Connect</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Gilmer']">
            Ready to bring your mobile app ideas to life? Let's discuss how we can work together to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-['Gilmer']">Get in Touch</h3>
              <p className="text-white/80 mb-8 leading-relaxed font-['Gilmer']">
                I'm always interested in discussing new opportunities, whether it's a challenging project, 
                a leadership role, or innovative collaborations. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-full border border-white/20 hover:border-[#ff4940]/50 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-full ${contact.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 font-['Gilmer']">{contact.label}</div>
                        <div className="text-white font-medium font-['Gilmer']">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-full border border-white/20">
                      <div className={`w-12 h-12 rounded-full ${contact.color} p-3 flex items-center justify-center`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 font-['Gilmer']">{contact.label}</div>
                        <div className="text-white font-medium font-['Gilmer']">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 font-['Gilmer']">Connect on Social</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-full border border-white/20 hover:border-[#ff4940]/50 transition-all duration-300 group"
                  >
                    <div className={`w-8 h-8 rounded-full ${social.color} p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 font-['Gilmer']">{social.label}</div>
                      <div className="text-white text-sm font-['Gilmer']">{social.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Availability & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <div className="bg-[#ff4940]/10 rounded-3xl p-6 border border-[#ff4940]/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-[#ff4940] rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white font-['Gilmer']">Available for Work</h3>
              </div>
              <p className="text-white/80 mb-4 font-['Gilmer']">
                Currently open to new opportunities and collaborations. I'm particularly interested in:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availabilityItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-sm text-white/80 font-['Gilmer']"
                  >
                    <div className="w-1.5 h-1.5 bg-[#ff4940] rounded-full"></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 font-['Gilmer']">Quick Actions</h3>
              <div className="space-y-4">
                <Button
                  className="w-full bg-[#ff4940] hover:bg-[#ff4940]/80 text-white py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer']"
                  onClick={() => window.open('mailto:collinsvictor1010@gmail.com?subject=Project Collaboration Inquiry', '_blank')}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-[#ff4940] text-[#ff4940] hover:bg-[#ff4940]/10 py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer']"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-[#003a63] text-[#003a63] hover:bg-[#003a63]/10 py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer']"
                  onClick={() => window.open('https://calendly.com/collinskoech', '_blank')}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Call</span>
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/10 rounded-3xl p-6 border border-white/20">
              <h4 className="font-semibold text-white mb-3 font-['Gilmer']">Response Time</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-white/60">Email inquiries:</span>
                  <span className="text-[#ff4940]">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-white/60">Project discussions:</span>
                  <span className="text-[#003a63]">Same day</span>
                </div>
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-white/60">Urgent matters:</span>
                  <span className="text-[#ff4940]">Within 2 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-white/10 rounded-3xl border border-[#ff4940]/20">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Gilmer']">Ready to Start Your Next Project?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto font-['Gilmer']">
              Whether you need a mobile app built from scratch, want to optimize an existing application, 
              or require technical leadership for your team, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#ff4940] hover:bg-[#ff4940]/80 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 font-['Gilmer']"
                onClick={() => window.open('mailto:collinsvictor1010@gmail.com?subject=Let\'s Work Together!', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};