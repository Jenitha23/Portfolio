// src/sections/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaRocket } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  return (
      <section id="projects" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                         linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Featured Projects
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
              Where <span className="text-emerald-400">Innovation</span> meets{" "}
              <span className="text-cyan-400">Execution</span>
            </motion.h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
          >
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <a
                  href="https://github.com/Jenitha23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300"
              >
                <FaGithub className="text-2xl text-gray-400 group-hover:text-emerald-400 transition-colors" />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">View More Projects</h4>
                  <p className="text-sm text-gray-400">Explore all repositories on GitHub</p>
                </div>
                <FaRocket className="text-xl text-cyan-400 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

// ProjectCard Component (can also be in a separate file)
const ProjectCard = ({ project, index }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="relative group perspective-1000"
      >
        {/* 3D Card Effect */}
        <motion.div
            whileHover={{ rotateY: 3, rotateX: 3 }}
            className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm h-full transform-style-preserve-3d transition-transform duration-500"
        >
          {/* Glowing edges */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

          {/* Project ID Badge */}
          <div className="absolute -top-3 -right-3 z-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-30"></div>
              <div className="relative px-4 py-2 bg-gradient-to-r from-emerald-900 to-cyan-900 rounded-full border border-emerald-500/30">
                <span className="text-white font-bold text-sm">#{project.id}</span>
              </div>
            </div>
          </div>

          {/* Featured badge */}
          {project.id <= 3 && (
              <div className="absolute -top-3 left-6 z-10">
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full">
                  <FaStar className="text-xs text-white" />
                  <span className="text-xs font-bold text-white">Featured</span>
                </div>
              </div>
          )}

          {/* Project Header */}
          <div className="relative z-10 mb-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                {project.title}
              </h3>
              <FaCode className="text-emerald-400 text-xl mt-1" />
            </div>

            {/* Project description with gradient line */}
            <div className="relative">
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-4"></div>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech Stack with animated hover */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                  <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.05) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6 border-t border-gray-800/50">
            <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-xl border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-gradient-to-r hover:from-emerald-900/20 hover:to-cyan-900/20 transition-all duration-300 group"
            >
              <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </motion.a>

            {project.demo && (
                <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group"
                >
                  <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Live Demo</span>
                </motion.a>
            )}

            {!project.demo && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-500 rounded-xl border border-gray-700 cursor-not-allowed"
                    disabled
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span className="font-medium">Coming Soon</span>
                </motion.button>
            )}
          </div>

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    x: Math.sin(i) * 8,
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${15 + i * 25}%`,
                    bottom: '10%',
                  }}
              />
          ))}
        </motion.div>
      </motion.div>
  );
};

export default Projects;