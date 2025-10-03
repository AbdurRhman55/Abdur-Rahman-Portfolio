import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsHero = () => {
  const stats = [
    { number: "15+", label: "Projects Completed", color: "blue", description: "From concept to deployment" },
    { number: "12", label: "Happy Clients", color: "green", description: "Satisfied with results" },
    { number: "3", label: "Years Experience", color: "purple", description: "Continuous learning & growth" }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true, // animate only once
    });
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">

      {/* Title */}
      <h1 data-aos="fade-down" className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 mb-6 text-[#1A2A80]">
        My Projects
      </h1>

      {/* Subtitle */}
      <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-12">
        Crafting digital experiences that <span className="font-semibold text-[#1A2A80]/90">solve problems</span> and <span className="font-semibold text-[#1A2A80]">delight users</span>.
      </p>

      {/* CTA Buttons */}
      <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-4 mb-16">
        <button className="px-6 py-3 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-medium rounded-lg transition transform hover:-translate-y-1 shadow-lg cursor-pointer">
          View All Projects
        </button>
        <button className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium rounded-lg transition transform hover:-translate-y-1 shadow-md cursor-pointer">
          Contact Me
        </button>
      </div>

      {/* Stats */}
      <div data-aos="fade-up" data-aos-delay="600" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={700 + index * 100} // staggered delay for each card
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-left"
          >
            <div className={`text-3xl font-bold mb-2 ${
              stat.color === 'blue' ? 'text-blue-300' : stat.color === 'green' ? 'text-green-300' : 'text-purple-300'
            }`}>
              {stat.number}
            </div>
            <div className="text-lg font-semibold">{stat.label}</div>
            <div className="text-sm mt-1 text-white/80">{stat.description}</div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ProjectsHero;
