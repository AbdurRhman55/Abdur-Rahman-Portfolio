import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaLaptopCode, 
  FaServer, 
  FaCode, 
  FaCogs, 
  FaDatabase, 
  FaPlug,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";

function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      description: "Modern, responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS for stunning user interfaces.",
      gradient: "from-purple-500 to-pink-500",
      delay: 100
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Robust server-side solutions with PHP, Node.js, and database management for scalable applications.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 200
    },
    {
      icon: FaCode,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development delivering complete digital experiences from concept to deployment.",
      gradient: "from-green-500 to-emerald-500",
      delay: 300
    },
    {
      icon: FaCogs,
      title: "Custom Web Applications",
      description: "Tailored solutions designed specifically for your unique business needs and requirements.",
      gradient: "from-orange-500 to-red-500",
      delay: 400
    },
    {
      icon: FaDatabase,
      title: "Database Design & Management",
      description: "Efficient database architecture with MySQL, MongoDB, PostgreSQL ensuring optimal performance.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 500
    },
    {
      icon: FaPlug,
      title: "API Development & Integration",
      description: "Seamless REST APIs and third-party integrations for connected, powerful applications.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 600
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6"
            data-aos="fade-down"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-300">My Services</span>
          </div>

          {/* Title */}
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="text-blue-800
             bg-clip-text ">
              Core Expertise
            </span>
          </h2>

          {/* Description */}
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Comprehensive web development services that transform your ideas into 
            powerful, scalable, and user-friendly digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 transition-all duration-500 group-hover:scale-105 group-hover:border-transparent group-hover:shadow-2xl overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-2xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Arrow */}
                  <div className="flex items-center text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Start Your Project</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;