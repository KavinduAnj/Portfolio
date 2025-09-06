import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 bg-white py-4">
          <div >
            <div className="font-bold text-3xl text-black">
              <Link to="/" >Kavindu Anjana</Link>
            </div>
        <div className='hidden sm:block'>
          <Link to="/" className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold">Home</Link>
          <Link to="/about" className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold">About</Link>
          <Link to="/projects" className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold"> Projects</Link>
          <Link to="/contact" className="text-black text-2xl hover:text-blue-900 transition-colors hover:font-bold">Contact</Link>
        </div> 
        </div>  
        </nav>
    );
};

export default Navbar;

