import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowPopup(true);  // Show the popup when footer is in view
          setTimeout(() => {
            setShowPopup(false);  // Hide after 4 seconds
          }, 4000);
        }
      },
      { threshold: 0.5 }  // Trigger when 50% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gray-800 text-white py-16 px-8 flex flex-col items-center min-h-[600px]"
    >
      {/* Social Media Icons */}
      <div className="flex space-x-12 mb-8">
        <a
          href="https://facebook.com/sbukoacres/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {/* Facebook Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.333C0 23.4.597 24 1.325 24h11.495v-9.333H9.5V11h3.32V8.665c0-3.3 1.99-5.066 4.893-5.066 1.392 0 2.586.103 2.934.15v3.4H17.92c-1.606 0-1.916.763-1.916 1.883V11h3.8l-.496 3.667h-3.304V24h6.484c.728 0 1.326-.6 1.326-1.334V1.333C24 .6 23.403 0 22.675 0z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/sbukoacres/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
        >
          {/* Twitter Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-22 w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.832 9.832 0 01-2.828.775A4.932 4.932 0 0023.337 3.2c-.964.571-2.033.99-3.167 1.216A4.918 4.918 0 0016.616 3c-2.73 0-4.942 2.209-4.942 4.938 0 .39.044.766.128 1.129C7.72 8.847 4.1 6.937 1.67 3.95a4.931 4.931 0 00-.67 2.482c0 1.712.872 3.223 2.188 4.104a4.924 4.924 0 01-2.239-.618v.062c0 2.39 1.694 4.385 3.946 4.836a4.946 4.946 0 01-2.232.085 4.937 4.937 0 004.605 3.418A9.874 9.874 0 010 19.54a13.915 13.915 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/sbukoacres"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        >
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.187 0 3.584.012 4.85.07 1.17.057 2.006.24 2.475.42a4.812 4.812 0 011.77 1.114 4.802 4.802 0 011.114 1.77c.18.469.363 1.305.42 2.475.058 1.266.07 1.663.07 4.85 0 3.187-.012 3.584-.07 4.85-.057 1.17-.24 2.006-.42 2.475a4.812 4.812 0 01-1.114 1.77 4.812 4.812 0 01-1.77 1.114c-.469.18-1.305.363-2.475.42-1.266.058-1.663.07-4.85.07-3.187 0-3.584-.012-4.85-.07-1.17-.057-2.006-.24-2.475-.42a4.812 4.812 0 01-1.77-1.114 4.812 4.812 0 01-1.114-1.77c-.18-.469-.363-1.305-.42-2.475-.058-1.266-.07-1.663-.07-4.85 0-3.187.012-3.584.07-4.85.057-1.17.24-2.006.42-2.475a4.812 4.812 0 011.114-1.77 4.812 4.812 0 011.77-1.114c.469-.18 1.305-.363 2.475-.42 1.266-.058 1.663-.07 4.85-.07zM12 5.839a6.151 6.151 0 00-6.161 6.162 6.151 6.151 0 006.161 6.161 6.151 6.151 0 006.161-6.161A6.151 6.151 0 0012 5.839zM12 16.946a4.107 4.107 0 01-4.107-4.107A4.107 4.107 0 0112 8.732a4.107 4.107 0 014.107 4.107A4.107 4.107 0 0112 16.946zM18.407 6.764a1.311 1.311 0 11-1.311-1.31 1.311 1.311 0 011.311 1.31z" />
          </svg>
        </a>
      </div>

      {/* Newsletter Signup */}
      <div className="text-center mb-6">
        <h3 className="text-2xl text-gray-200 font-semibold mb-4">Subscribe to Our Newsletter</h3>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 rounded-r hover:bg-orange-600 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Additional Footer Links */}
      <div className="text-center mb-6">
        <a href="/privacy" className="mr-4 hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-10 left-10 bg-orange-600 text-white p-4 rounded shadow-lg transition-opacity duration-500">
         Thanks for visiting Sbuko Acres.
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
