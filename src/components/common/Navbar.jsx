// src/components/common/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Left side with name */}
          <div className="navbar-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="navbar-name"
            >
              Jenitha
            </motion.span>
          </div>

          {/* Center navigation */}
          <div className="navbar-center">
            <div className="desktop-nav">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side with Resume/CV button */}
          <div className="navbar-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="desktop-cv"
            >
              <a
                href="/Jenitha_JohnsonMaxi_CV.pdf"
                download="Jenitha_JohnsonMaxi_CV.pdf"
                className="resume-button"
              >
                <FiDownload className="resume-icon" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn-container">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="mobile-menu"
      >
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              <span>{link.name}</span>
            </motion.button>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/Jenitha_JohnsonMaxi_CV.pdf"
            download="Jenitha_JohnsonMaxi_CV.pdf"
            className="mobile-resume-button"
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;