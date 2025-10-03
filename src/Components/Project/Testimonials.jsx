import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// testimonials icons
import { VscGraphLine } from "react-icons/vsc";
import { IoIosFlash } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";


const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Sample data - replace with your actual testimonials and achievements
  const testimonials = [
    {
      id: 1,
      quote: "Working with this developer was an absolute pleasure. The React application they built for us has significantly improved our workflow efficiency.",
      author: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      project: "Internal Management Dashboard"
    },
    {
      id: 2,
      quote: "The e-commerce platform developed exceeded our expectations. User engagement increased by 65% after launch.",
      author: "Michael Chen",
      position: "Marketing Director, RetailPro",
      project: "E-commerce Platform"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Sales Improvement",
      description: "Built with React and PHP, this project improved client's sales by 40%.",
      icon: <VscGraphLine />
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Optimized application load time by 60% through code splitting and lazy loading.",
      icon: <IoIosFlash />
    },
    {
      id: 3,
      title: "User Engagement",
      description: "Increased user engagement by 50% with intuitive UI/UX redesign.",
      icon: <FaUser />
    },
    {
      id: 4,
      title: "Award Recognition",
      description: "Received 'Best Web Application' award at Tech Innovation Summit 2023.",
      icon: <GrAchievement />
    }
  ];

  return (
    <section className="py-16 px-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Testimonials & Achievements
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Feedback from clients and key milestones in my development journey
      </p>
    </div>

    {/* Testimonials */}
    <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
        Client Testimonials
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={testimonial.id * 100}
          >
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{testimonial.project}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-200 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-slate-900 dark:text-white font-medium">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Achievements */}
    <div data-aos="fade-up" data-aos-delay="400">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
        Key Achievements
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay={achievement.id * 100}
          >
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">{achievement.icon}</div>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h4>
            <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
      <p className="text-slate-700 dark:text-slate-300 mb-6">Interested in working together?</p>
      <button className="bg-gradient-to-r from-[#1A2A80] to-[#000B58] hover:from-blue-700 hover:to-blue-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
        Get In Touch
      </button>
    </div>
  </div>
</section>

  );
};

export default Testimonials;