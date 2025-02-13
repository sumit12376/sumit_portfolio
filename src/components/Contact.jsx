import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useTheme } from '../ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l3upcg3', 'template_2cw0bp8', form.current, 'SvEmXMlxFGAqdIMNF')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again later.");
      });

    e.target.reset(); 
  };

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"} py-20`} id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-12 ${isDark ? "text-gray-200" : "text-black"}`}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="mb-8 max-w-2xl text-center">
            <p className="mb-4 text-lg leading-relaxed">
              I’d love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to drop a message. Let’s create something amazing together!
            </p>
            <p className="text-green-400 font-semibold">
              <FaEnvelope className="inline-block mr-2" /> Reach me directly via the form below.
            </p>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  className={`w-full p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-200 border-gray-700" : "bg-gray-100 text-black border-gray-400"} focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  className={`w-full p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-200 border-gray-700" : "bg-gray-100 text-black border-gray-400"} focus:outline-none focus:border-green-400`}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  className={`w-full p-3 rounded-lg ${isDark ? "bg-gray-800 text-gray-200 border-gray-700" : "bg-gray-100 text-black border-gray-400"} focus:outline-none focus:border-green-400`}
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-semibold transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-lg shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
