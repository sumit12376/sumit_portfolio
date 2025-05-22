import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Certifications = () => {
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

  const certifications = [
    { 
      title: "PostgreSQL Certification", 
      provider: "Udemy", 
      link: "https://www.udemy.com/certificate/UC-a9e4fd3b-abf8-4416-8842-8e3f170eef3d/", 
      issued: "2025" 
    },
    { 
      title: "JavaScript Certification", 
      provider: "Udemy", 
      link: "https://www.udemy.com/certificate/UC-20a4d013-575e-450d-86ea-a4fa47f2a6ce/", 
      issued: "2025" 
    },
    { 
      title: "Internship Trainee", 
      provider: "Learnovate Enterprises", 
      link: "https://drive.google.com/file/d/1abHC4JYhSGeXYIxIYFq5vpCIbIsZ10q_/view?usp=sharing", 
      issued: "2024" 
    },
  ];

  return (
    <section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} 
      id="certifications"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>
            Professional Credentials
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Certifications
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

          {certifications.map((cert, index) => (
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
                {cert.issued}
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
                  {cert.title}
                </h3>
                
                <p className={`text-lg font-medium mb-4 ${
                  isDark ? "text-pink-400" : "text-blue-600"
                }`}>
                  {cert.provider}
                </p>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-block text-center py-2 px-4 rounded-lg font-medium text-sm ${
                    isDark
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  } text-white transition-all`}
                >
                  View Certificate
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;