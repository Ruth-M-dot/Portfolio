import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaLinkedin, FaGithub, FaFilePdf, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  // Floating shapes for background
  const shapes = [
    { id: 1, top: "10%", left: "5%", size: "w-16 h-16", color: "bg-blue-500/20" },
    { id: 2, top: "70%", left: "80%", size: "w-24 h-24", color: "bg-purple-500/20" },
    { id: 3, top: "30%", left: "85%", size: "w-12 h-12", color: "bg-indigo-500/20" },
    { id: 4, top: "85%", left: "15%", size: "w-20 h-20", color: "bg-blue-500/20" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ec5y0ts",
        "template_7hksf65",
        form.current,
        {
          publicKey: "Y-hkeCmmRiuid1AiS",
        }
      );

      setStatus({ 
        message: "Message sent successfully! I'll get back to you soon.", 
        type: "success" 
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ 
        message: "Error sending message. Please try again later.", 
        type: "error" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Floating background shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.size} ${shape.color} blur-xl`}
          style={{ top: shape.top, left: shape.left }}
          animate={floatingAnimation}
        />
      ))}

      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-blue-500/10 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 blur-3xl"
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
          scale: isHoveringButton ? 1.5 : 1,
          opacity: isHoveringButton ? 0.3 : 0.1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Let's Connect
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-75"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 backdrop-blur-sm bg-white/70">
              <form onSubmit={handleSubmit} ref={form}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <div 
                    className={`relative border-b-2 ${activeField === 'name' ? 'border-blue-500' : 'border-gray-300'} transition-colors duration-300`}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent focus:outline-none placeholder-gray-400"
                      placeholder="What should I call you?"
                    />
                    {activeField === 'name' && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div 
                    className={`relative border-b-2 ${activeField === 'email' ? 'border-blue-500' : 'border-gray-300'} transition-colors duration-300`}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-transparent focus:outline-none placeholder-gray-400"
                      placeholder="Where can I reach you?"
                    />
                    {activeField === 'email' && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <div 
                    className={`relative border-b-2 ${activeField === 'message' ? 'border-blue-500' : 'border-gray-300'} transition-colors duration-300`}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-transparent focus:outline-none resize-none placeholder-gray-400"
                      placeholder="What would you like to discuss?"
                    ></textarea>
                    {activeField === 'message' && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHoveringButton(true)}
                  onMouseLeave={() => setIsHoveringButton(false)}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-white font-medium text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={isHoveringButton ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <FaPaperPlane className="text-white" />
                      </motion.div>
                      Send Message
                    </>
                  )}
                </motion.button>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl shadow-xl text-white h-full backdrop-blur-sm bg-gradient-to-br from-blue-600/90 to-purple-700/90">
              <h3 className="text-3xl font-bold mb-8 relative pb-4">
                Contact Details
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-white"></span>
              </h3>
              
              <div className="space-y-8">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mt-1 text-blue-200">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-blue-100">Garissa, Kenya</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mt-1 text-blue-200">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a 
                      href="mailto:stephenruth106@gmail.com" 
                      className="text-blue-100 hover:text-white transition-colors"
                      data-tooltip-id="email-tooltip"
                      data-tooltip-content="Click to email me"
                    >
                      stephenruth106@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mt-1 text-blue-200">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a 
                      href="tel:+254798597545" 
                      className="text-blue-100 hover:text-white transition-colors"
                      data-tooltip-id="phone-tooltip"
                      data-tooltip-content="Click to call me"
                    >
                      +254798597545
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-blue-400/50">
                <h4 className="text-xl font-semibold mb-6">Find Me Online</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/ruth-stephen-rue/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    data-tooltip-id="linkedin-tooltip"
                    data-tooltip-content="Visit my LinkedIn"
                  >
                    <FaLinkedin size={22} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Ruth-M-dot"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 text-white p-4 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content="Visit my GitHub"
                  >
                    <FaGithub size={22} />
                  </motion.a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-400/50">
                <motion.a
                  href="/Ruth Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 text-white hover:text-blue-100 transition-colors px-4 py-3 rounded-lg hover:bg-white/10"
                  data-tooltip-id="resume-tooltip"
                  data-tooltip-content="Download my resume"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                  >
                    <FaFilePdf size={20} />
                  </motion.div>
                  <span>Download My Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tooltips */}
      <Tooltip id="email-tooltip" />
      <Tooltip id="phone-tooltip" />
      <Tooltip id="linkedin-tooltip" />
      <Tooltip id="github-tooltip" />
      <Tooltip id="resume-tooltip" />
    </section>
  );
};

export default Contact;