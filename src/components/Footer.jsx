import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div
        className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
        justify-between items-center"
      >
        <p className="text-gray-400">
          &copy;  Sumit. All rights reserved.
        </p>
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="https://www.linkedin.com/in/sumit-vikram-singh-936310225/" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sumit12376" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
          <a href="" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
