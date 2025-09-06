import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="h-16 flex justify-between items-center px-8">
       
        <div className="font-bold text-3xl text-black">
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
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-900 transition-colors hover:font-bold"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-900 transition-colors hover:font-bold"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-900 transition-colors hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-black px-4 text-2xl hover:text-blue-900 transition-colors hover:font-bold"
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
        className={`${isOpen ? "block" : "hidden"} sm:hidden bg-blue-100 py-4`}
      >
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-black text-2xl hover:text-blue-900 text-center hover:font-bold block"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-black text-2xl hover:text-blue-900 text-center hover:font-bold block"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-black text-2xl hover:text-blue-900 text-center hover:font-bold block"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-black text-2xl hover:text-blue-900 text-center hover:font-bold block"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
