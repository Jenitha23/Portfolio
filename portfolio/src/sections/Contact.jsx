// src/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jenithamaxi17@gmail.com',
      href: 'mailto:jenithamaxi17@gmail.com',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 76 004 8658',
      href: 'tel:+94760048658',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Jaffna, Sri Lanka',
      href: 'https://maps.google.com/?q=Jaffna,Sri+Lanka',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
      <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                         linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
              <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    x: Math.sin(i) * 20,
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
              />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Get In Touch
              </span>
              </h1>
              <div className="relative w-48 h-1 mx-auto overflow-hidden rounded-full bg-gray-800">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400"
                    animate={{ x: [-300, 300] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl font-bold text-gray-300 mt-6"
            >
              Let's connect and build something amazing together
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column - Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-6 border border-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                  </h3>

                  <div className="space-y-3">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                            <info.icon className="text-emerald-400" size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400">{info.label}</p>
                            <p className="text-white text-sm font-medium truncate group-hover:text-emerald-300 transition-colors">
                              {info.value}
                            </p>
                          </div>
                          <FaArrowRight className="text-gray-600 text-xs opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all duration-300" />
                        </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-6 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Send Message
                </span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="relative group"
                  >
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all duration-300 peer"
                          placeholder="John Doe"
                      />
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative group"
                  >
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all duration-300 peer"
                          placeholder="john@example.com"
                      />
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="relative group"
                  >
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                      Your Message
                    </label>
                    <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all duration-300 peer resize-none"
                        placeholder="Tell me about your project..."
                    />
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 peer-focus:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-xl font-semibold overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button Content */}
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                      ) : (
                          <>
                            <FaPaperPlane className="text-sm group-hover:rotate-12 transition-transform duration-300" />
                            <span>Send Message</span>
                          </>
                      )}
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Message Sent!</span>
                        </motion.div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;