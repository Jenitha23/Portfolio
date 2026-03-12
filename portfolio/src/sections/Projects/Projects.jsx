// src/sections/Projects/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaRocket } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">

      {/* Background */}
      <div className="projects-background">
        <div className="projects-blob-1"></div>
        <div className="projects-blob-2"></div>
        <div className="projects-grid-bg"></div>
      </div>

      <div className="projects-container">

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-title-wrapper"
        >
          <div className="projects-main-title">
            <h1 className="projects-title-gradient">Featured Projects</h1>
            <div className="projects-title-underline">
              <motion.div
                className="projects-title-underline-bar"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="projects-subtitle"
          >
            Where <span>Innovation</span> meets <span>Execution</span>
          </motion.h2>
        </motion.div>

        {/* ── Projects Grid ── */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <div className="cta-wrapper">
            <div className="cta-glow"></div>
            <a
              href="https://github.com/Jenitha23"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <FaGithub className="cta-icon" />
              <div className="cta-text">
                <h4>View More Projects</h4>
                <p>Explore all repositories on GitHub</p>
              </div>
              <FaRocket className="cta-arrow" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* ══════════════════════════════════
   ProjectCard Component
   ══════════════════════════════════ */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="project-card-wrapper"
    >
      <motion.div
        whileHover={{ rotateY: 2, rotateX: 2 }}
        className="project-card-3d"
      >
        {/* Glow edge */}
        <div className="project-card-glow"></div>

        {/* ID badge — top right */}
        <div className="project-id-badge">
          <div className="project-id-glow"></div>
          <div className="project-id">
            <span>#{project.id}</span>
          </div>
        </div>

        {/* Featured badge — top left */}
        {project.id <= 3 && (
          <div className="featured-badge">
            <FaStar />
            <span>Featured</span>
          </div>
        )}

        {/* ── Content (flex:1 — grows) ── */}
        <div className="project-content">

          <div className="project-header">
            <h3>{project.title}</h3>
            <FaCode className="project-code-icon" />
          </div>

          <div className="project-description-wrapper">
            <div className="project-description-line"></div>
            <p className="project-description">{project.description}</p>
          </div>

        </div>

        {/* ── Tech Stack ── */}
        <div className="tech-stack-section">
          <h4 className="tech-stack-title">Tech Stack</h4>
          <div className="tech-stack-list">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 + techIndex * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tech-item"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ── Action Buttons (always at bottom) ── */}
        <div className="project-actions">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="project-action-btn github"
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>

          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="project-action-btn demo"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </motion.a>
          ) : (
            <motion.button
              className="project-action-btn disabled"
              disabled
            >
              <FaExternalLinkAlt />
              <span>Coming Soon</span>
            </motion.button>
          )}
        </div>

        {/* Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="project-particle"
            animate={{ y: [0, -15, 0], x: Math.sin(i) * 8 }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
            style={{ left: `${15 + i * 25}%`, bottom: '8%' }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;