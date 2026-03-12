// src/sections/Certifications/Certifications.jsx
import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import {
  FaCloud,
  FaBrain,
  FaCode,
  FaChartBar,
  FaMicrochip,
  FaAward,
  FaGraduationCap
} from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const getPlatformIcon = (platform) => {
    const iconMap = {
      "Amazon Web Services":           <FaCloud />,
      "Coursera - Stanford University": <FaBrain />,
      "freeCodeCamp":                  <FaCode />,
      "Udemy":                         <FaAward />,
      "DataCamp":                      <FaChartBar />,
      "Cisco Networking Academy":      <FaMicrochip />,
    };
    return iconMap[platform] || <FaAward />;
  };

  return (
    <section id="certifications" className="certifications-section">

      {/* Background */}
      <div className="certifications-background">
        <div className="certifications-blob-1"></div>
        <div className="certifications-blob-2"></div>
        <div className="certifications-grid-bg"></div>
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
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
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
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cert-card"
            >
              {/* Glow */}
              <div className="cert-card-glow"></div>

              <div className="cert-card-content">

                {/* Icon */}
                <div className="cert-icon-wrapper">
                  <div className="cert-icon">
                    <div className="cert-icon-svg">
                      {getPlatformIcon(cert.platform)}
                    </div>
                  </div>
                </div>

                {/* Animated accent line */}
                <div className="cert-divider" />

                {/* Content */}
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-platform">{cert.platform}</p>

                  {/* Year badge — pinned to bottom via margin-top:auto on platform */}
                  <div className="cert-year-badge">
                    <div className="cert-year-dot"></div>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>

                {/* Particles */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="cert-particle"
                    animate={{ y: [0, -10, 0], x: Math.sin(i) * 5 }}
                    transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
                    style={{ left: `${20 + i * 40}%`, bottom: '8%' }}
                  />
                ))}
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
    </section>
  );
};

export default Certifications;