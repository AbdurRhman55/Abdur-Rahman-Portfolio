import React from "react";
import hero from '../../../assets/hero.png';
import aboutImage1 from '../../../assets/hero.png'; // Add these images to your assets


function Aboutsection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1A2A80] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#4477CE] opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white rounded-full shadow-lg">
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            A Passionate Developer Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4477CE] to-[#1A2A80]">Loves To Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A2A80] to-[#4477CE] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-26">
          {/* Image Section */}
          <div className="relative" data-aos="fade-right">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden group">
              <img 
                src={hero} 
                alt="Abdur Rahman" 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">Abdur Rahman</h3>
                <p className="text-[#4477CE]">Web Developer</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-[#1A2A80] opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#4477CE] opacity-20 animate-pulse delay-300"></div>
            </div>
            
            {/* Secondary image */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-lg overflow-hidden border-4 border-gray-800 shadow-xl" data-aos="zoom-in" data-aos-delay="300">
              <img 
                src={aboutImage1} 
                alt="Coding" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -left-6 top-1/3 bg-gradient-to-r from-[#1A2A80] to-[#000B58] p-4 rounded-lg shadow-lg" data-aos="fade-right" data-aos-delay="500">
              <div className="text-center">
                <span className="text-white text-2xl font-bold block">2+</span>
                <span className="text-white text-xs">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-xl" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences <span className="text-[#4477CE]">With Precision</span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate frontend developer specializing in creating responsive, user-friendly web applications. With expertise in modern JavaScript frameworks like React, I transform complex problems into simple, beautiful designs.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              My development process focuses on clean code, performance optimization, and creating intuitive user experiences. I believe in continuous learning and staying updated with the latest web technologies.
            </p>
            
            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { skill: "Web Development", level: "95%" },
                { skill: "UI/UX Design", level: "85%" },
                { skill: "React JS", level: "90%" },
                { skill: "Problem Solving", level: "92%" }
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{item.skill}</span>
                    <span className="text-[#4477CE]">{item.level}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1A2A80] to-[#4477CE] rounded-full"
                      style={{ width: item.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to action */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Download CV
              </button>
              <button className="px-6 py-3 border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutsection;