import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

// Replace this with your actual photo import or URL
const profilePhoto = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

const About = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "jenithamaxi17@gmail.com",
      link: "mailto:jenithamaxi17@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "0760048658",
      link: "tel:+94760048658"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Jaffna, Sri Lanka",
      link: "https://maps.google.com/?q=Jaffna,Sri+Lanka"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Jenitha23",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b",
      label: "LinkedIn"
    }
  ];

  return (
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative Title Section */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <div className="mb-4">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </span>
              </h1>
              <div className="w-40 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-8">
              Driven by curiosity and powered by code
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Photo & Basic Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 flex flex-col items-center"
            >
              {/* Profile Photo Container - Circle Only */}
              <div className="relative group mb-8">
                {/* Outer glow circle */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main profile circle */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
                  <img
                      src={profilePhoto}
                      alt="Jenitha Johnson Maxi"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Animated border */}
                <div className="absolute -inset-2 rounded-full">
                  <div className="w-full h-full rounded-full border-2 border-emerald-400/0 group-hover:border-emerald-400/30 transition-all duration-500 animate-pulse"></div>
                </div>

                {/* Floating dots decoration */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-400/50"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-teal-400/30"></div>
              </div>

              {/* Name & Title */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Jenitha Johnson Maxi
                </h3>
                <p className="text-lg text-emerald-400 font-semibold">
                  Full Stack Developer
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8 w-full max-w-xs">
                {contactInfo.map((info, index) => (
                    <motion.a
                        key={info.title}
                        href={info.link}
                        target={info.title === "Location" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group w-full"
                    >
                      <div className="p-2 bg-emerald-900/30 rounded-lg group-hover:bg-emerald-900/50 shrink-0">
                        <info.icon className="text-emerald-400" size={20} />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-sm text-gray-400 truncate">{info.title}</p>
                        <p className="text-white font-medium group-hover:text-emerald-300 transition-colors truncate">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15, y: -5 }}
                        className="p-3 bg-gray-800 rounded-full hover:bg-emerald-900/30 transition-all duration-300 group relative"
                        aria-label={social.label}
                    >
                      <social.icon
                          className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                          size={24}
                      />
                      {/* Tooltip on hover */}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                    </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Bio Text */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a full-stack developer who loves building things and solving problems. I enjoy taking ideas apart, understanding how they work, and turning them into clean, functional applications that actually make sense to users.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    Whether it's designing backend logic, crafting front-end interactions, or optimizing performance, I enjoy the challenge of problem-solving at every stage. With a strong interest in mathematics, I approach development with logic, structure, and curiosity—always looking for better, smarter solutions.
                  </p>
                </div>

                {/* Skills/Interests Tags */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Areas of Interest</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Full Stack Development", "Backend Logic", "Frontend Design", "Problem Solving", "Mathematics", "Performance Optimization", "Clean Architecture", "User Experience"].map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 bg-emerald-900/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-800/30 hover:bg-emerald-900/30 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-xl p-6 border border-emerald-800/20"
              >
                <h4 className="text-xl font-semibold text-white mb-2">Education</h4>
                <p className="text-gray-300">
                  <span className="font-semibold text-emerald-300">Bachelor of Science in Computer Science</span><br />
                  Sri Lanka Institute of Information Technology (SLIIT)<br />
                  <span className="text-emerald-400">2023 - Present</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;