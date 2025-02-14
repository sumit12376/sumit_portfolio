import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 px-8 md:px-16 lg:px-24 shadow-lg  ${
        isDark ? "bg-black text-white  " : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
   
        <div className="text-xl font-bold">
          <a href="#hero">
           
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#Home" className="text-lg font-medium hover:text-blue-500 transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="text-lg font-medium hover:text-blue-500 transition-colors duration-200">
            About
          </a>
          <a href="#project" className="text-lg font-medium hover:text-blue-500 transition-colors duration-200">
            Projects
          </a>
          <a href="#contact" className="text-lg font-medium hover:text-blue-500 transition-colors duration-200">
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2  "
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2  "
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="p-2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-8 pb-4 animate-slideDown">
          <div className="flex flex-col space-y-4">
            <a
              href="#Home"
              className="text-md font-medium hover:text-blue-500 transition-colors duration-200"
              onClick={handleLinkClick} // Close menu on click
            >
              Home
            </a>
            <a
              href="#about"
              className="text-md font-medium hover:text-blue-500 transition-colors duration-200"
              onClick={handleLinkClick} // Close menu on click
            >
              About Me
            </a>
            <a
              href="#project"
              className="text-md font-medium hover:text-blue-500 transition-colors duration-200"
              onClick={handleLinkClick} // Close menu on click
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-md font-medium hover:text-blue-500 transition-colors duration-200"
              onClick={handleLinkClick} // Close menu on click
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;