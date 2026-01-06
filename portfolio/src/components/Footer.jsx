import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Jenitha23', label: 'GitHub' },
    { icon: FaLinkedin, href: 'www.linkedin.com/in/jenitha-johnson-maxi-84631621b', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'jenithamaxi17@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm flex items-center space-x-1"
          >
            <span>© {currentYear} Portfolio. Made with</span>
            <FaHeart className="text-emerald-400 animate-pulse" size={14} />
            <span>Jenitha</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
