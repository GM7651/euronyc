'use client';

import { FaCheckCircle, FaCertificate, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white relative overflow-hidden">
      {/* German flag stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-german-black via-accent-500 to-german-gold-500" />
      
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-german-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-200, 200, -200],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-german-gold-500">EuroNYC</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              With over 20 years of experience specializing exclusively in German automotive engineering, 
              our certified technicians provide dealership-quality service at competitive prices.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaCertificate className="text-3xl text-german-gold-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
                  <p className="text-gray-300">
                    Our team is ASE certified and trained on the latest German automotive technology.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaCheckCircle className="text-3xl text-german-gold-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                  <p className="text-gray-300">
                    We use only OEM and premium aftermarket parts for all repairs.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaUsers className="text-3xl text-german-gold-500 flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer Focused</h3>
                  <p className="text-gray-300">
                    Transparent pricing, honest diagnostics, and exceptional customer service.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent-600 to-accent-700 p-8 rounded-2xl shadow-2xl border-2 border-german-gold-500/30"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(221, 0, 0, 0.5)" }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <ul className="space-y-4">
              {[
                '12-month / 12,000-mile warranty',
                'Free shuttle service available',
                'Loaner vehicles upon request',
                'Competitive pricing',
                'Same-day service available'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-2xl text-german-gold-500">✓</span>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
