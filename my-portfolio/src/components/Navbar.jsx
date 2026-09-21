import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";


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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "pt-4 pb-2" : "py-6"
        }`}
    >
      {/* Floating Light Glassmorphic Container */}
      <div
        className={`mx-auto max-w-md px-6 transition-all duration-500 ease-in-out rounded-full ${scrolled
          ? "bg-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.08),inset_0_1px_0_0_rgba(255,255,255,0.5),inset_0_-1px_0_0_rgba(255,255,255,0.1)] border border-white/40 py-2.5"
          : "bg-white/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.06),inset_0_1px_0_0_rgba(255,255,255,0.45),inset_0_-1px_0_0_rgba(255,255,255,0.08)] border border-white/30 py-3 mt-2"
          }`}
      >
        <div className="flex justify-center items-center">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                activeClass="!text-white bg-white/25 font-semibold shadow-sm border border-white/50"
                offset={-80}
                className="cursor-pointer text-white/80 hover:text-white px-5 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:bg-white/15"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/15 transition-colors"
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
            <div className="bg-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.08),inset_0_1px_0_0_rgba(255,255,255,0.4)] border border-white/30 rounded-3xl p-3 flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  activeClass="!text-white bg-white/25 font-bold border border-white/40"
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white/80 text-lg font-medium px-6 py-3.5 rounded-2xl hover:text-white hover:bg-white/15 transition-all text-center"
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
