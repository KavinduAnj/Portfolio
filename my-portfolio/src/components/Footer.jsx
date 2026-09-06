import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/90 backdrop-blur-2xl border-t border-slate-800 overflow-hidden mt-12">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      {/* Decorative blurred background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center text-center md:text-left">
          
          {/* Brand & Intro */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
              Kavindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Anjana</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-light">
              A passionate Software Developer crafting modern, user-friendly, and engaging digital experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 items-center">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="flex flex-col space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-indigo-400 font-medium transition-all duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Call to Action */}
          <div className="flex flex-col space-y-6 items-center md:items-end">
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-full shadow-sm hover:shadow-md hover:border-indigo-500 hover:text-indigo-400 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/__kavindu__anjana__/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-full shadow-sm hover:shadow-md hover:border-pink-500 hover:text-pink-400 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/KavinduAnj"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-full shadow-sm hover:shadow-md hover:border-slate-500 hover:text-slate-100 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group p-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-full shadow-sm hover:shadow-md hover:border-red-500 hover:text-red-400 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Contact"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} KavinduDev. All rights reserved.
          </p>
          <p className="flex items-center space-x-1.5">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Kavindu Anjana</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
