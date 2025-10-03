import React from "react";
import {
  FaMobile,
  FaCode,
  FaSearch,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseMe() {
  const features = [
    {
      icon: <FaMobile className="w-5 h-5" />,
      title: "Responsive Design",
      description: "Perfectly adapted for all devices and screen sizes",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaCode className="w-5 h-5" />,
      title: "Clean Code",
      description: "Well-structured, maintainable, and scalable codebase",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: "SEO Friendly",
      description: "Optimized for search engines and better visibility",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r lg:px-6 from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-300">
              Why Choose Me
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-blue-800 bg-clip-text ">
              Quality That Delivers Results
            </span>
          
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I combine technical expertise with a commitment to excellence,
            ensuring every project exceeds expectations and drives real business
            value.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side  */}
          <div className="relative" data-aos="fade-right">
            {/*  Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient Background for Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-blue-900/40"></div>


              {/* Placeholder for Image - You can replace with actual image */}
              <div className="h-96 lg:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center relative z-20">
                  {/* Animated Circles */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 border-4 border-pink-500/40 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-4 border-blue-500/50 rounded-full flex items-center justify-center">
                      <FaHeadset className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white bg-clip-text ">
                    Professional Excellence
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Quality That Speaks for Itself
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-600/10 rounded-full blur-xl"></div>
          </div>

          {/* Right Side - Features */}
          <div className="lg:pl-8" data-aos="fade-left">
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className=" relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-3 transition-all duration-300 group-hover:scale-105 group-hover:border-transparent group-hover:shadow-xl h-full">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                    ></div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300`}
                    ></div>

                    <div className="flex items-center gap-3 relative z-10">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${feature.gradient}  group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>

                      <div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-white  group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Border */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    >
                      <div className="absolute inset-[1.5px] rounded-xl bg-gray-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  100%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
