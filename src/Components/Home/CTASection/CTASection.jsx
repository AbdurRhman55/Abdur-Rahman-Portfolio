import React from "react";
import { FaPaperPlane, FaDownload, FaPhone } from "react-icons/fa";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#4477CE] blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#1A2A80] blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4477CE] to-[#1A2A80]">Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. Let's bring your ideas to life!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1A2A80] to-[#4477CE] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Hire Me */}
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A2A80]/20 mb-4">
              <FaPhone className="text-2xl text-[#4477CE]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Hire Me</h3>
            <p className="text-gray-400 text-sm mb-4">Looking for a dedicated developer for your project?</p>
            <a 
              href="#contact-form" 
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Download CV */}
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A2A80]/20 mb-4">
              <FaDownload className="text-2xl text-[#4477CE]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Download CV</h3>
            <p className="text-gray-400 text-sm mb-4">Get a detailed overview of my skills and experience</p>
            <a 
              href="/abdur-rahman-cv.pdf" 
              download
              className="inline-block px-6 py-2 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Download PDF
            </a>
          </div>

          {/* Project Discussion */}
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1A2A80]/20 mb-4">
              <FaPaperPlane className="text-2xl text-[#4477CE]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Let's Talk</h3>
            <p className="text-gray-400 text-sm mb-4">Have a project in mind? Let's discuss it over coffee</p>
            <a 
              href="mailto:abdur.rahman@example.com" 
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 md:p-10" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2A80]/20 mb-3">
                <FaPaperPlane className="text-xl text-[#4477CE]" />
              </div>
              <h4 className="text-white font-medium mb-1">Email</h4>
              <p className="text-gray-400 text-sm">abdur.rahman@example.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2A80]/20 mb-3">
                <FaPhone className="text-xl text-[#4477CE]" />
              </div>
              <h4 className="text-white font-medium mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+92 123 456 7890</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2A80]/20 mb-3">
                <FaPaperPlane className="text-xl text-[#4477CE]" />
              </div>
              <h4 className="text-white font-medium mb-1">Location</h4>
              <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12" data-aos="fade-up">
          <p className="text-gray-400 text-sm mb-4">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {/* These would be company logos in a real implementation */}
            <div className="text-white font-bold text-xl">Google</div>
            <div className="text-white font-bold text-xl">Microsoft</div>
            <div className="text-white font-bold text-xl">Upwork</div>
            <div className="text-white font-bold text-xl">Fiverr</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;