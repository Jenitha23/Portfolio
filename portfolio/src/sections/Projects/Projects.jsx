// src/sections/Projects/Projects.jsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaRocket, FaTimes } from 'react-icons/fa';
import { projects } from '../../data/projects';
import './Projects.css';

/* ── Portal wrapper so AnimatePresence works correctly ── */
const Modal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <div className="modal-root">
      {/* Backdrop */}
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Centered wrapper */}
      <div className="modal-wrapper">
        <motion.div
          className="modal-panel"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          {/* Close */}
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>

          {/* Image */}
          {project.images && (
            <div className="modal-image-wrap">
              <img src={project.images} alt={project.title} className="modal-image" />
              <div className="modal-image-overlay" />
              {project.featured && (
                <div className="featured-badge">
                  <FaStar /><span>Featured</span>
                </div>
              )}
            </div>
          )}

          {/* Body */}
          <div className="modal-body">
            <div className="modal-header">
              <h2 className="modal-title">{project.title}</h2>
              <FaCode className="modal-code-icon" />
            </div>
            <div className="modal-divider" />
            <p className="modal-description">{project.description}</p>

            <div className="modal-tech-section">
              <h4 className="modal-tech-label">Tech Stack</h4>
              <div className="modal-tech-list">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn github"
              >
                <FaGithub /><span>GitHub</span>
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn demo"
                >
                  <FaExternalLinkAlt /><span>Live Demo</span>
                </a>
              ) : (
                <button className="project-action-btn disabled" disabled>
                  <FaExternalLinkAlt /><span>Coming Soon</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
};

/* ══════════════════════════════════
   Main Section
   ══════════════════════════════════ */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background">
        <div className="projects-blob-1" />
        <div className="projects-blob-2" />
        <div className="projects-grid-bg" />
      </div>

      <div className="projects-container">
        {/* Title */}
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
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <div className="cta-wrapper">
            <div className="cta-glow" />
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

      {/* Modal — AnimatePresence wraps Modal component directly */}
      <AnimatePresence>
        {selectedProject && (
          <Modal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ══════════════════════════════════
   ProjectCard
   ══════════════════════════════════ */
const ProjectCard = ({ project, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="project-card-wrapper"
    onClick={onClick}
  >
    <div className="project-card">
      <div className="project-card-image-wrap">
        {project.images ? (
          <img src={project.images} alt={project.title} className="project-card-img" />
        ) : (
          <div className="project-card-placeholder">
            <FaCode className="placeholder-icon" />
          </div>
        )}
        <div className="project-card-hover-overlay">
          <span className="project-card-click-hint">Click to explore</span>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <FaStar /><span>Featured</span>
          </div>
        )}
      </div>
      <div className="project-card-footer">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-arrow">→</span>
      </div>
    </div>
  </motion.div>
);

export default Projects;