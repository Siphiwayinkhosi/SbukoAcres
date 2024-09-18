import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ["Strategic", "Thinking", "Creative", "Doing"];
const services = [
  "Brand Strategy",
  "Creative Strategy",
  "Brand Management",
  "Advertising",
  "Stakeholder Relations",
  "Publications",
  "CSR Alignment",
  "Event Ideation",
  "Content Creation",
  "Customer Experience Strategy",
  "Reputation Management"
];

const Home = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showZoomCircle, setShowZoomCircle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowZoomCircle(true);
  };

  const handleMouseLeave = () => {
    setShowZoomCircle(false);
  };

  return (
    <div
      className="overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full absolute"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: window.innerHeight }}
            transition={{ duration: 4, ease: "linear" }}
          />
        ))}
      </div>

      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden">
        <motion.h1
          className="text-white text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-orange-500">Sbuko Acres</span>
        </motion.h1>

        <motion.h2
          className="text-orange-500 text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
        >
          A Full Service African Agency
        </motion.h2>

        <motion.p
          className="text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {words[currentWord]}
        </motion.p>

        <motion.a
          href="#contact"
          className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 mt-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Let's create epic
        </motion.a>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
        >
          <path
            className="draw"
            d="M10,10 Q30,30 50,10 T90,10"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </section>

      {/* right Section - Our African Currency */}
      <motion.div
        className="absolute right-0 top-0 h-full p-8 bg-gray-800 text-white flex flex-col justify-center"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h3 className="text-orange-500 text-3xl font-semibold mb-4">
          Our African Currency
        </h3>
        <ul className="text-lg space-y-2">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ y: 50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* left Section - Image with Animation */}
      <motion.div
        className="absolute left-0 top-60 h-full p-0 flex items-center justify-center"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.img
          src="/Sbuko images/b.png" // Replace this with your image path
          alt="Right Section Image"
          className="w-112 h-112 object-cover rounded-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </motion.div>

      {showZoomCircle && (
        <motion.div
          className="absolute rounded-full border-4 border-white overflow-hidden pointer-events-none"
          style={{
            width: 200,
            height: 200,
            top: mousePosition.y - 100,
            left: mousePosition.x - 100,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="/Sbuko images/w.png" // Replace this with your image path
            alt="Zoom Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
