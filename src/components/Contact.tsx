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
      color: "bg-accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 758 214 490",
      href: "tel:+254758214490",
      color: "bg-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: null,    
      color: "bg-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@collinsvictor1818",
      href: "https://github.com/collinsvictor1818",
      color: "bg-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Collins Koech",
      href: "https://www.linkedin.com/in/collins-koech-2a6069180/",
      color: "bg-accent"
    },
    {
      icon: MessageCircle,
      label: "Portfolio",
      value: "Live Portfolio",
      href: "https://portfolio-2e563.web.app/",
      color: "bg-accent"
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4">
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
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-theme-secondary max-w-3xl mx-auto font-['Gilmer']">
            Ready to bring your mobile app ideas to life? Let's discuss how we can work together to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4 sm:mb-6 font-['Gilmer']">Get in Touch</h3>
              <p className="text-sm sm:text-base text-theme-secondary mb-6 sm:mb-8 leading-relaxed font-['Gilmer']">
                I'm always interested in discussing new opportunities, whether it's a challenging project, 
                a leadership role, or innovative collaborations. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
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
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-glass rounded-full border border-glass hover:border-accent/50 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-full ${contact.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-theme-muted font-['Gilmer']">{contact.label}</div>
                        <div className="text-sm sm:text-base text-theme-primary font-medium font-['Gilmer']">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-glass rounded-full border border-glass">
                      <div className={`w-12 h-12 rounded-full ${contact.color} p-3 flex items-center justify-center`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-theme-muted font-['Gilmer']">{contact.label}</div>
                        <div className="text-sm sm:text-base text-theme-primary font-medium font-['Gilmer']">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-theme-primary mb-4 font-['Gilmer']">Connect on Social</h4>
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
                    className="flex items-center space-x-3 p-2 sm:p-3 bg-glass rounded-full border border-glass hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className={`w-8 h-8 rounded-full ${social.color} p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-theme-muted font-['Gilmer']">{social.label}</div>
                      <div className="text-xs sm:text-sm text-theme-primary font-['Gilmer']">{social.value}</div>
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
            className="space-y-6 sm:space-y-8"
          >
            {/* Availability Status */}
            <div className="bg-accent/10 rounded-3xl p-4 sm:p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <h3 className="text-lg sm:text-xl font-bold text-theme-primary font-['Gilmer']">Available for Work</h3>
              </div>
              <p className="text-sm sm:text-base text-theme-secondary mb-4 font-['Gilmer']">
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
                    className="flex items-center space-x-2 text-xs sm:text-sm text-theme-secondary font-['Gilmer']"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-glass rounded-3xl p-4 sm:p-6 border border-glass">
              <h3 className="text-lg sm:text-xl font-bold text-theme-primary mb-4 font-['Gilmer']">Quick Actions</h3>
              <div className="space-y-4">
                <Button
                  className="w-full bg-accent hover:bg-accent/80 text-white py-2 sm:py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer'] text-sm sm:text-base"
                  onClick={() => window.open('mailto:collinsvictor1010@gmail.com?subject=Project Collaboration Inquiry', '_blank')}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 py-2 sm:py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer'] text-sm sm:text-base"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-theme-secondary text-theme-secondary hover:bg-accent/10 py-2 sm:py-3 rounded-full font-medium flex items-center justify-center space-x-2 font-['Gilmer'] text-sm sm:text-base"
                  onClick={() => window.open('https://calendly.com/collinskoech', '_blank')}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Call</span>
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-glass rounded-3xl p-4 sm:p-6 border border-glass">
              <h4 className="text-sm sm:text-base font-semibold text-theme-primary mb-3 font-['Gilmer']">Response Time</h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-theme-muted">Email inquiries:</span>
                  <span className="text-accent">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-theme-muted">Project discussions:</span>
                  <span className="text-theme-secondary">Same day</span>
                </div>
                <div className="flex justify-between items-center font-['Gilmer']">
                  <span className="text-theme-muted">Urgent matters:</span>
                  <span className="text-accent">Within 2 hours</span>
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
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-glass rounded-3xl border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4 font-['Gilmer']">Ready to Start Your Next Project?</h3>
            <p className="text-sm sm:text-base text-theme-secondary mb-6 max-w-2xl mx-auto font-['Gilmer']">
              Whether you need a mobile app built from scratch, want to optimize an existing application, 
              or require technical leadership for your team, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                className="bg-accent hover:bg-accent/80 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 font-['Gilmer'] text-sm sm:text-base"
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