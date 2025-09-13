import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import pic1 from "../assets/pic1.jpg";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Left Side (Socials + Text) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-10">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-row lg:flex-col gap-6 justify-center"
          >
            <a
              href="https://www.instagram.com/__kavindu__anjana__/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 text-pink-600 rounded-full hover:bg-pink-500 hover:text-white text-xl sm:text-2xl transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white text-xl sm:text-2xl transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KavinduAnj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-800 hover:text-white text-xl sm:text-2xl transition duration-300"
            >
              <FaGithub />
            </a>
          </motion.div>

          {/* Intro Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug"
            >
              Hi, I’m <span className="text-blue-700">Kavindu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700"
            >
              A Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 font-medium"
            >
              <Typewriter
                words={["Let's work together...", "Building awesome UIs", "Turning ideas into code"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </motion.p>
             <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white text-lg sm:text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Hire Me 
            </motion.a>
          </div>
        </div>
      </div>

      {/* Right Side (Profile + Arrow) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16">
        {/* Profile Image */}
        <motion.img
          src={pic1}
          alt="Profile"
          className="w-50 h-50 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(59,130,246,0.5)",
              "0 0 40px rgba(59,130,246,0.8)",
              "0 0 20px rgba(59,130,246,0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Arrow Down */}
        <motion.div
          className="text-2xl mt-8 text-blue-900"
          animate={{ y: [0, 20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
