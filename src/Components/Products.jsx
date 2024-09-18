import React from 'react';
import { motion } from 'framer-motion';

// Define the images and their details
const images = [
  {
    id: 1,
    src: '/Sbuko images/e.png', // Use the relative path from the public folder
    alt: 'Creative Project 1',
    title: 'Advert Design',
    
  },
  {
    id: 2,
    src: '/Sbuko images/f.png',
    alt: 'Creative Project 2',
    title: 'Outdoor Billboards',
  
  },
  {
    id: 3,
    src: '/Sbuko images/g.png',
    alt: 'Creative Project 3',
    title: 'Lirerature Design',
  },
  {
    id: 4,
    src: '/Sbuko images/h.png',
    alt: 'Creative Project 4',
    title: 'Product Packaging',
  },
];

const Products = () => {
  return (
    <section className="py-16 px-4 bg-orange-400">
      <h2 className="text-4xl font-bold text-center mb-12"> Some of Our Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
