// src/sections/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Jenitha23',
      label: 'GitHub',
      color: 'from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:jenithamaxi17@gmail.com',
      label: 'Email',
      color: 'from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600'
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
      <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-emerald-500/10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                         linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Brand Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <FaCode className="text-emerald-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Jenitha Maxi
                </span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Full Stack Developer passionate about creating innovative solutions and pushing the boundaries of technology.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Quick Links
              </span>
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {quickLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-sm bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-300"
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
                className="text-center md:text-right"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
              </h4>
              <div className="flex justify-center md:justify-end gap-3">
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
                        className={`relative p-3 rounded-xl bg-gradient-to-br ${social.color} transition-all duration-300 group`}
                        aria-label={social.label}
                    >
                      <social.icon className="text-white text-lg" />

                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
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
              className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm flex items-center gap-1">
                <span>© {currentYear} All rights reserved.</span>
                <FaHeart className="text-emerald-400 animate-pulse mx-1" size={14} />
                <span className="text-emerald-300 font-medium">Jenitha Johnson Maxi</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FaRocket className="text-emerald-400 animate-bounce" />
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
              className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 z-40"
              aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </footer>
  );
};

export default Footer;