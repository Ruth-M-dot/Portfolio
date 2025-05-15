import React, { useState } from "react";
import AboutImage from "../assets/images/me.jpg";
import { 
  FaDev, FaGithub, FaInstagram, FaLinkedin, 
  FaFileDownload, FaCode, FaServer, FaDatabase, 
  FaRobot, FaGraduationCap, FaProjectDiagram 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiFirebase, SiPython, 
  SiJavascript, SiTensorflow, SiFlask 
} from "react-icons/si";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Color themes for each section
  const tabThemes = {
    skills: {
      bg: "from-indigo-500 to-purple-600",
      text: "text-indigo-100",
      border: "border-purple-400",
      icon: <FaCode className="text-purple-300" />
    },
    education: {
      bg: "from-teal-500 to-emerald-600",
      text: "text-teal-100",
      border: "border-emerald-400",
      icon: <FaGraduationCap className="text-emerald-300" />
    },
    projects: {
      bg: "from-orange-500 to-pink-600",
      text: "text-orange-100",
      border: "border-pink-400",
      icon: <FaProjectDiagram className="text-pink-300" />
    }
  };

  const skills = [
    { name: "ReactJS", level: 90, icon: <FaCode className="text-blue-400" />, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
    { name: "Node.js", level: 85, icon: <FaServer className="text-green-400" />, color: "bg-gradient-to-r from-green-500 to-teal-600" },
    { name: "MongoDB", level: 80, icon: <FaDatabase className="text-emerald-400" />, color: "bg-gradient-to-r from-emerald-500 to-green-600" },
    { name: "Express.js", level: 75, icon: <FaServer className="text-gray-400" />, color: "bg-gradient-to-r from-gray-500 to-gray-700" },
    { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-400" />, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
    { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-400" />, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-300" />, color: "bg-gradient-to-r from-yellow-400 to-amber-500" },
    { name: "Python", level: 75, icon: <SiPython className="text-blue-400" />, color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
    { name: "Machine Learning", level: 65, icon: <FaRobot className="text-purple-400" />, color: "bg-gradient-to-r from-purple-500 to-fuchsia-600" }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kisii University",
      period: "2021 - 2025",
      description: "Specialized in Software Development and Artificial Intelligence",
      icon: <FaGraduationCap className="text-teal-400 text-2xl" />
    }
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: "📜"
    },
    {
      title: "Machine Learning with Python",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: "🤖"
    },
    {
      title: "AI Career Essentials",
      issuer: "ALX",
      year: "2024",
      icon: "🧠"
    },
    {
      title: "Ethical AI Project Competition",
      issuer: "Mozilla (Special Category)",
      year: "2024",
      icon: "⚖️"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "EcoBin – Smart Waste Management System",
      description: "AI & IoT-based solution for managing waste with sensors, camera, and real-time feedback",
      technologies: ["Python", "TensorFlow", "IoT", "Flask"],
      link: "https://github.com/yourusername/ecobin-smart-waste",
      icons: [
        <SiPython className="text-blue-500" />,
        <SiTensorflow className="text-orange-500" />,
        <FaRobot className="text-purple-500" />,
        <SiFlask className="text-gray-500" />
      ]
    },
    {
      id: 2,
      title: "GBV Reporting App",
      description: "Mobile/web app for SOS alerts and safe reporting of emergencies",
      technologies: ["React", "Node.js", "Firebase", "Twilio API"],
      link: "https://github.com/yourusername/gender-based-violence-app",
      icons: [
        <FaCode className="text-blue-400" />,
        <FaServer className="text-green-500" />,
        <SiFirebase className="text-yellow-500" />,
        <FaRobot className="text-red-500" />
      ]
    },
    {
      id: 3,
      title: "MoodieFoodie – Health-Based Food Recommender",
      description: "AI-driven food suggestion system tailored for gym-goers and dietary conditions",
      technologies: ["Python", "Scikit-learn", "React", "Nutrition API"],
      link: "https://github.com/yourusername/moodiefoodie",
      icons: [
        <SiPython className="text-blue-500" />,
        <FaRobot className="text-purple-500" />,
        <FaCode className="text-blue-400" />,
        <FaDatabase className="text-green-500" />
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ruth-stephen-rue/", color: "bg-[#0077B5] hover:bg-[#006097]" },
    { icon: <FaGithub />, url: "https://github.com/Ruth-M-dot", color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/rue_babey/?next=%2Fsaam_sheron%2", color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:from-[#7229a1] hover:via-[#e11616] hover:to-[#e6a03e]" },
    { icon: <FaDev />, url: "https://dev.to/ruthmutanu", color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800" }
  ];

  const renderContent = () => {
    const theme = tabThemes[activeTab];
    
    switch (activeTab) {
      case "skills":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-r ${theme.bg} p-4 rounded-xl shadow-lg mb-6`}
            >
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                {theme.icon}
                Technical Skills
              </h3>
            </motion.div>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-l-4 border-purple-500"
                >
                  <div className="flex items-center">
                    <div className="mr-4 text-2xl">{skill.icon}</div>
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-800 dark:text-white">{skill.name}</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar 
                        percentage={skill.level} 
                        color={skill.color}
                        height="h-3"
                        animate
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      case "education":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-r ${theme.bg} p-4 rounded-xl shadow-lg mb-6`}
            >
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                {theme.icon}
                Education & Certifications
              </h3>
            </motion.div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-teal-500 relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500 opacity-10 rounded-full"></div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{edu.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <p className="text-lg text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <span className="inline-block mt-1 px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm font-medium rounded-full">
                        {edu.period}
                      </span>
                      <p className="mt-3 text-gray-700 dark:text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mt-10 mb-6 flex items-center gap-2">
                <span className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                  <FaFileDownload className="text-emerald-600 dark:text-emerald-400" />
                </span>
                Certifications
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <h5 className="font-bold text-gray-800 dark:text-white">{cert.title}</h5>
                        <div className="flex justify-between mt-2">
                          <span className="text-sm bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded">
                            {cert.issuer}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case "projects":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-r ${theme.bg} p-4 rounded-xl shadow-lg mb-6`}
            >
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                {theme.icon}
                Featured Projects
              </h3>
            </motion.div>
            
            <div className="grid gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.icons.map((Icon, i) => (
                          <span key={i} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            {Icon}
                          </span>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 transition-colors"
                          >
                            {project.title}
                          </a>
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50 text-sm rounded-full text-orange-800 dark:text-orange-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium group-hover:text-orange-500 transition-colors"
                    >
                      <span className="mr-2 bg-orange-500 text-white p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Professional Portfolio
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Full Stack Developer | Machine Learning Enthusiast | Ethical AI Advocate
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Card */}
          <div className="w-full lg:w-1/3">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sticky top-8 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full opacity-10"></div>
              
              <div className="relative flex flex-col items-center">
                <div className="relative mb-6 group">
                  <img
                    src={AboutImage}
                    alt="Ruth Mutanu"
                    className="rounded-full object-cover w-40 h-40 border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
                    <FaCode className="text-white text-xl" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Ruth Mutanu</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-medium mb-4">
                  Full Stack Developer | ML Enthusiast
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  Building innovative digital solutions with cutting-edge technologies and ethical principles.
                </p>
                
                <a
                  href="mailto:stephenruth106.dev@gmail.com"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium text-center mb-6 hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                >
                  ✉️ Contact Me
                </a>
                
                {/* Navigation Tabs */}
                <div className="w-full border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <span className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </span>
                    Explore My Resume
                  </h4>
                  
                  <div className="space-y-3">
                    {Object.entries(tabThemes).map(([key, theme]) => (
                      <motion.button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        whileHover={{ x: 5 }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                          activeTab === key 
                            ? `bg-gradient-to-r ${theme.bg} text-white shadow-md`
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <span className="capitalize">
                          {key === "skills" && "Skills & Expertise"}
                          {key === "education" && "Education & Certs"}
                          {key === "projects" && "Projects"}
                        </span>
                        {theme.icon}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="w-full border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <span className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </span>
                    Connect With Me
                  </h4>
                  
                  <div className="flex justify-center gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className={`text-white p-3 rounded-full ${social.color} shadow-md hover:shadow-lg transition-all`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 h-full"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;