import { motion } from 'framer-motion';
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaTools,
  FaPaintBrush,
  FaMobileAlt,
  FaBolt,
  FaBug,
  FaMicrochip
} from 'react-icons/fa';

const SkillCard = ({ skill, index }) => {
  // Map skill names to icons
  const getIcon = (skillName) => {
    const iconMap = {
      // Frontend
      'React': <FaCode />,
      'JavaScript': <FaCode />,
      'Material-UI': <FaPalette />,
      'Framer Motion': <FaPaintBrush />,
      'GSAP': <FaBolt />,
      'Tailwind CSS': <FaPalette />,

      // Backend
      'Node.js': <FaServer />,
      'Express': <FaServer />,
      'Python': <FaCode />,
      'Java': <FaCode />,
      'Spring Boot': <FaServer />,
      'JWT': <FaServer />,
      'MySQL': <FaDatabase />,
      'MongoDB': <FaDatabase />,

      // Tools
      'Git': <FaTools />,
      'Docker': <FaTools />,
      'AWS': <FaServer />,
      'Figma': <FaPalette />,
      'Vercel': <FaServer />,

      // Design & Other
      'UI/UX Design': <FaPaintBrush />,
      'Responsive Design': <FaMobileAlt />,
      'REST APIs': <FaServer />,
      'Testing': <FaBug />,
      'Arduino': <FaMicrochip />
    };

    return iconMap[skillName] || <FaCode />;
  };

  return (
      <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.03 }}
          viewport={{ once: true }}
          whileHover={{ x: 3 }}
          className="flex items-center gap-2 py-1.5 hover:bg-gray-800/30 px-2 rounded transition-all duration-200 group"
      >
        <div
            className="p-1.5 rounded-md flex items-center justify-center"
            style={{
              backgroundColor: `${skill.color}15`,
              color: skill.color
            }}
        >
        <span className="text-sm">
          {getIcon(skill.name)}
        </span>
        </div>
        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
        {skill.name}
      </span>
      </motion.div>
  );
};

export default SkillCard;