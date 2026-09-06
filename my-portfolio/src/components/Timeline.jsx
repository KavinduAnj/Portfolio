import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    title: "BSc (Hons) in Information Systems",
    company: "Sabaragamuwa University of Sri Lanka",
    date: "2024 - Present",
    icon: <FaGraduationCap />,
  },
  {
    title: "Front-End Web Development",
    company: "University of Moratuwa",
    date: "2024",
    icon: <FaCertificate />,
  },
  {
    title: "Python for Beginners",
    company: "University of Moratuwa",
    date: "2024",
    icon: <FaCertificate />,
  },
  {
    title: "High School Education",
    company: "Richmond College Galle",
    date: "2019 - 2023",
    icon: <FaGraduationCap />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto py-4 px-2 sm:px-6">
      <motion.div 
        className="relative border-l-2 border-slate-700 ml-3 sm:ml-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="mb-10 ml-8 sm:ml-10 relative group" variants={itemVariants}>
            {/* Glowing Dot */}
            <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full -left-[48px] sm:-left-[56px] ring-4 ring-slate-900 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
              <div className="text-white text-lg">
                {exp.icon}
              </div>
            </span>
            
            {/* Content Card */}
            <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700/60 p-5 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-800/90 hover:border-indigo-500/40 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">
                {exp.title}
              </h3>
              <p className="text-base text-indigo-400 font-medium mb-3">{exp.company}</p>
              <div className="inline-flex items-center text-sm text-slate-400 bg-slate-900/60 border border-slate-700/50 px-3 py-1.5 rounded-full">
                <FaCalendarAlt className="mr-2 text-indigo-400" />
                {exp.date}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
