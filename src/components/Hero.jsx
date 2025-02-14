import React, { useEffect, useState } from "react";
import AboutImageLight from "../assets/hero-image.jpg";
import AboutImageDark from "../assets/sumi.png";

import Header from "./Header";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = [AboutImageLight, AboutImageDark];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) setLoaded(true);
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
    });
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1eACllAjzEbpXuCYkBGhxmG7K_FWqa-4V/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      className={`text-center py-16 px-4 sm:px-8 lg:px-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
      id="Home"
    >
      {/* Hero Image */}
      <div className="flex justify-center mb-8 mt-9">
      <img
  key={isDark ? "dark" : "light"}
  src={isDark ? AboutImageLight : AboutImageDark}
  alt="Hero"
  className={`w-32 h-32  rounded-full shadow-lg transition-opacity duration-500 object-cover ${
    loaded ? "opacity-100" : "opacity-0"
  }`}
/>
      </div>

      <Header />

      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          onClick={handleResumeClick}
          aria-label="View Resume"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;