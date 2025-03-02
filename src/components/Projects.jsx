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
  const { isDark } = useTheme();
  return (
    <section
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } py-20`}
      id="project"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <div className="w-full h-64 flex justify-center items-center bg-white rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">{project.name}</h3>

              {/* Styled Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p
                className={`mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
              >
                Live Demo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
