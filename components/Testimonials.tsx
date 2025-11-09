'use client';

import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Schmidt',
      vehicle: '2020 BMW M3',
      rating: 5,
      text: 'Outstanding service! The team knows BMWs inside and out. My M3 has never run better.',
    },
    {
      name: 'Sarah Johnson',
      vehicle: '2019 Mercedes-Benz C-Class',
      rating: 5,
      text: 'Honest, transparent, and professional. They explained everything and the price was fair.',
    },
    {
      name: 'David Chen',
      vehicle: '2021 Audi S4',
      rating: 5,
      text: 'Finally found a shop I can trust with my Audi. Expert diagnostics and quality work.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* German flag accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-german-black via-accent-500 to-german-gold-500" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-german-gold-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-german-gold-500 transition-colors"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -10
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <FaStar className="text-german-gold-500" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-bold text-dark-900">{testimonial.name}</p>
                <p className="text-accent-600 text-sm font-semibold">{testimonial.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
