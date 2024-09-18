import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="bg-orange-100 py-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-200 opacity-50 pointer-events-none"></div>

      {/* Contact Us Section */}
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Have questions or need more information? We're here to help.
        </p>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div 
        className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 mt-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-start md:items-center">
          <div className="text-2xl text-orange-500 mr-4">
            📞
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+268 7927 0961</p>
          </div>
        </div>
        <div className="flex items-start md:items-center">
          <div className="text-2xl text-orange-500 mr-4">
            ✉️
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">ae@sbukoacres.com</p>
          </div>
        </div>
        <div className="flex items-start md:items-center">
          <div className="text-2xl text-orange-500 mr-4">
            📍
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600">Plot 506, Siphefu Street, Serendipity complex, Mbabane</p>
          </div>
        </div>
      </motion.div>

      {/* Google Maps Link */}
      <motion.div 
        className="text-center mt-10 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="https://www.google.com/maps/search/?api=1&query=Sbuko+Acres+Creative+Agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
        >
          View on Google Maps
        </a>
      </motion.div>

      {/* Contact Form and Rotating Circle */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 relative z-10">
        {/* Contact Form */}
        <motion.div 
          className="bg-white p-12 rounded-lg shadow-lg max-w-4xl w-full md:w-3/5 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                className="w-full p-4 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
                placeholder="Your message" rows="6"
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Rotating Golden Circle */}
        <motion.div
          className="mt-12 md:mt-90 md:ml-12 w-128 h-64 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          style={{
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.5)',
          }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-500"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
