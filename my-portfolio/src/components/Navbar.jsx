import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 bg-white py-4">
            <div className="font-bold text-3xl text-black">
              <Link to="/" >Kavindu Anjana</Link>
            </div>
            <ul className="flex gap-6 list-none m-0 p-0">
                <li>
                    <Link 
                      to="/" 
                      className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold"
                    >
                      Home
                    </Link>
                </li>
                <li>
                  <Link to="/about"
                  className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold"
                  >
                    About
                  </Link>  
                </li>
                <li>
                    <Link 
                      to="/projects" 
                      className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold"
                    >
                      Projects
                    </Link>
                </li>
                <li>
                    <Link 
                      to="/contact" 
                      className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold"
                    >
                      Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

