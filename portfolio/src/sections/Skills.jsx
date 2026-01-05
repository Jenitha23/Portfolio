import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  return (
      <section id="skills" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Skills & <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              A comprehensive set of technical skills and tools that I use to bring creative ideas to life
            </p>
          </motion.div>

          {/* Compact Grid Layout */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, categoryIndex) => (
                <motion.div
                    key={category.category}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm"
                >
                  {/* Compact Category Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">{category.category}</h3>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>

                  {/* Compact Skills List */}
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                        />
                    ))}
                  </div>
                </motion.div>
            ))}
          </motion.div>

          {/* Compact Additional Info */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <span className="font-bold text-emerald-400">Continuously learning</span> and adapting to new technologies
              </p>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Skills;