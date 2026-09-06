import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';

const projects = [
  {
    title: "Travel Website",
    description: "Responsive travel landing page with smooth scrolling and engaging animations.",
    link: "https://kavinduanj.github.io/travel-website/",
    image: pic2,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Study Companion",
    description: "A feature-rich Study Companion bot designed with multiple productivity tools.",
    link: "https://github.com/KavinduAnj/Study-Companion-Bot",
    image: pic3,
    tags: ["Ballerina", "Discord API"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with a modern glassmorphism UI.",
    link: "https://kavinduanj.github.io/Portfolio/",
    image: pic4,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-12">
      <motion.div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => {
          const isGithub = project.link.includes('github.com');
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:border-slate-600 overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Hover overlay button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800/90 backdrop-blur-sm text-indigo-300 border border-slate-700 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent"
                  >
                    {isGithub ? <FaGithub className="text-2xl" /> : <FaLink className="text-2xl" />}
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative z-30 bg-gradient-to-b from-slate-800/40 to-slate-800/90">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-grow font-light">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/60">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
