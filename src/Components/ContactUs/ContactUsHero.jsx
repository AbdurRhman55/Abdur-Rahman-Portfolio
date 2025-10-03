// ContactHero.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6 
             bg-gradient-to-r from-[#1A2A80] to-[#000B58] 
             bg-clip-text text-transparent"
          data-aos="fade-up">
          Get in Touch
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-14 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether you want to collaborate on a project, discuss an opportunity,
          or just say hello — I’m always open to meaningful conversations.
        </p>

        {/* Contact Info Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Email */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58] mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Email</h3>
              <p className="text-gray-300 text-sm mt-1">ali.matta4@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58] mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <FaPhoneAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Phone</h3>
              <p className="text-gray-300 text-sm mt-1">03302862323</p>
            </div>
          </div>

          {/* Location */}
          <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58] mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Location</h3>
              <p className="text-gray-300 text-sm mt-1">Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
