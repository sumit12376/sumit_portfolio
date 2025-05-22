import React from "react";
import { motion } from "framer-motion";
import blog from "../assets/blogs.png";
import cryptotrack from "../assets/crypto.png";
import currconv from "../assets/curr.png";
import book from "../assets/book.png";
import { useTheme } from "../ThemeContext";
import logo from "../assets/ecom.png";

const projects = [
  {
    id: 1,
    name: "Elitemart",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    image: logo,
    github: "https://elitemart-frontend.vercel.app/",
    description:
      "A full-stack e-commerce platform with secure authentication, advanced product management, and seamless payment integration. Designed for scalability and high performance.",
  },
  {
    id: 2,
    name: "Books-A-Million",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    image: book,
    github: "https://books-a-million.netlify.app/",
    description:
      "An online bookstore that allows users to explore, search, and purchase books effortlessly. Features include authentication, a shopping cart, and order tracking.",
  },
  {
    id: 3,
    name: "Blog Website",
    technologies: ["React", "Appwrite (BaaS)"],
    image: blog,
    github: "https://blogwebsite-sumit-vikram-singhs-projects.vercel.app/",
    description:
      "A dynamic blogging platform enabling users to create, update, and manage blog posts. Built with a React frontend and Appwrite backend for seamless user experience.",
  },
  {
    id: 4,
    name: "CryptoTracker",
    technologies: ["React", "CoinGecko API"],
    image: cryptotrack,
    github: "https://cryptotrackerr11.netlify.app/",
    description:
      "A cryptocurrency tracker displaying real-time market data. Integrated with the CoinGecko API to fetch live prices, trends, and insights.",
  },
  {
    id: 5,
    name: "Currency Converter",
    technologies: ["React", "ExchangeRate API"],
    image: currconv,
    github: "https://currencyconvert11.netlify.app/",
    description:
      "A currency conversion tool that provides real-time exchange rates, ensuring accurate conversions for multiple currencies worldwide.",
  },
];

const Projects = () => {
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

  return (
    <section 
      className={`w-full py-24 px-6 ${isDark ? "bg-black" : "bg-white"}`} 
      id="project"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>
            Portfolio
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            My Projects
          </motion.h2>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-800 border-gray-200"
              }`}
            >
   <div className="w-full h-52 aspect-[16/10] flex justify-center items-center bg-white rounded-lg overflow-hidden mb-6">
  <img
    src={project.image}
    alt={project.name}
    className="w-full h-full object-cover"
  />
</div>

              <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-800"}`}>
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      isDark 
                        ? "bg-gray-700 text-pink-400" 
                        : "bg-gray-200 text-blue-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-center py-3 rounded-lg font-medium ${
                  isDark
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                } text-white transition-all`}
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;