import React, { useEffect, useState } from "react";
import AboutImageLight from "../assets/hero-image.png";
import AboutImageDark from "../assets/sumi.png";
import Header from "./Header";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imgLight = new Image();
    const imgDark = new Image();
    imgLight.src = AboutImageLight;
    imgDark.src = AboutImageDark;

    imgLight.onload = imgDark.onload = () => setLoaded(true);
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1eACllAjzEbpXuCYkBGhxmG7K_FWqa-4V/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      className={`text-center py-16  ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
   
      <img
        key={isDark ? "dark" : "light"} 
        src={isDark ?  AboutImageLight:AboutImageDark }
        alt="Hero"
        className={`mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <Header />

      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={handleResumeClick}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
