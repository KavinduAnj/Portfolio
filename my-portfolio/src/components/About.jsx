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
          className="relative mt-8 mx-auto w-full max-w-4xl rounded-[2.5rem] bg-gradient-to-br from-slate-800/80 via-slate-800/50 to-slate-900/80 border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Vibrant ambient gradients inside card to create frosted glass illumination */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative p-8 sm:p-12 md:p-16">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

              {/* Highlight Icons Column */}
              <div className="flex md:flex-col gap-6 text-indigo-400 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] flex items-center justify-center text-2xl transform rotate-3 hover:rotate-0 hover:border-indigo-400/60 hover:text-indigo-300 transition-all">
                  <FaUserGraduate />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] flex items-center justify-center text-2xl transform -rotate-3 hover:rotate-0 hover:border-indigo-400/60 hover:text-indigo-300 transition-all">
                  <FaLaptopCode />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] flex items-center justify-center text-2xl transform rotate-3 hover:rotate-0 hover:border-indigo-400/60 hover:text-indigo-300 transition-all">
                  <FaLightbulb />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                  Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">innovation</span> & <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">scalable solutions</span>
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
                  I am an undergraduate at Sabaragamuwa University of Sri Lanka, currently
                  pursuing a BSc (Hons) in Information Systems. My key interests lie in
                  <span className="font-medium text-slate-100"> Cloud engineering, Fullstack development, and Project management</span>, where I
                  enjoy designing scalable solutions, optimizing systems, and managing
                  projects to deliver real value.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed font-light">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">Education & Certifications</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/50 to-slate-900/80 rounded-[2.5rem] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-2xl p-4 sm:p-8 overflow-hidden">
            {/* Soft internal glass glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <Timeline />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
