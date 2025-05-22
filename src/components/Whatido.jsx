import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode, FaPalette, FaCloud, FaCodeBranch, FaServer, FaGlobe } from "react-icons/fa";

const Whatido = () => {
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

  const Card = ({ title, des, icon }) => (
    <motion.div
      variants={item}
      className={`w-full px-8 py-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
        isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-800 border-gray-200"
      }`}
    >
      <div className="flex items-center mb-6">
        <span className={`text-4xl mr-4 ${isDark ? "text-pink-500" : "text-blue-600"}`}>{icon}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className={isDark ? "text-gray-300" : "text-gray-600"}>{des}</p>
    </motion.div> 
  );

  const Title = ({ title, des }) => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>{title}</h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
      >
        {des}
      </motion.h2>
    </motion.div>
  );

  return (
    <section className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} id="services">
      <Title title="Services" des="What I Do" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <Card title="Full Stack Development" des="Building complete web applications with MERN stack." icon={<FaLaptopCode />} />
        <Card title="React.js Development" des="Creating interactive, responsive user interfaces with React.js." icon={<FaReact />} />
        <Card title="Backend Development" des="Developing robust server-side applications with Node.js and Express." icon={<FaNodeJs />} />
        <Card title="Database Design" des="Designing optimized database schemas using PostgreSQL and MongoDB." icon={<FaDatabase />} />
        <Card title="UI/UX Implementation" des="Crafting responsive designs with Tailwind CSS for better user experience." icon={<FaPalette />} />
        <Card title="API Development" des="Designing and implementing RESTful and GraphQL APIs for seamless data flow." icon={<FaServer />} />
        <Card title="Version Control" des="Efficiently managing codebases with Git and GitHub for smooth collaboration." icon={<FaCodeBranch />} />
      </motion.div>
    </section>
  );
};

export default Whatido;