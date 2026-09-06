import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Contact = () => {
  return (
    <div className="py-12 px-6 sm:px-10 lg:px-12 flex items-center justify-center">
      <motion.div 
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side - Contact Info */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h2 className="text-3xl font-bold mb-8 text-slate-100 tracking-tight text-center md:text-left">
            Let's Talk
          </h2>
          <div className="space-y-6 flex-grow">
            {/* Email */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 flex items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <FaEnvelope className="text-2xl text-indigo-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-100">Email</h3>
                <p className="text-slate-400 mb-1">user@gmail.com</p>
                <a
                  href="mailto:user@gmail.com"
                  className="text-sm font-medium text-indigo-400 flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  Write me <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* Whatsapp */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 flex items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <FaWhatsapp className="text-2xl text-emerald-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-100">Whatsapp</h3>
                <p className="text-slate-400 mb-1">999-888-777</p>
                <a
                  href="https://wa.me/999888777"
                  className="text-sm font-medium text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Write me <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* Messenger */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 flex items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <FaFacebookMessenger className="text-2xl text-blue-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-100">Messenger</h3>
                <p className="text-slate-400 mb-1">user.fb123</p>
                <a
                  href="https://m.me/user.fb123"
                  className="text-sm font-medium text-blue-400 flex items-center gap-2 hover:text-cyan-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Write me <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <h2 className="text-3xl font-bold mb-8 text-slate-100 tracking-tight text-center md:text-left">
            Send a Message
          </h2>
          <form className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] space-y-6 flex-grow flex flex-col justify-between">
            <div className="space-y-6">
              {/* Name */}
              <div className="relative group">
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Project */}
              <div className="relative group">
                <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-inner resize-none"
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 w-full relative group px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message <FaPaperPlane className="text-sm" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
