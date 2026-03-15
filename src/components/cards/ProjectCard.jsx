// src/components/cards/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="project-card"
    >
      {/* Title row */}
      <div className="project-card-header">
        <h3 className="project-title">{project.title}</h3>
        <FaCode className="project-title-icon" />
      </div>

      {/* Animated accent line */}
      <div className="project-divider" />

      {/* Description — flex:1 pushes everything below to bottom */}
      <p className="project-description">{project.description}</p>

      {/* Tech badges */}
      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="project-links">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link github"
        >
          <FaGithub />
          <span>Code</span>
        </a>

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link demo"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        ) : (
          <button className="project-link disabled" disabled>
            <FaExternalLinkAlt />
            <span>Coming Soon</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;