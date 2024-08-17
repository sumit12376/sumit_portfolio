import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 shadow-lg">
      <div className=" container py-4 flex justify-between items-center">
       
        <div className="space-x-8">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#project" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
