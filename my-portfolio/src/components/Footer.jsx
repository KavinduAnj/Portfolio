import React from 'react';

const Footer = () => (
    <footer className="bg-gray-900 text-white text-center py-3 left-0 bottom-0 w-full">
        
        <ul className='text-left m-5'>
            <li>
            <a href="#home" className="text-white">Home</a>
        </li>
        <li>
            <a href="#about" className='text-white'>About</a>
        </li>
        <li>
            <a href="#contact" className='text-white'>Contact</a>
        </li>
        </ul>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
);

export default Footer;
