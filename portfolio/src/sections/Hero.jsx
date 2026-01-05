import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const tilt = {
    whileHover: {
      rotateX: -8,
      rotateY: 8,
      scale: 1.08,
    },
    transition: { type: "spring", stiffness: 200, damping: 15 },
  };

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#020617] to-black"
      >
        {/* Floating dots background */}
        {[...Array(25)].map((_, i) => (
            <motion.span
                key={i}
                className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
            />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-400 uppercase tracking-widest mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
          >
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
          bg-clip-text text-transparent animate-gradient">
            Jenitha Johnson Maxi
          </span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Computer Science Undergraduate @ SLIIT
          </motion.p>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto text-gray-400 mb-12"
          >
            Passionate about
            <span className="text-emerald-400 font-medium"> Full Stack Development</span>,
            <span className="text-teal-400 font-medium"> AI/ML</span>, and
            <span className="text-cyan-400 font-medium"> Mathematics</span>.
          </motion.p>

          {/* Buttons with 3D hover */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
            <motion.button
                {...tilt}
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-emerald-500 to-teal-500
            shadow-lg shadow-emerald-500/40"
            >
              View Projects
            </motion.button>

            <motion.button
                {...tilt}
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 rounded-xl font-semibold text-white
            border border-emerald-400/50 hover:bg-emerald-400/10"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Connect with me */}
          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mb-4 uppercase tracking-wider text-sm"
          >
            Connect with me
          </motion.p>

          {/* Social icons with 3D hover */}
          <div className="flex justify-center gap-8">
            <motion.a
                {...tilt}
                href="https://github.com/Jenitha23"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 backdrop-blur
            hover:bg-emerald-400/20"
            >
              <FaGithub className="text-2xl text-gray-300 hover:text-emerald-400" />
            </motion.a>

            <motion.a
                {...tilt}
                href="https://www.linkedin.com/in/jenitha-johnson-maxi-84631621b"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 backdrop-blur
            hover:bg-emerald-400/20"
            >
              <FaLinkedin className="text-2xl text-gray-300 hover:text-emerald-400" />
            </motion.a>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400/70"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </section>
  );
};

export default Hero;
