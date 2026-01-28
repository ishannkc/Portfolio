'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { projects, additionalProjects } from '@/lib/data';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Live':
        return 'status-live';
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-completed';
      default:
        return 'status-completed';
    }
  };

  const toggleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-purple/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Links on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View Code"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`status-badge ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Date */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    {project.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features (Expandable) */}
                <div className="mb-4">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    {expandedProject === project.id ? (
                      <>
                        <FaChevronUp className="w-3 h-3" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="w-3 h-3" />
                        Show Details
                      </>
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedProject === project.id ? 'auto' : 0,
                      opacity: expandedProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="tech-badge text-xs">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 text-center text-sm font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.liveUrl ? 'flex-1' : 'w-full'} py-2 px-4 text-center text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
            animate={!showMoreProjects ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 1.5, repeat: showMoreProjects ? 0 : Infinity }}
            aria-label={showMoreProjects ? 'Hide More Projects' : 'Show More Projects'}
          >
            <span className="text-sm font-medium">
              {showMoreProjects ? 'Show Less' : 'More Projects'}
            </span>
            <motion.div
              animate={{ rotate: showMoreProjects ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Additional Projects Grid */}
        <AnimatePresence>
          {showMoreProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
              >
                {additionalProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="card overflow-hidden group"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-purple/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Links on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="View Live Demo"
                          >
                            <FaExternalLinkAlt className="w-5 h-5" />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View Code"
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`status-badge ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Title & Date */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                          {project.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                          <FaCalendarAlt className="w-3.5 h-3.5" />
                          {project.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Features (Expandable) */}
                      <div className="mb-4">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <>
                              <FaChevronUp className="w-3 h-3" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <FaChevronDown className="w-3 h-3" />
                              Show Details
                            </>
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedProject === project.id ? 'auto' : 0,
                            opacity: expandedProject === project.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-3 space-y-2">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span key={tech} className="tech-badge text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="tech-badge text-xs">
                            +{project.techStack.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-dark-border">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 px-4 text-center text-sm font-medium bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Live Demo
                          </motion.a>
                        )}
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${project.liveUrl ? 'flex-1' : 'w-full'} py-2 px-4 text-center text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/ishannkc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
