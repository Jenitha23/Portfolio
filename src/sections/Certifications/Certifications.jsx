// src/sections/Certifications/Certifications.jsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../../data/certifications';
import {
  FaBrain,
  FaCode,
  FaChartBar,
  FaAward,
  FaGraduationCap,
  FaTimes,
  FaExpand
} from 'react-icons/fa';
import './Certifications.css';

/* ── Icon map ── */
const getPlatformIcon = (icon) => {
  const map = {
    code:  <FaCode />,
    chart: <FaChartBar />,
    brain: <FaBrain />,
  };
  return map[icon] || <FaAward />;
};

/* ══════════════════════════════════
   Image Lightbox (portal)
   ══════════════════════════════════ */
const Lightbox = ({ cert, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <div className="cert-modal-root">
      {/* Backdrop */}
      <motion.div
        className="cert-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Centered panel */}
      <div className="cert-modal-wrapper">
        <motion.div
          className="cert-modal-panel"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 30 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          {/* Close */}
          <button className="cert-modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>

          {/* Certificate image */}
          <div className="cert-modal-image-wrap">
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-modal-image"
            />
          </div>

          {/* Info strip */}
          <div className="cert-modal-info">
            <div className="cert-modal-icon">
              {getPlatformIcon(cert.icon)}
            </div>
            <div className="cert-modal-text">
              <h3 className="cert-modal-title">{cert.title}</h3>
              <p className="cert-modal-platform">{cert.platform}</p>
            </div>
            <div className="cert-year-badge">
              <div className="cert-year-dot" />
              <span className="cert-year">{cert.year}</span>
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
const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="certifications-section">

      {/* Background */}
      <div className="certifications-background">
        <div className="certifications-blob-1" />
        <div className="certifications-blob-2" />
        <div className="certifications-grid-bg" />
      </div>

      <div className="certifications-container">

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="certifications-title-wrapper"
        >
          <div className="certifications-main-title">
            <h1 className="certifications-title-gradient">Certifications</h1>
            <div className="certifications-title-underline">
              <motion.div
                className="certifications-title-underline-bar"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="certifications-subtitle"
          >
            Validating <span>skills</span> with <span>professional credentials</span>
          </motion.h2>
        </motion.div>

        {/* ── Grid ── */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cert-card"
              onClick={() => setSelected(cert)}
            >
              <div className="cert-card-glow" />

              <div className="cert-card-content">

                {/* Certificate image thumbnail */}
                <div className="cert-thumb-wrap">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-thumb"
                  />
                  {/* hover overlay */}
                  <div className="cert-thumb-overlay">
                    <FaExpand className="cert-thumb-expand-icon" />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Info */}
                <div className="cert-info">
                  {/* Icon + divider */}
                  <div className="cert-icon-row">
                    <div className="cert-icon">
                      <div className="cert-icon-svg">
                        {getPlatformIcon(cert.icon)}
                      </div>
                    </div>
                    <div className="cert-divider" />
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-platform">{cert.platform}</p>

                  <div className="cert-year-badge">
                    <div className="cert-year-dot" />
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="cert-footer"
        >
          <div className="cert-footer-content">
            <FaGraduationCap className="cert-footer-icon" />
            <p className="cert-footer-text">
              Continuously expanding knowledge through professional development
            </p>
          </div>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <Lightbox
            key="cert-lightbox"
            cert={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;