import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTheme } from '../ThemeContext';

const Header = () => {
  const { isDark = false } = useTheme?.() || {};
  
  const [text] = useTypewriter({
    words: [
      'Frontend Developer',
      'UI/UX Designer',
      'Backend Developer',
      'Full-Stack Engineer',
      'MERN Stack Specialist',
      'Software Developer',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center"
          variants={item}
        >
    
          
          <motion.h1
            className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Sumit Vikram Singh
            </span>
          </motion.h1>
          
          <motion.h2
            className={`text-2xl md:text-4xl font-semibold ${isDark ? "text-gray-300" : "text-gray-600"} mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A{' '}
            <span className={`text-transparent bg-clip-text ${
              isDark 
                ? "bg-gradient-to-r from-pink-500 to-purple-600" 
                : "bg-gradient-to-r from-blue-500 to-green-500"
            }`}>
              {text}
            </span>
            <Cursor cursorStyle="|" cursorColor={isDark ? "#ec4899" : "#3b82f6"} />
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`h-1 mx-auto ${isDark ? "bg-pink-500" : "bg-blue-500"}`}
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Header;