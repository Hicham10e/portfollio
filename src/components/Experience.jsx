import React from 'react';

const Experience = () => (
  <section id="experience" className="py-12 px-2 sm:px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Experience</h2>
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 sm:p-8 flex flex-col gap-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4">
        <div className="md:w-1/3 text-purple-600 dark:text-purple-400 font-semibold text-base sm:text-lg">Feb 2023 - May 2023</div>
        <div className="md:w-2/3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Internship - Front-End Developer</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Algérie Telecom</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
            <li>Created user interfaces for an internal web application</li>
            <li>Integrated graphic designs and implemented interactive features</li>
            <li>Optimized performance and conducted cross-browser compatibility testing</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">HTML</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">CSS</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">Bootstrap</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">React.js</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
