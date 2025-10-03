import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaCode, FaMobile, FaRocket } from "react-icons/fa";

function ServicesHero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-28 text-white overflow-hidden">

      {/* Floating Icons */}
      <div className="absolute top-30 left-10 text-purple-400 text-4xl opacity-30 animate-bounce">
        <FaCode />
      </div>
      <div className="absolute bottom-20 right-10 text-pink-400 text-4xl opacity-30 animate-bounce delay-700">
        <FaMobile />
      </div>
      <div className="absolute top-1/3 right-20 text-blue-400 text-3xl opacity-30 animate-float">
        <FaRocket />
      </div>
      <div className="absolute bottom-1/3 left-20 text-green-400 text-3xl opacity-30 animate-float delay-1000">
        <FaLaptopCode />
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-8"
          data-aos="fade-down"
        >
          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-2 animate-ping"></span>
          <span className="text-sm font-medium text-gray-300">
            Premium Services
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
          <span className="bg-gradient-to-r from-[#1A2A80] to-[#000B58] bg-clip-text text-transparent bg-300% animate-gradient">
            What I Offer
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I craft{" "}
          <span className="text-[#1A2A80] font-semibold">
            digital experiences
          </span>{" "}
          that blend stunning design with powerful functionality. Your vision,
          <span className="text-[#1A2A80] font-semibold">
            {" "}
            perfectly executed
          </span>
          .
        </p>

        {/* Feature Highlights */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            { text: "Modern Design", color: "from-purple-500 to-purple-600" },
            { text: "Fast Performance", color: "from-pink-500 to-pink-600" },
            { text: "Clean Code", color: "from-blue-500 to-blue-600" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-2"
            >
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`}
              ></div>
              <span className="text-gray-300 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div data-aos="zoom-in" data-aos-delay="600">
          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore My Services</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>

            {/* Button Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#1A2A80] to-[#000B58] blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
