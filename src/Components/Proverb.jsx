import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegStar, FaRegChartBar, FaRegLightbulb, FaRegUser } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { GiSpaceSuit } from 'react-icons/gi';
import { ImRocket } from 'react-icons/im';

const Proverb = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2.8, ease: 'easeOut' } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } }
  };

  // Particle effect state
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const particleCount = 200;
    const particlesArray = [];
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 1,
        opacity: Math.random() * 0.6 + 0.4
      });
    }
    setParticles(particlesArray);
  }, []);

  return (
    <section className="relative overflow-hidden bg-orange-600 text-white py-24">
      {/* Background with Stars and Planets */}
      <div className="absolute inset-0 w-full h-full bg-[url('/space-background.jpg')] bg-cover bg-center filter brightness-70">
        <div className="absolute inset-0 w-full h-full bg-[url('/nebula.png')] bg-cover bg-center opacity-40" />
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-fixed bg-[url('/stars.jpg')] opacity-60" />

      {/* Dynamic Planets */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-orange-300"
        animate={{ rotate: [0, 360], x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
      >
        <ImRocket className="text-6xl" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 text-blue-300"
        animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'loop' }}
      >
        <GiSpaceSuit className="text-6xl" />
      </motion.div>

      {/* Particle Effect */}
      <div className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity
            }}
            animate={{ y: [0, -20, 0], x: [0, Math.random() * 20, 0], opacity: [0.6, 0.4, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute top-1/4 left-1/4 text-yellow-300"
          animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <FaRegStar className="text-8xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-green-300"
          animate={{ x: [0, 30, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <FaRegChartBar className="text-8xl" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 text-blue-300"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <FaRegLightbulb className="text-8xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-purple-300"
          animate={{ rotate: [0, 360], opacity: [1, 0.7, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
        >
          <FaRegUser className="text-8xl" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-5xl lg:text-7xl font-extrabold text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Our Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Work Item 1 */}
          <motion.div
            className="relative flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="absolute inset-0 -z-10 bg-yellow-400 opacity-25 rounded-full scale-150 transform -translate-x-1/2 translate-y-1/2" />
            <FaRegStar className="text-yellow-400 text-6xl mb-6" />
            <h3 className="text-xl font-semibold mb-4">Innovative Ideas</h3>
            <p className="text-lg text-gray-300 text-center">
              Bringing fresh perspectives to enhance your marketing strategy.
            </p>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <IoIosArrowForward className="text-yellow-400 text-4xl" />
            </motion.div>
          </motion.div>

          {/* Work Item 2 */}
          <motion.div
            className="relative flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="absolute inset-0 -z-10 bg-green-400 opacity-25 rounded-full scale-150 transform -translate-x-1/2 translate-y-1/2" />
            <FaRegChartBar className="text-green-400 text-6xl mb-6" />
            <h3 className="text-xl font-semibold mb-4">Data-Driven Results</h3>
            <p className="text-lg text-gray-300 text-center">
              Leveraging analytics to drive measurable success.
            </p>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <IoIosArrowForward className="text-green-400 text-4xl" />
            </motion.div>
          </motion.div>

          {/* Work Item 3 */}
          <motion.div
            className="relative flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="absolute inset-0 -z-10 bg-blue-400 opacity-25 rounded-full scale-150 transform -translate-x-1/2 translate-y-1/2" />
            <FaRegLightbulb className="text-blue-400 text-6xl mb-6" />
            <h3 className="text-xl font-semibold mb-4">Creative Solutions</h3>
            <p className="text-lg text-gray-300 text-center">
              Crafting unique strategies to stand out from the competition.
            </p>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <IoIosArrowForward className="text-blue-400 text-4xl" />
            </motion.div>
          </motion.div>

          {/* Work Item 4 */}
          <motion.div
            className="relative flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:bg-gray-700 transition-transform transform hover:scale-105"
            variants={itemVariants}
          >
            <div className="absolute inset-0 -z-10 bg-purple-400 opacity-25 rounded-full scale-150 transform -translate-x-1/2 translate-y-1/2" />
            <FaRegUser className="text-purple-400 text-6xl mb-6" />
            <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
            <p className="text-lg text-gray-300 text-center">
              Tailoring our approach to meet the specific needs of your audience.
            </p>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <IoIosArrowForward className="text-purple-400 text-4xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="relative container mx-auto px-6 lg:px-12 mt-16 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-xl mb-6">
          Trust us to develop a solid communication strategy that celebrates the richness of African culture,
          helping your brand stand out in the market.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
};

export default Proverb;
