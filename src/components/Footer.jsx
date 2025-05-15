import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaHeart, FaRegHeart, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(124); // Starting with a base number
  const [currentYear] = useState(new Date().getFullYear());

  // Check scroll position for back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Like button handler with animation
  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
    } else {
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
    }
  };

  // Social media links data
  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/Ruth-M-dot",
      color: "hover:text-purple-400",
      tooltip: "Visit my GitHub"
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/ruth-stephen-rue/",
      color: "hover:text-blue-400",
      tooltip: "Connect on LinkedIn"
    },
    {
      id: "instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/rue_babey/?next=%2Fsaam_sheron%2F",
      color: "hover:text-pink-400",
      tooltip: "Follow on Instagram"
    }
  ];

  // Floating bubbles for decoration
  const bubbles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 overflow-hidden">
      {/* Decorative floating bubbles */}
      {bubbles.map(bubble => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-${bubble.size}px`
          }}
          animate={{
            y: [-100, window.innerHeight],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Social Media Links with animations */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map(link => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-300 ${link.color}`}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-tooltip-id={`footer-tooltip-${link.id}`}
              data-tooltip-content={link.tooltip}
            >
              {link.icon}
              <Tooltip id={`footer-tooltip-${link.id}`} />
            </motion.a>
          ))}
        </div>

        {/* Like button with counter */}
        <motion.div 
          className="flex items-center justify-center mb-6 cursor-pointer"
          onClick={handleLike}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isLiked ? (
              <FaHeart className="text-2xl text-pink-500 mr-2" />
            ) : (
              <FaRegHeart className="text-2xl text-white/70 hover:text-pink-400 mr-2" />
            )}
          </motion.div>
          <span className="text-white/80">{likeCount}</span>
        </motion.div>

        {/* Copyright and credits */}
        <div className="mb-6">
          <p className="text-lg mb-2">
            &copy; {currentYear} Ruth Mutanu. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            Designed & Developed with ❤️ by{" "}
            <motion.a
              href="https://www.linkedin.com/in/ruth-stephen-rue/"
              className="hover:text-cyan-300 underline underline-offset-4 transition-colors"
              whileHover={{ scale: 1.05 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ruth Mutanu
            </motion.a>
          </p>
        </div>

        {/* Additional links */}
        <div className="flex justify-center space-x-6 text-sm">
          <motion.a
            href="#"
            className="hover:text-amber-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-amber-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Terms of Service
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-amber-300 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Back to top button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-cyan-400 to-blue-600 text-white p-3 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          data-tooltip-id="back-to-top"
          data-tooltip-content="Back to top"
        >
          <FaArrowUp />
          <Tooltip id="back-to-top" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;