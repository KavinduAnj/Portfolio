import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white/60 backdrop-blur-2xl border-t border-gray-200/50 overflow-hidden mt-12">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      {/* Decorative blurred background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center text-center md:text-left">
          
          {/* Brand & Intro */}
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Kavindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Anjana</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              A passionate Software Developer crafting modern, user-friendly, and engaging digital experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 items-center">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Call to Action */}
          <div className="flex flex-col space-y-6 items-center md:items-end">
            <h3 className="text-lg font-semibold text-gray-900 tracking-wide uppercase">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kavindu-anjana-875711295/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-white/80 border border-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/__kavindu__anjana__/"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-white/80 border border-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-pink-500 hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/KavinduAnj"
                target="_blank"
                rel="noreferrer"
                className="group p-3 bg-white/80 border border-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-gray-800 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group p-3 bg-white/80 border border-gray-200 text-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Contact"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
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
