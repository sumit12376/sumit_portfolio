import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react"; 

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`px-8 md:px-16 lg:px-24 shadow-lg ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
     
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#project" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-500 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-yellow-400 " />
          ) : (
            <Moon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-8 pb-4">
          <a href="#home" className="block py-2 hover:underline">
            Home
          </a>
          <a href="#about" className="block py-2 hover:underline">
            About Me
          </a>
          <a href="#project" className="block py-2 hover:underline">
            Projects
          </a>
          <a href="#contact" className="block py-2 hover:underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;