// src/sections/Contact/Contact.jsx
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaPaperPlane, FaArrowRight
} from 'react-icons/fa';
import './Contact.css';

/* Pre-compute stable particle positions to avoid re-randomising on every render */
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 8.3) % 100}%`,
  top:  `${(i * 7.7 + 10) % 90}%`,
}));

const Contact = () => {
  const [formData, setFormData]     = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'jenithamaxi17@gmail.com',
      href: 'mailto:jenithamaxi17@gmail.com',
      colorClass: 'from-rose-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+94 76 004 8658',
      href: 'tel:+94760048658',
      colorClass: 'from-cyan-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Jaffna, Sri Lanka',
      href: 'https://maps.google.com/?q=Jaffna,Sri+Lanka',
      colorClass: 'from-emerald-500'
    }
  ];

  return (
    <section id="contact" className="contact-section">

      {/* Background */}
      <div className="contact-background">
        <div className="contact-blob-1"></div>
        <div className="contact-blob-2"></div>
        <div className="contact-grid-bg"></div>

        <div className="contact-particles">
          {PARTICLES.map((pos, i) => (
            <motion.div
              key={i}
              className="contact-particle"
              animate={{ y: [0, -30, 0], x: Math.sin(i) * 20 }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
              style={pos}
            />
          ))}
        </div>
      </div>

      <div className="contact-container">

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-title-wrapper"
        >
          <div className="contact-main-title">
            <h1 className="contact-title-gradient">Get In Touch</h1>
            <div className="contact-title-underline">
              <motion.div
                className="contact-title-underline-bar"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="contact-subtitle"
          >
            Let's connect and build something amazing together
          </motion.h2>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="contact-grid">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-left"
          >
            <div className="contact-info-card">
              <div className="contact-info-glow"></div>
              <div className="contact-info-content">

                <h3 className="contact-info-title">
                  <span>Contact Information</span>
                </h3>

                <div className="contact-info-list">
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
                      whileHover={{ x: 4 }}
                      className="contact-info-item"
                    >
                      {/* Icon box — gradient class matches CSS rules */}
                      <div className={`contact-info-icon ${info.colorClass}`}>
                        <info.icon />
                      </div>

                      <div className="contact-info-details">
                        <p className="contact-info-label">{info.label}</p>
                        <p className="contact-info-value">{info.value}</p>
                      </div>

                      <FaArrowRight className="contact-info-arrow" />
                    </motion.a>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <div className="contact-form-glow"></div>

            <div className="contact-form-content">
              <h3 className="contact-form-title">
                <span>Send Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="contact-form">

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="form-group"
                >
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="form-input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="John Doe"
                    />
                    <div className="form-input-underline"></div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="form-group"
                >
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="form-input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                    <div className="form-input-underline"></div>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="form-group"
                >
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <div className="form-input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input"
                      placeholder="Tell me about your project..."
                    />
                    <div className="form-input-underline"></div>
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-btn"
                >
                  <div className="submit-btn-bg"></div>
                  <div className="submit-btn-content">
                    {isSubmitting ? (
                      <>
                        <div className="submit-spinner"></div>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="submit-icon" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="success-message"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" />
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