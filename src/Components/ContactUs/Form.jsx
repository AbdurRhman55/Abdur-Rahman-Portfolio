
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { 
  FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedin, 
  FaGithub, FaFacebook, FaInstagram, FaPaperPlane 
} from "react-icons/fa";

function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_unfl4x6",   // replace with your EmailJS service ID
        "template_eqfkyk5",  // replace with your EmailJS template ID
        form.current,
        "ZJg9f9F2ytviBdhPe"    // replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully ✅");
          form.current.reset();
          setTimeout(() => setSuccess(""), 4000);
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send ❌ Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="px-6 lg:px-20 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-xl"></div>
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1A2A80] to-[#000B58] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Let's Connect
        </h1>
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ready to bring your ideas to life? Let's discuss how we can collaborate on your next project.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto relative z-10">
        
        {/* Left Side - Form */}
        <div 
          className="bg-gray-800/40 p-10 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg">
              <FaPaperPlane className="text-white text-lg" />
            </div>
            <h2 className="text-2xl font-bold text-white">Send me a message</h2>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div data-aos="fade-up" data-aos-delay="200">
                <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                  First Name
                </label>
                <input name="first_name" type="text" required placeholder="John"
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"/>
              </div>

              <div data-aos="fade-up" data-aos-delay="250">
                <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                  Last Name
                </label>
                <input name="last_name" type="text" required placeholder="Doe"
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"/>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                  Email Address
                </label>
                <input name="email" type="email" required placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"/>
              </div>

              <div data-aos="fade-up" data-aos-delay="350">
                <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                  Phone Number
                </label>
                <input name="phone" type="text" placeholder="+92 330 2862323"
                  className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                Subject
              </label>
              <input name="subject" type="text" placeholder="What's this about?"
                className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"/>
            </div>

            <div data-aos="fade-up" data-aos-delay="450">
              <label className="block text-gray-300 font-medium mb-3 text-sm uppercase tracking-wide">
                Your Message
              </label>
              <textarea name="message" rows="6" required placeholder="Tell me about your project or inquiry..."
                className="w-full px-5 py-4 rounded-xl bg-gray-900/70 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 resize-none"/>
            </div>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="500">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#1A2A80] to-[#000B58] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {success && (
              <p className="text-center text-green-400 mt-4">{success}</p>
            )}
          </form>
        </div>

          {/* Right Side  */}
        <div 
          className="flex flex-col justify-center bg-gray-800/40 p-10 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
          data-aos="fade-left"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-gradient-to-r from-[#1A2A80] to-[#000B58] rounded-lg">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          </div>

          <div className="space-y-8">
            {/* WhatsApp */}
            <div 
              className="flex items-center space-x-5 p-5 rounded-2xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer"
              data-aos="fade-left" 
              data-aos-delay="200"
            >
              <div className="p-4 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                <FaWhatsapp className="text-green-400 text-2xl group-hover:text-green-300 transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                <p className="text-gray-300 group-hover:text-white transition-colors">+92 330 2862323</p>
              </div>
            </div>

            {/* Email */}
            <div 
              className="flex items-center space-x-5 p-5 rounded-2xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer"
              data-aos="fade-left" 
              data-aos-delay="300"
            >
              <div className="p-4 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <FaEnvelope className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-300 group-hover:text-white transition-colors">ali.matta4@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div 
              className="flex items-center space-x-5 p-5 rounded-2xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 group cursor-pointer"
              data-aos="fade-left" 
              data-aos-delay="400"
            >
              <div className="p-4 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
                <FaMapMarkerAlt className="text-red-400 text-2xl group-hover:text-red-300 transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-300 group-hover:text-white transition-colors">Peshawar, Pakistan</p>
              </div>
            </div>

            {/* Social Media */}
            <div 
              className="pt-8 mt-8 border-t border-gray-700/50"
              data-aos="fade-left" 
              data-aos-delay="500"
            >
              <h4 className="text-xl font-semibold text-white mb-6 text-center">Follow My Journey</h4>
              <div className="flex justify-center space-x-6 text-2xl">
                <a 
                  href="https://linkedin.com/in/buntyboy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-gray-900/50 rounded-xl hover:bg-bg-gradient-to-r from-[#1A2A80] to-[#000B58] hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-gray-900/50 rounded-xl hover:bg-gradient-to-r from-[#1A2A80] to-[#000B58] hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub />
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-gray-900/50 rounded-xl hover:bg-gradient-to-r from-[#1A2A80] to-[#000B58] hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="#" 
                  className="p-4 bg-gray-900/50 rounded-xl hover:bg-gradient-to-r from-[#1A2A80] to-[#000B58] hover:text-white text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
