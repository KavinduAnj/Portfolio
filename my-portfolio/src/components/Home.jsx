import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin, FaGoogle } from "react-icons/fa";

const Home = () => {
    return (
      <div className='flex min-h-screen'>
          <div className="flex flex-col space-y-10 m-30 items-center justify-center">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/__kavindu__anjana__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 text-2xl transition-colors duration-300"
      >
        <FaInstagram />
      </a>

      {/* Dribbble */}
      <a
        href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-400 text-2xl transition-colors duration-300"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/KavinduAnj"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-2xl transition-colors duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.cloudskillsboost.google/profile/badges"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-2xl transition-colors duration-300"
      >
        <FaGoogle />
      </a>
    </div>

      <div className="bg-white flex flex-col items-center justify-center m-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-gray-500 md:text-6xl font-bold"
        >
          Hi, I’m <span className="text-black">Kavindu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-gray-500"
        >
          A passionate Web Developer 🚀
        </motion.p>

      </div>
      <div>

      </div>
      </div>
    );
};

export default Home;