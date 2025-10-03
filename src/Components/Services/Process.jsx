// ProcessSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaPencilRuler, FaCode, FaBug, FaRocket, FaHeadset } from "react-icons/fa";

const steps = [
  {
    title: "Requirement Gathering",
    desc: "We discuss goals, users and success metrics to define clear requirements.",
    icon: <FaSearch className="w-6 h-6" />,
    gradient: "bg-gradient-to-r from-[#1A2A80] to-[#000B58]"
  },
  {
    title: "Design & Planning",
    desc: "Wireframes, UI design and technical plan so development runs smoothly.",
    icon: <FaPencilRuler className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Development",
    desc: "Build with clean, maintainable code using React / Tailwind or your stack.",
    icon: <FaCode className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Testing & QA",
    desc: "Manual & automated testing to ensure performance and bug-free release.",
    icon: <FaBug className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Deployment & Support",
    desc: "Deploy to production and provide post-launch support & improvements.",
    icon: <FaRocket className="w-6 h-6" />,
    gradient: "from-red-500 to-pink-500"
  }
];

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">My Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-blue-800 bg-clip-text ">
            Simple, Transparent & Effective
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            I follow a clear step-by-step workflow so you always know what to expect.
            Each phase is focused on results and communication.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          
          <div className="hidden lg:block absolute left-12 right-12 top-8 h-0.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:border-transparent group-hover:shadow-2xl h-full">
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`}></div>

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-r ${step.gradient} shadow-lg`}>
                        {index + 1}
                      </div>
                      <div className="p-2 rounded-lg bg-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>
                  </div>
                </div>

                {/* Connector Dots (Mobile) */}
                  <>
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-700/30"></div>
                    <div className="lg:hidden absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                  </>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="500">
          <p className="text-gray-400 text-sm inline-flex items-center px-4 py-2 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Transparent pricing, regular updates, and free post-launch support
          </p>
        </div>
      </div>
    </section>
  );
}