'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Brands() {
  const brands = [
    { 
      name: 'BMW', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
      emoji: '🚗'
    },
    { 
      name: 'Mercedes-Benz', 
      logo: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg',
      emoji: '⭐'
    },
    { 
      name: 'Audi', 
      logo: 'https://cdn.worldvectorlogo.com/logos/audi-2.svg',
      emoji: '🔷'
    },
    { 
      name: 'Volkswagen', 
      logo: 'https://cdn.worldvectorlogo.com/logos/volkswagen-2.svg',
      emoji: '🚙'
    },
    { 
      name: 'Porsche', 
      logo: 'https://cdn.worldvectorlogo.com/logos/porsche-1.svg',
      emoji: '🏎️'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* German flag stripe accents */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-german-black via-accent-500 to-german-gold-500" />
      
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-bold text-dark-900 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Specialized Service for Premium{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-german-gold-500">
            German Brands
          </span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={brand.name} 
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-xl shadow-md border-2 border-transparent hover:border-german-gold-500 transition-colors cursor-pointer min-h-[180px]"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#FFCC00"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="relative w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0]
                }}
                transition={{
                  duration: 0.5
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 768px) 80px, 96px"
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    unoptimized
                    loading="eager"
                  />
                </div>
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold text-dark-800 text-center">{brand.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
