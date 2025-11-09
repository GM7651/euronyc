'use client';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-12 relative overflow-hidden">
      {/* German flag top stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-german-black via-accent-500 to-german-gold-500" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-german-gold-500">Euro</span>NYC
            </h3>
            <p className="text-gray-400">
              Expert service and repair for German vehicles in New York City.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#services" 
                  className="text-gray-400 hover:text-german-gold-500 transition"
                  whileHover={{ x: 5 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="text-gray-400 hover:text-german-gold-500 transition"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-german-gold-500 transition"
                  whileHover={{ x: 5 }}
                >
                  Testimonials
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="text-gray-400 hover:text-german-gold-500 transition"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-german-gold-500 transition text-2xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-accent-500 transition text-2xl"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-german-gold-500 transition text-2xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EuroNYC German Auto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
