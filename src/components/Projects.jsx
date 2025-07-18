import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/projects/portfolio.png'
import img2 from '../assets/projects/ecommerce.png'
import img3 from '../assets/projects/weather.png'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, skills, and experience as a front-end developer.',
    image: img1,
    tech: ['React', 'TailwindCSS', 'JavaScript'],
    linkdemo: 'https://portfollio-azure.vercel.app',
    linkgithub:'https://github.com/Hicham10e/portfolio',
  },
  {
    title: 'E-commerce Landing Page',
    description: 'A modern, responsive landing page for an e-commerce platform, featuring product highlights and a clean UI.',
    image: img2,
    tech: ['HTML', 'TailwindCss', 'React'],
    linkdemo: 'https://ecom-olive-two.vercel.app',
    linkgithub:'https://github.com/Hicham10e/ecom',
  },
  {
    title: 'Weather App',
    description: 'A simple weather manager app',
    image: img3,
    tech: ['Html', 'CSS','JavaScript'],
    linkdemo: 'https://weather-six-lemon.vercel.app',
    linkgithub:'https://github.com/Hicham10e/iphone',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' },
  }),
};

const Projects = () => (
  <section id="projects" className="py-10 px-2 sm:px-4 max-w-6xl mx-auto w-full">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Projects</h2>
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="min-w-0 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <img src={project.image} alt={project.title} className="w-full h-44 sm:h-52 md:h-56 object-cover" />
          <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white break-words">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1 text-xs sm:text-sm md:text-base break-words">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
              ))}
            </div>
            <motion.a
              href={project.linkdemo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-xs sm:text-sm md:text-base w-full text-center shadow group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Project
            </motion.a>

            <motion.a
              href={project.linkgithub}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-xs sm:text-sm md:text-base w-full text-center shadow group-hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Project on github
            </motion.a>

          </div>
        </motion.div>



      ))}
    </div>
  </section>
);

export default Projects;
