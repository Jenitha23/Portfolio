// src/sections/Hero/Hero.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import profileImage from '/public/images/profile.png';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-section">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
        <div className="hero-shape-3"></div>
        <div className="hero-grid"></div>
      </div>

      {/* Main layout */}
      <div className="hero-container">

        {/* ── LEFT: text ── */}
        <div className="hero-content">

         

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-name"
          >
            <h1>
              <span className="first-name">Jenitha Johnson</span>
              <span className="last-name">Maxi</span>
            </h1>
          </motion.div>

          {/* Coloured role line */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-role"
          >
            Full Stack Dev, AI/ML &amp; Mathematics Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-description"
          >
            Hi! I'm Jenitha, a Computer Science undergraduate at SLIIT with a
            passion for building elegant, impactful solutions at the intersection
            of <span className="hl-1">Full Stack Development</span>,{" "}
            <span className="hl-2">AI/ML</span>, and{" "}
            <span className="hl-3">Mathematics</span>.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#projects")}
              className="btn-primary"
            >
              <span>View Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="btn-arrow"
              >→</motion.span>
            </motion.button>

            <a
              href="/Jenitha_JohnsonMaxi_CV.pdf"
              download="Jenitha_JohnsonMaxi_CV.pdf"
              className="btn-secondary"
            >
              <FiDownload className="btn-dl-icon" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="hero-social"
          >
            <motion.a
              href="https://github.com/Jenitha23"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2 }}
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, y: -2 }}
              className="social-icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>

        {/* ── RIGHT: photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="hero-image-wrapper"
        >
          <div className="photo-blob-1"></div>
          <div className="photo-blob-2"></div>
          <div className="photo-blob-3"></div>

          <div className="hero-image-frame">
            <img src={profileImage} alt="Jenitha Johnson Maxi" />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo("#about")}
      >
        <span>SCROLL</span>
        <div className="mouse">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="wheel"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;