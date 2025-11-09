'use client';

import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-german-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Navigation */}
      <motion.nav 
        className="container mx-auto px-6 py-6 relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-german-gold-500">Euro</span>NYC
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.a 
              href="#services" 
              className="hover:text-german-gold-500 transition"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#about" 
              className="hover:text-german-gold-500 transition"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="hover:text-german-gold-500 transition"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Testimonials
            </motion.a>
            <motion.a 
              href="#contact" 
              className="hover:text-german-gold-500 transition"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              href="tel:+1234567890" 
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-700 hover:to-accent-600 px-6 py-2 rounded-lg transition shadow-lg shadow-accent-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(221, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone /> Call Now
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-3xl text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 bg-dark-800/95 backdrop-blur-lg rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 px-4">
                <motion.a 
                  href="#services" 
                  className="hover:text-german-gold-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="hover:text-german-gold-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#testimonials" 
                  className="hover:text-german-gold-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Testimonials
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="hover:text-german-gold-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
                <motion.a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-3 rounded-lg mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone /> Call Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pb-20 pt-12 md:pb-32 md:pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            alba Service for Your
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-german-gold-400 via-german-gold-500 to-german-gold-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              German Vehicle
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Specializing in BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche.
            Professional maintenance and repair in New York City.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a 
              href="#contact" 
              className="bg-gradient-to-r from-german-gold-500 to-german-gold-600 hover:from-german-gold-600 hover:to-german-gold-700 text-dark-900 px-8 py-4 rounded-lg text-lg font-bold transition text-center shadow-lg shadow-german-gold-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(255, 204, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Service
            </motion.a>
            <motion.a 
              href="#services" 
              className="bg-white hover:bg-gray-100 text-dark-900 px-8 py-4 rounded-lg text-lg font-semibold transition text-center border-2 border-white"
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 mt-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <FaMapMarkerAlt className="text-german-gold-500" />
            <span>Serving all of New York City</span>
          </motion.div>
          </div>

          {/* Hero Car Image - Multiple layered cars */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main featured car */}
              <motion.div
                className="relative w-full h-[400px] mb-8"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
                  alt="Mercedes German luxury car"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(255,204,0,0.3)]"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-german-gold-500/10 backdrop-blur-sm border border-german-gold-500/30 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 204, 0, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-german-gold-500">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="bg-accent-500/10 backdrop-blur-sm border border-accent-500/30 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(221, 0, 0, 0.15)" }}
                >
                  <div className="text-3xl font-bold text-accent-500">5000+</div>
                  <div className="text-sm text-gray-300">Cars Serviced</div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-german-gold-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
