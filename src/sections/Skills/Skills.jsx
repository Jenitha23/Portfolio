// src/sections/Skills/Skills.jsx
import { motion } from 'framer-motion';
import SkillCard from '../../components/cards/SkillCard';
import { skillCategories } from '../../data/skills';
import { FaCode, FaServer, FaTools, FaPalette, FaBolt } from 'react-icons/fa';
import './Skills.css';

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

  // Duplicate for seamless infinite scroll
  const scrollingTech = [...featuredTechnologies, ...featuredTechnologies];

  return (
    <section id="skills" className="skills-section">

      {/* Background */}
      <div className="skills-background">
        <div className="skills-blob-1"></div>
        <div className="skills-blob-2"></div>
        <div className="skills-grid-bg"></div>
      </div>

      <div className="skills-container">

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-title-wrapper"
        >
          <div className="skills-main-title">
            <h1 className="skills-title-gradient">Skills &amp; Expertise</h1>
            <div className="skills-title-underline">
              <motion.div
                className="skills-title-underline-bar"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="skills-subtitle"
          >
            A comprehensive toolkit for turning <span>ideas</span> into{" "}
            <span>impactful solutions</span>
          </motion.h2>
        </motion.div>

        {/* ── Skills Grid ── */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="category-card"
            >
              <div className="category-glow"></div>

              <div className="category-content">

                {/* Header */}
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <div className="category-icon">
                      {categoryIcons[category.category]}
                    </div>
                  </div>
                  <div>
                    <h3 className="category-title">{category.category}</h3>
                    <div className="category-stats">
                      <FaBolt className="category-stats-icon" />
                      <span className="category-stats-text">
                        {category.skills.length} skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="skills-list">
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
                    className="skills-particle"
                    animate={{ y: [0, -20, 0], x: Math.sin(i) * 10 }}
                    transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.3 }}
                    style={{ left: `${20 + i * 25}%`, bottom: '8%' }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Featured Technologies ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="featured-section"
        >
          <div className="featured-header">
            <h4 className="featured-title">
              <span className="featured-gradient">Featured Technologies</span>
            </h4>
            <p className="featured-subtitle">Core technologies I frequently work with</p>
          </div>

          <div className="scrolling-container">
            {/* Fade edges */}
            <div className="scrolling-fade-left"></div>
            <div className="scrolling-fade-right"></div>

            {/* Infinite scroll track */}
            <motion.div
              className="scrolling-track"
              animate={{ x: [0, -1800] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {scrollingTech.map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="scrolling-item"
                >
                  <div className="scrolling-item-content">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      className="scrolling-dot"
                    />
                    <span className="scrolling-text">{tech}</span>
                  </div>
                  <div className="scrolling-glow"></div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="scrolling-trail"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Progress bar */}
            <div className="scrolling-progress">
              <motion.div
                className="scrolling-progress-bar"
                animate={{ x: ['0%', '400%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;