import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaGoogle, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import pic1 from '../assets/pic1.jpg';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      
      {/* Left Side (Socials + Text) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-30 sm:p-10 lg:p-20">
        
        {/* On desktop → row (icons + text) / On mobile → stacked */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-8 lg:gap-16">
          
          {/* Social Icons */}
          <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 justify-center">
            <a
              href="https://www.instagram.com/__kavindu__anjana__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 text-xl sm:text-2xl transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 text-xl sm:text-2xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KavinduAnj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 text-xl sm:text-2xl transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.cloudskillsboost.google/profile/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-600 text-xl sm:text-2xl transition-colors duration-300"
            >
              <FaGoogle />
            </a>
          </div>

          {/* Intro Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-snug"
            >
              Hi, I’m <span className="text-black">Kavindu</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl text-blue-900"
            >
              A Software Developer{" "}

            </motion.p>
            <p className='mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl text-blue-900'>
              Let's work together
               <Typewriter
                words={["..."]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={80}
                delaySpeed={900}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Profile + Arrow) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-0 sm:p-10 lg:p-20">
        <motion.img
          src={pic1}
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover"
          style={{ borderStyle: "solid" }}
          animate={{
            borderWidth: [2, 6, 2],
            boxShadow: [
              "0 0 0px rgba(59,130,246,0.5)",   
              "0 0 40px rgba(59,130,246,0.8)",  
              "0 0 0px rgba(59,130,246,0.5)",   
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="text-xl sm:text-2xl my-6"
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
