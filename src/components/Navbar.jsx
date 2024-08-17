import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 shadow-lg">
      <div className=" container py-4 flex justify-between items-center">
       
        <div className="space-x-8">
          <a href="#home" className="hover:text-gray-300 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-gray-300 transition-colors duration-200">About Me</a>
          <a href="#project" className="hover:text-gray-300 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
