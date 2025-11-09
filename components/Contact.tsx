'use client';

import { useState, FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', vehicle: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative German flag stripes */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-german-black via-accent-500 to-german-gold-500" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-german-gold-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Schedule your service appointment today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-german-gold-600 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-900 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-german-gold-600">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-german-gold-600 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-900 mb-1">Email</h4>
                  <a href="mailto:info@euronyc.com" className="text-gray-600 hover:text-german-gold-600">
                    info@euronyc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-german-gold-600 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-900 mb-1">Location</h4>
                  <p className="text-gray-600">
                    123 Auto Lane<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-2xl text-german-gold-600 mt-1" />
                <div>
                  <h4 className="font-bold text-dark-900 mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-dark-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-semibold text-dark-900 mb-2">
                  Vehicle Make/Model
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g., 2020 BMW 330i"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-german-gold-500 to-german-gold-600 hover:from-german-gold-600 hover:to-german-gold-700 text-dark-900 font-bold py-4 rounded-lg transition shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(255, 204, 0, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
