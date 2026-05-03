import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import pic1 from "../assets/pic1.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden">

      {/* Left Side (Text + Socials + Buttons) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-32 pb-16 lg:py-16">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Intro Text */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Kavindu</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light"
            >
              A Software Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 font-medium h-8"
            >
              <Typewriter
                words={["Let's work together...", "Turning ideas into code"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-6 justify-center lg:justify-start pt-2"
          >
            <a
              href="https://www.instagram.com/__kavindu__anjana__/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-pink-600 rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-blue-600 rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KavinduAnj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-gray-800 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="relative group px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200 text-lg font-semibold shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side (Profile + Arrow) */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16">
        {/* Profile Image Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Decorative soft glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30 transform scale-105"></div>

          <motion.img
            src={pic1}
            alt="Profile"
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl object-cover shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border-4 border-white/80"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          className="mt-12 lg:mt-16 text-blue-500"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md shadow-blue-900/5 border border-blue-50/50">
            <FaArrowDown className="text-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
