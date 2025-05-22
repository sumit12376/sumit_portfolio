import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useTheme } from '../ThemeContext';

const Contact = () => {
  const { isDark = false } = useTheme?.() || {};
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
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className={`text-sm uppercase tracking-wider mb-2 ${isDark ? "text-pink-500" : "text-blue-600"}`}>
            Let's Connect
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Get in Touch
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={item}
            className="mb-12 max-w-2xl text-center"
          >
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              I'd love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to drop a message. Let's create something amazing together!
            </p>
            <p className={`font-semibold ${isDark ? "text-pink-400" : "text-blue-600"}`}>
              <FaEnvelope className="inline-block mr-2" /> Reach me directly via the form below.
            </p>
          </motion.div>
          <motion.form 
            variants={item}
            ref={form} 
            onSubmit={sendEmail} 
            className="w-full max-w-2xl space-y-6"
          >
            <motion.div variants={item} className="w-full">
              <label htmlFor="name" className={`block text-lg font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Your Name
              </label>
              <input 
                type="text" 
                name="user_name"
                className={`w-full p-4 rounded-xl border ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-800 border-gray-300"} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-pink-500" : "focus:ring-blue-500"}`}
                placeholder="Enter Your Name"
                required
              />
            </motion.div>

            <motion.div variants={item} className="w-full">
              <label htmlFor="email" className={`block text-lg font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Email
              </label>
              <input 
                type="email" 
                name="user_email"
                className={`w-full p-4 rounded-xl border ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-800 border-gray-300"} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-pink-500" : "focus:ring-blue-500"}`}
                placeholder="Enter Your Email"
                required
              />
            </motion.div>

            <motion.div variants={item} className="w-full">
              <label htmlFor="message" className={`block text-lg font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Message
              </label>
              <textarea 
                name="message"
                className={`w-full p-4 rounded-xl border ${isDark ? "bg-gray-900 text-white border-gray-700" : "bg-gray-100 text-gray-800 border-gray-300"} focus:outline-none focus:ring-2 ${isDark ? "focus:ring-pink-500" : "focus:ring-blue-500"}`}
                rows="5"
                placeholder="Enter Your Message"
                required
              />
            </motion.div>

            <motion.div 
              variants={item}
              className="flex justify-center"
            >
              <button 
                type="submit"
                className={`px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 ${
                  isDark
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white focus:ring-pink-300"
                    : "bg-gradient-to-r from-blue-500 to-green-500 text-white focus:ring-blue-300"
                }`}
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;