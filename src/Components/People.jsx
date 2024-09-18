import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// People Component
export const People = () => {
  // Define the array of products with image paths, titles, and custom text
  const products = [
    { title: "Product 1", thumbnail: "/Sbuko images/m.png", text: "BRUCE NGONGA", description: "Creative Director ATL" },
    { title: "Product 2", thumbnail: "/Sbuko images/l.png", text: "NOTHANDO MHLANGA", description: "Accountant Executive" },
    { title: "Product 3", thumbnail: "/Sbuko images/k.png", text: "MARIA BUCUANE", description: "Accountant Director" },
    { title: "Product 4", thumbnail: "/Sbuko images/j.png", text: "B.MPHENU THWALA", description: "Brand Navigator" },
    { title: "Product 5", thumbnail: "/Sbuko images/i.png", text: "MANGALISO DLAMINI", description: "Creative Director" },
    { title: "Product 6", thumbnail: "/Sbuko images/n.png", text: "SIPHOSETHU SUKATI", description: "Strategist" },
    { title: "Product 7", thumbnail: "/Sbuko images/o.png", text: "LUNGELU DUBE", description: "Multimedia Specialist" },
    { title: "Product 8", thumbnail: "/Sbuko images/p.png", text: "CEBILE NDZINISA", description: "Copywriter" },
    { title: "Product 9", thumbnail: "/Sbuko images/q.png", text: "ZOE NONDE", description: "Copywriter/Strategist" },
    { title: "Product 10", thumbnail: "/Sbuko images/r.png", text: "BONGISWA DLAMINI", description: "Copywriter" },
    { title: "Product 11", thumbnail: "/Sbuko images/s.png", text: "CHESTER MAPHALALA", description: "PR Copywriter" },
    { title: "Product 12", thumbnail: "/Sbuko images/t.png", text: "NJABULO DLAMINI", description: "Graphic Designer" },
    { title: "Product 13", thumbnail: "/Sbuko images/u.png", text: "SANDILE SIMELANE", description: "Graphic Designer/Videographer" },
    { title: "Product 14", thumbnail: "/Sbuko images/v.png", text: "CHANTEL CHAMBERS", description: "Accountant/Admin" },
    { title: "Product 15", thumbnail: "/Sbuko images/s.png", text: "CHESTER MAPHALALA", description: "PR Copywriter" },
  ];

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[200vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto bg-black [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-10">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-orange-500">
        Our People
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-orange-400">
        At Sbuke Acres, we value the energy and passion our people bring,
        as they contribute their unique perspectives to drive innovation and success.
        Together, we believe in harnessing the power of collaboration to exceed
        expectations and deliver outstanding results for our clients.
      </p>
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 overflow-hidden"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-orange-400 text-lg font-semibold bg-black bg-opacity-50 opacity-0 group-hover/product:opacity-100">
        <div className="p-4">
          {/* Display the custom text */}
          <h2 className="text-2xl font-bold">{product.text}</h2>
          {/* Display the product description */}
          {product.description && <p className="mt-2">{product.description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default People;
