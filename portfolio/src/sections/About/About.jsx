// src/sections/About/About.jsx
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode, FaBrain, FaChartLine, FaGraduationCap } from 'react-icons/fa';
import profileImage from '/public/images/profile.png';
import './About.css';

const About = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "jenithamaxi17@gmail.com",
      link: "mailto:jenithamaxi17@gmail.com",
      colorClass: "from-rose-500"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "0760048658",
      link: "tel:+94760048658",
      colorClass: "from-cyan-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Jaffna, Sri Lanka",
      link: "https://maps.google.com/?q=Jaffna,Sri+Lanka",
      colorClass: "from-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Jenitha23",
      label: "GitHub",
      color: "github"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b",
      label: "LinkedIn",
      color: "linkedin"
    }
  ];

  const interests = [
    { icon: <FaCode />, title: "Full Stack Dev", desc: "End-to-end web applications" },
    { icon: <FaBrain />, title: "AI/ML", desc: "Intelligent systems & algorithms" },
    { icon: <FaChartLine />, title: "Mathematics", desc: "Algorithmic thinking & logic" },
    { icon: <FaGraduationCap />, title: "Learning", desc: "Continuous growth mindset" },
  ];

  const philosophyPrinciples = [
    "Clean, maintainable code is art",
    "User experience drives design",
    "Continuous learning fuels innovation",
    "Mathematics provides the foundation",
    "Elegant solutions over clever hacks"
  ];

  return (
    <section id="about" className="about-section">
      {/* Animated background elements */}
      <div className="about-background">
        <div className="about-blob-1"></div>
        <div className="about-blob-2"></div>
        <div className="about-grid"></div>
      </div>

      <div className="about-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-title-wrapper"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="about-particle"
              animate={{ y: [0, -30, 0], x: Math.sin(i) * 20 }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
              style={{ left: `${10 + i * 10}%`, top: '50%' }}
            />
          ))}

          <div className="about-main-title">
            <h1 className="about-title-gradient">About Me</h1>
            <div className="about-title-underline">
              <motion.div
                className="about-title-underline-bar"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="about-subtitle"
          >
            Where <span>Passion</span> meets <span>Precision</span> in code
          </motion.h2>
        </motion.div>

        <div className="about-grid-container">
          {/* ── Left Column: Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="profile-card-wrapper"
          >
            <div className="profile-card-3d-container">
              <motion.div
                whileHover={{ rotateY: 3, rotateX: 3 }}
                className="profile-card-3d"
              >
                <div className="profile-card-glow"></div>

                <div className="profile-card-inner">
                  {/* Profile Image */}
                  <div className="profile-image-wrapper">
                    <div className="profile-image-glow"></div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="profile-ring"
                    />
                    <div className="profile-image">
                      <img src={profileImage} alt="Jenitha Johnson Maxi" />
                      <div className="profile-image-overlay"></div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="profile-name-title">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="profile-name"
                    >
                      Jenitha Johnson Maxi
                    </motion.h3>
                    <div className="profile-title-badge">
                      <div className="profile-title-dot"></div>
                      <p className="profile-title">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="contact-info">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        target={info.title === "Location" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                        className="contact-item"
                      >
                        <div className={`contact-icon-wrapper ${info.colorClass}`}>
                          <info.icon className="contact-icon" />
                        </div>
                        <div className="contact-details">
                          <p className="contact-label">{info.title}</p>
                          <p className="contact-value">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="profile-social">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className={`profile-social-link ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                        <span className="profile-social-tooltip">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-right-column"
          >
            {/* Bio Card */}
            <div className="bio-card">
              <div className="bio-glow"></div>
              <div className="bio-content">
                <div className="bio-text-container">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bio-text"
                  >
                    I'm a passionate <span className="bio-highlight-1">full-stack developer</span> with a deep curiosity for how things work. I enjoy transforming complex problems into elegant, efficient solutions that not only function flawlessly but also provide exceptional user experiences.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bio-text"
                  >
                    My approach combines <span className="bio-highlight-2">mathematical precision</span> with creative problem-solving. Whether architecting robust backend systems, crafting intuitive frontend interfaces, or optimizing performance, I thrive on the challenge of finding the perfect balance between functionality and elegance.
                  </motion.p>
                </div>

                {/* Interests */}
                <div className="interests-section">
                  <h4 className="interests-title">
                    <span className="interests-gradient">Core Interests</span>
                  </h4>
                  <div className="interests-grid">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        className="interest-card"
                      >
                        <div className="interest-icon-wrapper">
                          <div className="interest-icon">
                            <div className="interest-icon-svg">{interest.icon}</div>
                          </div>
                          <div className="interest-text">
                            <h5>{interest.title}</h5>
                            <p>{interest.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Philosophy */}
            <div className="info-grid">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="info-card"
              >
                <div className="info-card-glow"></div>
                <div className="info-card-content">
                  <div className="info-header">
                    <div className="info-icon-wrapper">
                      <FaGraduationCap className="info-icon" />
                    </div>
                    <div>
                      <h4 className="info-title">Education</h4>
                      <p className="info-subtitle">Academic Journey</p>
                    </div>
                  </div>
                  <div className="timeline">
                    <div className="timeline-line"></div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <h5 className="timeline-title">BSc(Hons) in Computer Science</h5>
                      <p className="timeline-org">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="timeline-year">2023 - Present</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="info-card"
              >
                <div className="info-card-glow"></div>
                <div className="info-card-content">
                  <div className="info-header">
                    <div className="info-icon-wrapper">
                      <FaBrain className="info-icon" />
                    </div>
                    <div>
                      <h4 className="info-title">Dev Philosophy</h4>
                      <p className="info-subtitle">My Approach</p>
                    </div>
                  </div>
                  <div className="philosophy-list">
                    {philosophyPrinciples.map((principle, index) => (
                      <motion.div
                        key={principle}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="philosophy-item"
                      >
                        <div className="philosophy-dot"></div>
                        <p className="philosophy-text">{principle}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;