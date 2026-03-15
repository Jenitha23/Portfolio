// src/components/cards/SkillCard.jsx
import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaPalette, FaBolt, FaNodeJs,
  FaPython, FaJava, FaDatabase, FaDocker, FaAws,
  FaGitAlt, FaFigma, FaMobileAlt, FaServer, FaBug, FaMicrochip,
  FaCube
} from 'react-icons/fa';
import {
  SiSpring, SiJsonwebtokens, SiMongodb, SiVercel,
  SiTailwindcss, SiMaterialdesign, SiExpress
} from 'react-icons/si';
import { GiAbstract050 } from 'react-icons/gi';
import './SkillCard.css';

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
      'React': '#10b981',
      'JavaScript': '#0ea5e9',
      'Material-UI': '#06b6d4',
      'Framer Motion': '#8b5cf6',
      'GSAP': '#22c55e',
      'Tailwind CSS': '#0ea5e9',

      // Backend - Emerald theme
      'Node.js': '#10b981',
      'Express': '#14b8a6',
      'Python': '#0ea5e9',
      'Java': '#ef4444',
      'Spring Boot': '#22c55e',
      'JWT': '#f59e0b',
      'MySQL': '#3b82f6',
      'MongoDB': '#10b981',

      // Tools - Cyan theme
      'Git': '#ef4444',
      'Docker': '#0ea5e9',
      'AWS': '#f59e0b',
      'Figma': '#8b5cf6',
      'Vercel': '#ffffff',

      // Design & Other - Mixed theme
      'UI/UX Design': '#ec4899',
      'Responsive Design': '#10b981',
      'REST APIs': '#0ea5e9',
      'Testing': '#f59e0b',
      'Arduino': '#06b6d4'
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
      className="skill-card-wrapper"
    >
      {/* Glow effect on hover */}
      <div className="skill-card-glow"></div>

      {/* Main card */}
      <div className="skill-card">
        {/* Icon with gradient background */}
        <div
          className="skill-icon-wrapper"
          style={{
            boxShadow: `0 0 20px ${skillColor}20`,
            color: skillColor
          }}
        >
          <div className="skill-icon">
            <SkillIcon />
          </div>
        </div>

        {/* Skill name */}
        <div className="skill-name-container">
          <span className="skill-name-text">
            {skill.name}
          </span>
        </div>

        {/* Animated dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
          className="skill-dot"
          style={{ backgroundColor: skillColor }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;