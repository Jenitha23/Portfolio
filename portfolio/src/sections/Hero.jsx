import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin, FaCode, FaServer, FaBrain, FaUpload } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPython } from "react-icons/si";
import { useState } from "react";

const Hero = () => {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setPhotoUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('photo-upload').click();
  };

  const tiltEffect = {
    whileHover: {
      rotateX: -8,
      rotateY: 8,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    transition: { duration: 0.2 }
  };

  const floatingTech = [
    { icon: <SiReact />, color: "text-cyan-400", label: "React" },
    { icon: <SiNodedotjs />, color: "text-green-500", label: "Node.js" },
    { icon: <SiPython />, color: "text-yellow-400", label: "Python" },
    { icon: <FaCode />, color: "text-purple-400", label: "Full Stack" },
    { icon: <FaBrain />, color: "text-pink-400", label: "AI/ML" },
    { icon: <FaServer />, color: "text-orange-400", label: "Backend" },
  ];

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-[#0a0f1f] via-[#020617] to-[#0c1224]"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating tech icons */}
        {floatingTech.map((tech, i) => (
            <motion.div
                key={i}
                className="absolute flex flex-col items-center"
                animate={{
                  y: [0, -30, 0],
                  x: Math.sin(i) * 20,
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                style={{
                  left: `${15 + (i * 12)}%`,
                  top: `${20 + (Math.cos(i) * 30)}%`,
                }}
            >
              <div className={`text-2xl ${tech.color} mb-1`}>
                {tech.icon}
              </div>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
            {tech.label}
          </span>
            </motion.div>
        ))}

        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 border border-emerald-400/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 border border-cyan-400/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-teal-400/20 rotate-45"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left text content */}
          <div className="lg:w-1/2 text-left">
            {/* Greeting */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-400 uppercase tracking-wider text-sm mb-4 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name - Cleaner, bigger */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Jenitha Johnson</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
                bg-clip-text text-transparent animate-gradient">
                Maxi
              </span>
              </h1>
            </motion.div>

            {/* Title - Reduced font size */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-1">
                Computer Science <span className="text-emerald-300">Undergraduate</span>
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
                <span className="text-base text-emerald-300 font-medium">@SLIIT</span>
              </div>
            </motion.div>

            {/* Description with more spacing */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed"
            >
              Passionate about creating innovative solutions at the intersection of{" "}
              <span className="text-emerald-400 font-medium">Full Stack Development</span>,{" "}
              <span className="text-teal-400 font-medium">AI/ML</span>, and{" "}
              <span className="text-cyan-400 font-medium">Mathematics</span>.
              Currently exploring the boundaries of technology and creativity.
            </motion.p>

            {/* Buttons with adjusted spacing */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                  {...tiltEffect}
                  onClick={() => scrollToSection("#projects")}
                  className="group relative px-8 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500
                shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50
                overflow-hidden"
              >
              <span className="relative z-10 flex items-center gap-2 text-base">
                View My Work
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0
                group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                  {...tiltEffect}
                  onClick={() => scrollToSection("#contact")}
                  className="px-8 py-3 rounded-xl font-semibold text-white text-base
                border-2 border-emerald-400/30 hover:border-emerald-400
                hover:bg-emerald-400/10 backdrop-blur-sm"
              >
                Let's Connect
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-6"
            >
              <span className="text-gray-400 text-sm tracking-wider font-medium">FOLLOW ME</span>
              <div className="flex gap-4">
                <motion.a
                    {...tiltEffect}
                    href="https://github.com/Jenitha23"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-br from-gray-900 to-black
                  border border-gray-800 hover:border-emerald-400"
                >
                  <FaGithub className="text-xl text-gray-400 group-hover:text-emerald-400" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                  text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub
                  </div>
                </motion.a>

                <motion.a
                    {...tiltEffect}
                    href="https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-3 rounded-full bg-gradient-to-br from-gray-900 to-black
                  border border-gray-800 hover:border-cyan-400"
                >
                  <FaLinkedin className="text-xl text-gray-400 group-hover:text-cyan-400" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                  text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right photo section with upload functionality */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer glowing ring */}
              <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-transparent
                bg-gradient-to-r from-emerald-500 via-transparent to-cyan-500
                bg-clip-border p-1"
              >
                <div className="w-full h-full rounded-full bg-[#0a0f1f]"></div>
              </motion.div>

              {/* Hidden file input */}
              <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
              />

              {/* Photo container with upload option */}
              <div
                  onClick={triggerFileInput}
                  className="absolute inset-8 rounded-full overflow-hidden border-4 border-dashed border-gray-700/50
                shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10
                hover:border-emerald-400/50 hover:bg-emerald-400/20 transition-all duration-300
                cursor-pointer group"
              >
                {photoUploaded && photoPreview ? (
                    <div className="w-full h-full">
                      <img
                          src={photoPreview}
                          alt="Profile"
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300
                    flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="text-center">
                          <FaUpload className="text-2xl text-white mb-2 mx-auto" />
                          <p className="text-white text-sm">Change Photo</p>
                        </div>
                      </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                      <div className="text-4xl mb-4 text-emerald-400/70 group-hover:text-emerald-400
                    transition-colors duration-300">
                        👩💻
                      </div>
                      <FaUpload className="text-2xl text-emerald-400/50 mb-3 group-hover:text-emerald-400
                    group-hover:scale-110 transition-all duration-300" />
                      <p className="text-gray-300 text-sm font-medium mb-1 text-center group-hover:text-emerald-300">
                        Upload Your Photo
                      </p>
                      <p className="text-gray-500 text-xs text-center">
                        Click to upload profile picture
                      </p>
                      <p className="text-gray-600 text-xs text-center mt-2">
                        Recommended: Square photo, 400x400px
                      </p>
                    </div>
                )}
              </div>

              {/* Floating badges */}
              <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r
                from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30"
              >
                <span className="text-white text-sm font-semibold">Full Stack Dev</span>
              </motion.div>

              <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-6 left-0 px-4 py-2 rounded-full bg-gradient-to-r
                from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30"
              >
                <span className="text-white text-sm font-semibold">AI/ML Enthusiast</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("#about")}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-xs tracking-wider font-medium">SCROLL</span>
            <div className="w-8 h-14 rounded-full border-2 border-emerald-400/30 flex justify-center">
              <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;