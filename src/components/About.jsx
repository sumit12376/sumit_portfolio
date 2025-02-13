import React from "react";
import AboutImageLight from "../assets/hero-image.png";
import AboutImageDark from "../assets/sumi.png"; 
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      } py-20`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={isDark ? AboutImageLight : AboutImageDark} 
            alt="About Me"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-xl"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed text-justify">
              I am a <span className="font-semibold text-blue-500">Full Stack Developer</span> specializing in the{" "}
              <span className="font-semibold text-green-500">MERN stack</span> (MongoDB, Express.js, React, and Node.js) and a solid understanding of SQL. I specialize in building modern, responsive, and high-performance web applications, ensuring seamless user experiences. My backend skills allow me to develop robust APIs and server-side logic, while my frontend expertise enables me to create intuitive and dynamic UIs. I am passionate about writing clean, maintainable code and continuously expanding my technical knowledge to stay updated with industry trends.
            </p>
            <div className="space-y-5">
              <SkillBar label="HTML & CSS" width="w-11/12" percentage="90%" isDark={isDark} />
              <SkillBar label="JavaScript" width="w-9/12" percentage="75%" isDark={isDark} />
              <SkillBar label="React JS" width="w-10/12" percentage="85%" isDark={isDark} />
              <SkillBar label="Express JS" width="w-9/12" percentage="75%" isDark={isDark} />
              <SkillBar label="Node JS" width="w-9/12" percentage="75%" isDark={isDark} />
              <SkillBar label="MongoDB" width="w-8/12" percentage="70%" isDark={isDark} />
              <SkillBar label="Tailwind CSS" width="w-9/12" percentage="80%" isDark={isDark} />
              <SkillBar label="Java" width="w-9/12" percentage="75%" isDark={isDark} />
              <SkillBar label="SQL" width="w-10/12" percentage="80%" isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, width, percentage, isDark }) => (
  <div className="flex items-center">
    <label className="w-1/3 text-right pr-4 font-semibold">{label}</label>
    <div className={`flex-1 rounded-full h-3 relative ${isDark ? "bg-gray-700" : "bg-gray-300"}`}>
      <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full ${width} relative`}>
        <span className={`absolute right-2 -top-6 text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
          {percentage}
        </span>
      </div>
    </div>
  </div>
);

export default About;
