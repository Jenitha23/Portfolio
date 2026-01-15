// src/sections/Certifications.jsx
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import {
  FaCloud,
  FaBrain,
  FaCode,
  FaDocker,
  FaChartBar,
  FaMicrochip,
  FaAward
} from 'react-icons/fa';

const Certifications = () => {
  const getPlatformIcon = (platform) => {
    const iconMap = {
      "Amazon Web Services": <FaCloud />,
      "Coursera - Stanford University": <FaBrain />,
      "freeCodeCamp": <FaCode />,
      "Udemy": <FaAward />,
      "DataCamp": <FaChartBar />,
      "Cisco Networking Academy": <FaMicrochip />,
    };
    return iconMap[platform] || <FaAward />;
  };

  return (
      <section id="certifications" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements - Same as Hero/About */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Grid pattern - Same as About */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                         linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title - Same style as About */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Certifications
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
              Validating <span className="text-emerald-400">skills</span> with{" "}
              <span className="text-cyan-400">professional credentials</span>
            </motion.h2>
          </motion.div>

          {/* Certifications Grid - Matching Skills section style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                  {/* Card with same style as Skills section */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-6 border border-gray-800/50 backdrop-blur-sm h-full hover:border-emerald-500/30 transition-all duration-300">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                    {/* Icon with gradient background - Same as SkillCard */}
                    <div className="mb-5">
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:from-emerald-900/30 group-hover:to-cyan-900/30 transition-all duration-300 flex items-center justify-center">
                        <div className="text-2xl text-emerald-400">
                          {getPlatformIcon(cert.platform)}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                        {cert.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4">{cert.platform}</p>

                      {/* Year badge - Similar to Skills section */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-500/20">
                        <span className="text-sm font-semibold text-emerald-300">{cert.year}</span>
                      </div>
                    </div>

                    {/* Floating particles - Same as Skills section */}
                    {[...Array(2)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                            animate={{
                              y: [0, -10, 0],
                              x: Math.sin(i) * 5,
                            }}
                            transition={{
                              duration: 2 + i,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            style={{
                              left: `${20 + i * 40}%`,
                              bottom: '10%',
                            }}
                        />
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Simple note at bottom */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-800/50 text-center"
          >
            <p className="text-gray-400 text-sm">
              Continuously expanding knowledge through professional development
            </p>
          </motion.div>
        </div>
      </section>
  );
};

export default Certifications;