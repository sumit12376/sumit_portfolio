import React from "react";
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";

function Certifications() {
    const { isDark } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${
                isDark ? "bg-black text-white" : "bg-white text-gray-800"
            } py-20`}
            id="certifications"
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Certifications
                </motion.h2>

                <div className="max-w-3xl mx-auto relative border-l-4 border-blue-500">
                    {[
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
                            link: "https://drive.google.com/file/d/15UvGbhmZ0zA388XFJQKvOj8OZQnw66pN/view", 
                            issued: "2024" 
                        },
                    ].map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="relative pl-10 mb-10"
                        >
                            {/* Circle Indicator */}
                            <div className="absolute -left-[14px] top-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white transform hover:scale-110 transition-transform duration-300"></div>

                            {/* Certificate Issued Year */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.4 }}
                                className="inline-block px-4 py-1 mb-2 text-sm font-semibold rounded bg-blue-500 text-white shadow-lg"
                            >
                                {cert.issued}
                            </motion.div>

                            {/* Certificate Details */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                                className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
                                    isDark ? "bg-gray-900" : "bg-gray-100"
                                }`}
                            >
                                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>

                            
                                <p className="text-lg font-semibold text-blue-500">{cert.provider}</p>

                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                                >
                                    View Certificate
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Certifications;
