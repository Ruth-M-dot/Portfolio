import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Projects", to: "insights" },
    { id: 4, name: "Resume", to: "resume" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { id: 1, icon: <FaGithub />, url: "https://github.com/Ruth-M-dot" },
    { id: 2, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ruth-stephen-rue/" },
  ];

  return (
    <nav className={`bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white py-4 fixed w-full z-50 transition-all duration-300 ${scrolled ? "shadow-xl py-3" : "shadow-md"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer flex items-center"
        >
          <Link to="home" smooth={true} offset={-70} duration={500} className="flex items-center">
            <span className="bg-amber-400 text-indigo-700 dark:bg-amber-400 dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center mr-2">
              R
            </span>
            <span className="hidden sm:inline">Rue</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-8 text-center">
            {navItems.map((item) => (
              <motion.li 
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block hover:text-amber-300 dark:hover:text-amber-400 cursor-pointer transition duration-300 px-2 py-1"
                  activeClass="text-amber-300 dark:text-amber-400 font-medium"
                  spy={true}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 ml-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-white hover:text-amber-300 dark:hover:text-amber-400 text-xl transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            ))}

            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-amber-300" /> : <FaMoon />}
            </motion.button>
            
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-amber-300" /> : <FaMoon />}
          </button>

          <motion.button
            className="text-white text-2xl focus:outline-none hover:text-amber-300 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-16 left-0 w-full bg-indigo-700 dark:bg-gray-800 text-white shadow-lg"
            >
              <ul className="flex flex-col text-center">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: item.id * 0.1 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-4 hover:text-amber-300 dark:hover:text-amber-400 cursor-pointer transition duration-300"
                      onClick={() => setIsOpen(false)}
                      activeClass="text-amber-300 dark:text-amber-400 font-medium"
                      spy={true}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center space-x-6 py-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="text-white hover:text-amber-300 dark:hover:text-amber-400 text-xl transition-colors duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    
  );
};

export default Navbar;