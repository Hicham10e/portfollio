import React from 'react';

const Education = () => (
  <section id="education" className="py-12 px-2 sm:px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Education</h2>
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 sm:p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-purple-600 dark:text-purple-400 font-semibold text-base sm:text-lg mb-2">2020 - 2023</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Bachelor's Degree in Computer Science</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Web and Mobile Application Development</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
          <li>Advanced Web Development</li>
          <li>User Interface Design</li>
          <li>Mobile Application Development</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 sm:p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-purple-600 dark:text-purple-400 font-semibold text-base sm:text-lg mb-2">2023 - 2025</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">Master's Degree in Artificial Intelligence</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">Focus on AI, machine learning, and intelligent systems.</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Data Science</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
