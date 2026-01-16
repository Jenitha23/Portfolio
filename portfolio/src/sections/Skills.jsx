// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { FaCode, FaServer, FaTools, FaPalette, FaBolt } from 'react-icons/fa';

const Skills = () => {
  const categoryIcons = {
    "Frontend Development": <FaCode />,
    "Backend Development": <FaServer />,
    "Tools & Technologies": <FaTools />,
    "Design & Other": <FaPalette />
  };

  const featuredTechnologies = [
    "Framer Motion", "GSAP", "Tailwind CSS", "Node.js", "Express",
    "Python", "Java", "Spring Boot", "React", "JavaScript", "Material-UI",
    "MySQL", "MongoDB", "Docker", "AWS", "Git", "Figma"
  ];

  // Duplicate array for seamless scrolling
  const scrollingTech = [...featuredTechnologies, ...featuredTechnologies];

  return (
      <section id="skills" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

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
                Skills & Expertise
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
              A comprehensive toolkit for turning <span className="text-emerald-400">ideas</span> into{" "}
              <span className="text-cyan-400">impactful solutions</span>
            </motion.h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
                <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 border border-gray-800/50 backdrop-blur-sm h-full">
                    {/* Category Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-900/30 to-cyan-900/30">
                        <div className="text-2xl text-emerald-400">
                          {categoryIcons[category.category]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {category.category}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FaBolt className="text-xs text-emerald-400" />
                          <span className="text-sm text-emerald-300 font-medium">
                        {category.skills.length} skills
                      </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar (removed) */}

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                          <SkillCard
                              key={skill.name}
                              skill={skill}
                              index={skillIndex + categoryIndex * 10}
                          />
                      ))}
                    </div>

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                            animate={{
                              y: [0, -20, 0],
                              x: Math.sin(i) * 10,
                            }}
                            transition={{
                              duration: 2 + i,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            style={{
                              left: `${20 + i * 20}%`,
                              bottom: '10%',
                            }}
                        />
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Featured Technologies with Single Scrolling Line */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-20"
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Technologies
              </span>
              </h4>
              <p className="text-gray-400">Core technologies I frequently work with</p>
            </div>

            {/* Single Scrolling Container */}
            <div className="relative overflow-hidden py-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/30">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/95 to-transparent z-10"></div>

              {/* Infinite Scrolling Animation */}
              <motion.div
                  className="flex gap-6"
                  animate={{ x: [0, -1800] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
              >
                {scrollingTech.map((tech, index) => (
                    <motion.div
                        key={`${tech}-${index}`}
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="flex-shrink-0 px-5 py-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group relative min-w-fit"
                        style={{
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                      <div className="flex items-center gap-3">
                        {/* Animated dot */}
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        />

                        {/* Tech name with gradient text */}
                        <span className="text-gray-200 font-semibold text-sm md:text-base whitespace-nowrap group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {tech}
                    </span>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                      {/* Subtle trail effect */}
                      <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-emerald-400/50 to-cyan-400/50 rounded-full blur-sm"
                      />
                    </motion.div>
                ))}
              </motion.div>

              {/* Scrolling indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/30 overflow-hidden rounded-full">
                <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ width: '20%' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Skills;