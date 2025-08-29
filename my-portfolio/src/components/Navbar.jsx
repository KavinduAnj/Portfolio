import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 bg-black py-4">
            <div className="font-bold text-2xl text-white ">My Portfolio</div>
            <ul className="flex gap-6 list-none m-0 p-0">
               
                <li>
                    <a href="#home" className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold">About</a>
                </li>
                <li>
                    <a href="#projects" className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="text-white text-base hover:text-gray-300 transition-colors hover:text-lg font-bold">Contact</a>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;