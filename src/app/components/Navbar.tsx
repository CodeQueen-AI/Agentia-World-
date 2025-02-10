'use client'
import React, { useState } from 'react';
import { FaRobot, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4 relative">
      <video 
        className={`absolute inset-0 w-full h-full object-cover opacity-50 ${menuOpen ? 'hidden' : 'block'}`} 
        autoPlay 
        loop 
        muted
      >
        <source src="bg.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <FaRobot className="text-3xl text-purple-500" />
          <span className="hidden lg:block text-2xl font-semibold font-serif">Agentia World</span>
        </div>

        <div className="lg:hidden cursor-pointer z-20" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </div>

        <div className="hidden lg:flex space-x-6">
          {['Home', 'AI Agents', 'AI Solutions', 'Technology', 'Blogs'].map((item, index) => (
            <a key={index} href="#" className="relative group text-white">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-700 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button className="hidden lg:block bg-black text-[#0FF] border-2 border-[#0FF] rounded-full px-8 py-3 w-auto hover:bg-gradient-to-r hover:from-[#0FF] hover:to-[#5B21B6] hover:text-white hover:border-white transition-all duration-300">
          Contact
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 text-lg text-white z-50 transition-all duration-300">
          <button className="absolute top-5 right-5 text-3xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          {['Home', 'AI Agents', 'AI Solutions', 'Technology', 'Blogs'].map((item, index) => (
            <a key={index} href="#" className="text-xl" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-black text-[#0FF] border-2 border-[#0FF] rounded-full px-6 py-2 hover:bg-gradient-to-r hover:from-[#0FF] hover:to-[#5B21B6] hover:text-white hover:border-white transition-all duration-300">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
