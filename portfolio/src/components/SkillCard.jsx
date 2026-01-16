// src/components/SkillCard.jsx
import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaPalette, FaBolt, FaNodeJs,
  FaPython, FaJava, FaDatabase, FaDocker, FaAws,
  FaGitAlt, FaFigma, FaMobileAlt, FaServer, FaBug, FaMicrochip,
  FaCube, FaLeaf
} from 'react-icons/fa';
import {
  SiSpring, SiJsonwebtokens, SiMongodb, SiVercel,
  SiTailwindcss, SiMaterialdesign, SiExpress
} from 'react-icons/si';
import { GiAbstract050 } from 'react-icons/gi';

const SkillCard = ({ skill, index }) => {
  // Map skill names to proper icons/symbols
  const getIcon = (skillName) => {
    const iconMap = {
      // Frontend
      'React': <FaReact />,
      'JavaScript': <FaJs />,
      'Material-UI': <SiMaterialdesign />,
      'Framer Motion': <GiAbstract050 />,
      'GSAP': <FaBolt />,
      'Tailwind CSS': <SiTailwindcss />,

      // Backend
      'Node.js': <FaNodeJs />,
      'Express': <SiExpress />,
      'Python': <FaPython />,
      'Java': <FaJava />,
      'Spring Boot': <SiSpring />,
      'JWT': <SiJsonwebtokens />,
      'MySQL': <FaDatabase />,
      'MongoDB': <SiMongodb />,

      // Tools
      'Git': <FaGitAlt />,
      'Docker': <FaDocker />,
      'AWS': <FaAws />,
      'Figma': <FaFigma />,
      'Vercel': <SiVercel />,

      // Design & Other
      'UI/UX Design': <FaPalette />,
      'Responsive Design': <FaMobileAlt />,
      'REST APIs': <FaServer />,
      'Testing': <FaBug />,
      'Arduino': <FaMicrochip />
    };

    return iconMap[skillName] || <FaCube />;
  };

  // Map skill names to colors (matching your theme)
  const getColor = (skillName) => {
    const colorMap = {
      // Frontend - Emerald/Cyan theme
      'React': '#10b981', // emerald-500
      'JavaScript': '#0ea5e9', // sky-500
      'Material-UI': '#06b6d4', // cyan-500
      'Framer Motion': '#8b5cf6', // violet-500
      'GSAP': '#22c55e', // green-500
      'Tailwind CSS': '#0ea5e9', // sky-500

      // Backend - Emerald theme
      'Node.js': '#10b981', // emerald-500
      'Express': '#14b8a6', // teal-500
      'Python': '#0ea5e9', // sky-500
      'Java': '#ef4444', // red-500
      'Spring Boot': '#22c55e', // green-500
      'JWT': '#f59e0b', // amber-500
      'MySQL': '#3b82f6', // blue-500
      'MongoDB': '#10b981', // emerald-500

      // Tools - Cyan theme
      'Git': '#ef4444', // red-500
      'Docker': '#0ea5e9', // sky-500
      'AWS': '#f59e0b', // amber-500
      'Figma': '#8b5cf6', // violet-500
      'Vercel': '#ffffff', // white

      // Design & Other - Mixed theme
      'UI/UX Design': '#ec4899', // pink-500
      'Responsive Design': '#10b981', // emerald-500
      'REST APIs': '#0ea5e9', // sky-500
      'Testing': '#f59e0b', // amber-500
      'Arduino': '#06b6d4' // cyan-500
    };

    return colorMap[skillName] || '#6b7280';
  };

  const skillColor = getColor(skill.name);
  const SkillIcon = () => getIcon(skill.name);

  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -3, rotateX: 5 }}
          className="relative group"
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

        {/* Main card */}
        <div className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group">
          {/* Icon with gradient background */}
          <div
              className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-black group-hover:from-emerald-900/30 group-hover:to-cyan-900/30 transition-all duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
              style={{
                boxShadow: `0 0 20px ${skillColor}20`,
                color: skillColor
              }}
          >
            <div className="text-lg">
              <SkillIcon />
            </div>
          </div>

          {/* Skill name - Removed percentage/progress line */}
          <div className="flex-1">
            <span className="text-white font-medium group-hover:text-emerald-300 transition-colors">
              {skill.name}
            </span>
          </div>

          {/* Animated dot */}
          <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              className="ml-2 w-2 h-2 rounded-full"
              style={{ backgroundColor: skillColor }}
          />
        </div>
      </motion.div>
  );
};

export default SkillCard;