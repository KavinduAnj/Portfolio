import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import pic5 from "../assets/pic5.png";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add glassmorphism shadow when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "pt-4 pb-2" : "py-6"
      }`}
    >
      {/* Floating Glassmorphic Container */}
      <div
        className={`mx-auto max-w-5xl px-6 transition-all duration-500 ease-in-out rounded-full ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md shadow-gray-200/50 border border-gray-100 py-2.5"
            : "bg-white/60 backdrop-blur-md shadow-sm shadow-gray-200/20 border border-white/60 py-3 mt-2"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer"
            >
              <img 
                src={pic5} 
                alt="Logo" 
                className="h-10 w-auto sm:h-12 object-contain transition-transform duration-300 hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="!text-blue-700 bg-white/80 font-semibold shadow-sm border border-gray-100"
                offset={-80}
                className="cursor-pointer text-gray-800 hover:text-blue-600 px-5 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:bg-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full px-4 pt-4 pb-4 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-2xl shadow-2xl border border-gray-100/50 rounded-3xl p-3 flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  activeClass="!text-blue-600 bg-blue-50/80 font-bold"
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-gray-700 text-lg font-medium px-6 py-3.5 rounded-2xl hover:text-blue-600 hover:bg-blue-50/50 transition-all text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
