import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isDark = false, toggleTheme } = useTheme?.() || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "project", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 shadow-lg ${
        isDark ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <a href="#home"></a>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden md:flex space-x-8 items-center"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                variants={item}
                href={`#${link.id}`}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isDark
                    ? "hover:text-pink-400"
                    : "hover:text-blue-600"
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.button
              variants={item}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Toggle Theme"
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-pink-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>
          </motion.div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-pink-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${
                isDark
                  ? "hover:bg-gray-800"
                  : "hover:bg-gray-100"
              }`}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col space-y-4 py-4"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  variants={item}
                  href={`#${link.id}`}
                  onClick={handleLinkClick}
                  className={`text-md font-medium py-2 px-4 rounded-lg transition-colors ${
                    isDark
                      ? "hover:bg-gray-800 hover:text-pink-400"
                      : "hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;