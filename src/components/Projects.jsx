import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiCode,
  FiLayers,
  FiMap,
  FiPhone,
} from "react-icons/fi";
import { TbBrandFramerMotion, TbBrandReact } from "react-icons/tb";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiFirebase,
} from "react-icons/si";
import { IoMdNutrition } from "react-icons/io";
import { MdComputer } from "react-icons/md";

// Import your local images
import ecobin from "../assets/images/projects/ecobin.png";
import gbvApp from "../assets/images/projects/gbvApp.png";
import rueTech from "../assets/images/projects/rueTech.jpg";
import moodieFoodie from "../assets/images/projects/moodieFoodie.jpg";
import spamClassifier from "../assets/images/projects/spamClassifier.jpg";
import blindAssist from "../assets/images/projects/blindAssist.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects", icon: <FiLayers /> },
    { id: "web", name: "Web Apps", icon: <TbBrandReact /> },
    { id: "mobile", name: "Mobile", icon: <FiLayers /> },
    { id: "design", name: "UI/UX", icon: <TbBrandFramerMotion /> },
    { id: "fullstack", name: "Full Stack", icon: <FiCode /> },
  ];

  const techIcons = {
    react: <TbBrandReact className="text-blue-500" />,
    nextjs: <SiNextdotjs className="text-black dark:text-white" />,
    tailwind: <SiTailwindcss className="text-cyan-500" />,
    framer: <TbBrandFramerMotion className="text-purple-500" />,
    "node.js": <SiNodedotjs className="text-green-500" />,
    mongodb: <SiMongodb className="text-green-600" />,
    arduino: <MdComputer className="text-blue-600" />,
    iot: <MdComputer className="text-blue-400" />,
    "react native": <TbBrandReact className="text-blue-400" />,
    firebase: <SiFirebase className="text-yellow-500" />,
    maps: <FiMap className="text-red-500" />,
    twilio: <FiPhone className="text-blue-500" />,
    ml: <IoMdNutrition className="text-purple-500" />,
    python: <SiPython className="text-blue-500" />,
    cv: <MdComputer className="text-green-500" />,
    "edge ai": <MdComputer className="text-purple-500" />,
    tensorflow: <SiTensorflow className="text-orange-500" />,
  };

  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        title: "EcoBin Smart Waste System",
        description:
          "An AI and IoT-based system that rewards users for proper waste disposal with WiFi access, featuring a dashboard, motion sensors, and machine learning.",
        category: "fullstack",
        tags: ["react", "node.js", "mongodb", "arduino", "iot"],
        github: "https://github.com/Ruth-M-dot/ecobin",
        live: "https://ecobin-demo.com",
        image: ecobin,
        accentColor: "bg-gradient-to-r from-green-400 to-blue-500",
      },
      {
        id: 2,
        title: "GBV Emergency Response App",
        description:
          "A gender-based violence alert system that sends real-time SOS messages with location, integrated with AI for risk assessment and reporting.",
        category: "mobile",
        tags: ["react native", "firebase", "maps", "twilio"],
        github: "https://github.com/Ruth-M-dot/gbv-app",
        live: "https://gbv-app-demo.com",
        image: gbvApp,
        accentColor: "bg-gradient-to-r from-pink-500 to-red-500",
      },
      {
        id: 3,
        title: "Rue Technologies Website",
        description:
          "A full-stack company website for a tech firm specializing in AI and developer training, with job board and talent showcase.",
        category: "fullstack",
        tags: ["nextjs", "tailwind", "mongodb"],
        github: "https://github.com/Ruth-M-dot/rue-tech",
        live: "https://rue-technologies.com",
        image: rueTech,
        accentColor: "bg-gradient-to-r from-purple-600 to-pink-500",
      },
      {
        id: 4,
        title: "MoodieFoodie Fitness Recommender",
        description:
          "A personalized food suggestion system for gym-goers based on their fitness goals, allergies, and conditions like diabetes.",
        category: "design",
        tags: ["react", "ml", "firebase"],
        github: "https://github.com/Ruth-M-dot/moodie-foodie",
        live: "https://moodie-foodie-demo.com",
        image: moodieFoodie,
        accentColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      },
      {
        id: 5,
        title: "SMS Spam Classifier",
        description:
          "Machine learning model to detect and classify spam messages using the SMS Spam Collection dataset.",
        category: "web",
        tags: ["python", "ml", "react"],
        github: "https://github.com/Ruth-M-dot/spam-classifier",
        live: "https://spam-classifier-demo.com",
        image: spamClassifier,
        accentColor: "bg-gradient-to-r from-gray-600 to-gray-800",
      },
      {
        id: 6,
        title: "Blind Assist Vision System",
        description:
          "Edge AI-powered computer vision tool that helps visually impaired users interpret their environment using image-to-speech.",
        category: "web",
        tags: ["cv", "edge ai", "python", "tensorflow"],
        github: "https://github.com/Ruth-M-dot/blind-assist",
        live: "https://blind-assist-demo.com",
        image: blindAssist,
        accentColor: "bg-gradient-to-r from-indigo-500 to-purple-600",
      },
    ];

    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects);
  }, []);

  useEffect(() => {
    let filtered = [...projects];
    if (activeFilter !== "all") {
      filtered = filtered.filter((project) => project.category === activeFilter);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery, projects]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Creative Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills, creativity, and passion for development
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg"
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`h-2 ${project.accentColor}`}></div>
                  <div className="p-6">
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
                        }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300"
                      >
                        {project.live && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-gray-800 rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                          >
                            <FiExternalLink size={20} />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            <FiGithub size={20} />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          {techIcons[tag.toLowerCase()]} <span className="capitalize">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
