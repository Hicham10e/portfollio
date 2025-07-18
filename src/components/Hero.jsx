import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center py-20 px-4 max-w-3xl mx-auto border-b border-neutral-200 dark:border-neutral-800 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Heffaf Mohamed Hicham</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Junior Front-End Developer</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-4">
        I am a passionate junior front-end developer skilled in HTML, CSS, JavaScript, React, TailwindCSS, Bootstrap, Git, and Figma. I love building beautiful, responsive web experiences and am always eager to learn and grow in the world of web development.
      </p>
      <a href="/src/assets/h.pdf" download className="inline-block bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700 transition-colors font-semibold w-max">Download CV</a>
    </section>
  );
};

export default Hero;
