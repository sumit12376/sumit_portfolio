import React from "react";
import AboutImage from "../assets/hero-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20"  id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed">
            I have a strong foundation in frontend development, with deep expertise in HTML, CSS, React, and JavaScript. My focus is on crafting modern and responsive web applications that not only meet but exceed user expectations. I thrive on turning complex problems into simple, intuitive, and engaging solutions, always keeping performance and accessibility at the forefront of my work. In addition to my frontend skills, I am expanding my expertise into backend development, with a focus on Node.js, Express, and MongoDB, continually enhancing my skill set to become a well-rounded developer.
            </p>
            <div className="space-y-4">
              <SkillBar label="HTML & CSS" width="w-11/12" percentage="90%" />
              <SkillBar label="JavaScript" width="w-9/12" percentage="75%" />
              <SkillBar label="React JS" width="w-10/12" percentage="85%" />
              <SkillBar label="Express JS" width="w-9/12" percentage="75%" />
              <SkillBar label="Node JS" width="w-9/12" percentage="75%" />
              <SkillBar label="Mongo DB" width="w-8/12" percentage="70%" />
              <SkillBar label="Tailwind CSS" width="w-9/12" percentage="80%" />
              <SkillBar label="Java" width="w-9/12" percentage="75%" />
              <SkillBar label="SQL" width="w-10/12" percentage="80%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, width, percentage }) => (
  <div className="flex items-center">
    <label className="w-1/3 text-right pr-4">{label}</label>
    <div className="flex-1 bg-gray-800 rounded-full h-2.5 relative">
      <div
        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${width} relative`}
      >
        <span className="absolute right-2 -top-6 text-sm font-semibold text-white">
          {percentage}
        </span>
      </div>
    </div>
  </div>
);

export default About;
