// src/components/common/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home',           href: '#home' },
    { name: 'About',          href: '#about' },
    { name: 'Skills',         href: '#skills' },
    { name: 'Projects',       href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact',        href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub,   href: 'https://github.com/Jenitha23',                               label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b',  label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:jenithamaxi17@gmail.com',                              label: 'Email'    },
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-blob-1" />
        <div className="footer-blob-2" />
        <div className="footer-grid-bg" />
      </div>

      {/* Top border glow */}
      <div className="footer-top-glow" />

      <div className="footer-container">

        {/* ── Main split row ── */}
        <div className="footer-main">

          {/* LEFT — Brand */}
          <motion.div
            className="footer-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaCode />
              </div>
              <span className="footer-logo-name">Jenitha Maxi</span>
            </div>

            <p className="footer-description">
              Full Stack Developer passionate about crafting clean, innovative web experiences. 
              From backend APIs to polished UIs — I build solutions that matter.
            </p>

            {/* Social icons */}
            <div className="footer-socials">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-icon"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Nav columns */}
          <motion.div
            className="footer-right"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-nav-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-nav-list">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-nav-link">
                      <span className="footer-link-dot" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">More</h4>
              <ul className="footer-nav-list">
                {navLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-nav-link">
                      <span className="footer-link-dot" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Contact</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://github.com/Jenitha23" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                    <span className="footer-link-dot" />GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                    <span className="footer-link-dot" />LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:jenithamaxi17@gmail.com" className="footer-nav-link">
                    <span className="footer-link-dot" />Email Me
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        />

        {/* ── Bottom row ── */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="footer-copy">
            © {currentYear} · Made with <FaHeart className="footer-heart" /> by{' '}
            <span className="footer-copy-name">Jenitha Johnson Maxi</span>
          </p>
          <p className="footer-built">
            Built with React, Tailwind &amp; Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -4, scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="footer-back-top"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;