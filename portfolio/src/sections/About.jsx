import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const interests = [
    {
      icon: FaLaptopCode,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks and best practices"
    },
    {
      icon: FaCode,
      title: "AI & Machine Learning",
      description: "Exploring intelligent systems and data-driven solutions"
    },
    {
      icon: FaGraduationCap,
      title: "Mathematics",
      description: "Applying mathematical concepts to solve complex problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated Computer Science undergraduate at SLIIT, driven by a passion for creating innovative solutions
              through technology. My journey in tech spans across full-stack development, artificial intelligence, and mathematical computing.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, efficient code and continuously learning emerging technologies.
              Whether it's developing responsive web applications or experimenting with machine learning models,
              I approach every project with enthusiasm and attention to detail.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-emerald-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300">
                <span className="font-semibold">Bachelor of Science in Computer Science</span><br />
                Sri Lanka Institute of Information Technology (SLIIT)<br />
                <span className="text-emerald-400">2022 - Present</span>
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg">
                    <interest.icon className="text-emerald-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
                    <p className="text-gray-400">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
