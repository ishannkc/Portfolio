'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAws, FaTrophy, FaExternalLinkAlt, FaShieldAlt, FaCertificate } from 'react-icons/fa';
import { certifications } from '@/lib/data';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'aws':
        return <FaAws className="w-10 h-10" />;
      case 'deloitte':
        return <FaShieldAlt className="w-10 h-10" />;
      case 'trophy':
        return <FaTrophy className="w-10 h-10" />;
      case 'certificate':
        return <FaCertificate className="w-10 h-10" />;
      default:
        return <FaCertificate className="w-10 h-10" />;
    }
  };

  const getGradient = (iconName: string) => {
    switch (iconName) {
      case 'aws':
        return 'from-orange-500 to-yellow-500';
      case 'deloitte':
        return 'from-green-500 to-teal-500';
      case 'trophy':
        return 'from-yellow-500 to-amber-500';
      case 'certificate':
        return 'from-blue-500 to-indigo-500';
      default:
        return 'from-primary-500 to-accent-purple';
    }
  };

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-dark-bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications and notable accomplishments
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="card p-6 group cursor-pointer relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${getGradient(
                  cert.icon
                )}`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getGradient(
                    cert.icon
                  )} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {getIcon(cert.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Issued by <span className="font-medium">{cert.issuer}</span>
                </p>

                {/* Date */}
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {cert.date}
                </p>

                {/* View Credential Link */}
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    View Credential
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500">
            <FaTrophy className="w-4 h-4" />
            <span className="text-sm font-medium">
              Always learning, always growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
