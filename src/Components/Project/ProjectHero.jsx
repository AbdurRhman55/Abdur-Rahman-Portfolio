import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center 
      bg-gradient-to-r from-blue-50 to-blue-100 
      dark:from-slate-900 dark:to-slate-800 lg:pt-25 pb-10">
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Breadcrumb */}
        <div data-aos="fade-down" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 mb-6 ">
          <span className="text-blue-600 dark:text-blue-400 font-medium">Projects</span>
        </div>

        {/* Main title */}
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          My Projects
        </h1>

        {/* Subtitle */}
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work in web development and design.
        </p>

        {/* Stats */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">12</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
