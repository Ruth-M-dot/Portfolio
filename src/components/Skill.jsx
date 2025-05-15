import React, { useState } from "react";
import { FiExternalLink, FiArrowRight, FiCalendar, FiBookOpen } from "react-icons/fi";
import { motion } from "framer-motion";

// Import your images
import ecobin from "../assets/images/projects/ecobin.png";
import gbvAppImg from "../assets/images/projects/gbvApp.png";
import blindAssistImg from "../assets/images/projects/blindAssist.jpg";
import finalYearImg from "../assets/images/projects/final.png";

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "How I Built an AI-Powered Smart Waste System",
    date: "April 20, 2025",
    excerpt: "In this post, I break down the thought process and tech stack behind EcoBin — a smart waste disposal system that rewards users with WiFi access...",
    link: "https://kisiiuniversity.ac.ke/blog/mozilla-sponsored-responsible-computing-innovation-day",
    image: ecobin,
    featured: true,
    tags: ["AI", "IoT", "Sustainability"]
  },
  {
    id: 2,
    title: "Lessons from Building a GBV Alert App with SOS and AI Integration",
    date: "March 10, 2025",
    excerpt: "This app was one of the most emotionally driven projects I've worked on. Here's what I learned about user empathy, rapid alerts, and geolocation APIs...",
    link: "#",
    image: gbvAppImg,
    tags: ["Mobile", "Security", "AI"]
  },
  {
    id: 3,
    title: "What I Learned from Working with Edge AI for the Visually Impaired",
    date: "February 8, 2025",
    excerpt: "Developing an offline CV tool for blind users taught me how to optimize ML models for low-latency environments. Here's how I did it...",
    link: "#",
    image: blindAssistImg,
    tags: ["Edge AI", "Accessibility", "ML"]
  },
  {
    id: 4,
    title: "Behind the Scenes of My Final Year Project Showcase",
    date: "January 25, 2025",
    excerpt: "From ideation to implementation, I share how I prepared a compelling presentation and tech demo for my final year showcase...",
    link: "#",
    image: finalYearImg,
    tags: ["Showcase", "Presentation", "Demo"]
  },
];

// Project Highlights
const projectHighlights = [
  {
    id: "eco",
    title: "EcoBin: AI Smart Waste System",
    description: "An IoT-powered system that uses sensors, AI, and a WiFi reward model to promote responsible waste disposal. Built for Mozilla's Responsible Computing Day.",
    image: ecobin,
    link: "https://kisiiuniversity.ac.ke/blog/mozilla-sponsored-responsible-computing-innovation-day",
    category: "AI & IoT"
  },
  {
    id: "gbv",
    title: "Gender-Based Violence Alert App",
    description: "A mobile app with SOS buttons, real-time location tracking, and AI to protect at-risk users. Focused on emergencies and safety alerts.",
    image: gbvAppImg,
    link: "#",
    category: "Mobile Security"
  },
  {
    id: "ai-blind",
    title: "Edge AI for the Visually Impaired",
    description: "Offline computer vision tool that audibly describes surroundings for blind users. Lightweight, fast, and efficient on edge devices.",
    image: blindAssistImg,
    link: "#",
    category: "Accessibility Tech"
  },
  {
    id: "showcase",
    title: "Final Year Showcase Presentation",
    description: "Highlights from my final year project: preparing a technical pitch, building a live demo, and presenting to judges and sponsors.",
    image: finalYearImg,
    link: "#",
    category: "Academic"
  },
];

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", ...new Set(projectHighlights.map(project => project.category))];
  
  const filteredProjects = activeFilter === "All" 
    ? projectHighlights 
    : projectHighlights.filter(project => project.category === activeFilter);

  return (
    <>
      {/* Insights Section
      <section id="insights" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Insights & Blog
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing my journey, lessons learned, and technical deep dives from my projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  post.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/80 text-xs font-medium rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
                  <div className="flex items-center text-white/80 text-sm mb-3">
                    <FiCalendar className="mr-2" />
                    {post.date}
                  </div>
                  <p className="text-white/90 mb-4 line-clamp-2">{post.excerpt}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors"
                  >
                    {post.featured ? "Read the Mozilla Event Blog" : "Read More"}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Highlights Section */}
      <section id="insights" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Project Highlights
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my most impactful projects and their key features.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                  >
                    View Project
                    <FiExternalLink className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;