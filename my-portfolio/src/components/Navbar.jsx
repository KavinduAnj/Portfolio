import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 bg-black py-4">
            <div className="font-bold text-2xl text-white">My Portfolio</div>
            <ul className="flex gap-6 list-none m-0 p-0">
                <li>
                    <Link 
                      to="/" 
                      className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold"
                    >
                      Home
                    </Link>
                </li>
                <li>
                    <Link 
                      to="/projects" 
                      className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold"
                    >
                      Projects
                    </Link>
                </li>
                <li>
                    <Link 
                      to="/contact" 
                      className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold"
                    >
                      Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

