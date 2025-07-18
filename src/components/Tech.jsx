import React from 'react';
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaJs, FaPython, FaFigma } from 'react-icons/fa';

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
  { icon: <FaCss3 className="text-blue-500" />, name: 'CSS3' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-blue-400" />, name: 'React' },
  { icon: <FaBootstrap className="text-purple-700" />, name: 'Bootstrap' },
  { icon: <FaPython className="text-bleu-600" />, name: 'Python' },
  { icon: <FaFigma className="text-pink-500" />, name: 'Figma' },
  { icon: <span className="text-cyan-400 font-bold text-2xl">Tw</span>, name: 'TailwindCSS' },
];

const Tech = () => (
  <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg shadow hover:scale-105 transition-transform">
          <span className="text-5xl mb-2">{skill.icon}</span>
          <span className="text-lg text-gray-700 dark:text-gray-200 font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Tech;
