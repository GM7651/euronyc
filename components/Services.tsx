'use client';

import { FaWrench, FaOilCan, FaCar, FaTachometerAlt, FaCog, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: <FaOilCan className="text-5xl text-german-gold-600" />,
      title: 'Oil Changes & Fluid Service',
      description: 'Regular maintenance to keep your German vehicle running smoothly with premium synthetic oils.',
    },
    {
      icon: <FaCar className="text-5xl text-accent-600" />,
      title: 'Brake Service & Repair',
      description: 'Complete brake system inspection, pad replacement, and rotor service for optimal safety.',
    },
    {
      icon: <FaTachometerAlt className="text-5xl text-german-gold-600" />,
      title: 'Diagnostic Services',
      description: 'Advanced computer diagnostics using manufacturer-specific tools and software.',
    },
    {
      icon: <FaCog className="text-5xl text-accent-600" />,
      title: 'Engine Repair',
      description: 'Expert engine diagnostics and repairs performed by certified technicians.',
    },
    {
      icon: <FaTools className="text-5xl text-german-gold-600" />,
      title: 'Transmission Service',
      description: 'Comprehensive transmission maintenance and repair for manual and automatic systems.',
    },
    {
      icon: <FaWrench className="text-5xl text-accent-600" />,
      title: 'Scheduled Maintenance',
      description: 'Factory-recommended maintenance schedules to keep your warranty valid.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background car image - subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-german-gold-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-german-gold-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive care for your German vehicle
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="p-8 bg-gray-50 rounded-xl border-2 border-transparent hover:border-german-gold-500 transition-colors cursor-pointer group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -10
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-accent-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
