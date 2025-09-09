import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-blue-50 to-blue-100 border-4 rounded-2xl border-blue-100 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Name / Brand */}
        <h2 className="text-2xl font-bold">Kavindu Anjana</h2>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-600">
           <li>
            <a
              href="#home"
              className="hover:text-black transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-black transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-black transition-colors duration-200"
            >
              Projects
            </a>
          </li>
           <li>
            <a
              href="#contact"
              className="hover:text-black transition-colors duration-200"
            >
              Contact
            </a>
          </li>
         
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-6 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-blue-400 bg-gray-50 rounded-full hover:bg-gray-200 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-pink-400 bg-gray-50 rounded-full hover:bg-gray-200 transition"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-50 rounded-full hover:bg-gray-200 transition"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} KavinduDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
