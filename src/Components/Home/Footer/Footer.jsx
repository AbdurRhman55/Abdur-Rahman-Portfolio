import React from "react";
import logo from '../../../assets/logo.png'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaGithub, 
  FaLinkedinIn, 
  FaHeart,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 pt-16 pb-8 px-4 md:px-8 border-t border-gray-700">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="" className="w-20 mb-4" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate frontend developer creating modern, responsive web applications with clean code and innovative solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaGithub, link: "#" },
                { icon: FaLinkedinIn, link: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-[#1A2A80] hover:text-white transition-all duration-300"
                  aria-label={`Follow on ${social.icon.name.replace('Fa', '').replace('In', '').replace('F', '')}`}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "#home" },
                { name: "About", link: "#about" },
                { name: "Projects", link: "#projects" },
                { name: "Achievements", link: "#achievements" },
                { name: "Contact", link: "#contact" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-[#4477CE] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "React Applications",
                "UI/UX Design",
                "Frontend Optimization",
                "Responsive Design"
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#4477CE] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#4477CE] mt-1 flex-shrink-0" />
                <span className="text-gray-400">Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-[#4477CE] mt-1 flex-shrink-0" />
                <span className="text-gray-400">+92 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#4477CE] mt-1 flex-shrink-0" />
                <span className="text-gray-400">abdur.rahman@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscription (optional) */}
        <div className="mb-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-400">Subscribe to my newsletter for updates and new projects.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-3 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#4477CE] w-full md:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-medium rounded-r-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Abdur Rahman. Made with <FaHeart className="text-red-500 mx-1" /> in Pakistan
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-[#4477CE] text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4477CE] text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;