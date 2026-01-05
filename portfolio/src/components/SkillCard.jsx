import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400/50 transition-all duration-300"
    >
      <Icon size={48} style={{ color: skill.color }} className="mb-3" />
      <span className="text-gray-200 font-medium text-center">{skill.name}</span>
    </motion.div>
  );
};

export default SkillCard;
