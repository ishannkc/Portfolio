'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skillCategories } from '@/lib/data';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiStripe,
  SiPostgresql,
  SiFlutter,
  SiSwagger,
} from 'react-icons/si';
import { FaAws, FaCloud } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// Icon mapping
const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiAmazonaws: FaAws,
  SiAmazons3: FaCloud,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiStripe,
  SiPostgresql,
  SiFlutter,
  SiSwagger,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {skillCategories[activeCategory].description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || SiReact;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="card p-4 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Tech Stack Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || SiReact;
                return (
                  <motion.span
                    key={`${category.title}-${skill.name}`}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {skill.name}
                  </motion.span>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
