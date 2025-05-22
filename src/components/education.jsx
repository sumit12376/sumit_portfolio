import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Education = () => {
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

  const educationData = [
    { 
      year: "2025", 
      title: "B.Tech in Computer Science & Engineering", 
      institute: "Babu Banarasi Das Northern India Institute of Technology", 
      extra: "Specialized in software development, problem-solving, and system architecture.", 
      duration: "2021 - 2025", 
      detail: "CGPA: 7.07" 
    },
    { 
      year: "2021", 
      title: "Senior Secondary (12th Grade)", 
      institute: "St. Columbus Inter College", 
      extra: "Studied Physics, Chemistry, Mathematics (PCM), and developed analytical thinking skills.", 
      duration: "2021", 
      detail: "Percentage: 74.4%" 
    },
    { 
      year: "2019", 
      title: "Secondary School (10th Grade)", 
      institute: "St. Columbus Inter College", 
      extra: "Built a strong foundation in mathematics, science, and problem-solving.", 
      duration: "2019", 
      detail: "Percentage: 77.33%" 
    },
  ];

  return (
    <section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} 
      id="education"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>
            Academic Background
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Education
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto"
        >
          <div className={`absolute left-6 top-0 h-full w-1 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-16 mb-10"
            >
              <div 
                className={`absolute left-0 top-6 w-4 h-4 rounded-full transform hover:scale-125 transition-transform duration-300 ${
                  isDark ? "bg-pink-500" : "bg-blue-600"
                }`}
              ></div>

   
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full ${
                  isDark 
                    ? "bg-pink-500 text-white" 
                    : "bg-blue-600 text-white"
                } shadow-md`}
              >
                {edu.duration}
              </motion.span>
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                  isDark 
                    ? "bg-gray-900 text-white border-gray-700" 
                    : "bg-gray-100 text-gray-800 border-gray-200"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}>
                  {edu.title}
                </h3>
                
                <p className={`text-lg font-medium mb-2 ${
                  isDark ? "text-pink-400" : "text-blue-600"
                }`}>
                  {edu.institute}
                </p>

                <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {edu.extra}
                </p>

                <div className="flex justify-between items-center">
                  <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    isDark 
                      ? "bg-gray-800 text-pink-400" 
                      : "bg-gray-200 text-blue-600"
                  }`}>
                    {edu.detail}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;