import React from 'react';
import { motion } from 'framer-motion';

const Award = () => {
  const awardIconProps = {
    initial: { scale: 0 },
    animate: { scale: 1.2 },
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 20, 
      duration: 2.5,
      repeat: Infinity, 
      repeatType: "mirror", 
    },
  };

  return (
    <div className="relative py-20 bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden min-h-screen">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full object-cover animate-rotate"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <circle cx="50" cy="100" r="100" fill="rgba(255, 255, 255, 0.1)" />
        </svg>
      </div>

      {/* Celebration Confetti */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <svg
          className="absolute h-full w-full text-yellow-300 opacity-30 animate-glitter"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="M50 0L75 50H25L50 0Z" fill="currentColor" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex items-center justify-between">
        {/* Award Icon and Main Title */}
        <div className="relative z-10 container mx-auto text-center mt-16">
          <motion.div
            {...awardIconProps}
            className="mx-auto mb-8 w-24 h-24 text-white"
          >
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 3.86 2.86 7.05 6.6 7.84l-1.67 3.57L8 22l1.67-3.57C10.53 19.85 11.22 20 12 20c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.21 0-2.37-.22-3.44-.62L12 16l3.44 3.38C14.37 19.78 13.21 20 12 20zM12 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
            </svg>
          </motion.div>

          <motion.h2
            className="text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Our African Excellence
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            We are proud to be recognized for our exceptional work in marketing and creativity.
          </motion.p>
        </div>
      </div>

      {/* Award Details at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="bg-black bg-opacity-80 rounded-lg px-24 py-16 text-white text-lg max-w-md mx-auto"
        >
          <p>PMR Africa Golden Arrow Awards</p>
          <p>2008, 2012, 2014 and 2015</p>
          <p>Golden/Diamond for Best Advertising Agency</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Award;
