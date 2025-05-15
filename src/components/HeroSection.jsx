import React, { useState, useEffect } from "react";
import HomeImage from "../assets/images/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaCode, FaShieldAlt, FaBrain } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiAward, FiUsers } from "react-icons/fi";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Ruth-M-dot", name: "GitHub", color: "from-purple-600 to-pink-500" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ruth-stephen-rue/", name: "LinkedIn", color: "from-blue-600 to-cyan-400" },
    { icon: <FaTwitter />, url: "https://twitter.com/ruthmutanu", name: "Twitter", color: "from-sky-500 to-blue-400" },
    { icon: <HiOutlineMail />, url: "mailto:stephenruth106@gmail.com", name: "Email", color: "from-amber-500 to-pink-500" },
  ];

  const skills = [
    { icon: <FaCode className="text-2xl" />, title: "Full Stack Dev", color: "bg-indigo-100 text-indigo-600" },
    { icon: <FaBrain className="text-2xl" />, title: "AI Specialist", color: "bg-emerald-100 text-emerald-600" },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Cloud Security", color: "bg-amber-100 text-amber-600" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className={`bg-gradient-to-br from-[#f9f9ff] via-[#f0f4ff] to-[#e8f0ff] py-16 md:py-28 transition-all duration-300 ${scrolled ? "pt-24" : ""}`} id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Section */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
  <span className="block text-lg md:text-xl font-normal text-gray-600 mb-2">
    Hi, I am
  </span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Ruth </span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Mutanu</span>
</h1>
              
              <div className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 h-10">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Machine Learning Engineer",
                      "Cloud Security Specialist",
                      "AI Solutions Architect"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-gray-700 mb-8 text-justify leading-relaxed text-lg">
              I blend <span className="font-semibold text-purple-600">technology</span> with <span className="font-semibold text-cyan-600">human-centric design</span> to create impactful solutions. Passionate about ethical AI, secure cloud architectures, and building tools that empower communities through innovation.
            </motion.p>
            
            {/* Skills Tags */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className={`${skill.color} px-4 py-2 rounded-full flex items-center gap-2 shadow-sm`}>
                  {skill.icon}
                  <span>{skill.title}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-center">
              <motion.a
                href="https://drive.google.com/file/d/1PryqvsFfkXZ2_2D3LjV7SOPMLynrVVDM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 group"
                title="Download Ruth Mutanu's Resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </motion.a>
              
              <div className="flex space-x-4 mt-2 sm:mt-0">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl bg-gradient-to-br ${link.color} text-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all`}
                    title={link.name}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Gradient background shape */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-3xl rotate-6 -z-10"
                animate={{ rotate: [6, 3, 6] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              
              {/* Secondary shape */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl rotate-3 -z-10"
                animate={{ rotate: [3, 6, 3] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              ></motion.div>
              
              {/* Main image */}
              <motion.img
                src={HomeImage}
                alt="Ruth Mutanu - Full Stack Developer"
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white relative z-10"
                title="Ruth Mutanu"
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FiAward className="text-xl" />
                <span className="font-bold">4+ Years</span>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <FiUsers className="text-xl" />
                <span className="font-bold">20+ Projects</span>
              </motion.div>
              
              {/* Floating tech bubbles */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-3 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                  React.js
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -left-8 bg-white p-3 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
                  TensorFlow
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;