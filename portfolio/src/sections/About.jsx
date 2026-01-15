import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode, FaBrain, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql } from 'react-icons/si';

const About = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "jenithamaxi17@gmail.com",
      link: "mailto:jenithamaxi17@gmail.com",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "0760048658",
      link: "tel:+94760048658",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Jaffna, Sri Lanka",
      link: "https://maps.google.com/?q=Jaffna,Sri+Lanka",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Jenitha23",
      label: "GitHub",
      color: "bg-gray-900"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b",
      label: "LinkedIn",
      color: "bg-blue-700"
    }
  ];

  const interests = [
    { icon: <FaCode />, title: "Full Stack Dev", desc: "End-to-end web applications" },
    { icon: <FaBrain />, title: "AI/ML", desc: "Intelligent systems & algorithms" },
    { icon: <FaChartLine />, title: "Mathematics", desc: "Algorithmic thinking & logic" },
    { icon: <FaGraduationCap />, title: "Learning", desc: "Continuous growth mindset" },
  ];

  return (
      <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                           linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative Title with particles */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20 relative"
          >
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, -30, 0],
                      x: Math.sin(i) * 20,
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${50}%`,
                    }}
                />
            ))}

            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                About Me
              </span>
              </h1>
              <div className="relative w-64 h-1 mx-auto overflow-hidden rounded-full bg-gray-800">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400"
                    animate={{ x: [-300, 300] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-gray-300 mt-8"
            >
              Where <span className="text-emerald-400">Passion</span> meets{" "}
              <span className="text-cyan-400">Precision</span> in code
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Profile Card */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
            >
              {/* 3D Profile Card */}
              <div className="relative group perspective-1000">
                {/* Card background with 3D effect */}
                <motion.div
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800/50 shadow-2xl shadow-emerald-900/20 transform-style-preserve-3d transition-transform duration-500"
                >
                  {/* Glowing edges */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 z-10">
                    {/* Profile Photo with floating effect */}
                    <div className="relative mx-auto mb-8 group">
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

                      {/* Animated rings */}
                      <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-4 rounded-full border-2 border-transparent border-t-emerald-400 border-r-cyan-400"
                      />

                      {/* Main profile image */}
                      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/30">
                        <img
                            src="https://avatars.githubusercontent.com/u/123376847?v=4"
                            alt="Jenitha Johnson Maxi"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Name & Title with gradient */}
                    <div className="text-center mb-8">
                      <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent mb-2"
                      >
                        Jenitha Johnson Maxi
                      </motion.h3>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <p className="text-lg text-emerald-300 font-semibold">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    {/* Contact Info with animated cards */}
                    <div className="space-y-3">
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
                              className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group"
                          >
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                              <info.icon className="text-emerald-400" size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-400 truncate">{info.title}</p>
                              <p className="text-white font-medium truncate group-hover:text-emerald-300 transition-colors">
                                {info.value}
                              </p>
                            </div>
                          </motion.a>
                      ))}
                    </div>

                    {/* Social Links with floating effect */}
                    <div className="flex justify-center gap-4 mt-8">
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
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              className={`relative p-4 rounded-full ${social.color} hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group`}
                              aria-label={social.label}
                          >
                            <social.icon
                                className="text-white group-hover:scale-110 transition-transform"
                                size={20}
                            />
                            {/* Floating tooltip */}
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-emerald-500/30">
                          {social.label}
                        </span>
                          </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Bio & Details */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
            >
              {/* Main Bio Card */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    {/* Animated text block */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300 leading-relaxed"
                    >
                      I'm a passionate <span className="text-emerald-400 font-semibold">full-stack developer</span> with a deep curiosity for how things work. I enjoy transforming complex problems into elegant, efficient solutions that not only function flawlessly but also provide exceptional user experiences.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-300 leading-relaxed"
                    >
                      My approach combines <span className="text-cyan-400 font-semibold">mathematical precision</span> with creative problem-solving. Whether architecting robust backend systems, crafting intuitive frontend interfaces, or optimizing performance, I thrive on the challenge of finding the perfect balance between functionality and elegance.
                    </motion.p>
                  </div>

                  {/* Interests Grid */}
                  <div className="mt-10">
                    <h4 className="text-xl font-semibold text-white mb-6">
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Core Interests
                    </span>
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                          <motion.div
                              key={interest.title}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, y: -5 }}
                              className="group cursor-pointer p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-emerald-500/30 transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 group-hover:from-emerald-900/50 group-hover:to-cyan-900/50 transition-all duration-300">
                                <div className="text-2xl text-emerald-400">
                                  {interest.icon}
                                </div>
                              </div>
                              <div>
                                <h5 className="text-lg font-semibold text-white mb-1">
                                  {interest.title}
                                </h5>
                                <p className="text-sm text-gray-400">
                                  {interest.desc}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Timeline */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30">
                        <FaGraduationCap className="text-2xl text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">Education</h4>
                        <p className="text-sm text-gray-400">Academic Journey</p>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      {/* Timeline line */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-400"></div>

                      {/* Timeline item */}
                      <div className="relative mb-6">
                        <div className="absolute left-[-26px] top-0 w-4 h-4 rounded-full bg-emerald-400 border-4 border-gray-900"></div>
                        <h5 className="text-lg font-semibold text-white mb-1">
                          BSc in Computer Science
                        </h5>
                        <p className="text-emerald-300 font-medium mb-1">
                          Sri Lanka Institute of Information Technology (SLIIT)
                        </p>
                        <p className="text-gray-400">2023 - Present</p>
                        <p className="text-sm text-gray-300 mt-2">
                          Specializing in software engineering, algorithms, and emerging technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Philosophy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
                        <FaBrain className="text-2xl text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">Development Philosophy</h4>
                        <p className="text-sm text-gray-400">My Approach</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        "Clean, maintainable code is art",
                        "User experience drives design",
                        "Continuous learning fuels innovation",
                        "Mathematics provides the foundation",
                        "Elegant solutions over clever hacks"
                      ].map((principle, index) => (
                          <motion.div
                              key={principle}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            <p className="text-gray-300">{principle}</p>
                          </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;