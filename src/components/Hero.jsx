import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutImageLight from "../assets/hero-image.jpg";
import AboutImageDark from "../assets/hero-image.jpg";
import Header from "./Header";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { isDark = false } = useTheme?.() || {};
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const src = isDark ? AboutImageLight : AboutImageDark;
    setImageSrc(src);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [isDark]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1PQiDl2M3k4hh67WErvrCsd99pUh5X50y/view?usp=sharing",
      "_blank"
    );
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} 
      id="home"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={item} className="mb-12">
          <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl overflow-hidden border-4 ${
            isDark ? "border-pink-500/30" : "border-blue-500/30"
          }`}>
            <motion.img
              src={imageSrc}
              alt="Profile"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
              
                imageRendering: loaded ? "auto" : "crisp-edges",
                transform: "translateZ(0)"
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            {!loaded && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            )}
          </div>
        </motion.div>
        <motion.div variants={item} className="w-full">
          <Header />
        </motion.div>
        <motion.div variants={item} className="mt-12">
          <motion.button
            onClick={handleResumeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-xl text-lg font-semibold shadow-lg ${
              isDark
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "bg-gradient-to-r from-blue-500 to-green-500 text-white"
            }`}
            aria-label="View Resume"
          >
            View Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;