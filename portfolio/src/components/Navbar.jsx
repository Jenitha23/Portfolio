import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiAward, FiMail, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
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

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FiHome /> },
    { name: 'About', href: '#about', icon: <FiUser /> },
    { name: 'Skills', href: '#skills', icon: <FiCode /> },
    { name: 'Projects', href: '#projects', icon: <FiFolder /> },
    { name: 'Certifications', href: '#certifications', icon: <FiAward /> },
    { name: 'Contact', href: '#contact', icon: <FiMail /> }
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
          className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled
                  ? 'bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-emerald-900/20 border-b border-emerald-500/10'
                  : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Empty left side */}
            <div></div>

            {/* Navigation and CV button on right side */}
            <div className="flex items-center space-x-6">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                    <motion.button
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        onClick={() => scrollToSection(link.href)}
                        className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                    ${activeSection === link.href.substring(1)
                            ? 'text-emerald-400'
                            : 'text-gray-300 hover:text-emerald-400'
                        }`}
                    >
                      {activeSection === link.href.substring(1) && (
                          <motion.div
                              layoutId="navbar-indicator"
                              className="absolute inset-0 bg-emerald-400/10 rounded-lg"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                      )}
                      <span className="relative z-10 hidden lg:inline">{link.icon}</span>
                      <span className="relative z-10 font-medium">{link.name}</span>
                    </motion.button>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden md:block h-6 w-px bg-gray-700/50"></div>

              {/* Download CV Button */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden md:block"
              >
                <a
                    href="/resume.pdf"
                    download
                    className="group relative px-6 py-2 rounded-lg font-medium text-white
                  bg-gradient-to-r from-emerald-500 to-cyan-500
                  hover:from-emerald-600 hover:to-cyan-600
                  shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40
                  transition-all duration-300 flex items-center gap-2"
                >
                  <FiDownload className="group-hover:animate-bounce" />
                  <span>CV</span>
                </a>
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                        isOpen
                            ? 'bg-emerald-400/10 text-emerald-400'
                            : 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50'
                    }`}
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
            className="md:hidden overflow-hidden"
        >
          <div className="bg-gray-900/95 backdrop-blur-xl border-t border-emerald-500/10">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                  <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${activeSection === link.href.substring(1)
                          ? 'text-emerald-400 bg-emerald-400/10'
                          : 'text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50'
                      }`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </motion.button>
              ))}
              <a
                  href="/resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-white
                bg-gradient-to-r from-emerald-500 to-cyan-500
                hover:from-emerald-600 hover:to-cyan-600
                transition-all duration-300 mt-4"
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
  );
};

export default Navbar;