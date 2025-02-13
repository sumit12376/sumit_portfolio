import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-6`}>
      <div className={`border-t ${isDark ? "border-gray-700" : "border-gray-300"} pt-4 flex flex-col md:flex-row justify-between items-center px-6`}>
        <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          &copy; Sumit. All rights reserved.
        </p>
        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="https://www.linkedin.com/in/sumit-vikram-singh-936310225/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform transform hover:scale-110 ${
              isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/sumit12376"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform transform hover:scale-110 ${
              isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-black"
            }`}
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100070373857062"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform transform hover:scale-110 ${
              isDark ? "text-gray-400 hover:text-blue-500" : "text-gray-600 hover:text-blue-700"
            }`}
          >
            <FaFacebook className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/sumit.thakur_.1/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform transform hover:scale-110 ${
              isDark ? "text-gray-400 hover:text-pink-500" : "text-gray-600 hover:text-pink-600"
            }`}
          >
            <FaInstagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
