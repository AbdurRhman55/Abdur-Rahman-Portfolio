import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaDownload,
  FaArrowRight,
  FaAward,
  FaUserCheck,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";
import aboutHero from "../../assets/about hero.png";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-10 lg:pt-30 lg:pb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8" data-aos="fade-right">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-full shadow-md">
            About Me
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              Experiences
            </span>{" "}
            With Passion
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            With <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">over 2 years of focused frontend development,</span> I create dynamic
            user interfaces using React and modern JavaScript. My experience
            extends to <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">full-stack development,</span> having built complete websites
            with <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">PHP and MySQL,</span> ensuring seamless integration between frontend
            and backend systems.
          </p>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            {[
              { icon: <FaAward />, value: "2+", label: "Years Exp." },
              { icon: <FaUserCheck />, value: "18+", label: "Happy Clients" },
              { icon: <FaCode />, value: "24+", label: "Projects" },
              { icon: <FaLightbulb />, value: "10+", label: "Solutions" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 "
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="text-blue-400 text-2xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4" data-aos="fade-up">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition">
              My Projects <FaArrowRight />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Download CV <FaDownload />
            </button>
          </div>
        </div>

        {/* Right Content - Stylish Image */}
        <div className="relative flex justify-center " data-aos="fade-left">
          {/* Decorative glowing border */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-40"></div>

          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src={aboutHero}
              alt="Abdur Rahman - Web Developer"
              className="w-full h-[500px] object-cover object-top"
            />

            {/* Overlay gradient for stylish effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
