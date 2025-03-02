import React from "react";
import { motion } from "framer-motion";
import blog from "../assets/blogging website.png";
import cryptotrack from "../assets/cryptotracker.png";
import currconv from "../assets/currency-convertor.png";
import book from "../assets/book2.jpg";
import { useTheme } from "../ThemeContext";
import logo from "../assets/logo.png";

const projects = [
  {
    id: 1,
    name: "Elitemart",
    technologies: "MERN",
    image: logo,
    github: "https://elitemart-frontend.vercel.app/",
  },
  {
    id: 2,
    name: "Books-A-Million",
    technologies: "MERN",
    image: book,
    github: "https://books-a-million.netlify.app/",
  },
  {
    id: 3,
    name: "Blog Website",
    technologies: "React + Appwrite",
    image: blog,
    github: "https://blogwebsite-sumit-vikram-singhs-projects.vercel.app/",
  },
  {
    id: 4,
    name: "CryptoTracker",
    technologies: "React",
    image: cryptotrack,
    github: "https://cryptotrackerr11.netlify.app/",
  },
  {
    id: 5,
    name: "Currency Convertor",
    technologies: "React",
    image: currconv,
    github: "https://currencyconvert11.netlify.app/",
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
              <div className="w-full h-48 flex justify-center items-center bg-white rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-2">{project.name}</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>
                {project.technologies}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              >
                Live
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
