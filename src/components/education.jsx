import React from "react";
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";

function Education() {
    const { isDark } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${
                isDark ? "bg-black text-white" : "bg-white text-gray-800"
            } py-20`}
            id="education"
        >
            <div className="container mx-auto px-6">
                       <motion.h2
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                         className="text-4xl font-bold text-center mb-12"
                       >
                         Education
                       </motion.h2>
                
                <div className="max-w-3xl mx-auto relative border-l-4 border-blue-500">
                    {[
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
                    ].map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="relative pl-10 mb-10"
                        >
                            {/* Circle Indicator */}
                            <div className="absolute -left-[14px] top-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white transform hover:scale-110 transition-transform duration-300"></div>

            
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.4 }}
                                className="inline-block px-4 py-1 mb-2 text-sm font-semibold rounded bg-blue-500 text-white shadow-lg"
                            >
                                {edu.duration}
                            </motion.div>

               
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                                className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                                    isDark ? "bg-gray-800" : "bg-gray-50"
                                }`}
                            >
                                <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
                                
                                {/* Institute Name */}
                                <p className="text-lg font-semibold text-blue-500">
                                    {edu.institute}
                                </p>

                                {/* Extra Information */}
                                <p className="italic text-gray-400 mt-2">
                                    {edu.extra}
                                </p>

                                {/* CGPA/Percentage with Highlight */}
                                <p className="mt-3">
                                    <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md">
                                        {edu.detail}
                                    </span>
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Education;
