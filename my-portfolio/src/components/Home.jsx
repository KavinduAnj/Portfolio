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
    <div className="relative flex flex-col lg:flex-row min-h-screen overflow-hidden bg-slate-900">

      {/* Floating background shapes — roam across the whole section */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl"
          animate={{
            x: ["0vw", "18vw", "6vw", "22vw", "0vw"],
            y: ["0vh", "12vh", "28vh", "8vh", "0vh"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[10%] w-96 h-96 rounded-full bg-purple-500/25 blur-3xl"
          animate={{
            x: ["0vw", "-14vw", "-22vw", "-6vw", "0vw"],
            y: ["0vh", "-10vh", "6vh", "-18vh", "0vh"],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[40%] right-[15%] w-4 h-4 rounded-full border-2 border-indigo-300/60"
          animate={{
            x: ["5vw", "10vw", "12vw", "5vw"],
            y: ["0vh", "-20vh", "8vh", "0vh"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[15%] left-[45%] w-3 h-3 rounded-full bg-purple-400/60"
          animate={{
            x: ["0vw", "12vw", "-8vw", "0vw"],
            y: ["0vh", "15vh", "25vh", "0vh"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[40%] left-[50%] w-5 h-5 rounded-full bg-orange-500/60"
          animate={{
            x: ["0vw", "-5vw", "20vw", "0vw"],
            y: ["0vh", "20vh", "15vh", "0vh"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[10%] w-6 h-6 rounded-full border-2 border-purple-300/40"
          animate={{
            x: ["0vw", "5vw", "-5vw", "20vw", "0vw"],
            y: ["0vh", "-12vh", "5vh", "-50vh", "0vh"],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[55%] left-[25%] w-5 h-5 rounded-full bg-indigo-400/40"
          animate={{
            x: ["0vw", "-18vw", "8vw", "0vw"],
            y: ["0vh", "10vh", "-15vh", "0vh"],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight tracking-tight"
            >
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Kavindu</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 font-light"
            >
              A Software Developer
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-300 font-medium h-8"
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
              className="p-3 bg-slate-800 text-pink-400 rounded-full shadow-md hover:shadow-lg hover:bg-slate-700 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-blue-400 rounded-full shadow-md hover:shadow-lg hover:bg-slate-700 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KavinduAnj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 text-slate-200 rounded-full shadow-md hover:shadow-lg hover:bg-slate-700 text-xl sm:text-2xl transition-all duration-300 transform hover:-translate-y-1"
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
              className="relative group px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all duration-300 transform hover:-translate-y-1 text-center overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-transparent text-slate-100 border border-slate-600 text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1 text-center"
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
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30 transform scale-105"></div>

          <motion.img
            src={pic1}
            alt="Profile"
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,_0,_0,_0.4)] border-4 border-slate-700/80"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Arrow Down */}
        <motion.div
          className="mt-12 lg:mt-16 text-indigo-300"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 shadow-md border border-slate-700">
            <FaArrowDown className="text-xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;