import React from "react";
import AboutImage from "../assets/hero-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 ">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed">
              I am a passionate frontend developer with a deep expertise in HTML, CSS, React, and JavaScript. My focus is on crafting modern and responsive web applications that not only meet but exceed user expectations. I thrive on turning complex problems into simple, intuitive, and engaging solutions, always keeping performance and accessibility at the forefront of my work. Whether it's creating dynamic user interfaces or ensuring seamless user experiences, I am dedicated to delivering high-quality results and continuously improving my skills to stay ahead of the latest industry trends.
            </p>
            <div className="space-y-4">
              <SkillBar label="HTML & CSS" width="w-11/12" />
              <SkillBar label="JavaScript" width="w-9/12" />
              <SkillBar label="React JS" width="w-10/12" />
              <SkillBar label="Tailwind CSS" width="w-9/12" />
              <SkillBar label="Java" width="w-9/12" />
              <SkillBar label="SQL" width="w-10/12" />
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ label, width }) => (
  <div className="flex items-center">
    <label className="w-1/3 text-right pr-4">{label}</label>
    <div className="flex-1 bg-gray-800 rounded-full h-2.5">
      <div
        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 ${width}`}
      ></div>
    </div>
  </div>
);


export default About;
