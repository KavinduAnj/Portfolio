import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';
import { FaUserGraduate, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative w-full pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-20">
        
        {/* Intro Card */}
        <motion.div 
          className="relative mt-8 mx-auto w-full max-w-4xl rounded-[2.5rem] bg-white/40 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Subtle accent gradient inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative p-8 sm:p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              
              {/* Highlight Icons Column */}
              <div className="flex md:flex-col gap-6 text-indigo-600 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <FaUserGraduate />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <FaLaptopCode />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <FaLightbulb />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">innovation</span> & <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">scalable solutions</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  I am an undergraduate at Sabaragamuwa University of Sri Lanka, currently
                  pursuing a BSc (Hons) in Information Systems. My key interests lie in
                  <span className="font-medium text-gray-800"> Cloud engineering, Fullstack development, and Project management</span>, where I
                  enjoy designing scalable solutions, optimizing systems, and managing
                  projects to deliver real value.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  As an enthusiastic learner, I am
                  passionate about exploring how emerging technologies can transform
                  businesses and create innovative opportunities. I am eager to grow as a
                  versatile IT professional by combining technical expertise with
                  leadership and strategic thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline Section */}
        <motion.div 
          className="mt-24 relative mx-auto w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Education & Certifications</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white/40 rounded-[2.5rem] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-xl p-4 sm:p-8">
            <Timeline />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
