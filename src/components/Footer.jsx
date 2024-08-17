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
        <div className="flex space-x-4 my-4 md:my-0 gap-4">
          <a href="https://www.linkedin.com/in/sumit-vikram-singh-936310225/" target="_blank" className="text-gray-400 hover:text-white">
            <FaLinkedin className="w-9 h-9"/>
          </a>
          <a href="https://github.com/sumit12376" target="_blank" className="text-gray-400  hover:text-white">
            <FaGithub  className="w-9 h-9"/>
          </a>
          <a  href="https://www.facebook.com/profile.php?id=100070373857062" target="_blank" className="text-gray-400 hover:text-white ">
            <FaFacebook className="w-9 h-9" />
          </a>
          <a href="https://www.instagram.com/sumit.thakurr_1/" target="_blank" className="text-gray-400 hover:text-white">
            <FaInstagram className="w-9 h-9 mr-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
