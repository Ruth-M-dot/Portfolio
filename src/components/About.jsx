import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaPython, 
  FaAws, 
  FaChess, 
  FaVolleyballBall,
  FaCode,
  FaServer,
  FaBrain
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTensorflow, 
  SiDocker, 
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { 
  GiArtificialIntelligence,
  GiCrystalBall,
  GiSpiderWeb,
  GiGraduateCap
} from "react-icons/gi";
import { MdSecurity, MdSchool } from "react-icons/md";
import AboutImage from "../assets/images/me.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "My Skills" },
    { id: "education", label: "Education" },
    { id: "interests", label: "Passions" }
  ];

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90, category: "frontend" },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 85, category: "frontend" },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95, category: "frontend" },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90, category: "frontend" },
    { name: "Python", icon: <FaPython className="text-blue-600" />, level: 80, category: "backend" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 85, category: "backend" },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" />, level: 75, category: "ai" },
    { name: "AWS", icon: <FaAws className="text-yellow-600" />, level: 70, category: "cloud" },
    { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: 75, category: "devops" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" />, level: 65, category: "devops" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 80, category: "database" },
    { name: "AI/ML", icon: <GiArtificialIntelligence className="text-purple-500" />, level: 80, category: "ai" },
  ];

  const education = [
    { 
      degree: "BSc Computer Science", 
      institution: "Kisii University", 
      year: "2019-2023",
      icon: <GiGraduateCap className="text-indigo-500" />,
      highlights: [
        "Specialized in Machine Learning",
        "Final Year Project: Smart Waste Management System",
        "Chess Club Captain"
      ]
    },
    { 
      degree: "Certifications", 
      institution: "Online Platforms", 
      year: "2020-Present",
      icon: <MdSchool className="text-blue-500" />,
      highlights: [
        "Machine Learning with Python (Coursera)",
        "AWS Cloud Practitioner",
        "Ethical AI Principles"
      ]
    }
  ];

  const interests = [
    { name: "Chess", icon: <FaChess className="text-amber-700" />, color: "from-amber-100 to-amber-50" },
    { name: "Volleyball", icon: <FaVolleyballBall className="text-orange-500" />, color: "from-orange-100 to-orange-50" },
    { name: "AI Research", icon: <FaBrain className="text-purple-500" />, color: "from-purple-100 to-purple-50" },
    { name: "Cloud Security", icon: <MdSecurity className="text-blue-500" />, color: "from-blue-100 to-blue-50" },
  ];

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "ai", name: "AI/ML" },
    { id: "cloud", name: "Cloud" },
    { id: "devops", name: "DevOps" },
    { id: "database", name: "Database" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
            About Me
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={AboutImage}
                  alt="Ruth Mutanu - Full Stack Developer"
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-3 rounded-full">
                  <FaCode className="text-xl" />
                </div>
              </div>
              <div className="absolute -top-5 -left-5 bg-white p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-r from-secondary to-blue-500 text-white p-3 rounded-full">
                  <FaServer className="text-xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 px-6 pt-6 pb-2 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-medium relative transition-all ${
                    activeTab === tab.id 
                      ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md"
                      : "text-gray-600 hover:text-primary hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px] p-6">
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-primary">Hello there!</span> I'm <strong className="text-primary">Ruth Mutanu</strong>, a passionate <strong>Full Stack Developer</strong> and <strong>Machine Learning Enthusiast</strong> dedicated to creating technology solutions that make a real difference.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700 leading-relaxed">
                      My journey in tech began with a curiosity about how things work, which evolved into a love for building web applications using the <strong>MERN stack</strong>. I specialize in creating seamless user experiences while ensuring robust backend functionality.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    At <strong>Garissa Law Courts</strong>, I volunteered to develop systems that improved case management efficiency, reinforcing my belief in <strong>technology for social good</strong>.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border-l-4 border-secondary">
                    <p className="text-gray-700 leading-relaxed">
                      What excites me most is the intersection of <strong>AI</strong> and <strong>cloud security</strong>. I'm constantly exploring how we can build intelligent systems that are not just powerful, but also <strong>ethical</strong> and <strong>secure</strong>.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skillCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSkills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{skill.icon}</div>
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="ml-auto text-sm font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-primary to-purple-600 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {education.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl mt-1">{item.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                          <p className="text-gray-600 font-medium">{item.institution} • {item.year}</p>
                          <ul className="mt-3 space-y-2">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${interest.color} p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-4`}
                    >
                      <div className="text-3xl">{interest.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-800">{interest.name}</h3>
                        {interest.name === "Chess" && (
                          <p className="text-sm text-gray-600 mt-1">Former Chess Club Captain at Kisii University</p>
                        )}
                        {interest.name === "Volleyball" && (
                          <p className="text-sm text-gray-600 mt-1">Team player both on the court and in development</p>
                        )}
                        {interest.name === "AI Research" && (
                          <p className="text-sm text-gray-600 mt-1">Passionate about ethical AI development</p>
                        )}
                        {interest.name === "Cloud Security" && (
                          <p className="text-sm text-gray-600 mt-1">Focused on building secure cloud architectures</p>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;