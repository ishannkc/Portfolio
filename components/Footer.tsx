'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo, navLinks } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: personalInfo.github,
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-dark-bg-secondary border-t border-gray-200 dark:border-dark-border">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/50 dark:to-black/20 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              className="inline-block text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.a>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Building the future, one line of code at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-200 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
            © {currentYear} {personalInfo.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            in Nepal. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-white transition-all text-sm font-medium"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
