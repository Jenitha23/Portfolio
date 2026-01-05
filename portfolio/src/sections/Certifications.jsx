import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaCloud, FaBrain, FaCode, FaDocker, FaChartBar, FaMicrochip } from 'react-icons/fa';

const Certifications = () => {
  const getIcon = (iconName) => {
    const icons = {
      cloud: FaCloud,
      brain: FaBrain,
      code: FaCode,
      container: FaDocker,
      chart: FaChartBar,
      chip: FaMicrochip
    };
    return icons[iconName] || FaCode;
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning through professional certifications and courses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = getIcon(cert.icon);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex-shrink-0">
                    <Icon className="text-emerald-400" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{cert.platform}</p>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
