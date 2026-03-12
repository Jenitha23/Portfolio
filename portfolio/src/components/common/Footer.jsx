// src/components/common/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Jenitha23',
      label: 'GitHub',
      color: 'github'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b',
      label: 'LinkedIn',
      color: 'linkedin'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jenithamaxi17@gmail.com',
      label: 'Email',
      color: 'email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      {/* Animated background elements */}
      <div className="footer-background">
        <div className="footer-blob-1"></div>
        <div className="footer-blob-2"></div>
        <div className="footer-grid"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid-container">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brand-container"
          >
            <div className="brand-wrapper">
              <div className="brand-icon">
                <FaCode />
              </div>
              <h3 className="brand-title">
                <span className="brand-gradient">Jenitha Maxi</span>
              </h3>
            </div>
            <p className="brand-description">
              Full Stack Developer passionate about creating innovative solutions and pushing the boundaries of technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="quick-links-container"
          >
            <h4 className="quick-links-title">
              <span className="brand-gradient">Quick Links</span>
            </h4>
            <div className="quick-links-grid">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="quick-link"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="social-container"
          >
            <h4 className="connect-title">
              <span className="brand-gradient">Connect</span>
            </h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`social-link ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon />

                  {/* Tooltip */}
                  <div className="social-tooltip">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="footer-divider"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="copyright-section"
        >
          <div className="copyright-container">
            <div className="copyright-text">
              <span>© {currentYear} All rights reserved.</span>
              <FaHeart className="copyright-heart" size={14} />
              <span className="copyright-name">Jenitha Johnson Maxi</span>
            </div>

            <div className="tech-stack">
              <FaRocket className="tech-icon" />
              <span>Built with React, Tailwind & Framer Motion</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="back-to-top"
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;