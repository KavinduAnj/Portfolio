import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
    return (
      <div className='flex min-h-screen'>
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