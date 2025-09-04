import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaGoogle, FaArrowDown } from "react-icons/fa";
import pic1 from '../assets/pic1.jpg';
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
    return (
      <div className='flex min-h-screen'>
          <div className="flex flex-col space-y-10 m-40 items-center justify-center">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/__kavindu__anjana__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 text-2xl transition-colors duration-300"
      >
        <FaInstagram />
      </a>

      {/* Dribbble */}
      <a
        href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 text-2xl transition-colors duration-300"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/KavinduAnj"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 text-2xl transition-colors duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.cloudskillsboost.google/profile/badges"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 text-2xl transition-colors duration-300"
      >
        <FaGoogle />
      </a>
    </div>

      <div className="bg-white flex flex-col items-center justify-center m-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-4xl text-blue-900 md:text-6xl font-bold"
        >
          Hi, I’m <span className="text-black">Kavindu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-2xl md:text-3xl text-blue-900"
        >
          A Software Developer <Typewriter
            words={["...."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={900}
          />
        </motion.p>

      </div>
        <div className='flex flex-col m-20 items-center justify-center'>
          <motion.img
            src="\src\assets\pic1.jpg"
            alt="Profile"
            className="w-80 h-80 rounded-4xl object-cover mx-auto"
            style={{ borderStyle: "solid" }}
            animate={{
              borderWidth: [2, 6, 2],
              boxShadow: [
                "0 0 0px rgba(59,130,246,0.5)",   // small glow
                "0 0 40px rgba(59,130,246,0.8)",  // big glow
                "0 0 0px rgba(59,130,246,0.5)",   // back to small
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className='items-end justify-end my-5'>< FaArrowDown/>
          </div>
        </div>
        
      </div>
    );
};

export default Home;