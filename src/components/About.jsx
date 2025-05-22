import React from "react";
import AboutImageLight from "../assets/hero-image.jpg";
import AboutImageDark from "../assets/sumitt.png";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { isDark = false } = useTheme?.() || {};
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    { label: "HTML & CSS", width: "w-11/12", percentage: "90%" },
    { label: "JavaScript", width: "w-9/12", percentage: "75%" },
    { label: "React JS", width: "w-10/12", percentage: "85%" },
    { label: "Express JS", width: "w-9/12", percentage: "75%" },
    { label: "Node JS", width: "w-9/12", percentage: "75%" },
    { label: "MongoDB", width: "w-8/12", percentage: "70%" },
    { label: "Tailwind CSS", width: "w-9/12", percentage: "80%" },
    { label: "Java", width: "w-9/12", percentage: "75%" },
    { label: "SQL", width: "w-10/12", percentage: "80%" }
  ];

  return (
    <section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} 
      id="about"
    >
      <div className="max-w-6xl mx-auto">
       \
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>
            Professional Profile
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
  
          <motion.div 
            variants={item}
            className="w-full lg:w-1/2 flex justify-center"
          >
             <img
              src={isDark ? AboutImageLight : AboutImageDark}
              alt="About Me"
              className="w-full max-w-md h-auto rounded-xl  hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>

         
          <motion.div 
            variants={item}
            className="w-full lg:w-1/2"
          >
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              I am a{" "}
              <span className={`font-semibold ${isDark ? "text-pink-400" : "text-blue-600"}`}>
                Full Stack Developer
              </span>{" "}
              specializing in the{" "}
              <span className={`font-semibold ${isDark ? "text-pink-400" : "text-blue-600"}`}>
                MERN stack
              </span>{" "}
              (MongoDB, Express.js, React, and Node.js) and have a solid 
              understanding of SQL. I specialize in building modern, responsive, 
              and high-performance web applications, ensuring seamless user 
              experiences. My backend skills allow me to develop robust APIs and 
              server-side logic, while my frontend expertise enables me to create 
              intuitive and dynamic UIs. I am passionate about writing clean, 
              maintainable code and continuously expanding my technical knowledge 
              to stay updated with industry trends.
            </p>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  label={skill.label}
                  width={skill.width}
                  percentage={skill.percentage}
                  isDark={isDark}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, width, percentage, isDark }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4"
  >
    <span className={`w-32 text-right font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
      {label}
    </span>
    <div className={`flex-1 rounded-full h-3 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}>
      <div 
        className={`h-3 rounded-full relative ${width} ${
          isDark 
            ? "bg-gradient-to-r from-pink-500 to-purple-600" 
            : "bg-gradient-to-r from-blue-500 to-green-500"
        }`}
      >
        <span className={`absolute right-0 -top-6 text-sm font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
          {percentage}
        </span>
      </div>
    </div>
  </motion.div>
);

export default About;