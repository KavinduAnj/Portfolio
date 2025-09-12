import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="h-16 flex justify-between items-center px-8">
       
        <div className="font-bold text-xl sm:text-2xl md:text-3xl text-black">
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer"
          >
            Kavindu Anjana
          </Link>
        </div>

       
        <div className="hidden sm:block">
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-700 transition-colors hover:font-bold"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-700 transition-colors hover:font-bold"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-700 transition-colors hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-700 transition-colors hover:font-bold"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block sm:hidden pr-4 text-black"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden bg-blue-50 shadow-lg shadow-blue-300 rounded-4xl py-4`}
      >
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer bg-blue-100 text-black text-2xl border-1 border-blue-200 rounded-4xl hover:text-blue-700 text-center hover:font-bold block py-1  m-2"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer bg-blue-100  text-black text-2xl border-1 border-blue-200 rounded-4xl hover:text-blue-700 text-center hover:font-bold block py-1  m-2"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer bg-blue-100 text-black text-2xl border-1 border-blue-200 rounded-4xl hover:text-blue-700 text-center hover:font-bold block py-1  m-2"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer bg-blue-100 text-black text-2xl border-1 border-blue-200 rounded-4xl hover:text-blue-700 text-center hover:font-bold block py-1 m-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
